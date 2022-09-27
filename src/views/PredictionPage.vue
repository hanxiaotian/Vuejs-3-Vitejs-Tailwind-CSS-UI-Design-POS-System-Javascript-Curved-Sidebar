<template>
    <div v-if="loaded" class="flex flex-col justify-between">
        <div class="flex place-content-center">
            <img class="w-80 h-auto" :src="base64Image"/>
        </div>
        <div class="flex flex-col items-center">
            <button class="w-64 p-3 my-1 rounded-lg bg-blue-900 border border-white text-white text-sm font-semibold"
                @click="selectAndReturnHome(top1PredName)">
                {{top1PredName}}
            </button>
            <button class="w-64 p-3 my-1 rounded-lg bg-blue-900 border border-white text-white text-sm font-semibold"
                v-if="showFourResults"
                @click="selectAndReturnHome(top2PredName)">
                {{top2PredName}}
            </button>
            <button class="w-64 p-3 my-1 rounded-lg bg-blue-900 border border-white text-white text-sm font-semibold"
                v-if="showFourResults"
                @click="selectAndReturnHome(top3PredName)">
                {{top3PredName}}
            </button>
            <button class="w-64 p-3 my-1 rounded-lg bg-blue-900 border border-white text-white text-sm font-semibold"
                v-if="showFourResults"
                @click="selectAndReturnHome(top4PredName)">
                {{top4PredName}}
            </button>
        </div>
    </div>
    <div v-if="!loaded" class="flex flex-col justify-between items-center">Loading...</div>
</template>
  
<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import store from "../store/index";
import products from "../store/products";
import { useCartStore } from "../store/cart";

const router = useRouter();

const cart = useCartStore();

function addToCart(productName) {
    if (productName != "Empty") {
        const item = products.productList.find(product => product.name === productName);
        cart.addItem(item);
    } else {
        throw new Error("Cannot add Empty to cart");
    }
}

function selectAndReturnHome(productName) {
    console.log(productName);
    addToCart(productName);
    store.currentState = store.appStates.isScan;
    router.push({
        name: "Home",
    });
}

const loaded = ref(false);
const showFourResults = ref(true);

const top1PredName = ref("");
const top1PredConf = ref(0);
const top2PredName = ref("");
const top2PredConf = ref(0);
const top3PredName = ref("");
const top3PredConf = ref(0);
const top4PredName = ref("");
const top4PredConf = ref(0);
const base64Image = ref("");

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
        base64Image.value = data.image;
        loaded.value = true;
    }else{
        throw new Error("Prediction result is wrong");
    }
}

function init() {
    if (store.currentState == store.appStates.isAutoRecog) {
        getPrediction();
    }else{
        throw new Error("State not aligned");
    }
}

init();
</script>