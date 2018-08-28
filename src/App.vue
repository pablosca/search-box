<template>
  <div id="app">
    <search-box @search="onSearch" />
    <search-results :results="results" />
  </div>
</template>

<script>
import SearchBox from './components/SearchBox.vue'
import SearchResults from './components/SearchResults.vue'

export default {
  name: 'app',

  data () {
    return {
      results: []
    };
  },

  components: {
    SearchBox, SearchResults
  },

  methods: {
    onSearch (results) {
      this.results = results;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1000px;
  margin: 60px auto;
}
</style>
