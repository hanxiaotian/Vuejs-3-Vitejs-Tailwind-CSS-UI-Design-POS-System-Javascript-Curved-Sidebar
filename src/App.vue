<template>
  <div class="flex w-full min-h-screen font-sans bg-gray-100">
    <div class="flex flex-col gap-y-6">
      <SideBar />
    </div>
    <main class="flex flex-col justify-between flex-1 gap-3 p-3">
      <div>
        <header>
          <h1 class="text-3xl font-semibold leading-loose text-gray-700">POS System</h1>
        </header>
        <hr class="border-blue-700">
      </div>
      <!-- <Screen /> -->
      <router-view />
      <div>
        <Buttons />
      </div>
    </main>
    <div class="flex flex-col gap-y-6 w-96">
      <RightSideBar />
    </div>
  </div>
</template>
<script setup>
  import SideBar from "./components/SideBar.vue";
  import RightSideBar from "./components/RightSideBar.vue";
  import Buttons from "./components/Buttons.vue";
  // import Screen from "./components/Screen.vue";
</script>