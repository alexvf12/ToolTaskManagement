import { defineStore } from "pinia";

import { supabase } from "../supabase";

export default defineStore("tasks", {
  state() {
    return {
      tasks: [],
    };
  },

  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("order", { ascending: true });
      if (tasks) this.tasks = tasks;
    },

    async createTask(id, title, status, order) {
      const { data: tasks } = await supabase

        .from("tasks")

        .insert({ user_id: id, title: title, status: status, order: order })

        .order("order", { ascending: true });

      this.tasks = tasks;

      this.fetchTasks();
    },
    async modifiedTask(title, id) {
      const { error } = await supabase
        .from("tasks")
        .update({ title: title })
        .eq("id", id);

      this.fetchTasks();
    },
    async modifiedStatus(status, id) {
      const { error } = await supabase
        .from("tasks")
        .update({ status: status })
        .eq("id", id);

      this.fetchTasks();
    },

    async deleteItem(id) {
      const { error } = await supabase.from("tasks").delete().eq("id", id);

      this.fetchTasks();
    },
    async modifiedOrder(order, id) {
      const { error } = await supabase
        .from("tasks")
        .update({ order: order })
        .eq("id", id);

      this.fetchTasks();
    },
  },
    getters: {
      getTasksByStatus(state) {
        return function (status) {
          return state.tasks?.filter((task) => task.status === status);
        }
      },
        getMaxOrderByStatus(state) {
          return function (status) {
            const filteredStatus = state.getTasksByStatus(status)
            if (filteredStatus.length === 0) return 0 
            const map1 = filteredStatus.map((task) => task.order);
            return Math.max(...map1);
          }
        } 
      }
});

