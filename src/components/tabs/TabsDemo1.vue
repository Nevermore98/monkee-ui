<demo>
常规使用
</demo>
<template>
  <Tabs v-model:selected="selectedItem">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="导航3">内容3</Tab>
    <Tab title="导航4">内容4</Tab>
    <Tab title="导航5">内容5</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../../lib/Tabs.vue';
import Tab from '../../lib/Tab.vue';
import {ref} from 'vue';

export default {
  components: {
    Tabs,
    Tab
  },
  setup(){
    const selectedItem = ref('导航1')
    return {
      selectedItem
    }
  }
}
</script>

