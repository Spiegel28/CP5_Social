<template>
  <PostForm />
  <div v-for="post in posts" :key="post.id" class="col-md-10">
    <PostCard :post="post" />
  </div>
  <div class="col-12 d-flex align-items-center my-2">
    <button @click="changePage(newer)" class="btn btn-outline-dark" :disabled="currentPage == 1">Previous</button>
    <p class="mb-0 mx-3 fs-4">Page {{ currentPage }} of {{ totalPages }}</p>
    <button @click="changePage(older)" class="btn btn-outline-dark"  >Next</button>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { postService } from '../services/PostService.js'
// import { logger } from '../utils/Logger';
import { AppState } from '../AppState';
import PostCard from '../components/PostCard.vue';

export default {
setup(){

  async function getPosts() {
    try {
      await postService.getPosts()
    } catch (error) {
      Pop.error(error)
    }
  }

  onMounted(() => {
    
    getPosts()
  })
return{
  
  posts: computed(() => AppState.posts),
  currentPage: computed(() => AppState.currentPage),
  totalPages: computed (()=> AppState.totalPages),
  older: computed (()=> AppState.older),
  newer: computed (()=> AppState.newer),

  async changePage(pageNumber) {
    try {
      
        await postService.changePage(pageNumber)
      
    } catch (error) {
      Pop.error(error)
    }
  }
};
},
components: { PostCard }
}
</script>


<style lang="scss" scoped>

</style>