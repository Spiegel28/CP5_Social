<template>
    <div class="ad-container">
        <div class="row p-2 card">
        <img :src="commercial.banner" :alt="commercial.title" class="ad-image">
        
        </div>
    </div>
    <p>kjkjbh</p>
</template>


<script>
export default {
    props: {
        commercial: Object 
    },
setup(){
return{}
}
}
</script>


<style lang="scss" scoped>
.ad-container {
    width: 250px; 
    height: 250px; 
    // border: 1px solid #131010; /* Add border for visibility */
    overflow: hidden; 
  }

  /* Style the ad image */
  .ad-image {
    width: 100%; /* Ensure image fills container */
    height: 100%; /* Ensure image fills container */
  }
</style>