<template>
  <header>Add a New Item</header>
  <section>
    <form @submit.prevent="addItem">
      <div class="form-control">
        <label for="itemName">Name: </label>
        <input id="itemName" name="itemName" type="text" v-model="name">
      </div>

      <div class="form-control">
        <label for="itemDesc">Description: </label>
        <input id="itemDesc" name="itemName" type="text" v-model="desc">
      </div>

      <div class="form-control">
        <label for="itemDueDate">Due Date: </label>
        <input id="itemDueDate" name="itemName" type="date" v-model="dueDate">
      </div>

      <button>Add</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "NewItem.vue",
  data() {
    return {
      name: '',
      desc: '',
      dueDate: new Date(),
      isCompleted: false
    };
  },
  methods: {
    addItem() {
      console.log("name: ", this.name);
      console.log("desc: ", this.desc);
      console.log("dueDate: ", this.dueDate);
      console.log("isCompleted: ", this.isCompleted);
    }
  }
}
</script>

<style scoped>

.form-control {
  margin: 0.5rem 0;
}
</style>