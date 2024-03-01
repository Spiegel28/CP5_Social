<template>
</template>


<script>
import { onMounted, popScopeId } from 'vue';
import Pop from '../utils/Pop';
import { postService } from '../services/PostService.js'
import { logger } from '../utils/Logger';

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
    logger.log('home page mounted')
    getPosts()
  })
return{}
}
}
</script>


<style lang="scss" scoped>

</style>