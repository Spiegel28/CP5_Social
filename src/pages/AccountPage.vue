<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
  <div class="container-fluid">
    <section class="row">
      <div class="col-6 m-auto">

        <form @submit.prevent="updateAccount()">

          <div class="mb-3">
            <label for="name">Name</label>
            <input v-model="editableAccountData.name" required class="w-100" type="text" id="name">
          </div>

          <div class="mb-3">
            <label for="picture">Picture</label>
            <input v-model="editableAccountData.picture" required class="w-100" type="text" id="picture">
          </div>

          <div class="mb-3">
            <label for="coverImg">Cover Image</label>
            <input v-model="editableAccountData.coverImg" class="w-100" type="text" id="coverImg">
          </div>

          <div class="mb-3">
            <label for="bio">Bio</label>
            <textarea v-model="editableAccountData.bio" id="bio" cols="20" class="w-100"></textarea>
          </div>

          <div class="mb-3">
            <label for="graduated">Graduated?</label>
            <input v-model="editableAccountData.graduated" type="checkbox" id="graduated">
          </div>
          <div class="mb-3">
            <label for="class">Attending Class</label>
            <input v-model="editableAccountData.class" class="w-100" type="text" id="class">
          </div>
          <div class="mb-3">
            <label for="linkedin">LinkedIn</label>
            <input v-model="editableAccountData.linkedin" class="w-100" type="text" id="linkedin">
          </div>
          <div class="mb-3">
            <label for="github">Github</label>
            <input v-model="editableAccountData.github" class="w-100" type="text" id="github">
          </div>
          <div class="mb-3">
            <label for="resume">Resume</label>
            <input v-model="editableAccountData.resume" class="w-100" type="text" id="coverImg">
          </div>


          <button class="btn btn-success">Update Account</button>

        </form>

      </div>
    </section>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';
import { accountService } from '../services/AccountService';
export default {
  setup() {
    const account = computed(() => AppState.account)
    const editableAccountData = ref({})

    watch(account, () => { editableAccountData.value = { ...account.value } }, { immediate: true })
    return {
      editableAccountData,
      account,
      older: computed (()=> AppState.older),
  newer: computed (()=> AppState.newer),

      async updateAccount() {
        try {
          await accountService.updateAccount(editableAccountData.value)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
label {
  display: block;
}
</style>
