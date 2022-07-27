<template>
    <div id="admin" class="container">        
        <Header :titulo="titulo" />

        <p class="no-opiniones p-3" v-if="opiniones.length == 0">No existen opiniones por administrar.</p>
        <table class="table" v-else>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Persona</th>
                    <th scope="col">Juego</th>
                    <th scope="col">Opinion</th>
                    <th scope="col">
                        <!--columna boton eliminar-->
                    </th>
                    <th scope="col">
                        <!--columna boton editar-->
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(opinion, index) in opiniones" :key="JSON.stringify(opinion)">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ opinion.usuario }}</td>
                    <td>{{ opinion.juego.name }}</td>
                    <td>{{ opinion.comentario }}</td>
                    <td class="text-end">
                        <button class="btn btn-danger" @click="eliminarOpinion(opinion.id)">
                            Eliminar
                        </button>
                    </td>
                    <td class="text-center">
                        <router-link :to="{ name: 'edicion', params: { id: opinion.id, staticop: opinion } }">
                            <button class="btn btn-info">Editar</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'Administracion',
    components: {
        Header
    },  
    computed: {
        ...mapState(['opiniones'])
    },
    methods: {
        ...mapActions(['eliminarOpinion'])
    },
    data(){
        return {
            titulo: 'Administrando la Lista de Opiniones'
        }
    }
}
</script>

<style>
</style>