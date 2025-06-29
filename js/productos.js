// Base de datos de productos - Florería Lili's
// Base de datos de productos - Florería Lili's (Versión Mejorada)
const productosFloristeria = [
    // ========== RAMOS DE FLORES ==========
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
        colores: ["rojo", "rosa"],
        disponible: true,
        masVendido: true,
        nuevo: false,
        oferta: false,
        descripcion: "Hermoso ramo buchón de 6 rosas frescas, perfecto para ocasiones especiales.",
        tiempoElaboracion: "2-3 horas"
    },
    {
        id: 2,
        nombre: "Ramo de Girasoles Medianos",
        precio: 380,
        imagen: "/img/arreglos/ramodegirasoles.jpg",
        categoria: "ramos",
        subcategoria: "girasoles",
        ocasiones: ["cumpleaños", "graduaciones", "dia-madres"],
        estilo: "colorido",
        empaque: "papel-coreano",
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
        id: 3,
        nombre: "Ramo de Tulipanes Elegantes",
        precio: 420,
        imagen: "/img/arreglos/ramodetulipanes.jpg",
        categoria: "ramos",
        subcategoria: "tulipanes",
        ocasiones: ["cumpleaños", "aniversario", "dia-madres"],
        estilo: "elegante",
        empaque: "papel-coreano",
        tamaño: "mediano",
        cantidadFlores: 15,
        colores: ["rosa", "blanco", "rojo"],
        disponible: true,
        masVendido: false,
        nuevo: true,
        oferta: false,
        descripcion: "Delicado ramo de tulipanes importados, símbolo de elegancia.",
        tiempoElaboracion: "3-4 horas"
    },
    {
        id: 4,
        nombre: "Ramo Mixto Primaveral",
        precio: 350,
        imagen: "/img/arreglos/ramospersonalizados.jpeg",
        categoria: "ramos",
        subcategoria: "mixtos",
        ocasiones: ["cumpleaños", "aniversario", "dia-madres"],
        estilo: "colorido",
        empaque: "papel-coreano",
        tamaño: "mediano",
        cantidadFlores: 18,
        colores: ["rosa", "blanco", "amarillo"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: true,
        descripcion: "Variedad de flores de temporada en un arreglo vibrante.",
        tiempoElaboracion: "3-4 horas"
    },

    // ========== DECORACIÓN PARA EVENTOS ==========
    {
        id: 5,
        nombre: "Paquete Bodas Premium",
        precio: 3500,
        imagen: "/img/eventos/bodas-premium.jpg",
        categoria: "eventos",
        subcategoria: "bodas",
        ocasiones: ["bodas"],
        estilo: "elegante",
        empaque: "personalizado",
        tamaño: "extra-grande",
        cantidadFlores: 120,
        colores: ["blanco", "rosa"],
        disponible: true,
        masVendido: true,
        nuevo: false,
        oferta: false,
        descripcion: "Paquete completo para bodas incluye ramo novia, centros de mesa y decoración de iglesia.",
        tiempoElaboracion: "24-48 horas",
        premium: true
    },
    {
        id: 6,
        nombre: "Arreglo para XV Años",
        precio: 2800,
        imagen: "/img/eventos/xv-anos.jpg",
        categoria: "eventos",
        subcategoria: "xv-anos",
        ocasiones: ["xv-anos"],
        estilo: "elegante",
        empaque: "base-cristal",
        tamaño: "extra-grande",
        cantidadFlores: 80,
        colores: ["rosa", "blanco"],
        disponible: true,
        masVendido: false,
        nuevo: true,
        oferta: false,
        descripcion: "Arreglo floral especial para XV años con detalles dorados.",
        tiempoElaboracion: "18-24 horas"
    },
    {
        id: 7,
        nombre: "Decoración Baby Shower",
        precio: 2200,
        imagen: "/img/eventos/baby-shower.jpg",
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

    // ========== CENTROS DE MESA ==========
    {
        id: 8,
        nombre: "Centro de Mesa para Bodas",
        precio: 650,
        imagen: "/img/centros/centro",
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
        id: 9,
        nombre: "Centro de Mesa Moderno",
        precio: 580,
        imagen: "/img/centros/moderno.jpg",
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
    {
        id: 10,
        nombre: "Centro de Mesa Navideño",
        precio: 720,
        imagen: "/img/centros/navidad.jpg",
        categoria: "centros-mesa",
        subcategoria: "temporada",
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

    // ========== REGALOS PERSONALIZADOS ==========
    {
        id: 11,
        nombre: "Caja Sorpresa con Rosas",
        precio: 480,
        imagen: "/img/regalos/caja-sorpresa.jpg",
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
        id: 12,
        nombre: "Combo Flores + Chocolates",
        precio: 550,
        imagen: "/img/regalos/flores-chocolates.jpg",
        categoria: "regalos",
        subcategoria: "flores-chocolates",
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
        id: 13,
        nombre: "Arreglo con Peluche",
        precio: 600,
        imagen: "/img/regalos/flores-peluche.jpg",
        categoria: "regalos",
        subcategoria: "flores-peluche",
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

    // ========== OCASIONES ESPECIALES ==========
    {
        id: 14,
        nombre: "Arreglo San Valentín Premium",
        precio: 850,
        imagen: "/img/ocasiones/san-valentin.jpg",
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
        id: 15,
        nombre: "Ramo Día de la Madre",
        precio: 450,
        imagen: "/img/ocasiones/dia-madre.jpg",
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
        id: 16,
        nombre: "Arreglo de Condolencias",
        precio: 720,
        imagen: "/img/ocasiones/condolencias.jpg",
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
        id: 17,
        nombre: "Orquídea en Maceta",
        precio: 350,
        imagen: "/img/plantas/orquidea.jpg",
        categoria: "plantas",
        subcategoria: "orquideas",
        ocasiones: ["dia-madre"],
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
        id: 18,
        nombre: "Kit Suculentas",
        precio: 280,
        imagen: "/img/plantas/suculentas.jpg",
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