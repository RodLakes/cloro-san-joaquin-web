import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Product, ProductPrice } from '@/types/product';

export interface CartItem {
    producto: Product;
    volumen: ProductPrice;
    cantidad: number;
}

export const useCartStore = defineStore('cart', () => {
    // Estado
    const items = ref<CartItem[]>([]);

    // Getters
    const itemCount = computed(() => {
        return items.value.reduce((total, item) => total + item.cantidad, 0);
    });

    const subtotal = computed(() => {
        return items.value.reduce((total, item) => {
            const precioBase = item.volumen.precio;
            const descuento = item.volumen.descuento || 0;
            const precioConDescuento = precioBase * (1 - descuento / 100);
            return total + (precioConDescuento * item.cantidad);
        }, 0);
    });

    const descuentoTotal = computed(() => {
        return items.value.reduce((total, item) => {
            const descuento = item.volumen.descuento || 0;
            const montoDescuento = item.volumen.precio * (descuento / 100) * item.cantidad;
            return total + montoDescuento;
        }, 0);
    });

    const iva = computed(() => {
        return subtotal.value * 0.19; // IVA 19% Chile
    });

    const total = computed(() => {
        return subtotal.value + iva.value;
    });

    // Actions
    function addItem(producto: Product, volumen: ProductPrice, cantidad: number = 1) {
        const existingItem = items.value.find(
            item => item.producto.id === producto.id && item.volumen.volumen === volumen.volumen
        );

        if (existingItem) {
            existingItem.cantidad += cantidad;
        } else {
            items.value.push({ producto, volumen, cantidad });
        }
    }

    function removeItem(productoId: string, volumen: string) {
        const index = items.value.findIndex(
            item => item.producto.id === productoId && item.volumen.volumen === volumen
        );
        if (index > -1) {
            items.value.splice(index, 1);
        }
    }

    function updateQuantity(productoId: string, volumen: string, cantidad: number) {
        const item = items.value.find(
            item => item.producto.id === productoId && item.volumen.volumen === volumen
        );
        if (item) {
            if (cantidad <= 0) {
                removeItem(productoId, volumen);
            } else {
                item.cantidad = cantidad;
            }
        }
    }

    function clearCart() {
        items.value = [];
    }

    return {
        items,
        itemCount,
        subtotal,
        descuentoTotal,
        iva,
        total,
        addItem,
        removeItem,
        updateQuantity,
        clearCart
    };
});
