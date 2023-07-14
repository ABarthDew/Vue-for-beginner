<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @go="addTodo"></TodoInput>
    <TodoList :propsdata="todoItems" @rmv="removeTodo"></TodoList>
    <TodoFooter @del="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

// export const test = {

// }

export default {
  name: 'app',
  data: function () {
    return {
      todoItems: []
    }
  },
  methods: {
    addTodo: function (todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    clearAll: function () {
      localStorage.clear();
      this.todoItems = [];
    },
    removeTodo: function (todoItem, idx) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(idx, 1);
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>
bv
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
