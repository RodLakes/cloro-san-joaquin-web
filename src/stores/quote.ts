import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { QuoteItem, QuoteResponse, PaymentTerm } from '@/types/quote';

export const useQuoteStore = defineStore('quote', () => {
    // Estado
    const items = ref<QuoteItem[]>([]);
    const clienteInfo = ref({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        rut: ''
    });
    const terminoPago = ref<PaymentTerm>('contado');
    const notas = ref('');

    // Getters
    const subtotal = computed(() => {
        return items.value.reduce((total, item) => total + item.subtotal, 0);
    });

    const descuentoTotal = computed(() => {
        return items.value.reduce((total, item) => {
            const montoDescuento = (item.precioUnitario * item.cantidad) - item.subtotal;
            return total + montoDescuento;
        }, 0);
    });

    const iva = computed(() => {
        return subtotal.value * 0.19; // IVA 19% Chile
    });

    const total = computed(() => {
        return subtotal.value + iva.value;
    });

    const isValid = computed(() => {
        return items.value.length > 0 &&
            clienteInfo.value.nombre.trim() !== '' &&
            clienteInfo.value.email.trim() !== '' &&
            clienteInfo.value.telefono.trim() !== '';
    });

    // Actions
    function addItem(item: QuoteItem) {
        const existingIndex = items.value.findIndex(
            i => i.productoId === item.productoId && i.volumen === item.volumen
        );

        if (existingIndex > -1) {
            const existingItem = items.value[existingIndex];
            if (existingItem) {
                existingItem.cantidad += item.cantidad;
                existingItem.subtotal =
                    existingItem.precioUnitario *
                    existingItem.cantidad *
                    (1 - existingItem.descuento / 100);
            }
        } else {
            items.value.push(item);
        }
    }

    function removeItem(productoId: string, volumen: string) {
        const index = items.value.findIndex(
            i => i.productoId === productoId && i.volumen === volumen
        );
        if (index > -1) {
            items.value.splice(index, 1);
        }
    }

    function updateItemQuantity(productoId: string, volumen: string, cantidad: number) {
        const item = items.value.find(
            i => i.productoId === productoId && i.volumen === volumen
        );
        if (item) {
            item.cantidad = cantidad;
            item.subtotal = item.precioUnitario * cantidad * (1 - item.descuento / 100);
        }
    }

    function setClienteInfo(info: Partial<typeof clienteInfo.value>) {
        clienteInfo.value = { ...clienteInfo.value, ...info };
    }

    function setTerminoPago(termino: PaymentTerm) {
        terminoPago.value = termino;
    }

    function setNotas(texto: string) {
        notas.value = texto;
    }

    async function generateQuote(): Promise<QuoteResponse> {
        // Simulación de generación de cotización
        // En producción, esto haría una llamada API
        const quote: QuoteResponse = {
            id: `COT-${Date.now()}`,
            numero: `${new Date().getFullYear()}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
            fecha: new Date().toISOString(),
            items: items.value,
            subtotal: subtotal.value,
            descuentoTotal: descuentoTotal.value,
            iva: iva.value,
            total: total.value,
            cliente: clienteInfo.value,
            terminoPago: terminoPago.value,
            notas: notas.value,
            estado: 'enviada'
        };

        return quote;
    }

    function resetQuote() {
        items.value = [];
        clienteInfo.value = {
            nombre: '',
            email: '',
            telefono: '',
            empresa: '',
            rut: ''
        };
        terminoPago.value = 'contado';
        notas.value = '';
    }

    return {
        items,
        clienteInfo,
        terminoPago,
        notas,
        subtotal,
        descuentoTotal,
        iva,
        total,
        isValid,
        addItem,
        removeItem,
        updateItemQuantity,
        setClienteInfo,
        setTerminoPago,
        setNotas,
        generateQuote,
        resetQuote
    };
});
