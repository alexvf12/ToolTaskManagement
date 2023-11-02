<template>
  <section class="auth">
    <div class="d-flex align-items-center flex-column">
      <h2 class="lean">LEAN PROJECT MANAGEMENT.</h2>
      <h2 class="simpli">SIMPLIFIED.</h2>
      <h4 class="boost">Boost your personal productivity.</h4>
      <p class="size-1 m-1">The Tool task management board gives you an excellent overview of your current work
        situation.</p>
      <p class="size-1">
        Visualizing work leads to improved productivity.
      </p>
    </div>
  </section>
  <!--   <section class="background gris2">
    <div class="d-flex align-items-center flex-column">
      <h2 class="lean">LEAN PROJECT MANAGEMENT.</h2>
      <h2 class="simpli">SIMPLIFIED.</h2>
      <h4 class="boost">Boost your personal productivity.</h4>
    </div>
  </section>
  <section class="h-1 gris text-white">
    <div class="text-center">
      <h3 class="titulo mx-5 h2">Visualize your work with <h3 class="color">Tool task management</h3>
      </h3>
      <p class="size-1 mx-5">The Tool task management board gives you an excellent overview of your current work
        situation.
        Visualizing work leads to improved productivity.</p>
      <img class="tablero img-fluid" src="../../public/captura.png" alt="captura">
    </div>
  </section> -->
</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user.js";
import nav from "../components/Nav.vue";
import SignUp from "../components/SignUp.vue";
import Login from "../components/Login.vue";


export default {
  data() {
    return {

    }
  },
  components: {
    nav,
    SignUp,
    Login,
  },
  computed: {
    ...mapStores(userStore),
  },

};

</script>

<style>
.auth {
  height: 80vh;
}

.background {
  background-image: url(../../public/web.png);
  height: 25rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.lean {
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
}

.simpli {
  font-size: 1rem;
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: rgb(229, 255, 0);
  text-align: center;
}

.boost {
  font-weight: 400;
  font-size: 0.7rem;
  margin-top: 1rem;
  text-align: center;
}

.gris {
  background-color: rgba(0, 0, 0, 0.735);
}

.gris2 {
  background-color: rgba(0, 0, 0, 0.08);
}

.h-1 {
  height: fit-content;
  padding-top: 1rem;
}

.color {
  color: gold;
}

.size-1 {
  font-size: 1rem;
  font-weight: 200;
  text-align: center;
}


.tablero {
  width: 20rem;
  margin-bottom: 1rem;
}

@media (min-width: 900px) {
  .background {
    height: 80rem;
    background-size: cover;

  }

  .lean {
    font-size: 3rem;
    font-weight: 700;
    margin-top: 5rem;
  }

  .titulo {
    font-size: 50px !important;
  }

  .color {
    font-size: 35px !important;
  }

  .simpli {
    font-size: 3rem;
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: rgb(229, 255, 0);
  }

  .boost {
    font-weight: 300;
    font-size: 2rem;
    margin-top: 4rem;
  }

  .h-1 {
    padding-top: 3rem;
    height: fit-content;

  }

  .size-1 {
    font-size: 18px;
    font-weight: 200;
  }

  .tablero {
    width: 40rem;
    margin-bottom: 2rem;

  }

}

@media (min-width: 400px) and (max-width: 900px) {
  .background {
    height: 170vh;
    background-size: auto;

  }

  .lean {
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 4rem;
  }

  .simpli {
    font-size: 2.5rem;
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: rgb(229, 255, 0);
  }

  .boost {
    font-weight: 300;
    font-size: 1.5rem;
    margin-top: 2.5rem;
  }

  .h-1 {
    padding-top: 15%;
    height: 130vh;

  }

}
</style>