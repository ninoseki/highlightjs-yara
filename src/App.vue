<template>
  <div id="app">
    <section class="section is-medium">
      <Yara />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Yara from "./components/Yara.vue";

import "highlight.js/styles/github.css";

@Component({
  components: {
    Yara,
  },
})
export default class App extends Vue {}
</script>

<style>
pre {
  word-break: normal;
}

pre code.hljs {
  background-color: whitesmoke;
  color: #4a4a4a;
}
</style>
