import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
        meta: {
            title: 'Inicio - Cloro San Joaquín | Pureza y Confianza desde 1990',
            description: '30+ años de experiencia en productos de desinfección. Hipoclorito de sodio, productos para piscinas, salud e industria.'
        }
    },
    {
        path: '/productos',
        name: 'productos',
        component: () => import('@/views/CatalogView.vue'),
        meta: {
            title: 'Catálogo de Productos - Cloro San Joaquín',
            description: 'Explora nuestro catálogo completo de productos de desinfección: hipoclorito, cloro, alguicidas y más.'
        }
    },
    {
        path: '/productos/:id',
        name: 'producto-detalle',
        component: () => import('@/views/ProductDetailView.vue'),
        meta: {
            title: 'Producto - Cloro San Joaquín'
        }
    },
    {
        path: '/cotizacion',
        name: 'cotizacion',
        component: () => import('@/views/QuoteView.vue'),
        meta: {
            title: 'Solicitar Cotización - Cloro San Joaquín',
            description: 'Solicita una cotización personalizada para tus productos de desinfección.'
        }
    },
    {
        path: '/contacto',
        name: 'contacto',
        component: () => import('@/views/ContactView.vue'),
        meta: {
            title: 'Contacto - Cloro San Joaquín',
            description: 'Contáctanos: Tel +56 2 2315 1430 | WhatsApp +56 9 6609 4175 | Carlos Valdovinos 2473, Pedro Aguirre Cerda, Santiago'
        }
    },
    {
        path: '/recursos',
        name: 'recursos',
        component: () => import('@/views/ResourcesView.vue'),
        meta: {
            title: 'Recursos - Cloro San Joaquín',
            description: 'Calculadoras, guías de uso, preguntas frecuentes y recursos técnicos.'
        }
    },
    {
        path: '/nosotros',
        name: 'nosotros',
        component: () => import('@/views/AboutView.vue'),
        meta: {
            title: 'Nosotros - Cloro San Joaquín | Nuestra Historia',
            description: 'Conoce nuestra historia de 30+ años, misión, valores y compromiso con la calidad.'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/views/NotFoundView.vue'),
        meta: {
            title: 'Página No Encontrada - Cloro San Joaquín'
        }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            };
        } else {
            return { top: 0, behavior: 'smooth' };
        }
    }
});

// Actualizar título y meta tags en cada cambio de ruta
router.beforeEach((to, _from, next) => {
    const defaultTitle = 'Cloro San Joaquín - Pureza y Confianza desde 1990';
    const title = (to.meta.title as string) || defaultTitle;

    document.title = title;

    // Actualizar meta description
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta && to.meta.description) {
        descriptionMeta.setAttribute('content', to.meta.description as string);
    }

    next();
});

export default router;
