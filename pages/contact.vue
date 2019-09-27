<template>
  <div>
    Hola desde contacto
    <nuxt-link to="/">Inicio</nuxt-link>
    <input type="email" :v-model="form.email" />
    <button @click="suscribe" class="btn btn-info">Enviar</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        email: '',
        newsletter_id: ''
      }
    }
  },
  methods: {
    suscribe() {
      const url = 'https://newsletters.academlo.com/api/v1/users'
      const data = {
        email: 'prueba@gmail.com',
        newsletter_id: 2
      }
      axios
        .post(url, data)
        .then((response) => {
          console.log(response.data)
          alert('Se registró exitosamente')
        })
        .catch(() => {
          alert('Tuvimos un error')
        })
    }
  }
}
</script>
