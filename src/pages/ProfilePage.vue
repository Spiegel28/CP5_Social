<template>
    <div class="container">
        <section v-if="profile" class="row">
            <div class="card my-3">
                <img :src="profile.coverImg" class="card-img-top profile-cover-img" alt="...">
                <div class="d-flex justify-content-between">
                    <img :src="profile.picture" class="card-img-top profile-picture ms-2" alt="...">
                    <p><i class="mdi mdi-linkedin"></i></p>
                </div>
                <div class="card-body">
                    <h5 class="card-title">  {{ profile.name }} <i v-if="profile.graduated" class="mdi mdi-check"></i></h5>
                    <p class="card-text">{{ profile.bio }}</p>
                    <div class="d-flex justify-content-between">
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <button>Edit</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="row">
            <div v-for="post in posts" :key="post.id" class="col-md-10">
                <PostCard :post="post" />
            </div>
        </section>
    </div>
</template>


<script>
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop';
import { computed, onMounted } from 'vue';
import { profilesService } from '../services/ProfilesService.js';
import { AppState } from '../AppState.js'
import { postService } from '../services/PostService';


export default {
setup(){
    const route = useRoute()

    async function getProfileById() {
        try {
            const profileId = route.params.profileId
            await profilesService.getProfileById(profileId)
        } catch (error) {
            Pop.error(error)
            
        }
    }

    async function getPostsByCreatorId() {
        try {
            const profileId = route.params.profileId
            await postService.getPostsByCreatorId(profileId)
        } catch (error) {
            Pop.error(error)
        } 
    
    }

    onMounted(() => {
        getProfileById()
        getPostsByCreatorId()
    })
return{
    profile: computed(()=> AppState.activeProfile),
    posts: computed(()=> AppState.posts)
}
}
}
</script>


<style lang="scss" scoped>
.profile-picture {
  height: 10vh;
  width: 25%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  transform: translateY(-5vh);
  
  margin-bottom: -5vh;
}
.profile-cover-img {
  width: 100%;
  height: 40vh;
  object-fit: cover;
//   transform: translateY(-12vh);
//   margin-bottom: -12vh;
}
</style>