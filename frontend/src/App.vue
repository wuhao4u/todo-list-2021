<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <the-header></the-header>
  <new-item></new-item>
  <todo-list/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from "./components/TodoList"
import NewItem from "./components/NewItem"
import TheHeader from "@/components/TheHeader";

export default {
  name: 'App',
  components: {
    TheHeader,
    // HelloWorld,
    TodoList,
    NewItem,
    // TodoItem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
