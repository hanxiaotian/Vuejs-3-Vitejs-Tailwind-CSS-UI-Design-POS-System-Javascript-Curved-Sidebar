<template>
    <div class="flex flex-col justify-between">
        <div class="flex place-content-center">
            <img class="w-80 h-auto" :src="`/img/avatar-1.png`"/>
        </div>
        <div class="flex flex-col items-center">
            <button class="w-64 p-3 my-1 rounded-lg bg-blue-900 border border-white text-white text-sm font-semibold">
                {{top1PredName}}
            </button>
            <button v-if="showFourResults" class="w-64 p-3 my-1 rounded-lg bg-blue-900 border border-white text-white text-sm font-semibold">
                {{top2PredName}}
            </button>
            <button v-if="showFourResults" class="w-64 p-3 my-1 rounded-lg bg-blue-900 border border-white text-white text-sm font-semibold">
                {{top3PredName}}
            </button>
            <button v-if="showFourResults" class="w-64 p-3 my-1 rounded-lg bg-blue-900 border border-white text-white text-sm font-semibold">
                {{top4PredName}}
            </button>
        </div>
    </div>
</template>
  
<script setup>
import { ref, reactive } from "vue";
import store from "../store/index";

const showFourResults = ref(true);

const top1PredName = ref("");
const top1PredConf = ref(0);
const top2PredName = ref("");
const top2PredConf = ref(0);
const top3PredName = ref("");
const top3PredConf = ref(0);
const top4PredName = ref("");
const top4PredConf = ref(0);
const receivedImage = reactive(new Image());

async function getPrediction() {
    const res = await fetch("/api/inference", {
        method: "GET",
    });
    const data = await res.json();
    
    if (data.results.length == 4) {
        top1PredName.value = data.results[0].name;
        top1PredConf.value = data.results[0].confidence;
        top2PredName.value = data.results[1].name;
        top2PredConf.value = data.results[1].confidence;
        top3PredName.value = data.results[2].name;
        top3PredConf.value = data.results[2].confidence;
        top4PredName.value = data.results[3].name;
        top4PredConf.value = data.results[3].confidence;
        receivedImage.src = data.image;
        // console.log(top1PredName.value);
        // receivedImage.onload = function () {
        //     if (receivedImage.height === 0 || receivedImage.width === 0) {
        //         console.log("Image is not loaded yet");
        //         return;
        //     }
        //     console.log("Image is loaded");
        //     console.log(receivedImage.height, 'x', receivedImage.width);
        // };
    }else{
        throw new Error("Error getting prediction");
    }
}

function init() {
    console.log("init");
    if (store.currentState == store.appStates.isAutoRecog) {
        getPrediction();
        console.log(top1PredName.value);
        receivedImage.onload = function () {
            if (receivedImage.height === 0 || receivedImage.width === 0) {
                console.log("Image is not loaded yet");
                return;
            }
            console.log("Image is loaded");
            console.log(receivedImage.height, 'x', receivedImage.width);
        };
    }else{
        // throw new Error("State not aligned");
    }
}

init();
</script>