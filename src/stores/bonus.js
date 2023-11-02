import { defineStore } from "pinia";

import { supabase } from "../supabase";

export default defineStore("bonus", {
  state() {
    return {
      columns: [],
    };
  },

  actions: {

    async fetchColumns() {
      
      const { data: columns } = await supabase
        .from("columns")
        .select("*")
        .order("order", { ascending: true });
      this.columns = columns;
    },
    async createColumn(user_id, mainTitle, order) {
      const { data: columns } = await supabase

        .from("columns")

        .insert({ user_id:user_id, mainTitle: mainTitle, order:order})
      

      this.fetchColumns();
    },
    async modifiedOrderColumn(order, id) {
      const { error } = await supabase
        .from("columns")
        .update({ order: order })
        .eq("id", id);

      this.fetchColumns();
    },

    async modifiedMainTitle(mainTitle, id) {
      const { error } = await supabase
        .from("columns")
        .update({ mainTitle: mainTitle })
        .eq("id", id);

      this.fetchColumns();
    },
    async deleteColumn(id) {
      const { error } = await supabase.from("columns").delete().eq("id", id);

      this.fetchColumns();
    },

  },
    getters: {
        getMaxOrderByColumn() {
          if (this.columns.length === 0) return 0 
            const map1 = this.columns.map((column) => column.order);
            console.log(this.columns)
            console.log(map1)
            return Math.max(...map1) + 1;
          },
          filteredColumns(){
            
          }
      }
});
