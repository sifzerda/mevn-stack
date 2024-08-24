<template>
  <div id="app">
    <NavTabs />
    <router-view />
  </div>
</template>

<script setup>
import NavTabs from './components/NavTabs.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>