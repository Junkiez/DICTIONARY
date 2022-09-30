<template>
  <button @click="add()" class="btn" id="add">Add own word +</button>
  <img alt="Vue logo" width="250" src="./assets/logo.jpg" />
  <Dict msg="Hello Vue 3 in CodeSandbox!" />
  <dialog id="addWord">
    <form action="api/add/" method="POST" >
      <label for="favAnimal">Word:</label>
      <input value="word" type="text" name="word">
      <label for="favAnimal">Description:</label>
      <textarea value="meaning" type="text" name="meaning"></textarea>
      <label for="favAnimal">Source link:</label>
      <input value="ulinks" type="text" name="ulinks">
      <button @click="cancel()" id="cancel" type="reset" class="btn" >Cancel</button>
      <button @click="cancel()" type="submit" class="btn" >Send</button>
    </form>
  </dialog>
</template>

<script>
import Dict from "./components/Dict.vue";
export default {
  name: "App",
  components: {
    Dict: Dict,
  },
  data(){return{
    dialog_class: "",
    word: "",
    meaning: "",
    ulinks: "",
  }},
  methods: {
    add() {
      document.getElementById("addWord").showModal();
    },
    cancel() {
      this.word = "";
      this.meaning = "";
      this.ulinks = "";
      document.getElementById("addWord").close();
    }
  },
};
</script>

<style>
html,body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
body::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#add{
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.btn {
  background-color: transparent;
  border: none;
  transition: linear 0.2s;
  padding: 5px;
  border-radius: 10px;
}
.btn:hover {
  background-color: yellowgreen;
  transition: linear 0.2s;
}
.btn:active {
  background-color: yellow;
  transition: linear 0.2s;
}
dialog {
  border: none;
  border-radius: 10px;
  padding: 2rem;
}
form {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
}
form > * {
  margin: 0.5rem;
}

input[type="text"], textarea {
  border-radius: 10px;
  padding: 5px;
  border: solid 1px;
}

textarea {
  resize: vertical;
}
</style>
