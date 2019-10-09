<template>
        <div id="app">
            <div id="nav">
                <v-layout>
                    <v-img src="src/assets/Revintage.svg" width="100" height="100" alt="Revintage logo"></v-img>
                </v-layout>
                <h1>Hi Welcome To the AdminPage of ReVintage</h1>
                <h2>Click on a link below to get started</h2>
                <router-link to="/clothings">Clothing OverView</router-link> |
                <router-link to="/clothing/Create">Create</router-link>
            </div>
        </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>