<template>
  <button @click="add()" class="btn" id="add">Add own word +</button>
  <img alt="Vue logo" width="250" src="./assets/logo.jpg" />
  <Dict msg="Hello Vue 3 in CodeSandbox!" />
</template>

<script>
import Dict from "./components/Dict.vue";
export default {
  name: "App",
  components: {
    Dict: Dict,
  },
  methods: {
    add() {},
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
</style>
