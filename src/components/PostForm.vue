<template>
    <div class="container-fluid ">
    <div class="row  justify-content-center">
        <form @submit.prevent = "createPost()">
        <div class="card m-2 post-card col-7">
            <div class="card-body">
                <div class="d-flex">
                        <img class="creator-picture selectable" src="post.creator.picture" alt="null" role="button">
                    <div class="">
                        <h6 class="card-title"></h6>
                        <p class="card-text"><small class="text-muted"></small></p>
                    </div>
                </div>
                <textarea class="w-100 card-text" rows="3" maxlength="50"></textarea>
            </div>
            <p class="card-img-bottom d-flex justify-content-between">
                 <button class="btn btn-danger mdi mdi-camera">Photo/Video</button>
                 <button type ="submit" class="btn btn-danger">Post</button>
                </p>
        </div>
    </form>
    </div>
</div>
</template>


<script>
import { ref } from 'vue';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { postService } from '../services/PostService.js';
export default {
setup(){
    const editablePostData = ref ({})
return{
    editablePostData,

    async createPost()
{
    try {
        logger.log('creating post', editablePostData.value)
        await postService.createPost(editablePostData.value)
        editablePostData.value = {}
    } catch (error) {
        Pop.error(error)
    }
}}
}
}
</script>


<style lang="scss" scoped>

</style>