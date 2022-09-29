<template>
  <div class="main">
    <h1>Dictionary</h1>
    <p>Collection of modern words of students and programmers.</p>
    <input type="text" v-model="search" placeholder="Type word here..." /> <i v-if="!list"> or </i>
    <button v-if="!list" class="btn" @click="()=> list=true">Show full list</button>
    <h3 v-if="search !== '' || list">Words:</h3>
    <ul v-if="search !== '' || list">
      <li v-for="(i, j) in lst.filter(searchFilter)" :key="j">
        <p v-html="marked(i)"></p>
        <a
          v-for="(k, n) in i.ulinks"
          :key="n"
          href="{{k}}"
          target="_blank"
          rel="noopener"
          >#{{ k.substring(8, 18) }}...
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  beforeMount() {
    fetch("/api/words")
      .then((res) => res.json())
      .then((data) => {
        this.lst = data;
      });
  },
  methods: {
    searchFilter(e) {
      let s = this.search.toLowerCase();
      let w = e.word.toLowerCase();
      let d = e.meaning.toLowerCase();
      if (w.includes(s) || d.includes(s)) {
        return true;
      }
      return false;
    },
    marked(e) {
      let res = `<b class="name">${e.word
        .toLowerCase()
        .replace(this.search, "<mark>" + this.search + "</mark>")}</b> - `;
      return (
        res +
        e.meaning
          .toLowerCase()
          .replace(this.search, "<mark>" + this.search + "</mark>")
      );
    },
  },
  data() {
    return {
      search: "",
      lst: [],
      list: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  margin-inline: auto;
  max-width: min(100% - 3rem, 900px);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}
li {
  display: inline-block;
  margin: 0 10px;
  width: 100%;
  border-bottom: 1px solid;
  border-radius: 10px;
  margin: 2px;
  padding: 5px;
  text-align: left;
}
a {
  color: #42b983;
  transition: linear 0.2s;
  padding: 2px;
}
a:hover {
  background-color: yellowgreen;
  color: #2c3e50;
  border-radius: 10px;
  transition: linear 0.2s;
}
input[type="text"] {
  border-radius: 10px;
  padding: 5px;
  border: solid 1px;
}
</style>
