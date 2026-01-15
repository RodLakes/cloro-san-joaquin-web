<template>
  <div class="product-detail-view py-12">
    <div class="container-custom">
      <RouterLink to="/productos" class="text-primary-dark hover:underline mb-6 inline-block">
        ← Volver al catálogo
      </RouterLink>

      <div v-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Imagen -->
        <div>
          <img :src="product.imagenes[0]" :alt="product.nombre" class="w-full rounded-lg shadow-lg">
        </div>

        <!-- Información -->
        <div>
          <span class="badge badge-new" v-if="product.nuevo">Nuevo</span>
          <h1 class="text-4xl font-bold mb-4 mt-2">{{ product.nombre }}</h1>
          
          <div class="flex items-center gap-2 mb-4">
            <div class="flex items-center gap-1">
              <span class="text-accent text-xl">⭐</span>
              <span class="font-bold text-lg">{{ product.rating }}</span>
            </div>
            <span class="text-gray-500">({{ product.reviews }} reseñas)</span>
            <span class="ml-4 text-green-600 font-semibold" v-if="product.stock > 0">✓ En stock</span>
          </div>

          <p class="text-gray-700 text-lg mb-6">{{ product.descripcion }}</p>

          <!-- Precios -->
          <div class="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 class="font-bold text-lg mb-4">Precios por Volumen</h3>
            <div class="space-y-3">
              <div v-for="precio in product.precios" :key="precio.volumen" class="flex justify-between items-center">
                <span class="font-medium">{{ precio.volumen }}</span>
                <div class="text-right">
                  <span class="text-primary-dark font-bold text-xl">
                    {{ precio.precio >  0 ? `$${precio.precio.toLocaleString('es-CL')} CLP` : precio.nota }}
                  </span>
                  <span v-if="precio.descuento > 0" class="text-green-600 text-sm ml-2">
                    ({{ precio.descuento }}% desc.)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Acciones -->
          <div class="flex gap-4">
            <RouterLink to="/cotizacion" class="btn btn-primary flex-1 text-lg">
              Solicitar Cotización
            </RouterLink>
            <button class="btn btn-secondary flex-1 text-lg">
              Agregar al Carrito
            </button>
          </div>

          <!-- Especificaciones -->
          <div class="mt-8">
            <h3 class="font-bold text-xl mb-4">Especificaciones Técnicas</h3>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(valor, key) in product.especificaciones" :key="key" class="border-b pb-2">
                <span class="text-gray-600 text-sm">{{ key }}</span>
                <p class="font-semibold">{{ valor }}</p>
              </div>
            </div>
          </div>

          <!-- Usos -->
          <div class="mt-8">
            <h3 class="font-bold text-xl mb-4">Usos y Aplicaciones</h3>
            <ul class="list-disc list-inside space-y-2">
              <li v-for="uso in product.usos" :key="uso" class="text-gray-700">{{ uso }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-12">
        <p class="text-gray-500 text-lg">Producto no encontrado</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { useProductsStore } from '@/stores/products';

const route = useRoute();
const productsStore = useProductsStore();

const product = computed(() => {
  const id = route.params.id as string;
  return productsStore.getProductById(id);
});
</script>
