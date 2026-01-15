<template>
  <div class="not-found-view min-h-[60vh] flex items-center justify-center py-12">
    <div class="text-center">
      <div class="text-9xl mb-8">🔍</div>
      <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p class="text-2xl text-gray-600 mb-8">Página No Encontrada</p>
      <p class="text-gray-500 mb-8">La página que buscas no existe o ha sido movida.</p>
      <RouterLink to="/" class="btn btn-primary text-lg px-8 py-4">
        Volver al Inicio
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
