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

import "highlight.js/styles/androidstudio.css";

@Component({
  components: {
    Yara,
  },
})
export default class App extends Vue {}
</script>

<style>
html {
  background-color: #f2f9ff !important;
}

pre {
  white-space: pre;
  white-space: pre-wrap;
  word-break: break-all;
  word-wrap: break-word;
}
</style>
