<template>
  <div>
    <div class="columns">
      <div class="column source">
        <b-field>
          <b-input
            type="textarea"
            placeholder="YARA rule"
            rows="10"
            v-model="source"
            @input="highlightCodeBlocks"
          ></b-input>
        </b-field>
      </div>
    </div>
    <hr />
    <div class="columns">
      <div class="column">
        <pre>
          <code class="yara">{{ source }}</code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import hljs from "highlight.js/lib/core";
import yara from "@/hljs/yara";
hljs.registerLanguage("yara", yara);

@Component
export default class Yara extends Vue {
  source = `rule ExampleRule
{
    strings:
        $my_text_string = "text here"
        $my_hex_string = { E2 34 A1 C8 23 FB }

    condition:
        $my_text_string or $my_hex_string
}`;

  mounted() {
    this.highlightCodeBlocks();
  }

  highlightCodeBlocks() {
    this.$el.querySelectorAll("pre code").forEach((block) => {
      block.textContent = this.source;
      hljs.highlightBlock(block);
    });
  }
}
</script>
