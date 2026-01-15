<template>
  <footer class="bg-gray-900 text-gray-300">
    <!-- Main Footer -->
    <div class="container-custom py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="Cloro San Joaquín" class="h-10 w-10">
            <h3 class="text-white font-bold text-lg">Cloro San Joaquín</h3>
          </div>
          <p class="text-sm italic mb-4">"Pureza y Confianza desde 1990"</p>
          <p class="text-sm">
            Más de 30 años brindando soluciones profesionales de desinfección y productos químicos de la más alta calidad.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">Enlaces Rápidos</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.path">
              <RouterLink :to="link.path" class="text-sm hover:text-accent transition-colors">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-white font-semibold mb-4">Contacto</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-2">
              <span>📍</span>
              <span>Carlos Valdovinos 2473<br>Pedro Aguirre Cerda, Santiago, Chile</span>
            </li>
            <li class="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+56223151430" class="hover:text-accent">+56 2 2315 1430</a>
            </li>
            <li class="flex items-center gap-2">
              <span>💬</span>
              <a href="https://wa.me/56966094175" target="_blank" class="hover:text-accent">+56 9 6609 4175</a>
            </li>
            <li class="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:info@clorosanjoaquin.cl" class="hover:text-accent">info@clorosanjoaquin.cl</a>
            </li>
          </ul>
        </div>

        <!-- Business Hours -->
        <div>
          <h4 class="text-white font-semibold mb-4">Horarios de Atención</h4>
          <ul class="space-y-2 text-sm">
            <li class="flex justify-between">
              <span>Lunes - Viernes</span>
              <span class="text-accent font-medium">08:00 - 17:00</span>
            </li>
            <li class="flex justify-between text-gray-500">
              <span>Sábado - Domingo</span>
              <span>Cerrado</span>
            </li>
          </ul>
          <div class="mt-6">
            <h4 class="text-white font-semibold mb-3">Capacidad</h4>
            <div class="text-accent font-bold text-xl">20,000 litros</div>
            <p class="text-xs">Hipoclorito de Sodio al 10%</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="container-custom py-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {{ currentYear }} Cloro San Joaquín. Todos los derechos reservados.</p>
          <div class="flex gap-4">
            <RouterLink to="/terminos" class="hover:text-accent">Términos y Condiciones</RouterLink>
            <RouterLink to="/privacidad" class="hover:text-accent">Política de Privacidad</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const currentYear = computed(() => new Date().getFullYear());

const quickLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Catálogo de Productos', path: '/productos' },
  { label: 'Solicitar Cotización', path: '/cotizacion' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Recursos', path: '/recursos' },
  { label: 'Contacto', path: '/contacto' }
];
</script>
