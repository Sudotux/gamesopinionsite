<template>    
    <div class="card">
        <img :src="juego.background_image" class="card-img-top" alt="imagen-juego">
        <div class="card-body">
            <h5 class="card-title">{{ juego.name }}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Rating: {{ juego.rating }}</li>
            <li class="list-group-item">Release: {{ juego.released }}</li>
            <li class="list-group-item">Updated: {{ juego.updated }}</li>
        </ul>
        <div class="card-body text-center">
            <button class="btn btn-primary" @click="opinar">Opinar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        juego: ''
    },
    methods: {
        opinar(event) {
            this.$emit('clickOpinar', this.juego);
        }
    }
}
</script>

<style>
</style>