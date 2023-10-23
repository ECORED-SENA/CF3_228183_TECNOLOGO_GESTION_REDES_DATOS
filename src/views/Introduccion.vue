<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .m-n.p-5(style="background-color: #dde6fe; margin-bottom: 300px")
      .row.justify-content-center.align-items-center.mb-5
        .col-auto.mb-lg-0.mb-3: img(src='@/assets/curso/temas/intro/intro1.svg', alt='')
        .col: p Aquí comienza el estudio del componente formativo #[b “Configuración y gestión de dispositivos inalámbricos”]; explore la información del video que se muestra enseguida, la cual le contextualiza sobre los aspectos más importantes de los temas por desarrollar. #[b ¡Adelante!]
      figure(style="margin-bottom: -300px")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
