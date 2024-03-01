<template>
  <div v-for="post in posts" :key="post.id" class="col-md-10">
    <PostCard :post="post" />
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
  
  posts: computed(() => AppState.posts)
};
},
components: { PostCard }
}
</script>


<style lang="scss" scoped>

</style>