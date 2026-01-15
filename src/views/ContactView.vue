<template>
  <div class="contact-view py-12">
    <div class="container-custom">
      <h1 class="section-title mb-2">Contacto</h1>
      <p class="section-subtitle mb-12">Estamos aquí para ayudarte. Contáctanos por cualquiera de estos medios</p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Formulario -->
        <div class="card">
          <h2 class="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2">Nombre *</label>
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
              <label class="block text-sm font-medium mb-2">Tipo de Consulta *</label>
              <select v-model="form.tipo" required class="input">
                <option value="cotizacion">Cotización</option>
                <option value="consulta">Consulta General</option>
                <option value="soporte">Soporte Técnico</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Mensaje *</label>
              <textarea v-model="form.mensaje" rows="4" required class="input"></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-full">Enviar Mensaje</button>
          </form>

          <div v-if="showSuccess" class="mt-4 bg-green-50 border border-green-200 rounded p-4 text-green-700">
            ✓ Mensaje enviado correctamente. Te responderemos pronto.
          </div>
        </div>

        <!-- Información de Contacto -->
        <div>
          <div class="card mb-6">
            <h2 class="text-2xl font-bold mb-6">Información de Contacto</h2>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <span class="text-2xl">📍</span>
                <div>
                  <h3 class="font-bold mb-1">Dirección</h3>
                  <p class="text-gray-600">Carlos Valdovinos 2473<br>Pedro Aguirre Cerda, Santiago, Chile</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-2xl">📞</span>
                <div>
                  <h3 class="font-bold mb-1">Teléfono</h3>
                  <a href="tel:+56223151430" class="text-primary-dark hover:underline">+56 2 2315 1430</a>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-2xl">💬</span>
                <div>
                  <h3 class="font-bold mb-1">WhatsApp</h3>
                  <a href="https://wa.me/56966094175" target="_blank" class="text-primary-dark hover:underline">+56 9 6609 4175</a>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-2xl">✉️</span>
                <div>
                  <h3 class="font-bold mb-1">Email</h3>
                  <a href="mailto:info@clorosanjoaquin.cl" class="text-primary-dark hover:underline">info@clorosanjoaquin.cl</a>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <h3 class="font-bold text-lg mb-4">Horarios de Atención</h3>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span>Lunes - Viernes</span>
                <span class="font-semibold text-primary-dark">08:00 - 17:00</span>
              </div>
              <div class="flex justify-between text-gray-500">
                <span>Sábado - Domingo</span>
                <span>Cerrado</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mapa Placeholder -->
      <div class="mt-12 card">
        <h2 class="text-2xl font-bold mb-4">Nuestra Ubicación</h2>
        <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
          <div class="text-center">
            <p class="text-gray-600 mb-2">📍 Mapa de Google Maps</p>
            <p class="text-sm text-gray-500">Carlos Valdovinos 2473, Pedro Aguirre Cerda, Santiago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  nombre: '',
  email: '',
  telefono: '',
  tipo: 'consulta',
  mensaje: ''
});

const showSuccess = ref(false);

const handleSubmit = () => {
  console.log('Formulario enviado:', form.value);
  showSuccess.value = true;
  setTimeout(() => {
    showSuccess.value = false;
    form.value = {
      nombre: '',
      email: '',
      telefono: '',
      tipo: 'consulta',
      mensaje: ''
    };
  }, 5000);
};
</script>
