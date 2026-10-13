<template>
  <div id="app">
    <AnimatedSplash v-if="showSplash" @done="showSplash = false" />
    <Portfolio v-if="!showSplash" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

// Lazy load components for code splitting
const Portfolio = defineAsyncComponent(() => 
  import('./views/PortfolioModern.vue')
)
const AnimatedSplash = defineAsyncComponent(() => 
  import('./components/animated/AnimatedSplash.vue')
)

const showSplash = ref(true)
</script>

<style>
html {
  scroll-behavior: smooth;
}

#app {
  font-family: 'Inter', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1e293b;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #3b82f6, #10b981);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #2563eb, #059669);
}
</style>
