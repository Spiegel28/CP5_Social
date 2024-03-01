<template>
<div class="container">
    <section v-if="profile" class = "row">
    <div class="card mb-3">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ profile.name }}</h5>
            <p class="card-text">{{ profile.bio }}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
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

    onMounted(() => {
        getProfileById()
    })
return{
    profile: computed(()=> AppState.activeProfile)
}
}
}
</script>


<style lang="scss" scoped>
.profile-picture {
  height: 30vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}
.profile-cover-img {
  width: 100%;
  height: 40vh;
  object-fit: cover;
//   transform: translateY(-12vh);
//   margin-bottom: -12vh;
}
</style>