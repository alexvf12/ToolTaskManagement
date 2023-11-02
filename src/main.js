import { createApp, markRaw } from "vue";
import piniaPersist from "pinia-plugin-persist";
import { createPinia } from "pinia";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const pinia = createPinia()
  .use(piniaPersist)
  .use(({ store }) => {
    store.$router = markRaw(router);
  });
createApp(App).use(pinia).use(router).mount("#app");
