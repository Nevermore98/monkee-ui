<template>
  <div>
    <h1>Switch 开关</h1>

    <Demo :component="SwitchDemo1"/>
    <Demo :component="SwitchDemo2"/>
  </div>
</template>
<script lang="ts">
import SwitchDemo1 from './SwitchDemo1.vue';
import SwitchDemo2 from './SwitchDemo2.vue';
import {
  ref
} from 'vue'
import Demo from '../Demo.vue';

const Prism = (window as any).Prism;

export default {
  components: {Demo},
  setup() {
    return {SwitchDemo1, SwitchDemo2, Prism};
  }
};

</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
