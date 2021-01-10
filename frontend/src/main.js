import { createApp } from 'vue'
import App from './App.vue'
import TodoList from "./components/TodoList.vue"
import TodoItem from "./components/TodoItem.vue"

createApp(App).mount('#app')

app.component("todo-list", TodoList);
app.component("todo-item", TodoItem);

app.mount("#app");


