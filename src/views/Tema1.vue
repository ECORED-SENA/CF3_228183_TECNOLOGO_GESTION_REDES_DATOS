<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a las redes inalámbricas


    .row.align-items-center
      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/tema1/img1.png", alt="")
      .col-lg-8
        p.mb-4 Una red inalámbrica es la red que no emplea cables para transmitir la información. El primer ejemplo de comunicación sin cables se dio en 1880; en ese año, Graham Bell y Summer Tainter inventaron el fotófono, implemento que permitía transmitir sonido por medio de una emisión de luz. Luego, en 1888 el físico alemán Rudolf Hertz descubrió la propagación de las ondas electromagnéticas; así, seis años después, las ondas de radio ya eran un medio de comunicación.

        .bg-fee0e7.p-3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img2.svg", alt="")
            .col
              p.mb-0 Se menciona que en 1899 el italiano Guillermo Marconi logró establecer comunicaciones mediante señales inalámbricas a través del canal de la Mancha, entre las ciudades de Dover y Wilmereux. Para 1907 se comunicaron los primeros mensajes completos a través del Atlántico.

    .bg-gradient-ff-e9.pt-5.pb-3
      p Otro dato a tener en cuenta sobre el año 1971 es que un grupo de investigadores bajo la dirección de Norman Abramson, de la Universidad de Hawái, fueron pioneros con el sistema de conmutación de paquetes mediante una red de comunicación por radio llamada ALOHA. Se puede decir que esta fue la primera WLAN, la cual estaba formada por siete computadores situados en distintas islas que se podían comunicar por medio de un servidor. De ahí nació lo que hoy en día se conoce como wifi. En 1997 sale al mercado gracias a la creación del comité 802.11, en el que se dio paso a la estandarización IEEE, (<i>Institute of Electronics and Electrical Engineers</i>), para redes de área local inalámbricas (WLAN).

    #t_1_1.titulo-segundo.color-acento-contenido.mt-5
      h2 1.1 Clasificación de redes inalámbricas

    p Según Andreu (2011) las redes inalámbricas se clasifican en los siguientes grupos:

    TabsC.color-acento-contenido
      .bg-fbfaff.py-3.py-md-4(titulo="Red WBAN")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/t1/f1.svg", alt="Ilustración red WBAN").p-4
          .col-md-6.mb-4.mb-md-0
            h5 Redes inalámbricas de area corporal o WBAN
            p (<i>Wireless Body Area Network</i>) con cobertura entre 1 a 2 metros.
      .bg-fbfaff.py-3.py-md-4(titulo="Red WPAN")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/t1/f2.svg", alt="Ilustración red WPAN").p-4
          .col-md-6.mb-4.mb-md-0
            h5 Redes inalámbricas de area personal o WPAN
            p (<i>Wireless Personal Área Network</i>). Su alcance es por debajo de los 10 metros, usadas para para comunicar dispositivos de un usuario como, por ejemplo, el PC y la impresora, ya sea por uso de Bluetooth o de IEEE 802.15.
      .bg-fbfaff.py-3.py-md-4(titulo="Red WLAN")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/t1/f3.svg", alt="Ilustración red WLAN").p-4
          .col-md-6.mb-4.mb-md-0
            h5 Redes inalámbricas de area local o WLAN
            p (<i>Wireless Local Area Network</i>). Tienen un alcance de cientos de metros, utilizadas para comunicar dispositivos ubicados en un mismo edificio o grupos de edificios como, por ejemplo, HomeRF o wifi.
      .bg-fbfaff.py-3.py-md-4(titulo="Red WMAN")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/t1/f4.svg", alt="Ilustración red WMAN").px-5
          .col-md-6.mb-4.mb-md-0
            h5 Redes inalámbricas de area metropolitana o WMAN
            p (<i>Wireless Metropolitan Area Network</i>). Tienen como función cubrir una ciudad, utilizando protocolo LMDS (<i>Local Multipoint Distribution Service</i>) o MMDS (<i>Multichannel Multipoint Distribution Service</i>).
      .bg-fbfaff.py-3.py-md-4(titulo="Red WWAN")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/t1/f5.svg", alt="Ilustración red WWAN").p-4
          .col-md-6.mb-4.mb-md-0
            h5 Redes inalámbricas de area extensa o WWAN
            p (<i>Wireless Wide Area Network</i>). Conocidas también como de área global o WGAN, tienen cobertura de una gran región, país o grupo de países, basadas en tecnología celular, y son consideradas como la evolución de las redes de voz.
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Funcionamiento de las redes inalámbricas

    .row.mb-4
      .col-lg-7
        p Para el funcionamiento de las redes inalámbricas es relevante diferenciar algunas características, como la frecuencia de trabajo, la velocidad de transmisión y cobertura, por ejemplo. Para ello, se utilizan ondas de radio que llevan la información hacia el destino.

        p Las ondas de radio se refieren a portadoras que llevan la información y la energía a un receptor remoto; los datos que se envían se superponen a la portadora de radio y, finalmente, se deben extraer en el receptor. A este proceso nombrado anteriormente se le conoce como modulación de la portadora: si las ondas se transmiten con frecuencias diferentes, pueden existir envíos al mismo tiempo y espacio sin que haya interferencia.

        p #[b En las redes inalámbricas WLAN se presentan dos formas de funcionamiento que son:]

      .col-lg-5.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/tema1/img3.png", alt="")

    .row.justify-content-center
      .col-xl-8
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.bg-e9e2ff.p-5
            p.text-center #[b #[i Ad hoc]] (IBSS).

            p Aquí cada equipo de la red se conecta con los demás; es considerado cliente y punto de acceso, pero con un máximo de nueve clientes.

          .col-md.tarjeta.bg-d9f6ff.p-5
            p.text-center #[b Infraestructura] (BSS).
            p Para este caso la conexión se hace utilizando un AP (punto de acceso), el cual permite que la red inalámbrica acceda la red cableada, dicho AP trabaja como puerta de entrada a la red inalámbrica con una cobertura determinada y en un lugar específico para los dispositivos que necesiten acceder.

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Ventajas y desventajas

    .row.align-items-center
        .col-lg-6
          ul.lista-ul--separador
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Permiten una amplia libertad de movimientos.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Facilitan reubicar las estaciones de trabajo.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Evitan establecer cableado.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Rapidez en la instalación de la red.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span De menor costo.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Tienen mayor cobertura en puntos de difícil acceso con cables.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Permiten la ampliación de redes locales cableadas.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Poseen facilidad de expansión o limitación de usuarios en la red con solo añadir o quitar módulos.
        .col-lg-6.d-none.d-lg-block
          .p-5
            img(src="@/assets/curso/temas/tema1/img4.svg", alt="<i>Router</i> wifi")

    p.my-4 #[b Y sus desventajas son:]


    .row.align-items-center
      .col-lg-6.d-none.d-lg-block
        .p-5
          img(src="@/assets/curso/temas/tema1/img5.svg", alt="Servidores")
      .col-lg-6
        ul.lista-ul--separador
          li
            i.fas.fa-play.texto-acento-contenido.me-4
            span Menor ancho de banda que las redes cableadas.
          li
            i.fas.fa-play.texto-acento-contenido.me-4
            span Las redes que usan señales infrarrojas deben estar perfectamente alineadas, y no pueden atravesar obstáculos como paredes, árboles, etc.
          li
            i.fas.fa-play.texto-acento-contenido.me-4
            span Son inseguras puesto que cualquiera puede acceder a la red inalámbrica.
          li
            i.fas.fa-play.texto-acento-contenido.me-4
            span Poseen un menor ancho de banda que las redes que se unen mediante cables.

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Componentes de las redes inalámbricas

    p.mb-5 Se encuentran integradas por los siguientes dispositivos:

    .row.justify-content-center
      .col-lg-11
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img6.svg' alt='Icono antena')
          .tarjeta.bg-e9e2ff
            .p-4
              h3 Antena
              p Elemento que permite transmitir y recibir ondas de radio por medio de una comunicación natural como el aire o el espacio libre.
      .col-lg-11
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img7.svg' alt='Icono punto de acceso')
          .tarjeta.bg-e9e2ff
            .p-4
              h3 Punto de acceso
              p Dispositivo de capa 2, por medio del cual las estaciones wireless pueden integrarse rápida y fácilmente a cualquier red cableada, actuando como núcleo de la red inalámbrica y puente de conexión entre redes inalámbricas y cableadas. El punto de acceso se conecta a un <i>router, switch o hub</i> con un cable <i>Ethernet</i> y radia la señal wifi en un área específica, como ejemplo, si desea habilitar el acceso wifi en el área de recepción de una empresa, pero no existe un <i>router</i> que pueda cubrirla, se instala un punto de acceso cerca de la recepción y se conecta con un cable hacia el salón de equipos donde está el servidor.

      .col-lg-11
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img8.svg' alt='Icono puente inalámbrico')
          .tarjeta.bg-e9e2ff
            .p-4
              h3 #[em Bridge] inalámbrico
              p Dispositivo que permite conectar dos o más redes ubicadas en diferentes edificios, proporcionando más velocidad de transmisión de datos, además conecta sitios difíciles de cablear, pisos no contiguos, instalaciones de campus de escuelas o empresas, etc.
      .col-lg-11
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img9.svg' alt='Icono enrutador inalábrico')
          .tarjeta.bg-e9e2ff
            .p-4
              h3 #[em Router] inalámbrico
              p Es el que permite la conexión de redes inalámbricas, enrutar los paquetes de datos hacia la red correcta de destino y facilita la conexión a la WLAN de dispositivos inalámbricos; es la tecnología de comunicación de ondas de radio que admite la conexión ADSL para el manejo de Internet de banda ancha y que se distribuya hacia otros computadores.
      .col-lg-11
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img10.svg' alt='Icono adaptador')
          .tarjeta.bg-e9e2ff
            .p-4
              h3 Adaptadores
              p Son tarjetas para expandir la capacidad de conexión, envían y reciben datos sin necesidad de cables en las redes WLAN, poseen una antena para la recepción y envío de datos, y están diseñados para algunos estándares de redes inalámbricas.

    Separador

    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Modos de operación

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para el estándar 802.11 es importante tener en cuenta dos modos fundamentales de uso para este tipo de redes, el modo <i>ad-hoc</i> y el modo infraestructura BSS, los cuales se detallarán a continuación.

    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-3.mb-4
      h3.text-white.mb-0.mx-3 Modo #[em ad-hoc]

    .row.align-items-center.justify-content-between.mb-5
      .col-lg-6
        p Se conoce también como punto a punto, en este método los clientes inalámbricos establecen comunicación directa entre sí, por tanto, no es necesario un punto de acceso o AP; cada terminal inalámbrica en una red <i>ad-hoc</i> configura el adaptador inalámbrico en este modo, y debe usar el mismo SSID y canal dentro de la red. Este método limita el número de dispositivos, y si estos aumentan, el rendimiento de la red disminuye, además la conexión <i>ad-hoc</i> es temporal entre dispositivos para un mismo fin, por ejemplo, compartir impresoras, archivos o juegos en la red.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 La conexión de los equipos se realiza por medio de los adaptadores de red sin necesidad de un punto de acceso. Una infraestructura <i>ad-hoc</i> tendría mínimo 2 computadores, tarjetas de red inalámbrica y, de hecho, los <i>drivers</i> de tarjetas de red.
        p De manera que en la tabla que aparece a continuación puede consultar tanto las ventajas como desventajas del modo <i>ad-hoc</i>.
      .col-lg-6
        img(src='@/assets/curso/temas/tema1/img12.svg' alt='Ilustración modo <i>ad-hoc</i>')

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 1
      span Ventajas y desventajas modo #[em ad-hoc]

    .tabla-a.color-acento-contenido.mb-5
      table
        caption
        thead
          tr
            th.text-center Ventajas
            th.text-center Desventajas
        tbody
          tr
            td No necesita conexión a Internet.
            td Compatibilidad de tarjetas de red para conexión en modo <i>ad–hoc</i>.
          tr
            td Hay acceso a los datos de los dispositivos conectados a la red.
            td Es necesario configurar cada vez que se va a usar.
          tr
            td Realiza el envío directo de información.
            td No conecta dispositivos ubicados dentro del área de cobertura.
          tr
            td Tiene gestión no centralizada.
            td En la transmisión entre dos o más nodos simultáneos se presenta interferencia y competencia para acceder al medio.
          tr
            td La configuración es mínima.
            td

    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-3.mb-4
      h3.text-white.mb-0.mx-3 Modo infraestructura BSS

    .row.align-items-center.justify-content-between.mb-5
      .col-lg-6
        img(src='@/assets/curso/temas/t1/f16.svg' alt='Ilustración modo BSS')
      .col-lg-6
        p Para las redes que trabajan con el estándar IEEE 802.11 el modo de infraestructura se conoce como Conjunto de Servicios Básicos (BSS - #[em Basic Service Set]) y las denominan también cliente - servidor o maestro - esclavo. Para este modo de infraestructura existe un dispositivo central que corresponde al punto de acceso o estación base, que generalmente se conecta a una red <i>Ethernet</i> cableada, y así los clientes inalámbricos pueden acceder a la red fija por medio del punto de acceso. En el proceso de interconexión de los dispositivos inalámbricos hacia los puntos de acceso se debe configurar con el mismo SSID, lo que garantiza optimizar la capacidad total de la red.
        p Para este caso se pueden encontrar varias formas de distribuir los elementos conectados a la red, las cuales se presentan en la siguiente tabla.

    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-3.mb-4
      h3.text-white.mb-0.mx-3 Tipos de infraestructuras inalámbricas BSS

    TabsA.color-alterno.mb-5
      .tarjeta.color-acento-contenido--borde.fcb.p-4(titulo="Tipo 1")
        h4 Estrella
        img(src='@/assets/curso/temas/tema1/img13.svg', alt='Gráfica que representa el funcionamiento de una infraestructura inalámbrica BSS, tipo estrella: la conducción de ondas se da en variadas direcciones y puede darse con varios dispositivos.')
      .tarjeta.color-acento-contenido--borde.fcb.p-4(titulo="Tipo 2")
        h4 Punto a punto
        img(src='@/assets/curso/temas/tema1/img14.svg', alt='Gráfica que representa el funcionamiento de una infraestructura inalámbrica BSS, tipo punto a punto: la conducción de ondas se da en de manera unidireccional de un dispositivo a otro.')
      .tarjeta.color-acento-contenido--borde.fcb.p-4(titulo="Tipo 3")
        h4 Con repetidores
        img(src='@/assets/curso/temas/tema1/img15.svg', alt='Gráfica que representa el funcionamiento de una infraestructura inalámbrica BSS, con repetidores: los repetidores replican la conducción de onda entre dispositivos y el rango de las mismas.')
      .tarjeta.color-acento-contenido--borde.fcb.p-4(titulo="Tipo 4")
        h4 Malla
        img(src='@/assets/curso/temas/tema1/img16.svg', alt='Gráfica que representa el funcionamiento de una infraestructura inalámbrica BSS, tipo malla: donde se combina la conducción de ondas y señal en distintas direcciones y entre varios dispositivos.')

    Separador

    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6 Tecnologías de redes inalámbricas

    p En la actualidad, existen dos tipos de redes inalámbricas: para exteriores e interiores; en los sistemas para exteriores el sistema de posicionamiento global conocido como GPS por sus siglas en inglés (<i>Global Positioning System</i>), es el estándar de referencia por la precisión que consigue el receptor en línea directa con varios satélites de forma simultánea.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para interiores, este estándar no sirve, pues tantas paredes, techos y demás obstáculos, apantallan la señal y el receptor no puede sincronizarse a algún satélite, impidiendo dar su localización. Entonces, estas tecnologías por utilizar dependen de los requisitos necesarios para acceder a una u otra aplicación o servicio. También es importante tener presente para la tecnología por escoger, el consumo de energía, precio, ancho de banda y velocidad, entre otros factores.

    p #[strong A continuación, se describen las diferentes tecnologías utilizadas para redes inalámbricas:]

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row
        img(src='@/assets/curso/temas/tema1/iconos/1.svg' alt='1').figpasos
        h4 Bluetooth
        p Es la tecnología inalámbrica más utilizada para transmitir datos entre dispositivos cercanos, basada en radiofrecuencia, en la banda libre de 2.4 GHz y 3 Mbps de velocidad máxima; es muy frecuente su uso para pasar fotos y música entre teléfonos móviles. Los autos disponen del sistema Bluetooth para atender llamadas telefónicas con manos libres al estar conduciendo, en los dispositivos domésticos es más frecuente como en el <i>mouse</i>, los auriculares, entre otros.
      .row
        img(src='@/assets/curso/temas/tema1/iconos/2.svg' alt='2').figpasod
        h4 <i>European Installation Bus</i>
        p Usado para interconectar redes eléctricas inteligentes.
      .row
        img(src='@/assets/curso/temas/tema1/iconos/3.svg' alt='3').figpasoi
        h4 HomePlug
        p Protocolo utilizado para tender cableado doméstico de energía eléctrica.
      .row
        img(src='@/assets/curso/temas/tema1/iconos/4.svg' alt='4').figpasod
        h4 IrDA
        p Estándar físico para la transmisión y recepción de datos por rayos; el espectro infrarrojo sirve para la comunicación bidireccional entre dos extremos con velocidades que oscilan entre  9.600 bps y 4 Mbps.
      .row
        img(src='@/assets/curso/temas/tema1/iconos/5.svg' alt='5').figpasoi
        h4 INSTEON
        p Red que trabaja en dos bandas de frecuencia, integrando comunicaciones por   radiofrecuencia (RF) con tendido doméstico para energía eléctrica <i>HomePlug</i>.
      .row
        img(src='@/assets/curso/temas/tema1/iconos/6.svg' alt='6').figpasod
        h4 nanoNET
        p Se trata de protocolos inalámbricos tipo propietario creados para sensores, como competencia de la tecnología ZigBee.
      .row
        img(src='@/assets/curso/temas/tema1/iconos/7.svg' alt='7').figpasoi
        h4 OBEX
        p Abreviatura de Object EXchange o intercambio de datos, este protocolo fue creado para facilitar el intercambio de información binaria entre dispositivos.
      .row
        img(src='@/assets/curso/temas/tema1/iconos/8.svg' alt='8').figpasod
        h4 RadioRa
        p Protocolo de tipo propietario desarrollado por Lutron para radiofrecuencia (RF) doble vía, usado en el control de iluminación residencial.
      .row
        img(src='@/assets/curso/temas/tema1/iconos/9.svg' alt='9').figpasoi
        h4 Topdog
        p Protocolo tipo propietario inalámbrico, utilizado en el control de iluminación comercial y residencial.
      .row
        img(src='@/assets/curso/temas/tema1/iconos/10.svg' alt='10').figpasod
        h4 UPB
        p Protocolo desarrollado para mejorar el desempeño y confiabilidad en cableados de energía eléctrica.
      .row
        img(src='@/assets/curso/temas/tema1/iconos/11.svg' alt='11').figpasoi
        h4 Wifi
        p Sigla usada para el término en inglés <i>Wireless Fidelity</i> (wifi), tecnología para redes del tipo WLAN <i>Wireless Local Area Network</i>, basada en el estándar IEEE 802.11. Permite realizar la transmisión de información con señales de radiofrecuencia, conectar en una misma red diferentes dispositivos como celulares, PC, blu-ray e impresoras que estén ubicados dentro del radio de cobertura wifi.
      .row
        img(src='@/assets/curso/temas/tema1/iconos/12.svg' alt='12').figpasod
        h4 Wi-Max
        p Tecnología para red inalámbrica de área metropolitana con un alcance de 50 Km, velocidad de transmisión de hasta 70 Mbps, basada en el estándar 802.16, que opera en el rango de frecuencias de 10 GHz a 66 GHz con línea de vista, con el estándar 802.16a, opera entre los 2 y 11 GHz y sin línea de vista, puede usarse para receptores en vehículos móviles siempre que no superen 100 Km/h de velocidad, se creó como competencia para la tecnología xDSL y el acceso por cable módem.
      .row
        img(src='@/assets/curso/temas/tema1/iconos/13.svg' alt='13').figpasoi
        h4 Wireless USB
        p <i>Wireless Universal Serial Bus</i> (WUSB) en inglés, hace referencia a una conexión de alta velocidad, eficaz y sin cables, basada en la tecnología USB usada para PC.
      .row
        img(src='@/assets/curso/temas/tema1/iconos/14.svg' alt='14').figpasod
        h4 Z-wave
        p Protocolo tipo propietario usado en redes inalámbricas de control de hogares.
      .row
        img(src='@/assets/curso/temas/tema1/iconos/15.svg' alt='15').figpasos
        h4 ZigBee
        p Especificación global creada para sistemas de control inalámbrico llamados <i>ZigBee Alliance</i>, se basa en el estándar IEEE 802.15.4, usado para radios digitales de baja frecuencia, con velocidad de transmisión 250 Kbps, y limitado a controladores de 8 bits.

    #t_1_7.titulo-segundo.color-acento-contenido
      h2 1.7 Radio, elementos y frecuencias del espectro

    p Hoy por hoy, el espectro radioeléctrico es utilizado de forma ineficiente, debido a que las bandas de frecuencia para su uso se realizan de manera fija; para ello surge una tecnología novedosa que es la radio cognitiva, la cual trae consigo varias funcionalidades que garanticen el acceso dinámico al usar el espectro. Aquí se nombran las cuatro más importantes: identificar la oportunidad de acceso al espectro, seleccionar las bandas de frecuencia a usar, coordinar el acceso al espectro entre usuarios y movilidad espectral.

    p #[strong Los dos tipos más usados de radio cognitiva son:]

    .row.justify-content-center
      .col-xl-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.bg-e9e2ff.p-5
            figure.m-0.mb-4
              img(src='@/assets/curso/temas/tema1/img18.svg', alt='', style="width: 91px").mx-auto

            h4.text-center Radio cognitiva completa (“radio de mitola”)
            p Aquí, cualquier aspecto que se observe en un nodo inalámbrico será tenido en cuenta para la toma decisiones en el cambio de parámetros de transmisión y/o recepción.

          .col-md.tarjeta.bg-d9f6ff.p-5
            figure.m-0.mb-4
              img(src='@/assets/curso/temas/tema1/img19.svg', alt='', style="width: 91px").mx-auto

            h4.text-center Radio cognitiva detectora del espectro
            p Para este caso, las decisiones se toman basadas solo en el estado del espectro de radiofrecuencia.

    p.mb-4 #[strong Igualmente, de acuerdo con las bandas del espectro disponibles para la radio cognitiva, se tiene también:]

    .row.justify-content-center
      .col-xl-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.bg-e9e2ff.p-5
            figure.m-0.mb-4
              img(src='@/assets/curso/temas/tema1/img20.svg', alt='', style="width: 91px").mx-auto

            h4.text-center Con licencia
            p Se utilizan bandas asignadas a usuarios bajo licencia e, incluso, se usan bandas libres como la banda UNII o la ISM.

          .col-md.tarjeta.bg-d9f6ff.p-5
            figure.m-0.mb-4
              img(src='@/assets/curso/temas/tema1/img21.svg', alt='', style="width: 91px").mx-auto

            h4.text-center De acceso libre
            p Aquí la radio cognitiva solo puede hacer uso de bandas libres del espectro de radiofrecuencia.


    #t_1_8.titulo-segundo.color-acento-contenido
      h2 1.8. Diseño e instalación de red

    p Para el diseño de una red inalámbrica no solo se debe realizar la distribución de los dispositivos activos y pasivos, sino que es pertinente definir protocolos, estándares, normas y demás regulaciones necesarias para cumplir con los requerimientos establecidos. En la planeación de un diseño de red se debe tener en cuenta varios aspectos, entre los cuales se nombran los siguientes pasos que ayudan a optimizar el diseño de la red solicitada:


    TabsC.color-acento-contenido.mb-5
      .bg-fbfaff.py-3.py-md-4(titulo="Recolección de información")
        .row.align-items-center
          .col-lg-6
            img(src="@/assets/curso/temas/t1/f26.svg", alt="Figura relacionada").py-4
          .col-lg-6
            h3 Recolección de información
            ul.lista-ul--separador
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Analizar requerimientos solicitados.
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Establecer el tipo de servicios a utilizar.
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Definir el tipo de dispositivos inalámbricos a conectar en la red (PC portátiles, de oficina, <i>smartphone</i> y <i>tablets</i>).
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Estudiar características y ubicación de los dispositivos activos para la red wifi.
      .bg-fbfaff.py-3.py-md-4(titulo="Revisión de las instalaciones")
        .row.align-items-center
          .col-lg-6
            img(src="@/assets/curso/temas/t1/f27.svg", alt="Figura relacionada").py-4
          .col-lg-6
            h3 Revisión de las instalaciones
            ul.lista-ul--separador
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Definir el tipo de instalación del punto de acceso en cada zona.
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Determinar canalizaciones del cableado hasta cada punto de acceso.
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Comprobar los obstáculos existentes que degraden el rendimiento de la red.
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Ubicación de los terminales usuario, equipos de red, como <i>switches</i>, <i>routers</i> y servidores.
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Realizar el plano de la planta, basado en el espacio disponible, la alimentación, la seguridad y el sistema de aire acondicionado del lugar.
      .bg-fbfaff.py-3.py-md-4(titulo="Elección de dispositivos")
        .row.align-items-center
          .col-lg-6
            img(src="@/assets/curso/temas/t1/f28.svg", alt="Figura relacionada").py-4
          .col-lg-6
            h3 Elección de dispositivos
            ul.lista-ul--separador
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Determinar las características de las antenas y que cumplan con los requerimientos solicitados.
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Definir el tipo de radio a utilizar de acuerdo con la tecnología y estándar de acceso seleccionado.
      .bg-fbfaff.py-3.py-md-4(titulo="Diseño preliminar")
        .row.align-items-center
          .col-lg-6
            img(src="@/assets/curso/temas/t1/f29.svg", alt="Figura relacionada").py-4
          .col-lg-6
            h3 Diseño preliminar
            ul.lista-ul--separador
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Escoger una herramienta digital para realizar el diseño, por ejemplo, Xiro-online.
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Realizar el diseño basado en cobertura, con un equipo principal o central cubrir la mayor área posible.
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Realizar el diseño basado en capacidad, lo cual permite mejor capacidad, más puntos de acceso y contar con ajustes de la potencia transmitida, que permita calcular posibles interferencias conjuntas con la misma red u otras redes.
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Definir la ubicación de los equipos y analizar la precisión de los niveles de cobertura.
      .bg-fbfaff.py-3.py-md-4(titulo="Diseño definitivo")
        .row.align-items-center
          .col-lg-6
            img(src="@/assets/curso/temas/t1/f30.svg", alt="Figura relacionada").py-4
          .col-lg-6
            h3 Diseño definitivo
            ul.lista-ul--separador
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Realizar site survey de la red diseñada para confirmar el cumplimiento de los requerimientos.
              li
                i.fas.fa-play.texto-acento-contenido.me-4
                span Ejecutar la simulación real del rendimiento, ubicando los puntos de acceso definidos por medio del <i>software</i> elegido.

    p.mb-5 En relación con el diseño de una red inalámbrica, chequee los dos videos que se proponen enseguida y aprópiese del procedimiento de simulación profesional de cobertura radioeléctrica online, con la herramienta de planificación radioeléctrica Xirio-Online, para un caso específico de red:

    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-3.mb-4
      h3.text-white.mb-0.mx-3 Interfaz principal Xirio Online

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Mtax3Za4A-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Interfaz principal Xirio Online

    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-3.mb-4
      h3.text-white.mb-0.mx-3 Interfaz para la planeación de redes radioeléctricas

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/EtvkCY0FWoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Interfaz para la planeación de redes radioeléctricas


    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-3.mb-4
      h3.text-white.mb-0.mx-3 Topología de la red

    p.mb-5 Escoger la topología inicial de la red depende esencialmente de varios aspectos como:
    .row.align-items-center.mb-5
      .col-lg-5.mx-auto
        img(src="@/assets/curso/temas/t1/f31.svg", alt="Persona manejando servidores").py-4
      .col-lg-6
        ul.lista-ul--separador
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Requerimientos del cliente.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Cantidad y ubicación de usuarios.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Crecimiento esperado de la red.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Estándares inalámbricos y de cableado.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Capacidad de expansión de la red.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Entorno de la red.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Dispositivos y servicios requeridos por la red.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Desempeño deseado.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Elegir recorrido simple desde el nodo y demás componentes para minimizar costos.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Facilitar detección de fallas.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Optimizar instalación y reconfiguración de la red.


    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-3.mb-4
      h3.text-white.mb-0.mx-3 Servicios

    .row.align-items-center.justify-content-between.mb-4
      .col-lg-7
        p El DHCP es una extensión del protocolo Bootstrap (BOOTP) desarrollado en 1985 para conectar dispositivos como terminales y estaciones de trabajo sin disco duro con un <i>bootserver</i>, del cual reciben su sistema operativo.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 El DHCP se desarrolló como solución para redes de gran envergadura y computadores portátiles, por ello complementa a BOOTP, entre otras cosas, por su capacidad para asignar automáticamente direcciones de red reutilizables y por la existencia de posibilidades de configuración adicionales.
      .col-lg-5.mx-auto
        img(src='@/assets/curso/temas/t1/f32.svg' alt='Wifi')

    p.mb-4 Para asignar direcciones con DHCP se toma el modelo cliente-servidor, donde el terminal o usuario solicita la configuración IP al servidor DHCP, que es quien asigna la respectiva dirección IP acompañada de la máscara de subred, puerta de enlace predeterminada, servidor DNS, y configuración proxy por WPAD (<i>Web Proxy Auto-Discovery Protocol</i>) necesarios para poder acceder a los servicios. La asignación de esta dirección dinámica es de carácter temporal mientras dura la conexión con el servicio solicitado, una vez se termina la conexión, esta dirección es liberada para ser asignada a otro usuario.

    h4 El servidor DHCP informa al <i>Domain Name System</i>

    p El servidor DHCP es el encargado de enviar la información al DNS al asignar una nueva dirección IP, la cual se asocia con su nombre de dominio correspondiente. El DHCP no es muy seguro, pues es de fácil manipulación por parte de atacantes a la red que desean apropiarse de la información sensible de sus usuarios.

    h4 Servidor NAT

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este servidor surge a raíz del crecimiento exponencial de terminales que día a día acceden a Internet, se usa para Traducción de Direcciones de Red con su sigla en inglés NAT o <i>Network Address Translation</i>, y con ello, permitir que los dispositivos de una red utilicen un rango de direcciones especiales (IP privadas) y para conectarse a Internet utilice una dirección IP única (IP pública). Se trata de una mejora o actualización en la que las redes grandes solo usarían una dirección IP y no gran cantidad de ellas.

    p.mb-5 En la siguiente figura podrá observar el funcionamiento de este servidor.

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 1
      span Funcionamiento del servidor NAT

    .row.justify-content-center.mb-5
      .col-xl-10
        img(src='@/assets/curso/temas/tema1/img23.png' alt='Funcionamiento servidor NAT').mx-auto.mb-2
        figcaption Nota. Página web Profesional review (s.f.).


    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-3.mb-4
      h3.text-white.mb-0.mx-3 Modos de funcionamiento para NAT

    p.mb-5 El servidor DHCP es el encargado de enviar la información al DNS al asignar una nueva dirección IP, la cual se asocia con su nombre de dominio correspondiente. El DHCP no es muy seguro, pues es de fácil manipulación por parte de atacantes a la red que desean apropiarse de la información sensible de sus usuarios.


    .bg-slyde-gradiente.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/img28.svg', alt='')
        .col-lg-8.my-3
          SlyderF.text-center.px-3(columnas="col-lg-6")(data-aos="fade-left")
            .tarjeta.bg-12263f.p-4
              img.img-a.img-t(src='@/assets/curso/temas/tema1/img24.svg' alt='', style="width:91px").mx-auto.mb-4
              h4 Estática
              p.mb-0 La dirección IP privada siempre se traduce en la misma dirección IP pública. Cualquier host dentro de la red será así visible desde Internet.
            .tarjeta.bg-12263f.bg12.p-4
              img.img-a.img-t(src='@/assets/curso/temas/tema1/img25.svg' alt='', style="width:91px").mx-auto.mb-4
              h4 Dinámica
              p.mb-0 A cada dirección IP privada le corresponde al menos una dirección IP pública de las que posee el <i>router</i>, así, cuando un host requiera una conexión a Internet el <i>router</i> asignará la dirección IP pública que no esté siendo usada. De este modo hay más seguridad.
            .tarjeta.bg-12263f.p-4
              img.img-a.img-t(src='@/assets/curso/temas/tema1/img26.svg' alt='', style="width:91px").mx-auto.mb-4
              h4 Sobrecarga
              p.mb-0 Aquí se mapean varias direcciones IP privadas por medio de una dirección IP pública, evitando así contratar más de una dirección IP pública, y se ahorran direcciones IPv4. Se le denomina también PAT (<i>Port Address Translation</i>) y es la más usada en los hogares.
            .tarjeta.bg-12263f.p-4
              img.img-a.img-t(src='@/assets/curso/temas/tema1/img27.svg' alt='', style="width:91px").mx-auto.mb-4
              h4 Solapamiento
              p.mb-0 Para evitar el conflicto de direcciones, si hay una dirección IP privada de una red es igual a una dirección IP pública que está en uso, el <i>router</i> reemplaza dicha dirección IP por otra.

    Separador

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 2
      span Ventajas y desventajas del servidor NAT

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.text-center Ventajas
            th Desventajas
        tbody
          tr
            td Ahorro de direcciones IPv4 al conectarse múltiples máquinas de una red a Internet, con una única dirección IP pública.
            td Mayor potencia de computación en el <i>router</i> para recalcular el Checksum TCP y UDP de cada paquete modificado.
          tr
            td Seguridad, pues las máquinas conectadas a la red mediante NAT no son visibles desde el exterior.
            td Incompatibilidad de NAT con varias aplicaciones y protocolos que no permiten al <i>router</i> modificar los paquetes.
          tr
            td Mientras se llevan a cabo tareas de mantenimiento de la red solo es necesario modificar la tabla de reenvío de un <i>router</i> para desviar todo el tráfico.
            td

    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-3.mb-4
      h3.text-white.mb-0.mx-3 Instalación

    .row.align-items-center.justify-content-between.mb-4
      .col-lg-7
        p Para realizar la correcta instalación de la red inalámbrica es vital realizar un aprestamiento o verificación del entorno, los componentes y herramientas necesarios, aplicando una lista de chequeo que verifique la disponibilidad, estado y características de estos, con la debida antelación (4 a 8 días) para poder tomar los correctivos a los que haya lugar. Igualmente, al menos un día antes o el mismo día muy temprano se debe realizar el alistamiento de los elementos, materiales, herramientas necesarias para la instalación de todos y cada uno de los dispositivos como antenas, repetidores adaptadores, <i>routers</i> y puntos de acceso.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0  Una vez cumplidos los anteriores aspectos se procede a realizar la instalación de los componentes de la red inalámbrica por parte del personal idóneo, que cumpla con todos los requisitos y normas vigentes para dicha labor.
      .col-lg-4.mx-auto
        img(src='@/assets/curso/temas/t1/f39.svg' alt='')

    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-3.mb-4
      h3.text-white.mb-0.mx-3 Antenas

    p.mb-5 Una antena es un sistema conductor, metálico, con capacidad de radiar y recibir ondas electromagnéticas del espacio. Estos dispositivos adaptan ondas guiadas desde conductores o guías, al espacio libre.

    .row.justify-content-center
      .col-xl-7
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2
          span Representación de una antena

        img(src='@/assets/curso/temas/tema1/img29.svg' alt='').mx-4


    p.mb-5 #[b Existen varios tipos de antenas, entre ellos:]


    .row.justify-content-center.mb-5
      .col-xl-9
        TabsA.color-alterno.mb-5
          .tarjeta.color-acento-contenido--borde.fcb.p-4(titulo="Direccionales")
            h4 Direccionales
            p Aquellas que orientan la señal en una determinada dirección, con un haz estrecho de largo alcance.
          .tarjeta.color-acento-contenido--borde.fcb.p-4(titulo="Omnidireccionales")
            h4 Omnidireccionales
            p Este tipo de antenas irradian la señal con un haz amplio, de corto alcance y dirigido hacia todas direcciones.
          .tarjeta.color-acento-contenido--borde.fcb.p-4(titulo="Sectoriales")
            h4 Sectoriales
            p Irradian la señal con un haz más amplio que las direccionales; se consideran la unión de una antena omni y de una direccional.

    p.mb-5 La ganancia de una antena es la relación entre la densidad de potencia radiada en una dirección y la densidad de potencia que radia una antena isotrópica, en la misma distancia y potencia entregadas a la antena. La antena isotrópica es una antena puntual que no se puede realizar en la práctica y que radia de igual manera en todas las direcciones; la ganancia se mide en dBi (decibeles isotrópicos).


    .row.justify-content-center.mb-5
      .col-xl-7
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3
          span Representación de antena isotrópica

        img(src='@/assets/curso/temas/tema1/img30.svg' alt='').mx-4

    p.mb-5 La pérdida de la señal puede ser ocasionada por varios motivos, entre los cuales se puede enumerar los siguientes:

    .row.justify-content-center.mb-5
      .col-xl-8
        .bg-e9e2ff.p-4
          ul.lista-ul
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Cable o guía de onda roto o desconectado.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span El equipo de transmisión o amplificador de la señal no envía la potencia por daño o se encuentra apagado.
            li
              i.fas.fa-play.texto-acento-contenido.me-4
              span Antena descompuesta, rota o deteriorada.


    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-3.mb-4
      h3.text-white.mb-0.mx-3 Instalación de los adaptadores y el #[em  router]

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row
        img(src='@/assets/curso/temas/t1/f42b.svg' alt='paso 1').figpasos
        h4 Paso 1
        p Conectar el adaptador de red USB a un puerto USB que esté disponible, sin necesidad de apagar el computador.
      .row
        img(src='@/assets/curso/temas/t1/f43b.svg' alt='paso 2').figpasod
        h4 Paso 2
        p Encender el computador e instalar los controladores (<i>drivers</i>) de la tarjeta de red. Si el sistema operativo es <i>Windows</i>, este reconocerá el <i>hardware</i> recién agregado y abrirá una ventana de diálogo «nuevo <i>hardware</i> encontrado», el cual se debe completar. Luego, insertar el CD de configuración y seguir el asistente para terminar la instalación. El <i>software/drivers</i> de la tarjeta de red USB se puede descargar desde el sitio web del fabricante.
      .row
        img(src='@/assets/curso/temas/t1/f44b.svg' alt='paso 3').figpasoi
        h4 Paso 3
        p Una vez que la tarjeta de red se ha instalado con éxito se deben establecer los valores de configuración de la tarjeta como dirección IP, máscara de subred, puerta de enlace o <i>gateway</i>, y servidores DNS (se recomienda ponerse en contacto con el administrador de red para comprobar los valores de configuración).
      .row
        img(src='@/assets/curso/temas/t1/f45b.svg' alt='paso 4').figpasoe
        h4 Paso 4
        p Reiniciar el equipo si es necesario o en su defecto verificar si el adaptador de red está listo para su uso.


    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-3.mb-4
      h3.text-white.mb-0.mx-3 Instalación del #[em <i>router</i>]

    p.mb-5 Este dispositivo posee puertos RJ45 para red LAN, en los cuales se deben conectar los cables patch cord hacia los dispositivos cableados y red WAN, donde se debe colocar el cable patch cord de alimentación a Internet del ISP, igualmente, se debe colocar la antena para acceso inalámbrico de los dispositivos a la red WLAN.  Por tratarse de un dispositivo activo se debe conectar el respectivo cable o adaptador de alimentación para su funcionamiento y, proceder a configurar las características básicas y necesarias como elemento de la red.

    .bg-slyde-gradiente-2.mb-5
      p.mb-4.pt-4 En el siguiente video podrá observar el procedimiento para la configuración de dispositivos.
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/ZS4WEUHs3B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Configuración IP del equipo


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
