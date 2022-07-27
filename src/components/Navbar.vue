<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <i class="fa-solid fa-headset text-white"></i>
            </a>
            <a class="navbar-brand" href="/">Games Opinion</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link">
                            <i class="fa-solid fa-house-chimney pe-1"></i>Home
                        </router-link>                        
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'opiniones' }" class="nav-link">
                            <i class="fa-solid fa-comments pe-1"></i>Opiniones
                        </router-link>                        
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'administracion' }" class="nav-link">
                            <i class="fa-solid fa-users-gear pe-1"></i>Administración
                        </router-link>                        
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
</style>