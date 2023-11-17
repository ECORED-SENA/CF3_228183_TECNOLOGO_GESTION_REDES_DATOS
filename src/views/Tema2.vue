<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Configuración de la red


    p(data-aos='fade-right') Una interfaz es una herramienta que permite dar acceso directo a la configuración, sistema operativo y demás funcionalidades de cada dispositivo. Generalmente, se trata de una interfaz gráfica que, por medio de un monitor, pantalla o terminal, da acceso a una serie de menús e iconos para que sean utilizados por el usuario en la interacción con los dispositivos de la red que necesitan ser configurados o actualizados para su correcto funcionamiento dentro del sistema.

    .row.justify-content-center.mb-5
      .col-lg-4.d-none.d-lg-block
        figure(data-aos='fade-right')
          img(src="@/assets/curso/temas/tema2/img1.png")
      .col-lg-8
        .p-4.bg-ffebf0(data-aos='fade-right')
          p.mb-4 #[strong Algunas de las características que posee una interfaz son:]
          ul.lista-ul
            li(data-aos='fade-right')
              i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
              span Facilidad de uso, aprendizaje y comprensión.
            li(data-aos='fade-right')
              i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
              span Representación fija y permanente del área de trabajo o fondo.
            li(data-aos='fade-right')
              i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
              span Fácil identificación del objeto o dispositivo de interés.
            li(data-aos='fade-right')
              i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
              span Diseño ergonómico con menús, barras de acción e iconos de fácil acceso.
            li(data-aos='fade-right')
              i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
              span Operaciones rápidas, incrementales y reversibles, con efectos inmediatos.
            li(data-aos='fade-right')
              i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
              span Variedad de herramientas de ayuda y consulta.

    p.mb-5(data-aos='fade-right') Los tipos de interfaz de usuario más conocidos son:
    .row.align-items-center.mb-5
      .col-xxl-9.col-xl-8
        .row.justify-content-center
          .col-lg-11(data-aos='fade-right')
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/f2.svg' alt='')
              .tarjeta.bg-d3dfff
                .p-4
                  h3 Interfaz GUI
                  p Usadas para aplicaciones web, móviles, escritorio y juegos que permiten interacción al usuario.
          .col-lg-11(data-aos='fade-right')
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/f3.svg' alt='')
              .tarjeta.bg-d3dfff
                .p-4
                  h3 Interfaz de usuario de pantalla táctil
                  p Diseñadas para pantallas táctiles, sin botones físicos, se encuentran en #[i smartphone], #[i tablets], cajeros automáticos, etc.

          .col-lg-11(data-aos='fade-right')
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/f4.svg' alt='')
              .tarjeta.bg-d3dfff
                .p-4
                  h3 Interfaz natural de usuario (NUI)
                  p En estos casos se interactúa con un sistema, aplicación y demás, sin utilizar dispositivos de entrada como ratón, teclado y lápiz óptico, a cambio de estos se utilizan las manos o las yemas de los dedos.
      .col-xxl-3.col-xl-4.d-none.d-xl-block(data-aos='fade-right')
        img(src="@/assets/curso/temas/tema2/img2.svg", alt="")


    p.mb-5(data-aos='fade-right') El video que se propone enseguida, detalla el proceso de configuración de <i>router</i> TPLINK con frecuencia TL-MR3220:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/VECnk2krCG4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Configuración de <i>router</i> TP LINK TL MR3220


    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-3.mb-4(data-aos='fade-right')
      h3.text-white.mb-0.mx-3 Protección de la red inalámbrica

    .row.align-items-center.justify-content-between.mb-5
      .col-lg-6
        p(data-aos='fade-right') Una red inalámbrica es más vulnerable, pues la señal se difunde en el espacio libre, permitiendo que los usuarios con equipos cercanos puedan acceder a la información almacenada en los equipos de la red y usar la conexión a Internet.
        .cajon.color-acento-contenido.p-4.mb-4(data-aos='fade-right')
          p.mb-0 Se debe cambiar el nombre de usuario, contraseña y SSID predeterminados para proteger el enrutador. Es importante configurar una contraseña para la red inalámbrica, dependiendo del tipo de protección deseada por parte del usuario, para ello existen entre otros tres tipos de seguridad o protección en el menú <i>wireless security</i> que son:

        ul.lista-ul--separador
          li(data-aos='fade-right')
            i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
            span WPA/WPA2 personal
          li(data-aos='fade-right')
            i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
            span WPA/WPA2 <i>enterprise</i>
          li(data-aos='fade-right')
            i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
            span WEP

      .col-lg-6
        img(src='@/assets/curso/temas/tema2/img3.svg' alt='')(data-aos='fade-right')


    .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-3.mb-4(data-aos='fade-right')
      h3.text-white.mb-0.mx-3 Autenticación

    p(data-aos='fade-right') La autenticación de sistema abierto consta de dos comunicaciones:

    .row.justify-content-between
      .col-xl-7
        .bg-border
          .step(data-aos='fade-right')
            .step-number 01
            .step-description
              span En primer lugar, se envía una solicitud de autenticación desde el dispositivo móvil que contiene el ID de la estación (normalmente la dirección MAC).

          .step.mb-3(data-aos='fade-right')
            .step-number 02
            .step-description
              span A continuación, una respuesta de autenticación del PA/enrutador con un mensaje de éxito o de fallo.

          .step(data-aos='fade-right')
            .step-description
              span Con la autenticación de clave compartida o frase de contraseña se configura manualmente tanto en el dispositivo móvil como en el PA/enrutador.
          br
      .col-xl-5(data-aos='fade-right')
        img(src="@/assets/curso/temas/tema2/img4.svg", alt="", style="max-width: 332px").mx-auto

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1. Seguridad, <i>firewall</i>, filtros, aplicaciones

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se debe tener en cuenta que son muchos los ataques que pueden existir para una red inalámbrica. Así mismo, que una gran cantidad de puertos se deben bloquear para minimizar estos riesgos, con la aplicación de normativas, protocolos, estándares y demás medidas que sean necesarias.

    p.mb-5(data-aos='fade-right') Un <i>firewall</i> funciona como una barrera entre Internet y otras redes públicas y los dispositivos. Todo el tipo de tráfico que no esté en la lista permitida por el <i>firewall</i> no entra ni sale de los dispositivos de la red; para ello contiene un conjunto de reglas predefinidas que permiten:

    .row.align-items-center
      .col-xl-7
        ul.lista-ul--separador
          li(data-aos='fade-right')
            i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
            span Autorizar una conexión (<i>allow</i>).
          li(data-aos='fade-right')
            i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
            span Bloquear una conexión (<i>deny</i>).
          li(data-aos='fade-right')
            i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
            span Redireccionar un pedido de conexión sin avisar al emisor (<i>drop</i>).
      .col-xl-5.d-none.d-xl-block
        img(src="@/assets/curso/temas/tema2/img6.svg", alt="", style="max-width: 350px").mx-auto

    p.mb-5(data-aos='fade-right') También existe el <i>firewall de software</i> que se puede instalar y utilizar libremente o con licencia, en los dispositivos de la red o con acceso a redes que se encargan de monitorear y bloquear, siempre que sea necesario, el tráfico sospechoso o de Internet.

    .row.align-items-center.mb-5
      .col-xl-5.d-none.d-xl-block(data-aos='fade-right')
        img(src="@/assets/curso/temas/tema2/img7.svg", alt="", style="max-width: 350px").mx-auto
      .col-xl-7
        ul.lista-ul--separador
          li(data-aos='fade-right')
            i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
            span Los gratuitos se incluyen con el sistema operativo y normalmente son para uso personal.

          li(data-aos='fade-right')
            i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
            span Facilita la integración con otros productos de seguridad.

          li(data-aos='fade-right')
            i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
            span No es necesario #[em hardware] para su instalación.

          li(data-aos='fade-right')
            i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
            span Un #[em firewall] comercial incluye protecciones extra, más control sobre su configuración y funcionamiento.


    .cajon.color-acento-contenido.p-4.mb-5(data-aos='fade-right')
      p.mb-0 Por el contrario, un <i>firewall</i> por <i>hardware</i> viene normalmente instalado en los <i>router</i> que se utilizan para acceder a Internet. Por tanto, todos los dispositivos que se conecten a un <i>router</i> estarán protegidos por un <i>firewall</i> que está incluido en el <i>router</i>.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2. Características adicionales de las redes

    p.mb-5(data-aos='fade-right') Las redes inalámbricas tienen diversas características dependiendo del rango de frecuencias, el medio y la velocidad de transmisión, entre las cuales están:

    TabsC.color-acento-contenido.mb-5(data-aos='fade-right')
      .bg-fbfaff.py-3.py-md-4(titulo="Ondas de radio")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/img8.svg", alt="", style="max-width: 315px").p-4.mx-auto
          .col-md-6.mb-4.mb-md-0
            h5 Ondas de radio
            p Son ondas electromagnéticas (combinación de campos eléctricos y magnéticos oscilantes, que se propagan a través del espacio, transportando energía de un lugar a otro). Son omnidireccionales, así que no son necesarias antenas parabólicas. La transmisión no es sensible a las atenuaciones producidas por la lluvia, ya que se opera a frecuencias que no son demasiado elevadas.
      .bg-fbfaff.py-3.py-md-4(titulo="Microondas por satélite")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/img9.svg", alt="", style="max-width: 315px").p-4.mx-auto
          .col-md-6.mb-4.mb-md-0
            h5 Microondas por satélite
            p Se hacen enlaces de dos o más estaciones terrestres, a las cuales se denomina estaciones base. El satélite recibe la señal (denominada señal ascendente) en una banda de frecuencia, la amplifica y la retransmite en otra banda (señal descendente). Cada satélite opera en unas bandas concretas. Las fronteras frecuenciales de las microondas, tanto terrestres como por satélite, con los infrarrojos y las ondas de radio de alta frecuencia, se mezclan suficientemente, de modo que puede haber interferencias con las comunicaciones en determinadas frecuencias.
      .bg-fbfaff.py-3.py-md-4(titulo="Infrarojos")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/img10.svg", alt="", style="max-width: 344px").p-4.mx-auto
          .col-md-6.mb-4.mb-md-0
            h5 Infrarojos
            p Hay enlaces de transmisores y receptores que modulan la luz infrarroja no coherente. Deben estar alineados directamente o con una reflexión en una superficie. Las señales infrarrojas trabajan en la banda de 300 GHz hasta 384 THz.
      .bg-fbfaff.py-3.py-md-4(titulo="Microondas terrestres")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/img11.svg", alt="", style="max-width: 440px").p-4.mx-auto
          .col-md-6.mb-4.mb-md-0
            h5 Microondas terrestres
            p Estas se utilizan en antenas parabólicas con un diámetro aproximado de unos tres metros. Tienen una cobertura de kilómetros, pero con la necesidad de tener perfectamente alineados al emisor con el receptor; por ello, se les denomina enlaces punto a punto en distancias cortas.

    p.mb-5(data-aos='fade-right') #[strong En concreto, dentro de las características adicionales, se encuentran:]

    .row.justify-content-center(data-aos='fade-right')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Control parental")
            .col-12
              p Se realiza para impedir o limitar el acceso al manejo de dispositivos destinados a la reproducción o recepción de imágenes e información, de determinados contenidos para los menores de edad; determinando con exactitud los dispositivos que se deben bloquear o proteger.
          .row(titulo="Acceso restringido")
            .col-12
              p Dado que el acceso a Internet de estudiantes, niños, adolescentes, adultos mayores o población sensible es, hoy en día, muy fácil. Cada vez, crece el acceso a edades más tempranas mediante dispositivos multimedia como <i>smartphones</i> o <i>tablets</i>.
          .row(titulo="Educación digital")
            .col-12
              p Es imprescindible una buena educación digital. Con ella, se mitigan las posibilidades de riesgos del consumo de información, peligros propios de la conectividad, distorsión de la intencionalidad de las redes y servicios tecnológicos, entre otras.
          .row(titulo="Filtros de control")
            .col-12
              p Otro apoyo es el uso de filtros y herramientas de control parental que protejan de sitios y contenidos inseguros e inapropiados para ciertas edades o cierto tipo de personas. Por lo tanto, servirá para limitar el acceso a determinados contenidos en Internet, limitar el tiempo que se usa para navegar o la naturaleza de la información que se intercambia en Internet.

      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/tema2/img12.svg", alt="").p-4.mx-auto


    .row.align-items-center.justify-content-between.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right')
        img(src="@/assets/curso/temas/tema2/img13.svg", alt="").p-4.mx-auto
      .col-lg-8(data-aos='fade-right')
        p.mb-4 Está claro, entonces, que se puede modificar los DNS de un equipo para que se filtre la información a través de ellos y llegue de manera segura, pero como alternativa a ello, hay otros métodos para instaurar un sistema de control parental cuando se tienen computadores que usan Windows como sistema operativo.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Si se utiliza Windows 10, hay que saber que tiene su propio sistema de control parental, al cual se puede acceder desde la configuración y también desde una cuenta Microsoft, a través de cualquier navegador. La idea es asignar a cada menor de la casa una cuenta de Windows y arrancar el computador desde esa cuenta. Las cuentas de adultos o sin restricciones se protegen mediante una contraseña alfanumérica y las cuentas de los menores estarán protegidas a través de un PIN de 4 dígitos.

    p.mb-5(data-aos='fade-right') El siguiente video, detalla generalidades y aspectos clave sobre la configuración del control parental. Chequéelo con atención:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/FHupKR_VMks" title="Configuración del control parental" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Configuración del control parental

    p(data-aos='fade-right') Como es de esperar, este tipo de sistema de control parental de Windows 10 solo funciona en navegadores Microsoft Edge y Explorer; para evitar el uso de otro navegador se puede bloquear como se mencionó antes o, también, instalar el control parental del que también disponen Google Chrome o Mozilla Firefox.

    p.mb-5(data-aos='fade-right') #[strong Estas son algunas generalidades que, sobre el control parental de Windows 10, usted debe tener presentes:]

    .row.justify-content-center.mb-5(data-aos='fade-right')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Configuración de acceso")
            .col-12
              p La opción que ofrece el control parental de Windows 10 es la de configuración de acceso a contenidos multimedia, aplicaciones y juegos. Todos los contenidos multimedia como canales de televisión, películas, etc., tienen una clasificación de edad para su visionado, así como los juegos tienen su propio sistema de clasificación por edad en cada país.
          .row(titulo="Límites de edad")
            .col-12
              p Se introduce el límite de edad y el explorador solo mostrará contenidos hasta esa edad. Para edades mayores se mostrará el mensaje de bloqueo por control parental y el niño o menor de edad, no podrá acceder a ellos. Otro dato importante es que se puede usar también este tipo de control en consolas XBOX, ya que hacen parte de este gigante tecnológico: se puede bloquear el uso de la consola a ciertas horas, establecer una cuota de tiempo de uso o, incluso, una franja horaria de funcionamiento.
          .row(titulo="Control de servicios de pago")
            .col-12
              p De la mano de este filtro se puede también controlar el dinero que se gasta desde una cuenta en la tienda Microsoft. Este tipo de cuentas son débito: se ingresa una cantidad en la cuenta, de la que se dispondrá para gastarla, tanto en la consola como en el computador y en los contenidos que se hayan permitido. Este sistema de control parental también da la opción de restringir el tipo de transacciones por efectuar.
          .row(titulo="Gratuidad del control parental")
            .col-12
              p Sin duda, si se dispone de un equipo con Windows 10, el control parental que ha desarrollado Microsoft es de lo mejor y más completo que se puede encontrar en el mercado, y de manera gratuita. Este viene de serie con la licencia de Windows 10. Si no utiliza Windows 10 o quiere alternativas al control parental de Microsoft, la opción más clara es usar programas o aplicaciones específicamente diseñados para este fin.
          .row(titulo="Otras opciones")
            .col-12
              p Existe una herramienta para instalar en el computador que se llama Qustodio. Está disponible tanto para Windows, MacOS, Android y iOS, dispone de dos versiones: una gratuita y otra de pago; viene diseñada tanto para ámbitos familiares como escolares. Permite controlar tiempos de conexión, filtros de contenido prohibido e inapropiado. Incluso, cuenta con restricción de palabras no apropiadas.
          .row(titulo="Personalización del control")
            .col-12
              p Se pueden personalizar filtros de contenido y ver la actividad del computador que se quiera. Para ampliar la versión de pago, se ofrecen informes mucho más detallados, bloqueo total de pornografía, bloqueo de aplicaciones, juegos y contenidos, monitorización de YouTube, seguimiento en redes sociales, control de llamadas y SMS, geolocalización por GPS y un botón de pánico instalable en el #[i smartphone] del usuario que podrá usar en cualquier momento para pedir ayuda.

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3. Red #[em wifi] para invitados

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos='fade-right')
        p Con seguridad, son varias las ocasiones en que las personas como usted se han encontrado en la situación de que amigos o familiares piden la clave del #[em wifi]. Una visita, por ejemplo, quiere conectarse a la red.
        p Ahora bien, en ocasiones puede ser un problema, puede ocurrir que simplemente no se recuerde la clave o que se quiera, sencillamente, mantener la seguridad de la red o, incluso, poner cierto límite y que no se consuma todo el ancho de banda. Esto último especialmente es interesante en conexiones más lentas, como puede ser ADSL, en la que los recursos son más limitados.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right')
        figure
          img(src="@/assets/curso/temas/tema2/img15.svg")


    .row.justify-content-center.mb-5
      .col-lg-8
        .p-4.bg-ffebf0
          ul.lista-ul
            li(data-aos='fade-right')
              i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
              span Lo primero que hay que tener en cuenta es que:

            li(data-aos='fade-right')
              i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
              span No en todos los <i>router</i> funciona de la misma manera.

            li(data-aos='fade-right')
              i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
              span No obstante, sí se tiene una función similar.

            li(data-aos='fade-right')
              i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
              span En la mayoría de los dispositivos modernos está disponible esta opción de conexión.

            li(data-aos='fade-right')
              i.fas.fa-play.texto-acento-contenido(style="font-size: 9px")
              span Ya se sabe que evitar la pérdida de señal wifi es vital.

    .bg-slyde-gradiente-2.mb-5
      p.mb-4.pt-4(data-aos='fade-right') #[strong El video que se muestra enseguida, expone las generalidades de configuración de #[em wifi] para invitados:]

      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/tm4_SzOVbFQ" title="Configuración de una red de invitados" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Configuración de una red de invitados

    p.mb-5(data-aos='fade-right') Si se realiza una prueba de velocidad con una conexión ADSL en la que se tiene a toda la familia conectada y viendo videos de YouTube, por ejemplo:

    .row.mb-5.justify-content-center.mb-5
      .col-xl-11
        .row.justify-content-center
          .col-xl-4.col-lg.mb-5.mb-lg-0(data-aos='fade-right')
            .tarjeta-avatar.tarjeta-avatar-p50
              img(src='@/assets/curso/temas/tema2/img16.svg' alt='' style="width: 100px")
              //- .tarjeta debe ir acompañado de una de una de estas clases =>
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-CFC0FA
                .p-4
                  p Los datos no son los que se desearían.

          .col-xl-4.col-lg.mb-5.mb-lg-0(data-aos='fade-right')
            .tarjeta-avatar.tarjeta-avatar-p50
              img(src='@/assets/curso/temas/tema2/img16.svg' alt='' style="width: 100px")
              //- .tarjeta debe ir acompañado de una de una de estas clases =>
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-CFC0FA
                .p-4
                  p En algunos modelos incluso se puede limitar el ancho de banda.

          .col-xl-4.col-lg.mb-5.mb-lg-0(data-aos='fade-right')
            .tarjeta-avatar.tarjeta-avatar-p50
              img(src='@/assets/curso/temas/tema2/img16.svg' alt='' style="width: 100px")
              //- .tarjeta debe ir acompañado de una de una de estas clases =>
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-CFC0FA
                .p-4
                  p Se puede asignar que únicamente el 20% del total de la red (o lo que se quiera) esté disponible en la red #[em wifi] para invitados.

    p.mb-5(data-aos='fade-right') De esta manera se puede crear una red #[em wifi] para invitados. Una forma práctica para que las visitas se puedan conectar a la red sin revelar la clave principal, ni poner en peligro el resto de los equipos conectados a la red.

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4. Prioridad de medios

    p.mb-5(data-aos='fade-right') Cambie la prioridad de los adaptadores de red en Windows 10 desde el centro de redes de este sistema operativo. Lo primero que se debe hacer es abrir el centro de redes y recursos compartidos; para ello, en el siguiente video se explicará la configuración de la prioridad de medios.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/CpiJcyv9s9E" title="Configuración de la prioridad de medios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Configuración de la prioridad de medios

    Separador

    #t_2_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.5. Reenvío de puertos

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es posible que una aplicación determinada o, por ejemplo, un juego en un momento concreto pida algo denominado reenvío de puertos, sin ese reenvío de puertos no podría haber conexión entre la aplicación o juego y el tráfico entrante o datos ingresados en Internet. No se puede hacer uso de determinadas funciones con las que cuenta un <i>software</i> determinado.
        br
        br
        | Este problema se puede solucionar si se configura el reenvío de puertos en Windows 10; es un proceso sencillo y simplemente hay que llevar a cabo una serie de pasos que se explican en el siguiente video:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/K6of_PrMUtY" title="Reenvío de puertos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Reenvío de puertos

    p.mb-5(data-aos='fade-right') Cuando se haya creado la regla se unirá a todas las que ya estaban presentes. Se puede modificar, hacer que se aplique solo a unos determinados programas o servicios, etc. En definitiva, siguiendo estos pasos que se han mencionado se pueden reenviar puertos en Windows 10 en caso de que una aplicación o servicio pida hacerlo.

    .cajon.color-acento-contenido.p-4.mb-4(data-aos='fade-right')
      p.mb-0 Finalmente, todo lo indicado anteriormente es un proceso sencillo, rápido y que se puede lograr a través de la propia configuración del sistema operativo, sin tener que instalar nada adicional. Por otra parte, es necesario recordar la importancia de contar con herramientas de seguridad; un buen antivirus y <i>firewall</i> pueden evitar la entrada de amenazas. En este sentido, se tiene la posibilidad de hacer uso de Windows Defender, que está disponible en el sistema operativo de Microsoft de forma gratuita.

</template>

<script>
export default {
  name: 'Tema2',
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
