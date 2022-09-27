<template>
    <div class="flex flex-col justify-between">
        <div class="flex place-content-center">
            <img v-if="loaded" class="w-100 h-auto" :src="base64Image"/>
            <div v-if="!loaded">Loading...</div>
        </div>
        <div class="flex flex-col items-center">
            <button class="w-40 p-2 my-1 rounded-lg bg-blue-900 border border-white text-white text-sm font-semibold"
                @click="">
                Submit ROI
            </button>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import store from "../store/index";

const router = useRouter();

const loaded = ref(false);
const base64Image = ref("");

async function getPrediction() {
    const res = await fetch("/api/inference", {
        method: "GET",
    });
    const data = await res.json();
    
    if (data.results.length == 4) {
        base64Image.value = data.image;
        loaded.value = true;
    }else{
        throw new Error("Prediction result is wrong");
    }
}

function init() {
    console.log(store.currentState);
    getPrediction();
}

init();
</script>