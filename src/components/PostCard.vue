<template>
    <div class="container-fluid ">
    <div class="row  justify-content-center">
        <div class="card m-2 post-card col-7">
            <div class="card-body">
                <div class="d-flex">
                    <router-link :to="{name: 'Profile', params: { profileId: post.creatorId}}">
                        <img class="creator-picture selectable" :src="post.creator.picture" :alt="null" role="button">
                        <!-- :title="`Go to ${project.creator.name}'s profile page`"> Is not working -->
                    </router-link>
                    <div class="">
                        <h6 class="card-title">{{ post.creator.name }}</h6>
                        <p class="card-text"><small class="text-muted">{{ post.createdAt }}</small></p>
                    </div>
                </div>
                <p class="card-text">{{ post.body }}</p>
            </div>
            <img v-if="post.imgUrl" :src="post.imgUrl" class="c post-picture">
            <p class="card-img-bottom"> <i class="mdi mdi-heart">Like Count</i></p>
        </div>
    </div>
</div>
</template>


<script>
import { Post } from '../models/Post';
export default {
    props: {
        post: {type: Post , required: true}
    },
setup(){
return{

}
},

}
</script>


<style lang="scss" scoped>
.post-card{
  background-color: #ffffff; 
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.creator-picture {
  height: 6vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

.post-picture {
  height: 20vh;
  aspect-ratio: 1/1;
  object-fit: cover;
}
</style>