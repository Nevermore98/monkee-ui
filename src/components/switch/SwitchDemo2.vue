<demo>
禁用状态
</demo>
<template>
  <Switch v-model:value="isOpen" disabled/>
</template>

<script lang="ts">
import Switch from '../../lib/Switch.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const isOpen = ref(false)
    return {
      isOpen
    }
  }
}
</script>
