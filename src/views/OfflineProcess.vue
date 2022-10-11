<template>
    <div class="flex flex-col justify-between">
        <input class="gap-y-2 p-3 bg-opacity-80 border border-solid border-black/12 rounded-lg bg-white" 
                type="text" v-model="name" placeholder="Please input name (unique id), e.g. test-213455"/>
        <input class="gap-y-2 p-3 bg-opacity-80 border border-solid border-black/12 rounded-lg bg-white" 
                type="text" v-model="connectionString" placeholder="Please input connection string, e.g. xxxxx"/>
        <input class="gap-y-2 p-3 bg-opacity-80 border border-solid border-black/12 rounded-lg bg-white" 
                type="text" v-model="containerName" placeholder="Please input container name, e.g. uvsdatasets"/>
        <input class="gap-y-2 p-3 bg-opacity-80 border border-solid border-black/12 rounded-lg bg-white" 
                type="text" v-model="videoBlobName" placeholder="Please input video name, e.g. 2022-06-30_nano_mango_net.mp4"/>
        <input class="gap-y-2 p-3 bg-opacity-80 border border-solid border-black/12 rounded-lg bg-white" 
                type="text" v-model="uploadBlobName" placeholder="Please input output video name, e.g. 2022-06-30_nano_mango_net_processed.mp4"/>
        <input class="gap-y-2 p-3 bg-opacity-80 border border-solid border-black/12 rounded-lg bg-white" 
                type="text" v-model="scaleRegion" placeholder="Please input scale region coordinates in relative xywh format, e.g. 0.457, 0.433, 0.167, 0.302"/>
        <div class="flex flex-col items-center">
            <button class="w-40 p-2 my-1 rounded-lg bg-blue-900 border border-white text-white text-sm font-semibold"
                @click="submitInfo()">
                Submit Info
            </button>
        </div>

        <div class="flex flex-col justify-between items-center">
            <ul>
                <li class="rounded-lg p-1 bg-opacity-50"
                    :class="{ 'bg-yellow-300': item.state == 0, 'bg-green-800': item.state == 1, 'bg-red-500': item.state == 2 }"
                    v-for="item in queuedItems" :key="item.name">
                    {{ item.name }}
                    <button class="w-5 rounded-lg bg-blue-500 border border-white text-white text-sm font-semibold"
                    @click="removeItem(item.name)"
                    >X</button>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script setup>
import { ref, reactive } from "vue";

const name = ref("");
const connectionString = ref("");
const containerName = ref("");
const videoBlobName = ref("");
const uploadBlobName = ref("");
const scaleRegion = ref("");

function parseScaleRegion() {
    let scaleRegionArray = scaleRegion.value.split(",");
    let scaleRegionObject = [
        parseFloat(scaleRegionArray[0]),
        parseFloat(scaleRegionArray[1]),
        parseFloat(scaleRegionArray[2]),
        parseFloat(scaleRegionArray[3]),
    ];
    return scaleRegionObject;
}

async function submitInfo() {
    const response = await fetch("/api/offline_process/" + name.value, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
            connectionString: connectionString.value,
            containerName: containerName.value,
            videoBlobName: videoBlobName.value,
            uploadBlobName: uploadBlobName.value,
            scaleRegion: parseScaleRegion(),
        })
    });
    getItems();
}

const queuedItems = reactive([]);

async function getItems() {
    const response = await fetch("/api/offline_process/", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (response.status === 204) {
        queuedItems.splice(0, queuedItems.length);
        return;
    }
    const items = await response.json();
    queuedItems.splice(0, queuedItems.length);
    items.forEach(item => {
        queuedItems.push(item);
    });
    console.log(queuedItems);
}

setInterval(getItems, 10000);

async function removeItem(itemName) {
    const response = await fetch("/api/offline_process/" + itemName, {
        method: 'DELETE',
    });
    getItems();
}

</script>