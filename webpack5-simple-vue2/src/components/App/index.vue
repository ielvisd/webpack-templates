<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        <router-view />
        <Component1 />
    </div>
</template>

<style>
    nav {
        background-color: gold;
    }
</style>

<script>
    import Component1 from '@/components/Component1/index.vue';

    export default {
        components: {
          Component1,
        }
    }
</script>
