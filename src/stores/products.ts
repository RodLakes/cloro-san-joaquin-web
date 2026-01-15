import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Product, ProductFilters, ProductSortOption } from '@/types/product';
import { productsData } from '@/data/products';

export const useProductsStore = defineStore('products', () => {
    // Estado
    const products = ref<Product[]>(productsData);
    const filters = ref<ProductFilters>({
        busqueda: '',
        categorias: [],
        precioMin: 0,
        precioMax: 200000,
        enStock: false
    });
    const sortOption = ref<ProductSortOption>('bestseller');

    // Getters
    const featuredProducts = computed(() => {
        return products.value.filter(p => p.destacado).slice(0, 8);
    });

    const newProducts = computed(() => {
        return products.value.filter(p => p.nuevo);
    });

    const onSaleProducts = computed(() => {
        return products.value.filter(p => p.oferta);
    });

    const filteredProducts = computed(() => {
        let result = products.value;

        // Filtro de búsqueda
        if (filters.value.busqueda) {
            const searchTerm = filters.value.busqueda.toLowerCase();
            result = result.filter(p =>
                p.nombre.toLowerCase().includes(searchTerm) ||
                p.descripcion.toLowerCase().includes(searchTerm) ||
                p.categoria.toLowerCase().includes(searchTerm)
            );
        }

        // Filtro de categorías
        if (filters.value.categorias.length > 0) {
            result = result.filter(p =>
                filters.value.categorias.includes(p.categoria as any)
            );
        }

        // Filtro de precio (usando el precio base más bajo)
        result = result.filter(p => {
            const precioBase = p.precios[0]?.precio || 0;
            return precioBase >= filters.value.precioMin && precioBase <= filters.value.precioMax;
        });

        // Filtro de stock
        if (filters.value.enStock) {
            result = result.filter(p => p.stock > 0);
        }

        // Ordenamiento
        switch (sortOption.value) {
            case 'precio-asc':
                result.sort((a, b) => (a.precios[0]?.precio || 0) - (b.precios[0]?.precio || 0));
                break;
            case 'precio-desc':
                result.sort((a, b) => (b.precios[0]?.precio || 0) - (a.precios[0]?.precio || 0));
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'nombre-asc':
                result.sort((a, b) => a.nombre.localeCompare(b.nombre));
                break;
            case 'nombre-desc':
                result.sort((a, b) => b.nombre.localeCompare(a.nombre));
                break;
            case 'nuevo':
                result.sort((a, b) => (b.nuevo ? 1 : 0) - (a.nuevo ? 1 : 0));
                break;
            case 'bestseller':
            default:
                result.sort((a, b) => b.reviews - a.reviews);
                break;
        }

        return result;
    });

    const categories = computed(() => {
        const cats = new Set(products.value.map(p => p.categoria));
        return Array.from(cats);
    });

    // Actions
    function getProductById(id: string): Product | undefined {
        return products.value.find(p => p.id === id);
    }

    function updateFilters(newFilters: Partial<ProductFilters>) {
        filters.value = { ...filters.value, ...newFilters };
    }

    function updateSortOption(option: ProductSortOption) {
        sortOption.value = option;
    }

    function resetFilters() {
        filters.value = {
            busqueda: '',
            categorias: [],
            precioMin: 0,
            precioMax: 200000,
            enStock: false
        };
        sortOption.value = 'bestseller';
    }

    return {
        products,
        filters,
        sortOption,
        featuredProducts,
        newProducts,
        onSaleProducts,
        filteredProducts,
        categories,
        getProductById,
        updateFilters,
        updateSortOption,
        resetFilters
    };
});
