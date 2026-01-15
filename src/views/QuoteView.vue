<template>
  <div class="quote-view py-12 bg-gray-50">
    <div class="container-custom max-w-4xl">
      <h1 class="section-title mb-2">Solicitar Cotización</h1>
      <p class="section-subtitle mb-8">Complete el formulario y le enviaremos una cotización personalizada</p>

      <div class="bg-white rounded-lg shadow-md p-8">
        <form @submit.prevent="handleSubmit">
          <!-- Datos del Cliente -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Datos del Cliente</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-2">Nombre Completo *</label>
                <input v-model="form.nombre" type="text" required class="input">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Email *</label>
                <input v-model="form.email" type="email" required class="input">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Teléfono *</label>
                <input v-model="form.telefono" type="tel" required class="input">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Empresa</label>
                <input v-model="form.empresa" type="text" class="input">
              </div>
            </div>
          </div>

          <!-- Productos de Interés -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Productos de Interés</h2>
            <p class="text-gray-600 mb-4">Seleccione los productos para los que desea cotización:</p>
            
            <div class="space-y-3 max-h-96 overflow-y-auto border border-gray-200 rounded-lg p-4">
              <div 
                v-for="producto in products" 
                :key="producto.id"
                class="flex items-center gap-3 p-3 bg-gray-50 rounded hover:bg-gray-100"
              >
                <input 
                  type="checkbox" 
                  :id="`producto-${producto.id}`"
                  :value="producto.id"
                  v-model="selectedProducts"
                  class="w-5 h-5"
                >
                <label :for="`producto-${producto.id}`" class="flex-1 cursor-pointer">
                  <span class="font-semibold">{{ producto.nombre }}</span>
                  <span class="text-sm text-gray-600 ml-2">- Desde ${{ producto.precios[0]?.precio.toLocaleString('es-CL') || 0 }} CLP</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Términos de Pago -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Términos de Pago</h2>
            <select v-model="form.terminoPago" class="input">
              <option value="contado">Contado</option>
              <option value="30-dias">30 días</option>
              <option value="60-dias">60 días</option>
              <option value="90-dias">90 días</option>
            </select>
          </div>

          <!-- Mensaje Adicional -->
          <div class="mb-8">
            <label class="block text-sm font-medium mb-2">Mensaje o Consulta Adicional</label>
            <textarea v-model="form.mensaje" rows="4" class="input" placeholder="Ingrese cualquier información adicional..."></textarea>
          </div>

          <!-- Botones -->
          <div class="flex gap-4">
            <button type="submit" class="btn btn-primary flex-1">
              Generar Cotización
            </button>
            <button type="button" @click="resetForm" class="btn btn-outline">
              Limpiar Formulario
            </button>
          </div>
        </form>
      </div>

      <!-- Mensaje de éxito -->
      <div v-if="showSuccess" class="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 class="text-green-800 font-bold text-lg mb-2">✓ Cotización Enviada</h3>
        <p class="text-green-700">Hemos recibido su solicitud. Le enviaremos la cotización a su email en las próximas horas.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useProductsStore } from '@/stores/products';

const productsStore = useProductsStore();
const products = computed(() => productsStore.products);

const form = ref({
  nombre: '',
  email: '',
  telefono: '',
  empresa: '',
  terminoPago: 'contado',
  mensaje: ''
});

const selectedProducts = ref<string[]>([]);
const showSuccess = ref(false);

const handleSubmit = () => {
  if (selectedProducts.value.length === 0) {
    alert('Por favor seleccione al menos un producto');
    return;
  }

  // Simular envío
  console.log('Cotización enviada:', {
    ...form.value,
    productos: selectedProducts.value
  });

  showSuccess.value = true;
  setTimeout(() => {
    showSuccess.value = false;
    resetForm();
  }, 5000);
};

const resetForm = () => {
  form.value = {
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    terminoPago: 'contado',
    mensaje: ''
  };
  selectedProducts.value = [];
};
</script>
