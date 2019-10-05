<template>
  <div>
    <!-- <navigation /> -->
    <nuxt />
    <!-- <pie /> -->
  </div>
</template>
<script>
// import Navigation from '@/components/Navigation'
// import Pie from '@/components/Pie'

export default {
  // components: {
  //   Navigation,
  //   Pie
  // }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
}
section {
  width: 84%;
  margin: auto;
}

.feautured,
.categories {
  position: relative;
  padding: 1rem;
}
#section-product {
  width: 100%;
}
.pie {
  width: 100%;
  display: inline-grid;
}
.width_100 {
  max-width: 100%;
}
.max_width_75 {
  max-width: 75%;
}
.min_height_600 {
  min-height: 600px;
}
.min_height_450 {
  min-height: 450px;
}
.min_height_350 {
  min-height: 350px;
}
.height_350 {
  height: 350px;
}
.width_90 {
  width: 90%;
}
.min_height_400 {
  min-height: 400px;
}
.contenedor_card {
  overflow-y: scroll;
}
.contenedor_card::-webkit-scrollbar {
  width: 8px; /* Tamaño del scroll en vertical */
  height: 8px; /* Tamaño del scroll en horizontal */
  /* display: none;  Ocultar scroll */
}
.contenedor_card::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}
/* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
.contenedor_card::-webkit-scrollbar-thumb:hover {
  background: #b3b3b3;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}
/* Cambiamos el fondo cuando esté en active */
.contenedor_card::-webkit-scrollbar-thumb:active {
  background-color: #999999;
}
</style>
