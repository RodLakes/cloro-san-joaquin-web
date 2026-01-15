<template>
  <div class="about-view py-12">
    <div class="container-custom">
      <!-- Historia -->
      <section class="mb-16 text-center">
        <h1 class="section-title mb-4">Cloro San Joaquín</h1>
        <p class="text-2xl text-primary-dark font-semibold mb-8">"Pureza y Confianza desde 1990"</p>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          Somos una empresa familiar chilena con más de 30 años de experiencia en la producción y distribución 
          de productos de desinfección profesional. Fundada por Don Luis Fanor Maturana en 1990, hemos crecido 
          hasta convertirnos en un referente de calidad y confianza en la industria.
        </p>
      </section>

      <!-- Timeline -->
      <section class="mb-16">
        <h2 class="section-title text-center mb-12">Nuestra Historia</h2>
        <div class="max-w-4xl mx-auto">
          <div v-for="event in timeline" :key="event.año" class="flex gap-8 mb-8">
            <div class="flex-shrink-0 w-24 text-right">
              <span class="text-3xl font-bold text-primary-dark">{{ event.año }}</span>
            </div>
            <div class="flex-1 card">
              <h3 class="font-bold text-xl mb-2">{{ event.titulo }}</h3>
              <p class="text-gray-700">{{ event.descripcion }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Misión y Valores -->
      <section class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card gradient-water text-white">
            <h2 class="text-3xl font-bold mb-4">Nuestra Misión</h2>
            <p class="text-lg">
              Proporcionar productos de desinfección de la más alta calidad, brindando soluciones confiables 
              y efectivas que contribuyan a la salud y bienestar de nuestros clientes, manteniendo siempre 
              nuestro compromiso con la excelencia y el servicio personalizado.
            </p>
          </div>
          <div class="card bg-accent">
            <h2 class="text-3xl font-bold mb-4">Nuestros Valores</h2>
            <ul class="text-lg space-y-2">
              <li>✓ Calidad sin compromisos</li>
              <li>✓ Confianza y transparencia</li>
              <li>✓ Compromiso con el cliente</li>
              <li>✓ Innovación constante</li>
              <li>✓ Responsabilidad ambiental</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Capacidades -->
      <section>
        <h2 class="section-title text-center mb-12">Nuestras Capacidades</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card text-center">
            <div class="text-5xl mb-4">🏭</div>
            <h3 class="text-2xl font-bold mb-2 text-primary-dark">20,000 Litros</h3>
            <p class="text-gray-600">Capacidad de producción de Hipoclorito de Sodio al 10%</p>
          </div>
          <div class="card text-center">
            <div class="text-5xl mb-4">📦</div>
            <h3 class="text-2xl font-bold mb-2 text-primary-dark">30+ Productos</h3>
            <p class="text-gray-600">Líneas de productos para diferentes aplicaciones</p>
          </div>
          <div class="card text-center">
            <div class="text-5xl mb-4">🤝</div>
            <h3 class="text-2xl font-bold mb-2 text-primary-dark">30+ Años</h3>
            <p class="text-gray-600">De experiencia y confianza en el mercado</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { timelineData } from '@/data/timeline';

const timeline = timelineData;
</script>
