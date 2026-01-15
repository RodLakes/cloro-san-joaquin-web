// Tipos para cotizaciones
export interface QuoteItem {
    productoId: string;
    nombre: string;
    cantidad: number;
    volumen: string;
    precioUnitario: number;
    descuento: number;
    subtotal: number;
}

export type PaymentTerm = 'contado' | '30-dias' | '60-dias' | '90-dias';

export interface QuoteRequest {
    items: QuoteItem[];
    cliente: {
        nombre: string;
        email: string;
        telefono: string;
        empresa?: string;
        rut?: string;
    };
    terminoPago: PaymentTerm;
    notas?: string;
}

export interface QuoteResponse {
    id: string;
    numero: string;
    fecha: string;
    items: QuoteItem[];
    subtotal: number;
    descuentoTotal: number;
    iva: number;
    total: number;
    cliente: QuoteRequest['cliente'];
    terminoPago: PaymentTerm;
    notas?: string;
    pdfUrl?: string;
    estado: 'borrador' | 'enviada' | 'aceptada' | 'rechazada';
}
