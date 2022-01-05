<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        <router-view />
        <component1></component1>
    </div>
</template>

<style>
    nav {
        background-color: gold;
    }
</style>

<script>
    import component1 from '@/views/component1/index.vue';

    export default {
        components: {
            component1,
        }
    }
</script>
