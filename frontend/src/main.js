import { createApp } from 'vue'
import App from './App.vue'
import TodoList from "./components/TodoList.vue"
import TodoItem from "./components/TodoItem.vue"
import TheHeader from "./components/TheHeader"
import NewItem from "./components/NewItem"

const app = createApp(App);

app.component("todo-list", TodoList);
app.component("todo-item", TodoItem);
app.component("the-header", TheHeader);
app.component("new-item", NewItem);

app.mount("#app");

