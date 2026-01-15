<template>
  <div class="catalog-view py-12">
    <div class="container-custom">
      <h1 class="section-title mb-2">Catálogo de Productos</h1>
      <p class="section-subtitle">Explora nuestra línea completa de productos de desinfección profesional</p>

      <!-- Filtros y búsqueda -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <!-- Búsqueda -->
          <div class="md:col-span-2">
            <label class="block text-sm font-medium mb-2">Buscar Productos</label>
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Buscar por nombre o categoría..."
              class="input"
            >
          </div>

          <!-- Categoría -->
          <div>
            <label class="block text-sm font-medium mb-2">Categoría</label>
            <select v-model="selectedCategory" class="input">
              <option value="">Todas las categorías</option>
              <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
          </div>

          <!-- Ordenar -->
          <div>
            <label class="block text-sm font-medium mb-2">Ordenar por</label>
            <select v-model="sortBy" class="input">
              <option value="bestseller">Más popular</option>
              <option value="precio-asc">Precio: Menor a Mayor</option>
              <option value="precio-desc">Precio: Mayor a Menor</option>
              <option value="nombre-asc">Nombre: A-Z</option>
              <option value="rating">Mejor calificado</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Productos -->
      <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div 
          v-for="producto in filteredProducts" 
          :key="producto.id"
          class="card card-hover cursor-pointer"
          @click="router.push(`/productos/${producto.id}`)"
        >
          <div class="relative mb-4">
            <img :src="resolveAsset(producto.imagenes[0] || '')" :alt="producto.nombre" class="w-full h-48 object-cover rounded-lg">
            <span v-if="producto.nuevo" class="badge badge-new absolute top-2 right-2">Nuevo</span>
            <span v-if="producto.oferta" class="badge badge-sale absolute top-2 left-2">Oferta</span>
          </div>
          <span class="text-xs text-gray-500 uppercase">{{ producto.categoria }}</span>
          <h3 class="font-bold text-lg mb-2">{{ producto.nombre }}</h3>
          <div class="flex items-center gap-1 mb-2">
            <span class="text-accent">⭐</span>
            <span class="font-semibold">{{ producto.rating }}</span>
            <span class="text-gray-500 text-sm">({{ producto.reviews }})</span>
          </div>
          <p class="text-sm text-gray-600 mb-3 line-clamp-2">{{ producto.descripcion }}</p>
          <p class="text-primary-dark font-bold text-xl">
            Desde ${{ producto.precios[0]?.precio.toLocaleString('es-CL') || 0 }} CLP
          </p>
          <div class="flex gap-2 mt-4">
            <button class="btn btn-primary flex-1 text-sm">Ver Detalles</button>
            <button class="btn btn-outline flex-1 text-sm">Cotizar</button>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-12">
        <p class="text-gray-500 text-lg">No se encontraron productos que coincidan con tu búsqueda</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useProductsStore } from '@/stores/products';
import { resolveAsset } from '@/utils/assets';
import type { ProductSortOption } from '@/types/product';

const router = useRouter();
const productsStore = useProductsStore();

const searchQuery = ref('');
const selectedCategory = ref('');
const sortBy = ref<ProductSortOption>('bestseller');

const categories = computed(() => productsStore.categories);

const filteredProducts = computed(() => {
  let products = productsStore.products;

  // Filtrar por búsqueda
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    products = products.filter(p => 
      p.nombre.toLowerCase().includes(query) || 
      p.descripcion.toLowerCase().includes(query)
    );
  }

  // Filtrar por categoría
  if (selectedCategory.value) {
    products = products.filter(p => p.categoria === selectedCategory.value);
  }

  // Aplicar ordenamiento
  productsStore.updateSortOption(sortBy.value);
  
  return products;
});

// Sincronizar con el store
watch([searchQuery, selectedCategory], () => {
  productsStore.updateFilters({
    busqueda: searchQuery.value,
    categorias: selectedCategory.value ? [selectedCategory.value as any] : []
  });
});

watch(sortBy, () => {
  productsStore.updateSortOption(sortBy.value);
});
</script>
