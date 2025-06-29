// Base de datos de productos - Florería Lili's
// Base de datos de productos - Florería Lili's (Versión Mejorada)
const productosFloristeria = [
    // ========== RAMOS DE ROSAS ==========
    {
        id: 1,
        nombre: "Ramo Buchón de 6 Rosas",
        precio: 250,
        imagen: "/img/arreglos/ramobuchon.jpg",
        categoria: "ramos",
        subcategoria: "rosas",
        ocasiones: ["cumpleaños", "aniversario", "san-valentin"],
        estilo: "buchon",
        empaque: "papel-coreano",
        tamaño: "mini",
        cantidadFlores: 6,
        colores: ["rojo", "rosa", "blanco"],
        disponible: true,
        masVendido: true,
        nuevo: false,
        oferta: false,
        descripcion: "Hermoso ramo buchón de 6 rosas frescas, perfecto para ocasiones especiales.",
        tiempoElaboracion: "2-3 horas"
    },
    {
        id: 2,
        nombre: "Ramo Buchón de 12 Rosas",
        precio: 350,
        imagen: "/img/arreglos/ramobuchon-12.jpg",
        categoria: "ramos",
        subcategoria: "rosas",
        ocasiones: ["cumpleaños", "aniversario", "san-valentin", "dia-madres"],
        estilo: "buchon",
        empaque: "papel-coreano",
        tamaño: "mediano",
        cantidadFlores: 12,
        colores: ["rojo", "rosa", "blanco"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: false,
        descripcion: "Elegante ramo buchón de 12 rosas, ideal para expresar amor y cariño.",
        tiempoElaboracion: "3-4 horas"
    },
    {
        id: 3,
        nombre: "Ramo Buchón de 24 Rosas",
        precio: 700,
        imagen: "/img/arreglos/ramobuchon-24.jpg",
        categoria: "ramos",
        subcategoria: "rosas",
        ocasiones: ["aniversario", "san-valentin", "bodas", "graduaciones"],
        estilo: "buchon",
        empaque: "en-caja",
        tamaño: "grande",
        cantidadFlores: 24,
        colores: ["rojo", "rosa", "blanco"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: false,
        descripcion: "Lujoso ramo buchón de 24 rosas en caja especial.",
        tiempoElaboracion: "5-6 horas"
    },
    {
        id: 4,
        nombre: "Ramo Clásico de Rosas",
        precio: 400,
        imagen: "/img/arreglos/ramoderosasclasico.jpeg",
        categoria: "ramos",
        subcategoria: "rosas",
        ocasiones: ["cumpleaños", "aniversario", "dia-madres"],
        estilo: "clasico",
        empaque: "papel-coreano",
        tamaño: "mediano",
        cantidadFlores: 18,
        colores: ["rojo", "rosa", "blanco", "amarillo"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: true,
        descripcion: "Ramo tradicional de rosas frescas en variedad de colores.",
        tiempoElaboracion: "3-4 horas"
    },

    // ========== RAMOS DE TULIPANES ==========
    {
        id: 5,
        nombre: "Ramo de Tulipanes Holandeses",
        precio: 420,
        imagen: "/img/arreglos/ramodetulipanes.jpg",
        categoria: "ramos",
        subcategoria: "tulipanes",
        ocasiones: ["cumpleaños", "aniversario", "dia-madres"],
        estilo: "elegante",
        empaque: "papel-coreano",
        tamaño: "mediano",
        cantidadFlores: 15,
        colores: ["rosa", "blanco", "rojo", "morado"],
        disponible: true,
        masVendido: false,
        nuevo: true,
        oferta: false,
        descripcion: "Delicado ramo de tulipanes importados, símbolo de elegancia.",
        tiempoElaboracion: "3-4 horas"
    },
    {
        id: 6,
        nombre: "Ramo de Tulipanes Mixtos",
        precio: 380,
        imagen: "/img/arreglos/tulipanes-mixtos.jpg",
        categoria: "ramos",
        subcategoria: "tulipanes",
        ocasiones: ["cumpleaños", "aniversario"],
        estilo: "colorido",
        empaque: "papel-coreano",
        tamaño: "mediano",
        cantidadFlores: 12,
        colores: ["multicolor"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: false,
        descripcion: "Mezcla vibrante de tulipanes en diferentes colores.",
        tiempoElaboracion: "3-4 horas"
    },

    // ========== RAMOS DE GIRASOLES ==========
    {
        id: 7,
        nombre: "Ramo de Girasoles Medianos",
        precio: 380,
        imagen: "/img/arreglos/ramodegirasoles.jpg",
        categoria: "ramos",
        subcategoria: "girasoles",
        ocasiones: ["cumpleaños", "graduaciones", "dia-madres"],
        estilo: "rural",
        empaque: "papel-rustico",
        tamaño: "mediano",
        cantidadFlores: 12,
        colores: ["amarillo"],
        disponible: true,
        masVendido: true,
        nuevo: false,
        oferta: false,
        descripcion: "Alegre ramo de girasoles frescos, perfecto para transmitir felicidad.",
        tiempoElaboracion: "2-3 horas"
    },
    {
        id: 8,
        nombre: "Ramo Girasoles con Rosas",
        precio: 450,
        imagen: "/img/arreglos/girasoles-rosas.jpg",
        categoria: "ramos",
        subcategoria: "girasoles",
        ocasiones: ["cumpleaños", "aniversario"],
        estilo: "mixto",
        empaque: "papel-coreano",
        tamaño: "mediano",
        cantidadFlores: 18,
        colores: ["amarillo", "rosa"],
        disponible: true,
        masVendido: false,
        nuevo: true,
        oferta: false,
        descripcion: "Combinación perfecta de girasoles y rosas rosadas.",
        tiempoElaboracion: "3-4 horas"
    },

    // ========== RAMOS DE GERBERAS ==========
    {
        id: 9,
        nombre: "Ramo de Gerberas Brillantes",
        precio: 350,
        imagen: "/img/arreglos/ramodegerberas.jpeg",
        categoria: "ramos",
        subcategoria: "gerberas",
        ocasiones: ["cumpleaños", "dia-madres", "graduaciones"],
        estilo: "colorido",
        empaque: "papel-coreano",
        tamaño: "mediano",
        cantidadFlores: 15,
        colores: ["rojo", "rosa", "amarillo", "naranja"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: true,
        descripcion: "Vibrante ramo de gerberas, ideal para alegrar cualquier día.",
        tiempoElaboracion: "3-4 horas"
    },

    // ========== RAMOS DE NUBES (GYPSOPHILA) ==========
    {
        id: 10,
        nombre: "Ramo de Nubes Elegante",
        precio: 320,
        imagen: "/img/arreglos/ramodenubes.jpeg",
        categoria: "ramos",
        subcategoria: "nubes",
        ocasiones: ["bodas", "aniversario", "eventos-formales"],
        estilo: "minimalista",
        empaque: "papel-seda",
        tamaño: "mediano",
        cantidadFlores: 0, // Principalmente gypsophila
        colores: ["blanco"],
        disponible: true,
        masVendido: false,
        nuevo: true,
        oferta: false,
        descripcion: "Delicado ramo de gypsophila (nubes), perfecto para bodas y eventos elegantes.",
        tiempoElaboracion: "2-3 horas"
    },

    // ========== RAMOS PERSONALIZADOS ==========
    {
        id: 11,
        nombre: "Ramo Personalizado Premium",
        precio: 600,
        imagen: "/img/arreglos/ramospersonalizados.jpeg",
        categoria: "ramos",
        subcategoria: "personalizados",
        ocasiones: ["cumpleaños", "aniversario", "san-valentin", "bodas"],
        estilo: "personalizado",
        empaque: "a-elegir",
        tamaño: "a-elegir",
        cantidadFlores: 0,
        colores: ["a-elegir"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: false,
        descripcion: "Diseña tu propio ramo eligiendo flores, colores y estilo. Precio varía según selección.",
        tiempoElaboracion: "4-6 horas",
        personalizable: true
    },

    // ========== RAMOS PARA BODAS ==========
    {
        id: 12,
        nombre: "Ramo de Novia Clásico",
        precio: 850,
        imagen: "/img/arreglos/ramosdenovia.jpeg",
        categoria: "bodas",
        subcategoria: "ramos-novia",
        ocasiones: ["bodas"],
        estilo: "elegante",
        empaque: "con-moño",
        tamaño: "grande",
        cantidadFlores: 30,
        colores: ["blanco", "marfil", "rosa-claro"],
        disponible: true,
        masVendido: true,
        nuevo: false,
        oferta: false,
        descripcion: "Elegante ramo de novia con rosas blancas y detalles de gypsophila.",
        tiempoElaboracion: "5-6 horas"
    },
    {
        id: 13,
        nombre: "Ramo de Novia Rústico",
        precio: 780,
        imagen: "/img/arreglos/ramo-novia-rustico.jpg",
        categoria: "bodas",
        subcategoria: "ramos-novia",
        ocasiones: ["bodas"],
        estilo: "rustico",
        empaque: "con-cinta",
        tamaño: "mediano",
        cantidadFlores: 25,
        colores: ["blanco", "verde"],
        disponible: true,
        masVendido: false,
        nuevo: true,
        oferta: false,
        descripcion: "Ramo de novia estilo rústico con flores de campo y follaje natural.",
        tiempoElaboracion: "4-5 horas"
    },

    // ========== CAJAS SORPRESA ==========
    {
        id: 14,
        nombre: "Caja Sorpresa de Rosas",
        precio: 480,
        imagen: "/img/arreglos/cajasorpresa.jpg",
        categoria: "regalos",
        subcategoria: "cajas-sorpresa",
        ocasiones: ["cumpleaños", "aniversario", "san-valentin"],
        estilo: "romantico",
        empaque: "en-caja",
        tamaño: "mediano",
        cantidadFlores: 18,
        colores: ["rojo", "rosa"],
        disponible: true,
        masVendido: true,
        nuevo: false,
        oferta: false,
        descripcion: "Hermosa caja sorpresa con rosas frescas y detalles especiales.",
        tiempoElaboracion: "3-4 horas"
    },
    {
        id: 15,
        nombre: "Caja Sorpresa Premium",
        precio: 650,
        imagen: "/img/arreglos/cajasorpresa1.jpeg",
        categoria: "regalos",
        subcategoria: "cajas-sorpresa",
        ocasiones: ["san-valentin", "aniversario"],
        estilo: "lujo",
        empaque: "en-caja",
        tamaño: "grande",
        cantidadFlores: 24,
        colores: ["rojo", "rosa", "blanco"],
        disponible: true,
        masVendido: false,
        nuevo: true,
        oferta: false,
        descripcion: "Caja sorpresa premium con rosas, chocolates finos y detalles personalizados.",
        tiempoElaboracion: "4-5 horas",
        premium: true
    },

    // ========== CENTROS DE MESA ==========
    {
        id: 16,
        nombre: "Centro de Mesa para Bodas",
        precio: 650,
        imagen: "/img/arreglos/centrodemesa.webp",
        categoria: "centros-mesa",
        subcategoria: "bodas",
        ocasiones: ["bodas"],
        estilo: "elegante",
        empaque: "base-cristal",
        tamaño: "grande",
        cantidadFlores: 25,
        colores: ["blanco", "rosa"],
        disponible: true,
        masVendido: true,
        nuevo: false,
        oferta: false,
        descripcion: "Elegante centro de mesa con rosas y flores complementarias.",
        tiempoElaboracion: "4-5 horas"
    },
    {
        id: 17,
        nombre: "Centro de Mesa Moderno",
        precio: 580,
        imagen: "/img/arreglos/centro-moderno.jpg",
        categoria: "centros-mesa",
        subcategoria: "modernos",
        ocasiones: ["eventos-corporativos", "bodas"],
        estilo: "moderno",
        empaque: "base-metal",
        tamaño: "mediano",
        cantidadFlores: 20,
        colores: ["blanco", "verde"],
        disponible: true,
        masVendido: false,
        nuevo: true,
        oferta: false,
        descripcion: "Diseño contemporáneo con flores y follaje minimalista.",
        tiempoElaboracion: "3-4 horas"
    },

    // ========== DECORACIÓN PARA EVENTOS ==========
    {
        id: 18,
        nombre: "Decoración Completa para Bodas",
        precio: 3500,
        imagen: "/img/arreglos/decoraciondebodas.jpg",
        categoria: "eventos",
        subcategoria: "bodas",
        ocasiones: ["bodas"],
        estilo: "elegante",
        empaque: "varios",
        tamaño: "extra-grande",
        cantidadFlores: 120,
        colores: ["blanco", "rosa"],
        disponible: true,
        masVendido: true,
        nuevo: false,
        oferta: false,
        descripcion: "Paquete completo de decoración floral para bodas (incluye iglesia y salón).",
        tiempoElaboracion: "24-48 horas",
        premium: true
    },
    {
        id: 19,
        nombre: "Decoración para XV Años",
        precio: 2800,
        imagen: "/img/arreglos/decoracion-xv.jpg",
        categoria: "eventos",
        subcategoria: "xv-anos",
        ocasiones: ["xv-anos"],
        estilo: "elegante",
        empaque: "varios",
        tamaño: "extra-grande",
        cantidadFlores: 80,
        colores: ["rosa", "dorado"],
        disponible: true,
        masVendido: false,
        nuevo: true,
        oferta: false,
        descripcion: "Decoración completa para XV años con flores frescas y detalles dorados.",
        tiempoElaboracion: "18-24 horas"
    },
    {
        id: 20,
        nombre: "Decoración para Baby Shower",
        precio: 2200,
        imagen: "/img/arreglos/decoracion-baby.jpg",
        categoria: "eventos",
        subcategoria: "baby-shower",
        ocasiones: ["baby-shower"],
        estilo: "moderno",
        empaque: "varios",
        tamaño: "grande",
        cantidadFlores: 60,
        colores: ["azul", "rosa", "blanco"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: true,
        descripcion: "Kit completo para baby shower incluye centros de mesa y decoración de mesa principal.",
        tiempoElaboracion: "12-18 horas"
    },

    // ========== REGALOS ESPECIALES ==========
    {
        id: 21,
        nombre: "Combo Flores + Chocolates",
        precio: 550,
        imagen: "/img/arreglos/flores-chocolates.jpg",
        categoria: "regalos",
        subcategoria: "combos",
        ocasiones: ["san-valentin", "aniversario", "cumpleaños"],
        estilo: "romantico",
        empaque: "caja-regalo",
        tamaño: "mediano",
        cantidadFlores: 12,
        colores: ["rojo", "rosa"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: true,
        descripcion: "Deliciosa combinación de flores frescas y chocolates finos.",
        tiempoElaboracion: "3-4 horas"
    },
    {
        id: 22,
        nombre: "Arreglo con Peluche",
        precio: 600,
        imagen: "/img/arreglos/flores-peluche.jpg",
        categoria: "regalos",
        subcategoria: "combos",
        ocasiones: ["san-valentin", "cumpleaños"],
        estilo: "infantil",
        empaque: "papel-regalo",
        tamaño: "grande",
        cantidadFlores: 24,
        colores: ["rosa", "blanco"],
        disponible: true,
        masVendido: false,
        nuevo: true,
        oferta: false,
        descripcion: "Adorable combinación de flores y peluche, ideal para regalar.",
        tiempoElaboracion: "4-5 horas"
    },
    {
        id: 23,
        nombre: "Flores + Vino Espumoso",
        precio: 750,
        imagen: "/img/arreglos/flores-vino.jpg",
        categoria: "regalos",
        subcategoria: "combos",
        ocasiones: ["aniversario", "cumpleaños"],
        estilo: "elegante",
        empaque: "caja-premium",
        tamaño: "grande",
        cantidadFlores: 18,
        colores: ["rojo", "blanco"],
        disponible: true,
        masVendido: false,
        nuevo: true,
        oferta: false,
        descripcion: "Exquisita combinación de flores y vino espumoso para celebraciones.",
        tiempoElaboracion: "4-5 horas"
    },

    // ========== OCASIONES ESPECIALES ==========
    {
        id: 24,
        nombre: "Arreglo San Valentín Premium",
        precio: 850,
        imagen: "/img/arreglos/san-valentin.jpg",
        categoria: "ocasiones",
        subcategoria: "san-valentin",
        ocasiones: ["san-valentin"],
        estilo: "romantico",
        empaque: "caja-lujo",
        tamaño: "grande",
        cantidadFlores: 36,
        colores: ["rojo", "rosa"],
        disponible: true,
        masVendido: true,
        nuevo: false,
        oferta: false,
        descripcion: "Exclusivo arreglo para San Valentín con rosas rojas premium.",
        tiempoElaboracion: "5-6 horas"
    },
    {
        id: 25,
        nombre: "Ramo Día de la Madre",
        precio: 450,
        imagen: "/img/arreglos/dia-madre.jpg",
        categoria: "ocasiones",
        subcategoria: "dia-madre",
        ocasiones: ["dia-madre"],
        estilo: "tradicional",
        empaque: "papel-coreano",
        tamaño: "mediano",
        cantidadFlores: 24,
        colores: ["rosa", "blanco"],
        disponible: true,
        masVendido: false,
        nuevo: true,
        oferta: false,
        descripcion: "Especial para mamá, con las flores más frescas y hermosas.",
        tiempoElaboracion: "3-4 horas"
    },
    {
        id: 26,
        nombre: "Arreglo de Condolencias",
        precio: 720,
        imagen: "/img/arreglos/condolencias.jpg",
        categoria: "ocasiones",
        subcategoria: "condolencias",
        ocasiones: ["condolencias"],
        estilo: "sobrio",
        empaque: "en-florero",
        tamaño: "grande",
        cantidadFlores: 40,
        colores: ["blanco"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: false,
        descripcion: "Arreglo floral de condolencias con flores blancas.",
        tiempoElaboracion: "4-6 horas"
    },

    // ========== PLANTAS Y JARDINERÍA ==========
    {
        id: 27,
        nombre: "Orquídea en Maceta",
        precio: 350,
        imagen: "/img/arreglos/orquidea.jpg",
        categoria: "plantas",
        subcategoria: "orquideas",
        ocasiones: ["dia-madre", "aniversario"],
        estilo: "elegante",
        empaque: "maceta-ceramica",
        tamaño: "mediano",
        cantidadFlores: 1,
        colores: ["blanco", "rosa", "morado"],
        disponible: true,
        masVendido: true,
        nuevo: false,
        oferta: false,
        descripcion: "Hermosa orquídea en maceta de cerámica, duradera y elegante.",
        tiempoElaboracion: "1-2 horas",
        tipoPlanta: "orquidea-phalaenopsis"
    },
    {
        id: 28,
        nombre: "Kit Suculentas",
        precio: 280,
        imagen: "/img/arreglos/suculentas.jpg",
        categoria: "plantas",
        subcategoria: "suculentas",
        ocasiones: ["cumpleaños", "graduaciones"],
        estilo: "moderno",
        empaque: "caja-madera",
        tamaño: "pequeño",
        cantidadFlores: 3,
        colores: ["verde"],
        disponible: true,
        masVendido: false,
        nuevo: true,
        oferta: false,
        descripcion: "Tres suculentas diferentes en arreglo decorativo.",
        tiempoElaboracion: "2-3 horas",
        tipoPlanta: "suculentas-variadas"
    },
    {
        id: 29,
        nombre: "Bonsái Decorativo",
        precio: 500,
        imagen: "/img/arreglos/bonsai.jpg",
        categoria: "plantas",
        subcategoria: "bonsais",
        ocasiones: ["aniversario", "eventos-corporativos"],
        estilo: "minimalista",
        empaque: "maceta-ceramica",
        tamaño: "pequeño",
        cantidadFlores: 0,
        colores: ["verde"],
        disponible: true,
        masVendido: false,
        nuevo: true,
        oferta: false,
        descripcion: "Hermoso bonsái para decoración de interiores.",
        tiempoElaboracion: "1-2 horas",
        tipoPlanta: "ficus-bonsai"
    },

    // ========== ARREGLOS TEMPORADA ==========
    {
        id: 30,
        nombre: "Centro de Mesa Navideño",
        precio: 720,
        imagen: "/img/arreglos/navidad.jpg",
        categoria: "temporada",
        subcategoria: "navidad",
        ocasiones: ["navidad"],
        estilo: "tradicional",
        empaque: "base-madera",
        tamaño: "grande",
        cantidadFlores: 15,
        colores: ["rojo", "blanco", "verde"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: false,
        descripcion: "Arreglo festivo con flores de temporada y detalles navideños.",
        tiempoElaboracion: "5-6 horas"
    },
    {
        id: 31,
        nombre: "Arreglo de Pascua",
        precio: 450,
        imagen: "/img/arreglos/pascua.jpg",
        categoria: "temporada",
        subcategoria: "pascua",
        ocasiones: ["pascua"],
        estilo: "colorido",
        empaque: "canasta",
        tamaño: "mediano",
        cantidadFlores: 12,
        colores: ["amarillo", "blanco", "verde"],
        disponible: true,
        masVendido: false,
        nuevo: true,
        oferta: false,  
        descripcion: "Colorido arreglo primaveral para celebrar la Pascua.",
        tiempoElaboracion: "3-4 horas"
    }
];
// Configuración de filtros disponibles (Actualizada)
const filtrosDisponibles = {
    categorias: [
        { valor: "todos", nombre: "Todos los productos" },
        { valor: "ramos", nombre: "Ramos de Flores" },
        { valor: "eventos", nombre: "Decoración para Eventos" },
        { valor: "centros-mesa", nombre: "Centros de Mesa" },
        { valor: "regalos", nombre: "Regalos Personalizados" },
        { valor: "ocasiones", nombre: "Ocasiones Especiales" },
        { valor: "plantas", nombre: "Plantas y Jardinería" }
    ],
    ocasiones: [
        { valor: "todas", nombre: "Todas las ocasiones" },
        { valor: "cumpleaños", nombre: "Cumpleaños" },
        { valor: "aniversario", nombre: "Aniversario" },
        { valor: "san-valentin", nombre: "San Valentín" },
        { valor: "dia-madre", nombre: "Día de la Madre" },
        { valor: "graduaciones", nombre: "Graduaciones" },
        { valor: "bodas", nombre: "Bodas" },
        { valor: "xv-anos", nombre: "XV Años" },
        { valor: "baby-shower", nombre: "Baby Shower" },
        { valor: "condolencias", nombre: "Condolencias" },
        { valor: "navidad", nombre: "Navidad" }
    ],
    estilos: [
        { valor: "todos", nombre: "Todos los estilos" },
        { valor: "buchon", nombre: "Buchón" },
        { valor: "elegante", nombre: "Elegante" },
        { valor: "moderno", nombre: "Moderno" },
        { valor: "romantico", nombre: "Romántico" },
        { valor: "colorido", nombre: "Colorido" },
        { valor: "tradicional", nombre: "Tradicional" },
        { valor: "sobrio", nombre: "Sobrio" }
    ],
    empaques: [
        { valor: "todos", nombre: "Todos los empaques" },
        { valor: "papel-coreano", nombre: "Papel coreano" },
        { valor: "en-caja", nombre: "En caja" },
        { valor: "base-cristal", nombre: "Base de cristal" },
        { valor: "en-florero", nombre: "En florero" },
        { valor: "con-moño-personalizado", nombre: "Con moño" },
        { valor: "caja-regalo", nombre: "Caja regalo" },
        { valor: "maceta-ceramica", nombre: "Maceta cerámica" }
    ],
    tamaños: [
        { valor: "todos", nombre: "Todos los tamaños" },
        { valor: "pequeño", nombre: "Pequeño" },
        { valor: "mini", nombre: "Mini (6 rosas)" },
        { valor: "mediano", nombre: "Mediano (12-18)" },
        { valor: "grande", nombre: "Grande (24-36)" },
        { valor: "extra-grande", nombre: "Extra grande (50+)" }
    ],
    precios: [
        { valor: "todos", nombre: "Todos los precios" },
        { valor: "0-500", nombre: "Menos de $500" },
        { valor: "500-1000", nombre: "$500 - $1,000" },
        { valor: "1000-2000", nombre: "$1,000 - $2,000" },
        { valor: "2000+", nombre: "Más de $2,000" }
    ],
    ordenamiento: [
        { valor: "populares", nombre: "Más populares" },
        { valor: "precio-menor", nombre: "Precio: Menor a mayor" },
        { valor: "precio-mayor", nombre: "Precio: Mayor a menor" },
        { valor: "recientes", nombre: "Más recientes" }
    ]
};

function obtenerTodosLosProductos() {
    return productosFloristeria;
}

function filtrarProductos(filtros = {}) {
    let productosFiltrados = [...productosFloristeria];

    if (filtros.categoria && filtros.categoria !== 'todos') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.categoria === filtros.categoria
        );
    }

    if (filtros.subcategoria && filtros.subcategoria !== 'todas') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.subcategoria === filtros.subcategoria
        );
    }

    if (filtros.ocasion && filtros.ocasion !== 'todas') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.ocasiones.includes(filtros.ocasion)
        );
    }

    if (filtros.estilo && filtros.estilo !== 'todos') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.estilo === filtros.estilo
        );
    }

    if (filtros.empaque && filtros.empaque !== 'todos') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.empaque === filtros.empaque
        );
    }

    if (filtros.tamaño && filtros.tamaño !== 'todos') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.tamaño === filtros.tamaño
        );
    }

    if (filtros.precio && filtros.precio !== 'todos') {
        const [min, max] = filtros.precio.split('-');
        productosFiltrados = productosFiltrados.filter(producto => {
            if (max === '+') {
                return producto.precio >= parseInt(min);
            }
            return producto.precio >= parseInt(min) && producto.precio <= parseInt(max);
        });
    }

    productosFiltrados = productosFiltrados.filter(producto => producto.disponible);

    return productosFiltrados;
}

function ordenarProductos(productos, criterio = 'populares') {
    const productosOrdenados = [...productos];

    switch (criterio) {
        case 'populares':
            return productosOrdenados.sort((a, b) => {
                if (a.masVendido && !b.masVendido) return -1;
                if (!a.masVendido && b.masVendido) return 1;
                return b.id - a.id;
            });

        case 'precio-menor':
            return productosOrdenados.sort((a, b) => a.precio - b.precio);

        case 'precio-mayor':
            return productosOrdenados.sort((a, b) => b.precio - a.precio);

        case 'recientes':
            return productosOrdenados.sort((a, b) => {
                if (a.nuevo && !b.nuevo) return -1;
                if (!a.nuevo && b.nuevo) return 1;
                return b.id - a.id;
            });

        default:
            return productosOrdenados;
    }
}

function buscarProductos(textoBusqueda) {
    if (!textoBusqueda || textoBusqueda.trim() === '') {
        return productosFloristeria;
    }

    const texto = textoBusqueda.toLowerCase();
    return productosFloristeria.filter(producto => 
        producto.nombre.toLowerCase().includes(texto) ||
        producto.descripcion.toLowerCase().includes(texto) ||
        producto.colores.some(color => color.includes(texto)) ||
        producto.ocasiones.some(ocasion => ocasion.includes(texto))
    );
}

function obtenerProductosRecomendados(limit = 8) {
    const recomendados = productosFloristeria
        .filter(producto => producto.disponible)
        .sort((a, b) => {
            if (a.masVendido && !b.masVendido) return -1;
            if (!a.masVendido && b.masVendido) return 1;
            if (a.nuevo && !b.nuevo) return -1;
            if (!a.nuevo && b.nuevo) return 1;
            return 0;
        });

    return recomendados.slice(0, limit);
}

if (typeof window !== 'undefined') {
    window.FloreriaData = {
        productos: productosFloristeria,
        filtros: filtrosDisponibles,
        obtenerTodosLosProductos,
        filtrarProductos,
        ordenarProductos,
        buscarProductos,
        obtenerProductosRecomendados
    };
}