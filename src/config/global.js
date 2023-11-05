export default {
  global: {
    componenteFormativo: 'Configuración y gestión de dispositivos inalámbricos',
    descripcionCurso:
      'Este componente formativo aborda aspectos generales y claves sobre el proceso de configuración y gestión de los dispositivos inalámbricos requeridos, de acuerdo con la arquitectura planteada en la fase de planeación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/a4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción a las redes inalámbricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación de las redes inalámbricas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Funcionamiento de las redes inalámbricas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ventajas y desventajas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Componentes de las redes inalámbricas',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Modos de operación',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Tecnologías de redes inalámbricas',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Radio, elementos y frecuencias del espectro',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Diseño e instalación de red',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Configuración de la red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Configuración del router TPLINK con referencia TL-MR3220',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Seguridad, firewall, filtros, aplicaciones',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Características adicionales de las redes',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Red wifi para invitados',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Prioridad de medios',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Reenvío de puertos',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Introducción a las redes inalámbricas',
      referencia:
        'XIRIO online. (s.f.) Planificación de redes de acceso. XIRIO.',
      tipo: 'Página web',
      link: 'https://www.xirio-online.com/web/help/es/index.htm',
    },
    {
      tema: '2. Configuración de la red',
      referencia:
        'Cisco Networking Academy. (s.f.). Networking CCNA: Switching, Routing, and Wireless Essentials. Cisco.',
      tipo: 'Página web',
      link:
        'https://www.netacad.com/courses/networking/ccna-switching-routing-wireless-essentials',
    },
  ],
  glosario: [
    {
      termino: 'Adaptador de red',
      significado:
        'Dispositivo de hardware que se inserta en la estación de trabajo de una red y le permite comunicarse con otros elementos unidos a esta red. ',
    },
    {
      termino: 'Capa de aplicación',
      significado:
        'Capa 7 del modelo OSI que proporciona autenticación, privacidad y restricción de información a los usuarios.',
    },
    {
      termino: 'Capa de enlace de datos',
      significado:
        'Capa 2 del modelo OSI que soporta la capa física (capa 1), proporcionando direccionamiento, control de errores y sincronización a un dispositivo físico.',
    },
    {
      termino: 'Capa de presentación',
      significado:
        'Capa 6 del modelo OSI que administra la conversación de la información entrante y saliente de un formato de datos a otro.',
    },
    {
      termino: 'Capa de red',
      significado:
        'Capa 3 del modelo OSI que define la manera como se enruta la información a una dirección destino.',
    },
    {
      termino: 'Capa de sesión',
      significado:
        'Capa 5 del modelo OSI que inicia y termina conversaciones, intercambios y diálogos entre aplicaciones a través de la red.',
    },
    {
      termino: 'Capa de transporte',
      significado:
        'Capa 4 del modelo OSI que proporciona control de un extremo a otro para transferencia de la información a través de la red.',
    },
    {
      termino: 'Capa física',
      significado:
        'Capa 1 del modelo OSI que define la manera como la corriente eléctrica de bits se transporta a través del hardware y los dispositivos mecánicos de la red.',
    },
    {
      termino: 'Datagrama',
      significado:
        'Agrupamiento lógico de información enviada como unidad de capa de red a través de un medio de transmisión sin establecer previamente un circuito virtual. Los datagramas IP son las unidades principales de información de Internet. Los términos trama, mensaje, paquete y segmento también se usan para describir agrupamientos de información lógica en las diversas capas del modelo de referencia OSI y en varios círculos tecnológicos.',
    },
    {
      termino: 'Dirección IP (protocolo de Internet)',
      significado:
        'Es la dirección de red o lógica de un nodo. Está compuesta por cuatro números de ocho bits (cada uno de ellos llamado octeto) que se combinan para identificar no solo la estación de trabajo o nodo, sino también su red. La dirección IP identifica una estación de trabajo con la LAN, WAN e Internet.',
    },
    {
      termino: 'DNS',
      significado:
        'Sistema de nombre de dominios. Un sistema de Internet que resuelve los nombres de dominios en direcciones IP.',
    },
    {
      termino: 'Enrutador',
      significado:
        'Dispositivo de red que dirige o enruta paquetes a través de las redes. Un enrutador funciona con una dirección de mensajes IP, a fin de determinar la mejor ruta hacia su destino.',
    },
    {
      termino: 'Enrutamiento',
      significado:
        'Proceso utilizado para determinar la mejor ruta y hacer avanzar la información a lo largo de esa ruta, a partir de una red fuente o segmento de red hacia una dirección de red de destino.',
    },
    {
      termino: 'Host',
      significado:
        'Sistema informático en una red. Similar al término nodo, salvo que host normalmente implica un computador, mientras que nodo generalmente se aplica a cualquier sistema de red, incluyendo servidores de acceso y el router.',
    },
    {
      termino: 'Modelo OSI',
      significado:
        'Modelo de referencia de interconexión de sistemas abiertos, un estándar que define las diversas funciones denominadas capas, que un paquete de red transmite al trasladarse desde una fuente hasta su destino. El modelo OSI de siete capas se aplica tanto a las redes locales como a las extensas, entre ellas Internet.',
    },
  ],
  referencias: [
    {
      referencia:
        'Andreu, J. (2011). Redes inalámbricas (servicios en red). Editex.',
    },
    {
      referencia:
        'Cisco Networking Academy. (s.f.). Networking CCNA: Switching, Routing, and Wireless Essentials. Cisco.',
      link:
        'https://www.netacad.com/courses/networking/ccna-switching-routing-wireless-essentials',
    },
    {
      referencia:
        'Jiménez, J. (2020). Cómo configurar el reenvío de puertos en Windows 10. ',
      link:
        'https://www.redeszone.net/tutoriales/configuracion-puertos/configurar-reenvio-puertos-windows/',
    },
    {
      referencia:
        'Jiménez, J. (2018).  Cómo crear una red wifi para invitados fácilmente en nuestra casa.',
      link: 'https://www.redeszone.net/2018/12/24/crear-red-wifi-invitados/',
    },
    {
      referencia:
        'Linksys. (s.f.). Configuración de su extensor de red Linksys en modo Punto de Acceso.',
      link: 'https://www.linksys.com/es/support-article/?articleNum=187985',
    },
    {
      referencia:
        'Linksys. (s.f.). ¿Qué es un punto de acceso y en qué se diferencia de un extensor de red?',
      link:
        'https://www.linksys.com/es/r/qu%C3%A9-es-un-extensor-de-red/qu%C3%A9-es-un-punto-de-acceso/',
    },
    {
      referencia:
        'López, A. (2021). Control parental: todo lo que tienes que saber y cómo llevarlo a cabo.',
      link:
        'https://www.redeszone.net/tutoriales/seguridad/control-parental-que-es-herramientas/',
    },
    {
      referencia:
        'Stallings, W., Tanenbaum, A., Fall, K. R., & Stevens, W. R. (2000). Comunicaciones y redes de computadores. 6ª edición. Prentice-Hall.',
    },
    {
      referencia:
        'XIRIO online. (s.f.). Planificación de redes de acceso. XIRIO.',
      link: 'https://www.xirio-online.com/web/help/es/index.htm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Eliécer Loaiza Muñoz',
          cargo: 'Experto temático',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Carlos Mauricio Tovar Artunduaga',
          cargo: 'Experto temático',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Claudia López Arboleda',
          cargo: 'Experto temática',
          centro:
            'Centro de Teleinformática y Producción Industrial  - Regional Cauca',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniela Muñoz Bedoya ',
          cargo: 'Animador y Producción Audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
