<template>
  <header>
    <Navbar />
    <div v-for="commercial in commercials" :key ="commercial.title" class="col-md-10">
      <Commercial :commercial = "commercials" />
      <!-- TODO add prop commercial -->
    </div>
    <!-- <ProfileCard /> -->
  </header>
  <main>
    <router-view />
  </main>
   <footer>
    
  </footer>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Pop from './utils/Pop'
import { commercialsService } from './services/CommercialsService'

export default {
  setup() {
    async function getCommercials(){
      try {
        await commercialsService.getCommercials()
        console.log(AppState.commercials)
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(()=> {
      getCommercials()
    })
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}

</style>
