<template>
  <div>
    <navigation />
    <section>
      <!-- subscribee -->
      <br />
      <h3 class="row justify-content-center">
        Real news, curated by real humans
      </h3>
      <h4 class="text-muted row justify-content-center">
        Packed with the trends,news & links you need to be smart,informed,and
        ahead of the curve
      </h4>
      <div class="row">
        <div
          v-for="(card, index) in cardstag.newsletters"
          :key="index"
          class="col-md-3 mt-4"
          style="min-width: 23rem"
        >
          <!-- Subscribe -->
          <br />

          <div
            v-if="
              cardstag.newsletters[index].subscribed >=
                cardstag.newsletters[index].target
            "
            class="card"
            style="width: 25rem;
          "
          >
            <br />
            <div class="row">
              <img
                :src="card.image"
                class="card-img rounded-circle"
                style="width:8rem; margin-left:10rem"
              />
              <h6
                class="card p-1 col-2"
                style="margin-left:3rem;height:50%;color:orange"
              >
                DAILY
              </h6>
            </div>
            <div class="card-body">
              <h4 class="card-title text-center">{{ card.title }}</h4>
              <p class="card-text text-muted mx-2 text-center">
                {{ card.description }}
              </p>
              <br />
              <div
                href="#"
                class="btn btn-light p-3"
                style="width:22rem;"
                @click="alertDisplay(index)"
              >
                <fa :icon="['fas', 'envelope']" style="color:orange" />
                Subscribe >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- GET IN TOUCH -->
      <div class="card text-center mt-5" style="width: 25rem;">
        <br />
        <h5>
          <strong>Interested in sponsoring a newsletter?</strong>
        </h5>
        <img
          src="https://jmh.furniture/wp-content/uploads/2019/05/orange1.jpg"
          class="card-img mx-auto rounded-circle"
          style="width:8rem;"
        />
        <h5 class="text-muted">[Your logo here]</h5>
        <br />
        <a href class="btn btn-warning" style="background-color:orange"
          >GET IN TOUCH</a
        >
      </div>
      <!-- ------------------------------------------------------------------------------------------------------------------ -->
      <!-- voteee  CARD-->
      <br />
      <h4 class="row justify-content-center">Up-and-coming</h4>
      <h5 class="text-muted row justify-content-center">
        If these newsletters reach their goals (or get a sponsorship), we'll
        bring on expert writers and launch them. Vote for all your favorites.
      </h5>
      <div class="row">
        <div
          v-for="(card, index) in cardstag.newsletters"
          :key="index"
          class="col-md-3 mt-4"
          style="min-width: 28rem"
        >
          <!-- Vote -->
          <div
            v-if="
              cardstag.newsletters[index].subscribed <
                cardstag.newsletters[index].target
            "
            style="text-decoration:none;color:black"
          >
            <br />
            <div class="card col-md-12" style="width: 30rem;">
              <div class="row no-gutters">
                <div class="w-50 mx-auto col-md-3">
                  <br />
                  <img :src="card.image" class="card-img rounded-circle" alt />
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <h5 class="card-title">{{ card.title }}</h5>
                    <h6 class="card-text text-muted">{{ card.description }}</h6>
                  </div>
                </div>
                <br />
                <!--boton Vote -->
                <div class="card-body">
                  <button
                    class="btn btn-light"
                    style="width:100%;"
                    @click="incrementar(index)"
                  >
                    <div class="d-flex justify-content-between">
                      <div>
                        <font-awesome-icon
                          icon="envelope"
                          style="color:orange"
                        ></font-awesome-icon
                        >Vote
                      </div>
                      <div>></div>
                    </div>
                  </button>
                  <br />
                  <br />
                  <div class="progress" style="width:100%;height:7%">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style="width:75%;"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div>
                      <h6>
                        <small>SUBSCRIBED</small>
                      </h6>
                      {{ contador[index] }}
                    </div>
                    <div>
                      3000
                      <H6>
                        <small>TARGET</small>
                      </H6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5 class="card col-2 text-muted">
        voto total:
        {{ contador1 }}
      </h5>
      <!-- PROPOSE A NEWSLETTER -->
      <div class="card text-center mt-5 mb-5" style="width: 25rem;">
        <br />
        <h5>
          <strong>Have an idea for a newsletter?</strong>
        </h5>
        <img
          src="https://jmh.furniture/wp-content/uploads/2019/05/orange1.jpg"
          class="card-img mx-auto rounded-circle"
          style="width:8rem;"
        />
        <br />
        <a href class="btn btn-warning" style="background-color:orange"
          >Propose a newsletter</a
        >
      </div>
    </section>
    <pie />
  </div>
</template>

<script>
import axios from 'axios'
import Navigation from '@/components/Navigation'
import Pie from '@/components/Pie'

export default {
  components: {
    Navigation,
    Pie
  },
  data() {
    return {
      cardstag: [],
      contador: [0, 2, 4],
      contador1: 0,
      form: {
        email: '',
        newsletter_id: 2
      },
      correo: ''
    }
  },
  mounted() {
    this.getCards()
  },
  methods: {
    incrementar(index) {
      this.contador1 = this.contador1 + 1
      this.contador[index] = this.contador[index] + 1
    },
    alertDisplay(index) {
      this.$swal({
        html:
          '<div class="row">' +
          '<img ' +
          'src=' +
          this.cardstag.newsletters[index].image +
          'class="card-img rounded-circle" style="width:8rem; margin-left:12rem;border-radius: 50%"/>' +
          '<h6 class="card p-1 col-2" style="margin-left:3rem;height:50%;color:orange">DAILY</h6>' +
          ' </div>' +
          '<div class="card-body">' +
          '<h4 class="card-title text-center">' +
          this.cardstag.newsletters[index].title +
          '</h4>' +
          '<p class="card-text text-muted mx-2 text-center">' +
          this.cardstag.newsletters[index].description +
          '</p>' +
          ' </div>' +
          ' </div>' +
          '<input type="email" :v-model=correo style="width:90%" id="swal-input1" class="swal2-input" />' +
          '<br/><br/>' +
          '<button @click="suscribe" id="stop" class="btn" ' +
          'style="background-color:rgba(237, 145, 33,0.9);color:white;width:90%">SUBSCRIBE</button>' +
          '<br/><br/>',
        showConfirmButton: false,
        onBeforeOpen: () => {
          const content = this.$swal.getContent()
          const $ = content.querySelector.bind(content)
          const stop = $('#stop')

          // this.$swal.showLoading()
          stop.addEventListener('click', () => {
            const url = 'https://newsletters.academlo.com/api/v1/users'
            const data = {
              // email: 'academlo@hotmail.com',
              email: document.getElementById('swal-input1').value,
              newsletter_id: 2
            }
            axios.post(url, data).then((response) => {
              console.log(response.data)
            })
            this.$swal('se registro exitosamente')
          })
        }
      })
    },
    getCards() {
      const urlFromHome = window.location.href
      const uid = urlFromHome.split('?')
      const URL_N = `https://newsletters.academlo.com/api/v1/tags/${
        uid[1]
      }?include=newsletters`

      this.$axios
        .get(URL_N)
        .then((response) => {
          this.cardstag = response.data
          console.log(this.cardstag)
        })
        .catch((error) => {
          console.log(error.response)
          alert('Existe un problema al cargar la información solicitada.')
        })
    }
  }
}
</script>
