// Sistema de filtros dinámicos para la florería - Lili's Florería
// Conecta la base de datos de productos con la interfaz de usuario

class SistemaFiltros {
    constructor() {
        this.productos = [];
        this.filtrosActivos = {
            ocasion: 'todas',
            estilo: 'todos', 
            empaque: 'todos',
            tamaño: 'todos',
            ordenamiento: 'populares'
        };
        this.contenedorProductos = null;
        this.init();
    }

    init() {
        // Esperar a que la base de datos esté disponible
        if (typeof window.FloreriaData === 'undefined') {
            setTimeout(() => this.init(), 100);
            return;
        }
        
        this.productos = window.FloreriaData.productos;
        this.contenedorProductos = document.querySelector('#productos-container');
        
        if (!this.contenedorProductos) {
            console.warn('Contenedor de productos no encontrado');
            return;
        }
        
        this.configurarEventListeners();
        this.mostrarProductosIniciales();
    }

    configurarEventListeners() {
        // Event listeners para todos los dropdowns de filtros
        document.addEventListener('click', (e) => {
            // Manejar clicks en opciones de filtros
            if (e.target.closest('.sort-filter')) {
                const sortFilter = e.target.closest('.sort-filter');
                const dropdown = sortFilter.closest('.dropdown');
                
                if (dropdown) {
                    this.manejarSeleccionFiltro(dropdown, sortFilter);
                }
                
                e.preventDefault();
            }
        });

        // Event listener para búsqueda (si existe)
        const campoBusqueda = document.querySelector('.search-field');
        if (campoBusqueda) {
            campoBusqueda.addEventListener('input', (e) => {
                this.manejarBusqueda(e.target.value);
            });
        }
    }

    manejarSeleccionFiltro(dropdown, sortFilter) {
        const dropdownId = dropdown.querySelector('button').id;
        const textoSeleccionado = sortFilter.querySelector('span').textContent.trim();
        
        // Actualizar el texto del botón dropdown
        const botonTexto = dropdown.querySelector('button .inner') || dropdown.querySelector('button span');
        if (botonTexto) {
            botonTexto.textContent = textoSeleccionado;
        }

        // Actualizar filtros activos basado en el dropdown
        this.actualizarFiltroActivo(dropdownId, textoSeleccionado);
        
        // Aplicar los filtros
        this.aplicarFiltros();

        // Actualizar clases active en el dropdown
        dropdown.querySelectorAll('.sort-filter').forEach(filter => {
            filter.classList.remove('active');
        });
        sortFilter.classList.add('active');
    }

    actualizarFiltroActivo(dropdownId, texto) {
        // Mapear dropdowns a filtros
        const mapeoFiltros = {
            'dropdownOcasion': {
                filtro: 'ocasion',
                mapeo: {
                    'Todas las ocasiones': 'todas',
                    'Cumpleaños': 'cumpleaños',
                    'Aniversario': 'aniversario',
                    'San Valentín': 'san-valentin',
                    'Día de las Madres': 'dia-madres',
                    'Graduaciones': 'graduaciones',
                    'Bodas': 'bodas',
                    'Condolencias': 'condolencias'
                }
            },
            'dropdownEstilo': {
                filtro: 'estilo',
                mapeo: {
                    'Todos los estilos': 'todos',
                    'Ramo buchón': 'ramo-buchon',
                    'Ramo clásico': 'ramo-clasico',
                    'Ramo elegante': 'ramo-elegante',
                    'Colorido': 'colorido',
                    'Caja sorpresa': 'caja-sorpresa',
                    'Decoración para mesa': 'decoracion-para-mesa'
                }
            },
            'dropdownEmpaque': {
                filtro: 'empaque',
                mapeo: {
                    'Todos los empaques': 'todos',
                    'Papel coreano': 'papel-coreano',
                    'En caja': 'en-caja',
                    'Base de cristal': 'base-cristal',
                    'En florero': 'en-florero',
                    'Con moño personalizado': 'con-moño-personalizado',
                    'Con peluche/globo': 'con-peluche-globo'
                }
            },
            'dropdownTamaño': {
                filtro: 'tamaño',
                mapeo: {
                    'Todos los tamaños': 'todos',
                    'Mini (6 rosas)': 'mini',
                    'Mediano (12-18)': 'mediano',
                    'Grande (24-36)': 'grande',
                    'Extra grande (50+)': 'extra-grande'
                }
            },
            'dropdownOrdenar': {
                filtro: 'ordenamiento',
                mapeo: {
                    'Más populares': 'populares',
                    'Precio: Menor a mayor': 'precio-menor',
                    'Precio: Mayor a menor': 'precio-mayor',
                    'Más recientes': 'recientes'
                }
            }
        };

        const configuracion = mapeoFiltros[dropdownId];
        if (configuracion && configuracion.mapeo[texto]) {
            this.filtrosActivos[configuracion.filtro] = configuracion.mapeo[texto];
        }
    }

    manejarBusqueda(textoBusqueda) {
        if (textoBusqueda.trim() === '') {
            this.aplicarFiltros();
        } else {
            const resultados = window.FloreriaData.buscarProductos(textoBusqueda);
            this.mostrarProductos(resultados);
        }
    }

    aplicarFiltros() {
        // 1. Filtrar productos según los filtros activos
        let productosFiltrados = window.FloreriaData.filtrarProductos(this.filtrosActivos);
        
        // 2. Ordenar productos según el criterio seleccionado
        productosFiltrados = window.FloreriaData.ordenarProductos(
            productosFiltrados, 
            this.filtrosActivos.ordenamiento
        );
        
        // 3. Mostrar productos en el DOM
        this.mostrarProductos(productosFiltrados);
        
        // 4. Actualizar contador de resultados
        this.actualizarContadorResultados(productosFiltrados.length);
    }

    mostrarProductosIniciales() {
        // Mostrar todos los productos disponibles al cargar la página
        const todosLosProductos = window.FloreriaData.obtenerTodosLosProductos();
        this.mostrarProductos(todosLosProductos);
    }

    mostrarProductos(productos) {
        if (!this.contenedorProductos) return;

        // Limpiar contenedor
        this.contenedorProductos.innerHTML = '';
        
        if (productos.length === 0) {
            this.mostrarMensajeSinResultados();
            return;
        }
        
        // Crear y agregar tarjetas de productos
        productos.forEach((producto, index) => {
            const tarjetaHTML = this.crearTarjetaProducto(producto, index);
            this.contenedorProductos.insertAdjacentHTML('beforeend', tarjetaHTML);
        });

        // Reinicializar animaciones WOW si está disponible
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }
    }

crearTarjetaProducto(producto, index) {
    const etiqueta = this.obtenerEtiqueta(producto);
    const retraso = (index * 0.1).toFixed(1);

    return `
        <div data-wow-delay="${retraso}s" class="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div class="tf-card-box style-1">
                <div class="card-media">
                    <a href="#">
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                    </a>
                    <span class="wishlist-button icon-heart"></span>
                    ${etiqueta ? `
                        <div class="featured-countdown">
                            <span class="featured-label">${etiqueta}</span>
                        </div>
                    ` : ''}
                    <div class="button-place-bid">
                        <a href="#" class="tf-button">
                            <span>Comprar ahora</span>
                        </a>
                    </div>
                </div>
                <h5 class="name">
                    <a href="#">${producto.nombre}</a>
                </h5>
                <div class="author flex items-center">
                    <div class="avatar">
                        <img src="img/logos/logosinfondo.png" alt="Lili's Florería">
                    </div>
                    <div class="info">
                        <span>Hecho por:</span>
                        <h6><a href="#">Lili's Florería</a></h6>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="meta-info flex items-center justify-between">
                    <span class="text-bid">Precio especial</span>
                    <h6 class="price gem">$${producto.precio} MXN</h6>
                </div>
            </div>
        </div>
    `;
}


    obtenerEtiqueta(producto) {
        if (producto.masVendido) return 'Más vendido';
        if (producto.nuevo) return 'Nuevo';
        if (producto.oferta) return 'Oferta';
        if (producto.premium) return 'Premium';
        return null;
    }

    mostrarMensajeSinResultados() {
        this.contenedorProductos.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="no-results-message">
                    <i class="icon-search" style="font-size: 48px; color: #ccc; margin-bottom: 20px;"></i>
                    <h3>No se encontraron productos</h3>
                    <p>Intenta ajustar los filtros para encontrar lo que buscas.</p>
                    <button class="tf-button style-1" onclick="sistemaFiltros.limpiarFiltros()">
                        Limpiar filtros
                    </button>
                </div>
            </div>
        `;
    }

actualizarContadorResultados(cantidad) {
    const contador = document.querySelector('#contador-resultados');
    if (contador) {
        contador.textContent = `Mostrando ${cantidad} producto${cantidad !== 1 ? 's' : ''}`;
    }
}


    limpiarFiltros() {
        // Resetear filtros a valores por defecto
        this.filtrosActivos = {
            ocasion: 'todas',
            estilo: 'todos',
            empaque: 'todos',
            tamaño: 'todos',
            ordenamiento: 'populares'
        };

        // Resetear textos de los botones dropdown
        this.resetearTextosDropdowns();
        
        // Aplicar filtros (mostrará todos los productos)
        this.aplicarFiltros();
    }

    resetearTextosDropdowns() {
        const textosOriginales = {
            'dropdownOcasion': 'Ocasión',
            'dropdownEstilo': 'Estilo',
            'dropdownEmpaque': 'Empaque',
            'dropdownTamaño': 'Tamaño',
            'dropdownOrdenar': 'Ordenar por: Más populares'
        };

        Object.keys(textosOriginales).forEach(id => {
            const dropdown = document.getElementById(id);
            if (dropdown) {
                const textoElemento = dropdown.querySelector('.inner') || dropdown.querySelector('span');
                if (textoElemento) {
                    textoElemento.textContent = textosOriginales[id];
                }
            }
        });
    }
}

// Inicializar el sistema cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Crear instancia global para poder acceder desde otras funciones
    window.sistemaFiltros = new SistemaFiltros();
});

// Función global para limpiar filtros (llamada desde botones)
function limpiarFiltros() {
    if (window.sistemaFiltros) {
        window.sistemaFiltros.limpiarFiltros();
    }
}
