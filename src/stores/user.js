import { defineStore } from "pinia";

import { supabase } from "../supabase";

export default defineStore("user", {
  state() {
    return {
      user: null,
    };
  },

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();

      this.user = user;
    },
    async signIn(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,

        password: password,
      });

      if (error) {
        throw error;
      }
      console.log(data);
      if (data) {
        this.user = data.user;
        this.$router.push("/Dashboard");
      }
    },

    async signUp(email, password) {
      const { data, error } = await supabase.auth.signUp({
        email: email,

        password: password,
      });

      if (error) {
        throw error;
      }
     
    },
    async logOut(){
    const { error } = await supabase.auth.signOut()
    this.user = null
  }
  },
  persist: {
    enabled: true,

    strategies: [
      {
        key: "user",

        storage: localStorage,
      },
    ],
  },
});
