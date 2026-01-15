import type { Product } from '@/types/product';

export const productsData: Product[] = [
  {
    id: "prod-001",
    sku: "HIPO-SODIO-10-20L",
    nombre: "Hipoclorito de Sodio 10%",
    categoria: "Hipoclorito",
    descripcion: "Desinfectante líquido de máxima pureza con 10% de concentración activa. Ideal para potabilización de agua, desinfección de superficies, pisos, baños y blanqueo textil .Elimina virus, bacterias y hongos. Presentación industrial en bidón.",
    imagenes: [
      "/images/products/hipoclo10k.png"
    ],
    especificaciones: {
      concentracion: "10%",
      densidad: "1.05-1.10 g/ml",
      pH: "11-12",
      estabilidad: "24 meses",
      apariencia: "Líquido amarillento",
      olor: "Característico de cloro"
    },
    precios: [
      { volumen: "5L", precio: 4990, descuento: 5 },
      { volumen: "10L", precio: 9990, descuento: 10 },
      { volumen: "20L", precio: 15990, descuento: 15 },
      { volumen: "Granel", precio: 0, descuento: 20, nota: "Consultar precio" }
    ],
    stock: 450,
    rating: 4.8,
    reviews: 24,
    usos: [
      "Desinfección de agua potable",
      "Tratamiento de piscinas",
      "Limpieza de sanitarios",
      "Desinfección de superficies",
      "Tratamiento de aguas residuales"
    ],
    dosificaciones: [
      { nivel: "Bajo (0.5 ml/L)", uso: "Mantenimiento" },
      { nivel: "Normal (1 ml/L)", uso: "Desinfección estándar" },
      { nivel: "Alto (2 ml/L)", uso: "Desinfección profunda" }
    ],
    compatibilidades: ["Cloro en Tabletas", "Alguicida Clarificante"],
    msdsPDF: "https://ejemplo.com/hipo-sodio-10-msds.pdf",
    datasheetPDF: "https://ejemplo.com/hipo-sodio-10-datasheet.pdf",
    destacado: true,
    nuevo: false,
    oferta: false
  },
  {
    id: "prod-002",
    sku: "CLORO-TABLETAS-1KG",
    nombre: "Cloro en Tabletas",
    categoria: "Cloro Sólido",
    descripcion: "Tabletas compuestas de tricloro-isocianurato de sodio 90%. Lenta disolución, ideal para piscinas recreativas.",
    imagenes: [
      "/images/products/cloro_tabletas.png"
    ],
    especificaciones: {
      composicion: "Tricloro-isocianurato de sodio 90%",
      formato: "Tabletas sólidas",
      envase: "1 kg",
      disolucion: "Lenta",
      estabilidad: "36 meses"
    },
    precios: [
      { volumen: "1 kg", precio: 8990, descuento: 0 },
      { volumen: "3 kg", precio: 24990, descuento: 5 },
      { volumen: "10 kg", precio: 75990, descuento: 10 }
    ],
    stock: 200,
    rating: 4.6,
    reviews: 18,
    usos: ["Desinfección piscinas recreativas"],
    dosificaciones: [
      { nivel: "1-2 tabletas", uso: "Mantenimiento diario" }
    ],
    destacado: true,
    nuevo: false,
    oferta: false
  },
  {
    id: "prod-003",
    sku: "ALGUICIDA-CLARIF-2L",
    nombre: "Alguicida Clarificante",
    categoria: "Piscinas",
    descripcion: "Producto químico para piscinas que previene y elimina algas, clarifica el agua turbia y mantiene transparencia cristalina. Control de microorganismos acuáticos en albercas y estanques.",
    imagenes: [
      "/images/products/alguicida.png"
    ],
    especificaciones: {
      composicion: "Cloruro de bensalconio 10% (con espuma) / Amonio poli-cuaternario (sin espuma)",
      volumen: "2 litros",
      densidad: "1.0 g/ml",
      tipo: "Concentrado"
    },
    precios: [
      { volumen: "2L", precio: 12990, descuento: 0 },
      { volumen: "10L", precio: 54990, descuento: 8 }
    ],
    stock: 120,
    rating: 4.7,
    reviews: 12,
    usos: ["Eliminación de algas", "Clarificante agua piscina"],
    dosificaciones: [
      { nivel: "500-1000 ml", uso: "Por 10,000 litros de agua" }
    ],
    destacado: true,
    nuevo: false,
    oferta: false
  },
  {
    id: "prod-004",
    sku: "BAJA-PH-5K",
    nombre: "Baja PH",
    categoria: "Salud",
    descripcion: "Reductor de pH para neutralizar aguas alcalinas.",
    imagenes: [
      "/images/products/bajaph.png"
    ],
    especificaciones: {
      concentracion: "Bisulfato de sodio (NaHSO₄) 93-95% o Ácido sulfúrico diluido 15-20%",
      volumen: "1kg, 5kg, 10kg, 25kg",
      pH: "10-11",
      espectro: "Sal ácida granulada o solución ácida",
      estabilidad: "18 meses"
    },
    precios: [
      { volumen: "1kg", precio: 8990, descuento: 0 },
      { volumen: "5kg", precio: 35990, descuento: 5 },
      { volumen: "20kg", precio: 125990, descuento: 12 }
    ],
    stock: 85,
    rating: 4.9,
    reviews: 31,
    usos: [
      "Piscinas alcalinas (pH >7.6)",
      "Ajuste de pH",
      "Optimización de cloro"
    ],
    dosificaciones: [
      { nivel: "50-100 ml/L", uso: "Desinfección general" },
      { nivel: "100-200 ml/L", uso: "Desinfección profunda" }
    ],
    destacado: true,
    nuevo: true,
    oferta: false
  },
  {
    id: "prod-005",
    sku: "CLORO-GRANULADO-5KG",
    nombre: "Cloro Granulado Rápido",
    categoria: "Piscinas",
    descripcion: "Cloro granulado de disolución rápida para shock treatment en piscinas. 65% de cloro activo.",
    imagenes: [
      "/images/products/hipocalcio.png"
    ],
    especificaciones: {
      composicion: "Hipoclorito de calcio 65%",
      formato: "Granulado",
      envase: "5 kg",
      disolucion: "Rápida",
      estabilidad: "24 meses"
    },
    precios: [
      { volumen: "1 kg", precio: 9990, descuento: 0 },
      { volumen: "5 kg", precio: 42990, descuento: 8 },
      { volumen: "25 kg", precio: 189990, descuento: 15 }
    ],
    stock: 156,
    rating: 4.5,
    reviews: 22,
    usos: [
      "Shock treatment piscinas",
      "Cloración inicial",
      "Desinfección rápida"
    ],
    dosificaciones: [
      { nivel: "10-20 g/m³", uso: "Mantenimiento" },
      { nivel: "50-100 g/m³", uso: "Shock treatment" }
    ],
    destacado: false,
    nuevo: false,
    oferta: true
  },
  {
    id: "prod-006",
    sku: "CLORO-TRIPLE-ACCION",
    nombre: "Cloro Triple Acción",
    categoria: "Industria",
    descripcion: "Cloro multifunción: desinfecta, clarifica y previene algas.",
    imagenes: [
      "/images/products/clorotripleaccion_DL.png"
    ],
    especificaciones: {
      tipo: "Tricloro 85-90%, alguicida 3-5%, clarificante 2-3%, estabilizador",
      pH: "13-14",
      densidad: "2.00-2.10 (sólido)",
      biodegradable: "Sí",
      volumen: "200g/tableta, 1kg, 5kg, 10kg"
    },
    precios: [
      { volumen: "1kg", precio: 18990, descuento: 0 },
      { volumen: "5kg", precio: 65990, descuento: 10 },
      { volumen: "10kg", precio: 0, descuento: 20, nota: "Consultar precio" }
    ],
    stock: 67,
    rating: 4.7,
    reviews: 15,
    usos: [
      "Desinfección",
      "Clarificación",
      "Control de algas"
    ],
    dosificaciones: [
      { nivel: "50-100 ml/L", uso: "Limpieza ligera" },
      { nivel: "200-500 ml/L", uso: "Desengrase pesado" }
    ],
    destacado: false,
    nuevo: false,
    oferta: false
  },
  {
    id: "prod-007",
    sku: "ANTIALGAS-PISCINA-1L",
    nombre: "Decantador Líquido",
    categoria: "Piscinas",
    descripcion: "Floculante líquido que aglutina partículas en suspensión.",
    imagenes: [
      "/images/products/decantador.png"
    ],
    especificaciones: {
      composicion: "Sulfato de aluminio líquido 8-10%, coadyuvantes",
      concentracion: "8-10%",
      volumen: "1 litro",
      compatibilidad: "Todos los filtros"
    },
    precios: [
      { volumen: "1L", precio: 11990, descuento: 0 },
      { volumen: "5L", precio: 49990, descuento: 8 },
      { volumen: "20L", precio: 179990, descuento: 12 }
    ],
    stock: 203,
    rating: 4.6,
    reviews: 28,
    usos: [
      "PClarificación rápida del agua turbia"
    ],
    dosificaciones: [
      { nivel: "100 ml", uso: "Por 10 m³ agua - semanal" }
    ],
    destacado: false,
    nuevo: true,
    oferta: false
  },
  {
    id: "prod-008",
    sku: "DESINF-MULTIUSO-1L",
    nombre: "Hipoclorito de Calcio",
    categoria: "Salud",
    descripcion: "Tabletas de hipoclorito de calcio 70% y en gránulos 65-70%. Tabletas sólidas, en envases de 3 unidades (650 gr) y balde de 14 kg y granulado en cuños de 40 kg",
    imagenes: [
      "/images/products/hipocalcio.png"
    ],
    especificaciones: {
      principioActivo: "Cloruro de benzalconio 5%",
      fragancia: "Lavanda",
      volumen: "1 litro",
      pH: "7-8",
      rendimiento: "50 m² por litro"
    },
    precios: [
      { volumen: "1L", precio: 4990, descuento: 0 },
      { volumen: "5L", precio: 19990, descuento: 10 },
      { volumen: "20L", precio: 69990, descuento: 15 }
    ],
    stock: 412,
    rating: 4.4,
    reviews: 67,
    usos: [
      "Desinfectante tratamiento de aguas",
      "Tranques sépticos",
      "Plantas de airiación"
    ],
    dosificaciones: [
      { nivel: "100 ml/L", uso: "Limpieza general" },
      { nivel: "250 ml/L", uso: "Desinfección profunda" }
    ],
    destacado: false,
    nuevo: false,
    oferta: true
  }
];
