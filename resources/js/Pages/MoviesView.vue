<script setup>

import { ref, onMounted } from "vue";
let movies = ref([]);

function fetchMovies() {

    fetch("/api/v1/movies", {
     method: 'GET',
    headers: {
    'Content-Type': 'application/json'
    }
    })
    .then(function (response) {

        return response.json();
    })
    .then(function (data) {
        // display a success message
        movies.value = data.movies;
        console.log(data);
    })  
    .catch(error => {console.log(error)});

}
onMounted(()=> fetchMovies())


</script>


<template>

<h2>Movies</h2>
    <div class="row">
        <div v-for="movie in movies" :key="movie.id" class="col-md-6">
        <div class="card mb-3 h-100">
            <div class="row g-0">
                <div class="col-md-6">
                    <img :src="movie.poster" class="img-fluid rounded-start " alt="">
                </div>

                <div class="col-md-6">
                    <div class="card-body">
                        <p class="card-text">{{ movie.title}}</p>
                        <p class="card-text">{{ movie.description}}</p>

                    </div>

                </div>
            </div>
        </div>

    </div>
    </div>

</template>

<style>

</style>