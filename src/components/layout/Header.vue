<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <!-- Top bar -->
    <div class="bg-primary-dark text-white py-2">
      <div class="container-custom flex justify-between items-center text-sm">
        <div class="flex gap-4">
          <a href="tel:+56223151430" class="hover:text-accent flex items-center gap-1">
            <span>📞</span>
            <span>+56 2 2315 1430</span>
          </a>
          <a href="https://wa.me/56966094175" target="_blank" class="hover:text-accent flex items-center gap-1">
            <span>💬</span>
            <span>WhatsApp</span>
          </a>
        </div>
        <div class="hidden md:block">
          <span>Lunes a Viernes 08:00 - 17:00 hrs</span>
        </div>
      </div>
    </div>

    <!-- Main header -->
    <div class="container-custom py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img :src="resolveAsset('/logo.png')" alt="Cloro San Joaquín" class="h-12 w-auto md:h-16 object-contain">
          <div>
            <h1 class="text-xl md:text-2xl font-black font-satoshi text-brand-blue uppercase tracking-tight">Cloro San Joaquín</h1>
            <p class="text-xs md:text-sm text-gray-600">Pureza y Confianza desde 1990</p>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-6">
          <RouterLink 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="text-gray-700 hover:text-primary-dark font-medium transition-colors"
            active-class="text-primary-dark border-b-2 border-primary-dark"
          >
            {{ link.label }}
          </RouterLink>
          <RouterLink to="/cotizacion" class="btn btn-primary">
            Solicitar Cotización
          </RouterLink>
        </nav>

        <!-- Mobile menu button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 text-gray-700 hover:text-primary-dark"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <transition name="slide-down">
      <div v-if="mobileMenuOpen" class="lg:hidden border-t">
        <nav class="container-custom py-4 flex flex-col gap-3">
          <RouterLink 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="text-gray-700 hover:text-primary-dark font-medium py-2 px-4 rounded hover:bg-gray-100 transition-colors"
            active-class="text-primary-dark bg-gray-100"
          >
            {{ link.label }}
          </RouterLink>
          <RouterLink to="/cotizacion" @click="mobileMenuOpen = false" class="btn btn-primary">
            Solicitar Cotización
          </RouterLink>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { resolveAsset } from '@/utils/assets';

const mobileMenuOpen = ref(false);

const navLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Productos', path: '/productos' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Recursos', path: '/recursos' },
  { label: 'Contacto', path: '/contacto' }
];
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
