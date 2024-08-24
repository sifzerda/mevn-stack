<template>
    <div class="nav-tabs">
      <router-link to="/" class="nav-tab" :class="{ active: isActive('/') }">Home</router-link>
      <router-link to="/about" class="nav-tab" :class="{ active: isActive('/about') }">About</router-link>
      <router-link to="/contact" class="nav-tab" :class="{ active: isActive('/contact') }">Contact</router-link>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  const isActive = (path) => {
    return route.path === path;
  };
  </script>
  
  <style scoped>
  .nav-tabs {
    display: flex;
    border-bottom: 1px solid #ccc;
  }
  
  .nav-tab {
    padding: 10px;
    text-decoration: none;
    color: #333;
  }
  
  .nav-tab.active {
    font-weight: bold;
    border-bottom: 2px solid #333;
  }
  </style>