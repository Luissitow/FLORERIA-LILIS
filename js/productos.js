// Base de datos de productos - Florería Lili's
    // Base de datos de productos - Florería Lili's (Versión Mejorada)
    const productosFloristeria = [
        // ========== RAMOS DE ROSAS ==========
        {
            id: 1,
            nombre: "Ramo Buchón de 6 Rosas",
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
            id: 4,
            nombre: "Ramo Clásico de Rosas",
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
            nombre: "Ramo de Tulipanes Mixtos",
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

        // ========== RAMOS DE GIRASOLES ==========
        {
            id: 7,
            nombre: "Ramo de Girasoles",
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

        // ========== RAMOS DE GERBERAS ==========
        {
            id: 9,
            nombre: "Ramo de Gerberas Brillantes",
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
            nombre: "Ramo Personalizado",
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

        // ========== CAJAS SORPRESA ==========
        {
            id: 15,
            nombre: "Caja Sorpresa",
            imagen: "/img/arreglos/cajasorpresa2.jpeg",
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
            imagen: "/img/arreglos/centrodemesamoderno.jpeg",
            categoria: "centros-mesa",
            subcategoria: "modernos",
            ocasiones: ["eventos-corporativos"],
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
            imagen: "/img/arreglos/decoracion15anos.jpeg",
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
            imagen: "/img/arreglos/decoracionbabyshower.jpeg",
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
            imagen: "/img/arreglos/floresconchocolates.png",
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
            imagen: "/img/arreglos/floresconpeluche.jpg",
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
            imagen: "/img/arreglos/cajasorpresaconvino.jpeg",
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
            nombre: "Arreglo San Valentín",
            imagen: "/img/arreglos/arregloositosanvalentin.jpeg",
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
            imagen: "/img/arreglos/regalodiadelasmadres.jpeg",
            categoria: "ocasiones",
            subcategoria: "dia-madres",
            ocasiones: ["dia-madres"],
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
            id: 32,
            nombre: "Caja Sorpresa para mamá",
            imagen: "/img/arreglos/cajasorpresamama.jpeg",
            categoria: "regalos",
            subcategoria: "cajas-sorpresa",
            ocasiones: ["dia-madres"],
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
        {
            id: 26,
            nombre: "Arreglo de Condolencias",
            imagen: "/img/arreglos/regalodecondolencias.jpg",
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
        {
            id: 26,
            nombre: "Caja Sorpresa de Graduación",
            imagen: "/img/arreglos/cajasorpresagraduacion.jpeg",
            categoria: "ocasiones",
            subcategoria: "cajas-sorpresa",
            ocasiones: ["graduaciones"],
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
            id: 29,
            nombre: "Plantas Decorativas",
            imagen: "/img/arreglos/plantasdecorativas.webp",
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
            descripcion: "Plantas para decoración de interiores.",
            tiempoElaboracion: "1-2 horas",
            tipoPlanta: "ficus-bonsai"
        },

        // ========== ARREGLOS TEMPORADA ==========
        {
            id: 30,
            nombre: "Centro de Mesa Navideño",
            imagen: "/img/arreglos/centrodemesanavideño.jpg",
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
            { valor: "dia-madres", nombre: "Día de la Madre" },
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
        ordenamiento: [
            { valor: "populares", nombre: "Más populares" },
            { valor: "recientes", nombre: "Más recientes" }
        ]
    };

function obtenerTodosLosProductos() {
    return productosFloristeria;
}

function filtrarProductos(filtros = {}) {
    let productosFiltrados = [...productosFloristeria];

    console.log('🔧 Iniciando filtrado con:', filtros);

    if (filtros.categoria && filtros.categoria !== 'todos') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.categoria === filtros.categoria
        );
        console.log(`📂 Después de filtrar por categoría "${filtros.categoria}":`, productosFiltrados.length);
    }

    if (filtros.subcategoria && filtros.subcategoria !== 'todas') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.subcategoria === filtros.subcategoria
        );
        console.log(`📁 Después de filtrar por subcategoría "${filtros.subcategoria}":`, productosFiltrados.length);
    }

    if (filtros.ocasion && filtros.ocasion !== 'todas') {
        console.log(`🎉 Filtrando por ocasión: "${filtros.ocasion}"`);
        const antesDelFiltro = productosFiltrados.length;
        productosFiltrados = productosFiltrados.filter(producto => {
            const tieneOcasion = producto.ocasiones.includes(filtros.ocasion);
            if (tieneOcasion) {
                console.log(`✅ "${producto.nombre}" tiene la ocasión "${filtros.ocasion}":`, producto.ocasiones);
            }
            return tieneOcasion;
        });
        console.log(`🎉 Después de filtrar por ocasión "${filtros.ocasion}": ${antesDelFiltro} -> ${productosFiltrados.length}`);
    }

    if (filtros.estilo && filtros.estilo !== 'todos') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.estilo === filtros.estilo
        );
        console.log(`🎨 Después de filtrar por estilo "${filtros.estilo}":`, productosFiltrados.length);
    }

    if (filtros.empaque && filtros.empaque !== 'todos') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.empaque === filtros.empaque
        );
        console.log(`📦 Después de filtrar por empaque "${filtros.empaque}":`, productosFiltrados.length);
    }

    if (filtros.tamaño && filtros.tamaño !== 'todos') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.tamaño === filtros.tamaño
        );
        console.log(`📏 Después de filtrar por tamaño "${filtros.tamaño}":`, productosFiltrados.length);
    }

    productosFiltrados = productosFiltrados.filter(producto => producto.disponible);
    console.log(`✅ Productos disponibles finales:`, productosFiltrados.length);

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
        producto.colores.some(color => color.toLowerCase().includes(texto)) ||
        producto.ocasiones.some(ocasion => ocasion.toLowerCase().includes(texto)) ||
        producto.estilo.toLowerCase().includes(texto)
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

// ========== FUNCIONES DE CONTACTO ==========

// Función para abrir WhatsApp con mensaje predefinido
function abrirWhatsApp(productoNombre = '') {
    const numeroWhatsApp = '5625144257';
    let mensaje = 'Hola me podría dar mas información sobre los arreglos florales';
    
    // Si se especifica un producto, personalizar el mensaje
    if (productoNombre) {
        mensaje = `Hola me podría dar mas información sobre los arreglos florales, específicamente sobre: ${productoNombre}`;
    }
    
    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Crear la URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en una nueva ventana/pestaña
    window.open(urlWhatsApp, '_blank');
}

// Función para cotizar un producto específico
function cotizarProducto(nombreProducto) {
    abrirWhatsApp(nombreProducto);
}

// Función de contacto general
function contactarFloristeria() {
    abrirWhatsApp();
}

// Hacer las funciones disponibles globalmente
if (typeof window !== 'undefined') {
    window.abrirWhatsApp = abrirWhatsApp;
    window.cotizarProducto = cotizarProducto;
    window.contactarFloristeria = contactarFloristeria;
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