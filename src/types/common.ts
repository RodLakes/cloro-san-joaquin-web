// Tipos comunes
export interface ContactInfo {
    direccion: string;
    telefono: string;
    whatsapp: string;
    email: string;
    horarios: string;
}

export interface Testimonial {
    id: string;
    nombre: string;
    empresa: string;
    cargo?: string;
    avatar?: string;
    rating: number;
    comentario: string;
    fecha: string;
}

export interface TimelineEvent {
    año: number;
    titulo: string;
    descripcion: string;
    imagen?: string;
}

export interface BusinessPillar {
    id: string;
    nombre: string;
    descripcion: string;
    icono: string;
    imagen?: string;
    categoria: string;
}

export interface Newsletter {
    email: string;
}

export interface ContactForm {
    nombre: string;
    email: string;
    telefono: string;
    empresa?: string;
    tipoConsulta: 'cotizacion' | 'consulta' | 'soporte';
    mensaje: string;
}
