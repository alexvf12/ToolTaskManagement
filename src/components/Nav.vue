<template>
  <nav class="shadow p-3 rounded sticky-top bg-white">
    <div class="d-flex justify-content-between div items-center ">
      <div>
        <img src="../../public/tool_logo3.png" alt="logo-tool" class="logo" />
      </div>

      <div>
        <button v-if="!userStore.user" @click="$emit('add2')" type="button" class="text-sm py-2 px-3 rounded bttn">Log
          In</button>
        <button v-if="!userStore.user" @click="$emit('add')" type="button" class="py-2 px-3 rounded bttn">Sign
          Up</button>
        <button v-if="userStore.user" @click="isLoggedOut()" type="button" class="py-2 px-3 rounded bttn">Log
          Out</button>
      </div>
    </div>
  </nav>
</template>



<script>
import { mapStores } from "pinia";
import userStore from "../stores/user.js";

export default {
  data() {
    return {
    }

  },
  computed: {
    ...mapStores(userStore),

  },
  methods: {

    isLoggedOut() {
      this.userStore.logOut();
      this.$router.push("/")
    },

  }

}

</script>
<style scoped>

.bttn {
  font-size: smaller;
  margin-top: 1em;
  margin-right: 1em;
  background-color: rgba(0, 0, 0, 0.797) ;
  color: white;
}
.bttn:hover {
  font-size: smaller;
  margin-top: 1em;
  margin-right: 1em;
  background-color: rgba(0, 0, 0, 0.208) ;
  color: black;
}

.logo {
  height: 3.5rem;
}

@media (min-width: 720px) {

  .logo {
    width: fit-content;
    height: 4rem;
  }

  ul {
    padding-top: 10px;
  }


}
</style>
