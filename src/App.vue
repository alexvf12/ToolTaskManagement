<template>
  <Nav @add="showModal = true" @add2="showModal2 = true" />
  <SignUp :show="showModal" @close="showModal = false" />
  <Login :show2="showModal2" @close2="showModal2 = false" @close3="showModal2 = false"/>
  <RouterView />
  <Footer />
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";

export default {
  data() {
    return {
      showModal: ref(false),
      showModal2: ref(false),
    }
  },
  components: {
    Nav,
    Footer,
    SignUp,
    Login,
  }
}
</script>