<template>
    <div>
        <header class="text-center p-5 m-2">
            <h1>{{ titulo }}</h1>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        titulo: ''
    }
}
</script>

<style>
</style>