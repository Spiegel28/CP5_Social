<template>
    <div class="ad-container">
        <div class="row p-2">
        <img :src="" :alt="Ad" class="ad-image">
        </div>
    </div>
</template>


<script>
export default {
setup(){
return{}
}
}
</script>


<style lang="scss" scoped>
.ad-container {
    width: 250px; /* Adjust width as needed */
    height: 250px; /* Adjust height as needed */
    // border: 1px solid #131010; /* Add border for visibility */
    overflow: hidden; /* Hide overflow content */
  }

  /* Style the ad image */
  .ad-image {
    width: 100%; /* Ensure image fills container */
    height: 100%; /* Ensure image fills container */
  }
</style>