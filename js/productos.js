// Base de datos de productos - Florería Lili's
// Estructura de datos para el sistema de recomendaciones dinámico

const productosFloristeria = [
    // Ramos Buchón
    {
        id: 1,
        nombre: "Ramo Buchón de 6 Rosas",
        precio: 250,
        imagen: "/img/arreglos/ramobuchon.jpg",
        categoria: "ramo",
        ocasiones: ["cumpleaños", "aniversario", "san-valentin"],
        estilo: "ramo-buchon",
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
        nombre: "Ramo Buchón de 12 Rosas",
        precio: 350,
        imagen: "/img/arreglos/ramodetulipanes.jpg",
        categoria: "ramo",
        ocasiones: ["cumpleaños", "aniversario", "san-valentin", "dia-madres"],
        estilo: "ramo-buchon",
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
        nombre: "Ramo Buchón de 18 Rosas",
        precio: 550,
        imagen: "/img/arreglos/ramodenubes.jpeg",
        categoria: "ramo",
        ocasiones: ["aniversario", "san-valentin", "bodas"],
        estilo: "ramo-buchon",
        empaque: "papel-coreano",
        tamaño: "mediano",
        cantidadFlores: 18,
        colores: ["rojo", "rosa", "blanco"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: true,
        descripcion: "Impresionante ramo buchón de 18 rosas con empaque especial.",
        tiempoElaboracion: "4-5 horas"
    },
    {
        id: 4,
        nombre: "Ramo Buchón de 24 Rosas",
        precio: 700,
        imagen: "/img/arreglos/cajasorpresa.jpg",
        categoria: "ramo",
        ocasiones: ["aniversario", "san-valentin", "bodas", "graduaciones"],
        estilo: "ramo-buchon",
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
        id: 5,
        nombre: "Ramo Buchón de 36 Rosas",
        precio: 1000,
        imagen: "/img/arreglos/centrodemesa.webp",
        categoria: "ramo",
        ocasiones: ["aniversario", "san-valentin", "bodas"],
        estilo: "ramo-buchon",
        empaque: "base-cristal",
        tamaño: "grande",
        cantidadFlores: 36,
        colores: ["rojo", "rosa", "blanco"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: false,
        descripcion: "Espectacular ramo buchón de 36 rosas con base de cristal.",
        tiempoElaboracion: "6-7 horas"
    },
    {
        id: 6,
        nombre: "Ramo Buchón de 50 Rosas",
        precio: 1300,
        imagen: "/img/arreglos/ramoderosasclasico.jpeg",
        categoria: "ramo",
        ocasiones: ["aniversario", "san-valentin", "bodas", "dia-madres"],
        estilo: "ramo-buchon",
        empaque: "papel-coreano",
        tamaño: "extra-grande",
        cantidadFlores: 50,
        colores: ["rojo", "rosa", "blanco"],
        disponible: true,
        masVendido: false,
        nuevo: true,
        oferta: false,
        descripcion: "Magnífico ramo buchón de 50 rosas, el regalo perfecto para ocasiones especiales.",
        tiempoElaboracion: "7-8 horas"
    },
    {
        id: 7,
        nombre: "Ramo Buchón de 75 Rosas",
        precio: 1900,
        imagen: "/img/arreglos/ramodegirasoles.jpg",
        categoria: "ramo",
        ocasiones: ["aniversario", "san-valentin", "bodas"],
        estilo: "ramo-buchon",
        empaque: "en-florero",
        tamaño: "extra-grande",
        cantidadFlores: 75,
        colores: ["rojo", "rosa", "blanco"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: false,
        descripcion: "Impresionante ramo buchón de 75 rosas en florero elegante.",
        tiempoElaboracion: "8-10 horas"
    },
    {
        id: 8,
        nombre: "Ramo Buchón de 100 Rosas",
        precio: 2250,
        imagen: "/img/arreglos/decoraciondebodas.jpg",
        categoria: "ramo",
        ocasiones: ["aniversario", "san-valentin", "bodas"],
        estilo: "ramo-buchon",
        empaque: "con-moño-personalizado",
        tamaño: "extra-grande",
        cantidadFlores: 100,
        colores: ["rojo", "rosa", "blanco"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: false,
        descripcion: "El ramo más impresionante: 100 rosas con moño personalizado. Premium.",
        tiempoElaboracion: "10-12 horas",
        premium: true
    },
    // Ramos de diferentes tipos de flores
    {
        id: 9,
        nombre: "Ramo de Girasoles",
        precio: 380,
        imagen: "/img/arreglos/ramodegirasoles.jpg",
        categoria: "ramo",
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
        id: 10,
        nombre: "Ramo de Tulipanes",
        precio: 420,
        imagen: "/img/arreglos/ramodetulipanes.jpg",
        categoria: "ramo",
        ocasiones: ["cumpleaños", "aniversario", "dia-madres"],
        estilo: "ramo-elegante",
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
        id: 11,
        nombre: "Ramo de Claveles",
        precio: 280,
        imagen: "/img/arreglos/ramodeclaveles.jpg",
        categoria: "ramo",
        ocasiones: ["dia-madres", "cumpleaños", "graduaciones"],
        estilo: "ramo-clasico",
        empaque: "papel-coreano",
        tamaño: "mediano",
        cantidadFlores: 20,
        colores: ["rosa", "rojo", "blanco"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: true,
        descripcion: "Tradicional ramo de claveles, perfecto para el Día de las Madres.",
        tiempoElaboracion: "2-3 horas"
    },
    // Centros de mesa
    {
        id: 12,
        nombre: "Centro de Mesa Elegante",
        precio: 650,
        imagen: "/img/arreglos/centrodemesa.webp",
        categoria: "centro-mesa",
        ocasiones: ["bodas", "aniversario", "eventos-corporativos"],
        estilo: "decoracion-para-mesa",
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
    // Cajas sorpresa
    {
        id: 13,
        nombre: "Caja Sorpresa con Rosas",
        precio: 480,
        imagen: "/img/arreglos/cajasorpresa.jpg",
        categoria: "caja-sorpresa",
        ocasiones: ["cumpleaños", "aniversario", "san-valentin"],
        estilo: "caja-sorpresa",
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
    // Arreglos para bodas
    {
        id: 14,
        nombre: "Decoración de Bodas",
        precio: 1500,
        imagen: "/img/arreglos/decoraciondebodas.jpg",
        categoria: "decoracion-evento",
        ocasiones: ["bodas"],
        estilo: "ramo-elegante",
        empaque: "con-moño-personalizado",
        tamaño: "extra-grande",
        cantidadFlores: 80,
        colores: ["blanco", "rosa"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: false,
        descripcion: "Paquete completo de decoración floral para bodas.",
        tiempoElaboracion: "12-24 horas"
    },
    {
        id: 15,
        nombre: "Ramo de Bodas Clásico",
        precio: 850,
        imagen: "/img/arreglos/ramodebodas.webp",
        categoria: "ramo",
        ocasiones: ["bodas"],
        estilo: "ramo-elegante",
        empaque: "con-moño-personalizado",
        tamaño: "grande",
        cantidadFlores: 30,
        colores: ["blanco"],
        disponible: true,
        masVendido: false,
        nuevo: false,
        oferta: false,
        descripcion: "Ramo de novia clásico con rosas blancas y detalles elegantes.",
        tiempoElaboracion: "5-6 horas"
    },
    // Arreglos fúnebres
    {
        id: 16,
        nombre: "Arreglo de Condolencias",
        precio: 720,
        imagen: "/img/arreglos/ramoderosasclasico.jpeg",
        categoria: "funebre",
        ocasiones: ["condolencias"],
        estilo: "ramo-clasico",
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
    }
];

// Configuración de filtros disponibles
const filtrosDisponibles = {
    ocasiones: [
        { valor: "todas", nombre: "Todas las ocasiones" },
        { valor: "cumpleaños", nombre: "Cumpleaños" },
        { valor: "aniversario", nombre: "Aniversario" },
        { valor: "san-valentin", nombre: "San Valentín" },
        { valor: "dia-madres", nombre: "Día de las Madres" },
        { valor: "graduaciones", nombre: "Graduaciones" },
        { valor: "bodas", nombre: "Bodas" },
        { valor: "condolencias", nombre: "Condolencias" }
    ],
    estilos: [
        { valor: "todos", nombre: "Todos los estilos" },
        { valor: "ramo-buchon", nombre: "Ramo buchón" },
        { valor: "ramo-clasico", nombre: "Ramo clásico" },
        { valor: "ramo-elegante", nombre: "Ramo elegante" },
        { valor: "colorido", nombre: "Colorido" },
        { valor: "caja-sorpresa", nombre: "Caja sorpresa" },
        { valor: "decoracion-para-mesa", nombre: "Decoración para mesa" }
    ],
    empaques: [
        { valor: "todos", nombre: "Todos los empaques" },
        { valor: "papel-coreano", nombre: "Papel coreano" },
        { valor: "en-caja", nombre: "En caja" },
        { valor: "base-cristal", nombre: "Base de cristal" },
        { valor: "en-florero", nombre: "En florero" },
        { valor: "con-moño-personalizado", nombre: "Con moño personalizado" },
        { valor: "con-peluche-globo", nombre: "Con peluche/globo" }
    ],
    tamaños: [
        { valor: "todos", nombre: "Todos los tamaños" },
        { valor: "mini", nombre: "Mini (6 rosas)" },
        { valor: "mediano", nombre: "Mediano (12-18)" },
        { valor: "grande", nombre: "Grande (24-36)" },
        { valor: "extra-grande", nombre: "Extra grande (50+)" }
    ],
    ordenamiento: [
        { valor: "populares", nombre: "Más populares" },
        { valor: "precio-menor", nombre: "Precio: Menor a mayor" },
        { valor: "precio-mayor", nombre: "Precio: Mayor a menor" },
        { valor: "recientes", nombre: "Más recientes" }
    ]
};

// Función para obtener todos los productos
function obtenerTodosLosProductos() {
    return productosFloristeria;
}

// Función para filtrar productos
function filtrarProductos(filtros = {}) {
    let productosFiltrados = [...productosFloristeria];

    // Filtrar por ocasión
    if (filtros.ocasion && filtros.ocasion !== 'todas') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.ocasiones.includes(filtros.ocasion)
        );
    }

    // Filtrar por estilo
    if (filtros.estilo && filtros.estilo !== 'todos') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.estilo === filtros.estilo
        );
    }

    // Filtrar por empaque
    if (filtros.empaque && filtros.empaque !== 'todos') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.empaque === filtros.empaque
        );
    }

    // Filtrar por tamaño
    if (filtros.tamaño && filtros.tamaño !== 'todos') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.tamaño === filtros.tamaño
        );
    }

    // Filtrar por disponibilidad
    productosFiltrados = productosFiltrados.filter(producto => producto.disponible);

    return productosFiltrados;
}

// Función para ordenar productos
function ordenarProductos(productos, criterio = 'populares') {
    const productosOrdenados = [...productos];

    switch (criterio) {
        case 'populares':
            return productosOrdenados.sort((a, b) => {
                if (a.masVendido && !b.masVendido) return -1;
                if (!a.masVendido && b.masVendido) return 1;
                return b.id - a.id; // Más recientes primero como criterio secundario
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

// Función para buscar productos por texto
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

// Función para obtener productos recomendados
function obtenerProductosRecomendados(limit = 8) {
    // Priorizar productos más vendidos y nuevos
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

// Exportar las funciones para uso global
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
