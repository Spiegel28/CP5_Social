<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <p class="d-flex align-items-center">NETWORKING</p>
      </div>
    </router-link>
    <div class="col-12">
        <form @submit.prevent="SearchPages()">
          <div class="input-group mb-3">
            <input v-model="editableSearchQuery" required type="text" class="form-control" placeholder="Search" aria-label="Profile"
              aria-describedby="button-addon2">
            <button class="btn btn-outline-light" type="submit" id="button-addon2">
              Search <i class="mdi mdi-magnify"></i>
            </button>
          </div>
        </form>
      </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <!-- <li>
          <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li> -->
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <div>
        <button class="btn text-light" @click="toggleTheme">
          <i class="mdi" :class="theme == 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"></i>
        </button>
      </div>
      <Login />
    </div>
  </nav>
</template>

<script>
import { onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';
export default {
  setup() {
    const editableSearchQuery = ref('')
    const theme = ref(loadState('theme') || 'light')

    onMounted(() => {
      document.documentElement.setAttribute('data-bs-theme', theme.value)
    })

    return {
      editableSearchQuery,

      theme,
      toggleTheme() {
        theme.value = theme.value == 'light' ? 'dark' : 'light'
        document.documentElement.setAttribute('data-bs-theme', theme.value)
        saveState('theme', theme.value)
      }
    }

    // async searchPages() {
    //   try {
    //     logger.log( 'searching for ', editableSearchQuery.value)
    //     await postService.searchPosts(editableSearchQuery.value)
    //   } catch (error) {
    //     Pop.error(error)
    //   }
    // }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 576px) {
  nav {
    height: 64px;
  }
}
</style>
