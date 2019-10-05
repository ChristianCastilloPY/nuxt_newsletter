<template>
  <div class="container mt-5">
    <hr />
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="Password:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.password"
          type="password"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">
        Submit
      </b-button>
    </b-form>
    <div v-if="!valor">
      Esto es verdadero
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      valor: false
    }
  },
  methods: {
    ...mapMutations(['login']),
    onSubmit() {
      const endPoint = 'https://newsletters.academlo.com/api/v1/auth/login'
      axios.post(endPoint, this.form).then((response) => {
        const user = response.data
        this.login(user)
        this.$router.push('/panel/dashboard')
      })

      alert('La sesión se inició correctamente')
    }
  }
}
</script>
