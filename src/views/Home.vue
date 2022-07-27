<template>
  <div class="home">
    <Header :titulo="titulo" />

    <main class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-xl-4 text-left pb-5" v-for="juego in juegos" :key="JSON.stringify(juego)">
          <Card :juego="juego" @clickOpinar="opinar" />
        </div>
      </div>
    </main>

    <!-- opcional otra opcion de layout -->
    <!-- <main class="container">
      <div class="d-flex flex-wrap justify-content-evenly align-items-start">
        <div v-for="juego in juegos" :key="JSON.stringify(juego)">
          <Card :juego="juego" @clickOpinar="opinar" />
        </div>
      </div>
    </main> -->

    <!-- modal -->
    <div id="myModal" class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Escribe tu opinión para el juego: {{ juego.name }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- formulario -->
            <form>
              <div class="mb-3">
                <label for="usuario" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="usuario" v-model="usuario">
              </div>
              <div class="mb-3">
                <label for="comentario" class="form-label">Opiniones</label>
                <textarea rows="4" class="form-control" id="comentario" v-model="comentario"
                  placeholder="Tu opinión debe ir aquí..."></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
              @click="guardarOpinion({ usuario, comentario, juego })">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';
import Header from '@/components/Header.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    Card,
    Header
  },
  computed: {
    ...mapState(['juegos'])
  },
  methods: {
    ...mapActions(['guardarOpinion']),
    limpiarDatos() {
      this.usuario = '';
      this.comentario = '';
      this.juego = '';
    },
    opinar(juego) {
      this.limpiarDatos();
      var myModal = new bootstrap.Modal(document.getElementById('myModal'), { keyboard: true })
      this.juego = juego;
      myModal.show();
    }
  },
  data() {
    return {
      titulo: 'Lista de Juegos Disponibles',
      juego: '',
      usuario: '',
      comentario: ''
    }
  }
}
</script>

<style scoped>
</style>
