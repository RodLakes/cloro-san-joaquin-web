<template>
  <div class="resources-view py-12">
    <div class="container-custom">
      <h1 class="section-title mb-2">Recursos</h1>
      <p class="section-subtitle mb-12">Herramientas y guías útiles para el uso de nuestros productos</p>

      <!-- Calculadora de Dosificación -->
      <section class="mb-12">
        <div class="card max-w-2xl mx-auto">
          <h2 class="text-2xl font-bold mb-6">Calculadora de Dosificación</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2">Volumen de Agua (litros)</label>
              <input v-model.number="waterVolume" type="number" min="1" class="input" placeholder="Ej: 10000">
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Concentración del Producto (%)</label>
              <input v-model.number="concentration" type="number" min="1" max="100" class="input" placeholder="Ej: 10">
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Nivel de Dosificación</label>
              <select v-model="dosageLevel" class="input">
                <option value="0.5">Bajo - Mantenimiento (0.5 ml/L)</option>
                <option value="1">Normal - Desinfección estándar (1 ml/L)</option>
                <option value="2">Alto - Desinfección profunda (2 ml/L)</option>
              </select>
            </div>
            <div v-if="waterVolume && concentration" class="bg-primary-light bg-opacity-20 rounded-lg p-6">
              <p class="text-lg mb-2">Cantidad necesaria de producto:</p>
              <p class="text-4xl font-bold text-primary-dark">{{ calculatedDosage.toFixed(2) }} ml</p>
              <p class="text-sm text-gray-600 mt-2">≈ {{ (calculatedDosage / 1000).toFixed(2) }} litros</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Preguntas Frecuentes -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
        <div class="max-w-3xl mx-auto space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="card">
            <button 
              @click="toggleFaq(index)" 
              class="w-full text-left flex justify-between items-center"
            >
              <h3 class="font-bold text-lg">{{ faq.pregunta }}</h3>
              <span class="text-2xl">{{ openFaq === index ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === index" class="mt-4 text-gray-700 border-t pt-4">
              {{ faq.respuesta }}
            </div>
          </div>
        </div>
      </section>

      <!-- Guías y Descargas -->
      <section>
        <h2 class="text-2xl font-bold text-center mb-8">Guías y Documentos</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card card-hover cursor-pointer text-center">
            <div class="text-5xl mb-4">📄</div>
            <h3 class="font-bold mb-2">Guía de Uso Hipoclorito</h3>
            <p class="text-sm text-gray-600 mb-4">Manual completo de aplicación</p>
            <button class="btn btn-primary btn-sm">Descargar PDF</button>
          </div>
          <div class="card card-hover cursor-pointer text-center">
            <div class="text-5xl mb-4">📊</div>
            <h3 class="font-bold mb-2">Fichas Técnicas</h3>
            <p class="text-sm text-gray-600 mb-4">Especificaciones de productos</p>
            <button class="btn btn-primary btn-sm">Descargar PDF</button>
          </div>
          <div class="card card-hover cursor-pointer text-center">
            <div class="text-5xl mb-4">🛡️</div>
            <h3 class="font-bold mb-2">Hojas de Seguridad</h3>
            <p class="text-sm text-gray-600 mb-4">MSDS de todos los productos</p>
            <button class="btn btn-primary btn-sm">Descargar PDF</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const waterVolume = ref<number>(10000);
const concentration = ref<number>(10);
const dosageLevel = ref<number>(1);
const openFaq = ref<number | null>(null);

const calculatedDosage = computed(() => {
  if (!waterVolume.value || !concentration.value) return 0;
  return waterVolume.value * dosageLevel.value;
});

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index;
};

const faqs = [
  {
    pregunta: '¿Cuál es la concentración recomendada para desinfección de agua potable?',
    respuesta: 'Para desinfección de agua potable se recomienda usar 0.5 a 1 ml de Hipoclorito de Sodio al 10% por cada litro de agua, dependiendo del nivel de contaminación inicial.'
  },
  {
    pregunta: '¿Cómo debo almacenar los productos?',
    respuesta: 'Los productos deben almacenarse en un lugar fresco, seco y ventilado, lejos de la luz solar directa y de fuentes de calor. Mantener los envases bien cerrados cuando no estén en uso.'
  },
  {
    pregunta: '¿Cuánto tiempo dura el Hipoclorito de Sodio?',
    respuesta: 'El Hipoclorito de Sodio al 10% tiene una estabilidad de 24 meses cuando se almacena correctamente. Después de ese tiempo puede perder concentración gradualmente.'
  },
  {
    pregunta: '¿Realizan envíos a otras regiones?',
    respuesta: 'Sí, realizamos envíos a todo Chile. El costo y tiempo de entrega depende de la ubicación y volumen del pedido. Contáctenos para más información.'
  },
  {
    pregunta: '¿Ofrecen asesoría técnica?',
    respuesta: 'Sí, nuestro equipo técnico está disponible para brindar asesoría sobre dosificación y aplicación de nuestros productos. Puede contactarnos por teléfono o WhatsApp.'
  }
];
</script>
