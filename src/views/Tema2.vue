<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Configuración de la red


    p Una interfaz es una herramienta que permite dar acceso directo a la configuración, sistema operativo y demás funcionalidades de cada dispositivo. Generalmente, se trata de una interfaz gráfica que, por medio de un monitor, pantalla o terminal, da acceso a una serie de menús e iconos para que sean utilizados por el usuario en la interacción con los dispositivos de la red que necesitan ser configurados o actualizados para su correcto funcionamiento dentro del sistema.

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
