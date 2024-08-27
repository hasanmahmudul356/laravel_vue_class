<script>
export default {
    name: "About.vue"
}
</script>

<template>
<div>
    <h1>I am from About Component</h1>
    <a href="/admin/home"><h1>Home</h1></a>
    <a href="/admin/about"><h1>Abount</h1></a>

    <router-link to="/admin/home"><h1>Home</h1></router-link>
    <router-link to="/admin/about"><h1>Abount</h1></router-link>
</div>
</template>

<style scoped>

</style>
