<script setup>

function saveMovie () {
    
    
    fetch("/api/v1/movies", {
     method: 'POST',
    headers: {
    'Accept': 'application/json'
    }
})

    .then(function (response) {
 return response.json();
    })
    .then(function (data) {
    // display a success message
    console.log(data);
})
    .catch(function (error) {

    console.log(error);
});

}

</script>

<template>  

<form @submit.prevent="saveMovie" action="" enctype="multipart/form-data" method="post">           
            <div class="mb-3">
                <label for="title" class="form-label"> Movie Title <span class="text-danger">*</span></label>
                <input type="text" class="form-control" name="title" id="title" value="{{ old('title') }}">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label"> Description <span class="text-danger">*</span></label>
                <textarea  class="form-control" name="description" id="description" value="{{ old('description') }}">
                    </textarea>
            </div>
            <div class="mb-3"> 
                <label for="poster" class="form-label"> Poster <span class="text-danger">*</span></label>
                <input type="file" name="poster" id="poster" class="form-control">
           
            </div>
            <div>
                <button type="submit" class="btn btn-primary"> Create </button>
            </div>
            
</form>

</template>

<style>


</style>