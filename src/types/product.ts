// Tipos para productos
export interface ProductSpecification {
    [key: string]: string | number;
}

export interface ProductPrice {
    volumen: string;
    precio: number;
    descuento: number;
    nota?: string;
}

export interface ProductDosage {
    nivel: string;
    uso: string;
}

export interface ProductReview {
    id: string;
    usuario: string;
    rating: number;
    comentario: string;
    fecha: string;
}

export interface Product {
    id: string;
    sku: string;
    nombre: string;
    categoria: string;
    descripcion: string;
    imagenes: string[];
    especificaciones: ProductSpecification;
    precios: ProductPrice[];
    stock: number;
    rating: number;
    reviews: number;
    usos: string[];
    dosificaciones: ProductDosage[];
    compatibilidades?: string[];
    msdsPDF?: string;
    datasheetPDF?: string;
    destacado?: boolean;
    nuevo?: boolean;
    oferta?: boolean;
}

export type ProductCategory = 'Hipoclorito' | 'Cloro Sólido' | 'Piscinas' | 'Salud' | 'Industria';

export interface ProductFilters {
    busqueda: string;
    categorias: ProductCategory[];
    precioMin: number;
    precioMax: number;
    enStock: boolean;
}

export type ProductSortOption = 'bestseller' | 'precio-asc' | 'precio-desc' | 'nuevo' | 'rating' | 'nombre-asc' | 'nombre-desc';
