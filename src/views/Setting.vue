<template>
    <div class="flex flex-col justify-between">
        <div class="flex place-content-center">
            <canvas id="myCanvas" :width="size.w" :height="size.h"
                @mousedown="handleMouseDown($event)"
                @mouseup="handleMouseUp()"
                @mousemove="handleMouseMove($event)">
            </canvas>
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
import { ref, reactive, computed, nextTick, onMounted, onBeforeMount, defineComponent } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const loaded = ref(false);
const base64Image = ref("");
const background = reactive(new Image());

async function getPrediction() {
    const res = await fetch("/api/inference", {
        method: "GET",
    });
    const data = await res.json();
    
    if (data.results.length == 4) {
        base64Image.value = data.image;
        background.src = data.image;
        loaded.value = true;
    }else{
        throw new Error("Prediction result is wrong");
    }
}

function init() {
    getPrediction();
}

onBeforeMount(() => {
    init();
});


const myCanvas = ref(null);
const myCanvasContext = ref(null);

const size = reactive({
    w: 640,
    h: 480,
});

function initCanvas() {
    // const background = new Image();
    background.onload = function () {
        let rapport = background.naturalWidth / background.naturalHeight;
        size.h = size.w / rapport;
        nextTick(() => {
            try {
                myCanvasContext.value.drawImage(background, 0, 0, size.w, size.h);
            } catch (e) {
                throw e;
            }
        });
    };
    // background.src = base64Image.value;
}

onMounted(() => {
    const c = document.getElementById("myCanvas");
    myCanvas.value = c;
    const ctx = c.getContext("2d");
    myCanvasContext.value = ctx;
    initCanvas();
});


const mouse = reactive({
    current: {
        x: 0,
        y: 0
    },
    previous: {
        x: 0,
        y: 0
    },
    down: false
});
const rect = reactive({
    startX: 0,
    startY: 0,
    w: 0,
    h: 0
});
// const currentMouse = computed(() => {
//     var rect = myCanvas.value.getBoundingClientRect();
//     return {
//         x: this.mouse.current.x - rect.left,
//         y: this.mouse.current.y - rect.top
//     };
// });
function draw() {
    if (mouse.down ) {
        myCanvasContext.value.drawImage(background, 0, 0, size.w, size.h);
        myCanvasContext.value.setLineDash([6]);
        myCanvasContext.value.strokeStyle = '#ff0000';
        myCanvasContext.value.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
    }
}
function handleMouseDown(event) {
    mouse.down = true;
    mouse.current = {
        x: event.offsetX,
        y: event.offsetY
    }
    console.log(event.offsetX, event.offsetY);
    rect.startX = mouse.current.x;
    rect.startY = mouse.current.y;
}
function handleMouseUp() {
    mouse.down = false;
}
function handleMouseMove(event) {
    mouse.current = {
        x: event.offsetX,
        y: event.offsetY
    }
    if (mouse.down) {
        rect.w = (mouse.current.x - rect.startX);
        rect.h = (mouse.current.y - rect.startY);
        draw();
    }
}
</script>