<script>
    import likeCounter from './components/likeCounter.vue'
    import Generator from './components/Generator.vue'
    import TodoList from './components/TodoList.vue'
    
   export default {
     data() {
       return{
        name: "",
        surname: "",
        email: "",
        date: "",
        isDisabled: false,
       }
     },
     method: {
       addNewText () {
         let newToDo = {
           id: this.toDoList.length + 1,
           text: this.newText,
           isDone: false
         }
         this.toDoList.push(newToDo)
       }
     }
  }
</script>

<template>
<div class="toDoList">
  <input type="text" v-model="newText">
  <button @click="addNewText">Add</button>
  <ul>
    <li v-for="toDo in toDoList" :key="toDo.id">
      <span @click="toggleDone(todo.id)">{{ toDo.text }}</span>
    </li>
  </ul>
</div>
</template>

<style scoped>

</style>
