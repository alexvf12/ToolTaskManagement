<template>
  <div>
    <div>
      <button @click="isHidden = !isHidden">
        + New column
      </button>
      <form v-if="!isHidden" class="text-center card d-flex flex-row justify-content-between align-items-center" action=""
        @submit.prevent="
          addNewTitle();
        isHidden = !isHidden;
        ">
        <input v-model="mainTitle" type="text" placeholder="Type a title..." id="inputGroup-sizing-default" />
        <button class="btn button">
          <ion-icon name="checkmark-done-outline"></ion-icon>
        </button>
      </form>
    </div>
    <div class="d-flex flex-column justify-content-start align-items-center bg-gris divGeneral">
      <TaskColumn :column="column" v-for="column in bonusStore.columns" />
    </div>
  </div>

  <!-- EMPIEZA EL ITEM -->
</template>

<script>
import { mapStores } from "pinia";
import bonusStore from "../stores/bonus";
import tasksStore from "../stores/task.js";
import userStore from "../stores/user";
import TaskColumn from "../components/TaskColumn.vue";

export default {
  data() {
    return {
      mainTitle: "",
      id: 0,
      isHidden: true,
      title: "",
      status: 0,
      order: 0,
    };
  },
  computed: {
    ...mapStores(bonusStore, tasksStore, userStore),
  },
  components: {
    TaskColumn,
  },
  methods: {
    async addNewTitle() {
      const response = await this.bonusStore.createColumn(
        this.userStore.user.id,
        this.mainTitle,
        this.bonusStore.getMaxOrderByColumn
      );
      this.mainTitle = "";
    },
  },

  mounted() {
    this.bonusStore.fetchColumns();

  },
};
</script>

<style scoped>
button {
  padding: 5px 10px;
  margin: 15px;
  border-radius: 5px;
  background-color: #282a2acb;
  color: white;
}

.space {
  height: 2vh;
}

h4 {
  margin-top: 10px;
}

hr {
  margin: 5px 0;
  background: black;
  height: 3px;
  margin-bottom: 25px;
}

input {
  width: 100%;
  border: none;
}



.card {
  width: 10rem;
  margin-left: 1rem;
  height: 7vh;
}

.card input {
  width: 7rem;
}

.button {
  width: fit-content;
  background: none;
}

@media (min-width: 1024px) {
  .divGeneral {
    align-items: flex-start !important;
    flex-direction: row !important;
    flex-wrap: wrap !important;
  }

  #doneDiv {
    margin-bottom: 0rem !important;
  }

  .divIndividual {
    width: 23% !important;
    height: fit-content;
    margin: 0 10px;
  }
}
</style>
