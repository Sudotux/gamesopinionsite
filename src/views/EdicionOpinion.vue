<template>
    <div id="edicionOpinion">
        <Header :titulo="titulo + opinion.juego.name" />

        <div class="container">
            <form>
                <div class="mb-3">
                    <label for="usuario" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="usuario" :value="opinion.usuario">
                </div>
                <div class="mb-3">
                    <label for="comentario" class="form-label">Opiniones</label>
                    <textarea rows="4" class="form-control" id="comentario" :value="opinion.comentario">
                    </textarea>
                </div>

                <router-link :to="{ name: 'administracion' }">
                    <button class="btn btn-primary text-white">Regresar</button>
                </router-link>

                <button class="btn btn-info ms-4" @click="editar">Guardar</button>
            </form>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'EditarOpinion',
    props: ['id'],
    components: {
        Header
    },
    computed: {
        ...mapGetters(['opinionById']),
        opinion() {
            return this.opinionById(this.id);
        }
    },
    methods: {
        ...mapActions(['editarOpinion']),
        editar(event) {
            event.preventDefault();
            const usuario = document.getElementById('usuario').value;
            const comentario = document.getElementById('comentario').value;
            this.editarOpinion({ id: this.id, usuario, comentario, juego: this.opinion.juego });
        }
    },
    data() {
        return {
            titulo: `Editando la opinión de: `
        }
    }
}
</script>

<style>
</style>