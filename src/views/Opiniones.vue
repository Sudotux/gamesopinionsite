<!-- dado que no se especifican los colores, se escogeran 'lo mas cercano' -->
<template>
    <div id="opiniones" class="container">
        <Header :titulo="titulo" />
        <p class="no-opiniones p-3" v-if="opiniones.length == 0">No existen opiniones por mostrar.</p>
        <div class="p-2" v-else v-for="opinion in opiniones" :key="JSON.stringify(opinion)">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle bg-info w-100" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Opinión creada por: {{ opinion.usuario }}. Para el juego: {{ opinion.juego.name }}
                </button>
                <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <p class="dropdown-item"><b>Opinión: </b>{{ opinion.comentario }}</p>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { mapState } from 'vuex';

export default {
    name: 'Opiniones',
    components: {
        Header
    },
    computed: {
        ...mapState(['opiniones'])
    },
    data() {
        return {
            titulo: 'Lista de Opiniones'
        }
    }
}
</script>

<style>
.no-opiniones{
    background-color: lightcoral;    
}
</style>