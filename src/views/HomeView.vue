<template>
  <div class="home-view">
    <!-- Hero Section with Slider -->
    <section class="relative h-[600px] text-white overflow-hidden">
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation, SwiperEffectFade]"
        :slides-per-view="1"
        :loop="true"
        :effect="'fade'"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        class="h-full w-full"
      >
        <SwiperSlide v-for="(slide, index) in heroSlides" :key="index">
          <div class="relative h-full w-full flex items-center justify-center">
            <div class="absolute inset-0">
              <img :src="resolveAsset(slide.image)" :alt="slide.title" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-primary-light/60"></div>
            </div>
            
            <div class="container-custom relative z-10 text-center px-4">
              <h1 class="text-4xl md:text-6xl font-black font-satoshi uppercase mb-4 tracking-tight" v-motion-fade-visible>
                {{ slide.title }}
              </h1>
              <p class="text-xl md:text-2xl font-bold mb-4 text-white/90" v-motion-fade-visible :delay="200">
                {{ slide.subtitle }}
              </p>
              <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/80" v-motion-fade-visible :delay="400">
                {{ slide.description }}
              </p>
              <div class="flex gap-4 justify-center flex-wrap" v-motion-fade-visible :delay="600">
                <RouterLink to="/productos" class="btn btn-primary text-lg px-8 py-4">
                  Explorar Productos
                </RouterLink>
                <RouterLink to="/cotizacion" class="btn btn-secondary text-lg px-8 py-4">
                  Solicitar Cotización
                </RouterLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <!-- Value Proposition -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center card card-hover" v-motion-slide-visible-once-bottom :delay="100">
            <div class="text-5xl mb-4">🛡️</div>
            <h3 class="text-2xl font-bold mb-2 text-brand-blue font-satoshi uppercase">30+ Años de Confianza</h3>
            <p class="text-gray-600">Desde 1990 brindando soluciones de calidad para la desinfección profesional</p>
          </div>
          
          <div class="text-center card card-hover" v-motion-slide-visible-once-bottom :delay="200">
            <div class="text-5xl mb-4">🏭</div>
            <h3 class="text-2xl font-bold mb-2 text-brand-blue font-satoshi uppercase">20,000L de Capacidad</h3>
            <p class="text-gray-600">Producción propia de Hipoclorito de Sodio al 10% de máxima pureza</p>
          </div>
          
          <div class="text-center card card-hover" v-motion-slide-visible-once-bottom :delay="300">
            <div class="text-5xl mb-4">✅</div>
            <h3 class="text-2xl font-bold mb-2 text-brand-blue font-satoshi uppercase">Expertos en Desinfección</h3>
            <p class="text-gray-600">Más de 30 líneas de productos para piscinas, salud e industria</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-16">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="section-title font-satoshi uppercase text-brand-blue">Productos Destacados</h2>
          <p class="section-subtitle">Descubre nuestra selección de productos más populares</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="producto in featuredProducts" 
            :key="producto.id"
            class="card card-hover cursor-pointer flex flex-col"
            @click="router.push(`/productos/${producto.id}`)"
            v-motion-slide-visible-once-bottom
          >
            <div class="relative mb-4 overflow-hidden rounded-lg">
              <img :src="resolveAsset(producto.imagenes[0] || '')" :alt="producto.nombre" class="w-full h-56 object-contain bg-gray-50 p-4 transition-transform duration-500 hover:scale-110">
              <span v-if="producto.nuevo" class="badge badge-new absolute top-2 right-2">Nuevo</span>
              <span v-if="producto.oferta" class="badge badge-sale absolute top-2 right-2">Oferta</span>
            </div>
            <div class="flex-grow">
              <h3 class="font-bold text-lg mb-2 text-gray-800">{{ producto.nombre }}</h3>
              <div class="flex items-center gap-1 mb-2">
                <span class="text-accent">⭐</span>
                <span class="font-semibold">{{ producto.rating }}</span>
                <span class="text-gray-500 text-sm">({{ producto.reviews }} reseñas)</span>
              </div>
              <p class="text-brand-blue font-black text-xl mb-4">
                Desde ${{ producto.precios[0]?.precio.toLocaleString('es-CL') || 0 }} CLP
              </p>
            </div>
            <button class="btn btn-primary w-full mt-auto">Ver Producto</button>
          </div>
        </div>

        <div class="text-center mt-12">
          <RouterLink to="/productos" class="btn btn-outline text-lg px-8 py-4">
            Ver Todos los Productos
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="section-title font-satoshi uppercase text-brand-blue">Lo Que Dicen Nuestros Clientes</h2>
          <p class="section-subtitle">La confianza de nuestros clientes es nuestro mejor respaldo</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="testimonio in testimonials" 
            :key="testimonio.id" 
            class="card"
            v-motion-slide-visible-once-bottom
          >
            <div class="flex items-center gap-1 mb-3">
              <span v-for="i in 5" :key="i" class="text-accent text-xl">
                {{ i <= testimonio.rating ? '⭐' : '☆' }}
              </span>
            </div>
            <p class="text-gray-700 mb-4 italic">"{{ testimonio.comentario }}"</p>
            <div class="border-t pt-4">
              <p class="font-bold">{{ testimonio.nombre }}</p>
              <p class="text-sm text-gray-600">{{ testimonio.cargo }}</p>
              <p class="text-sm text-brand-blue font-semibold">{{ testimonio.empresa }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-20 bg-brand-blue text-white">
      <div class="container-custom text-center">
        <h2 class="text-4xl font-black font-satoshi uppercase mb-4">¿Listo para Cambiar a Cloro San Joaquín?</h2>
        <p class="text-xl mb-8">Únete a cientos de clientes satisfechos que confían en nosotros desde hace más de 30 años</p>
        <div class="flex gap-4 justify-center flex-wrap">
          <RouterLink to="/cotizacion" class="btn bg-white text-brand-blue hover:bg-gray-100 text-lg px-8 py-4">
            Comenzar Ahora
          </RouterLink>
          <RouterLink to="/contacto" class="btn btn-outline border-white text-white hover:bg-white hover:text-brand-blue text-lg px-8 py-4">
            Hablar con un Experto
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { useProductsStore } from '@/stores/products';
import { testimonialsData } from '@/data/testimonials';
import { resolveAsset } from '@/utils/assets';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay as SwiperAutoplay, Pagination as SwiperPagination, Navigation as SwiperNavigation, EffectFade as SwiperEffectFade } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const router = useRouter();
const productsStore = useProductsStore();

const featuredProducts = computed(() => productsStore.featuredProducts.slice(0, 4));
const testimonials = computed(() => testimonialsData.slice(0, 3));

const heroSlides = [
  {
    title: "Pureza y Confianza desde 1990",
    subtitle: "Soluciones efectivas para tratamiento de aguas, piscinas y limpieza profesional",
    description: "30+ años de experiencia en productos de desinfección profesional con los más altos estándares.",
    image: "/hero-bg.png"
  },
  {
    title: "Desinfección Profesional que Protege",
    subtitle: "Innovación y Estándares de Calidad",
    description: "Fórmulas que cumplen normativas para proteger tu salud y bienestar en cada aplicación.",
    image: "/hero-bg.png" // Reusing the same for now, or could use another if available
  },
  {
    title: "Calidad Profesional a tu Alcance",
    subtitle: "Calidad Profesional a Precios Accesibles",
    description: "Más de 28 años protegiendo la salud de familias y empresas chilenas con eficiencia y economía.",
    image: "/hero-bg.png"
  }
];
</script>

<style>
/* Swiper custom styles */
.swiper-pagination-bullet-active {
  background: white !important;
}
.swiper-button-next, .swiper-button-prev {
  color: white !important;
}
</style>
