<template>
    <section class="container-fluid">
        <img class="creator-picture selectable" src="" alt="Picture here" role="button">
        <p>Summer</p>
        <p>Name</p>
        <i class="mdi mdi-LinkedIn"></i>
        
    </section>
</template>


<script>
export default {
setup(){
return{}
}
}
</script>


<style lang="scss" scoped>
.creator-picture {
  height: 6vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}
</style>