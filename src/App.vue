<template>
  <router-view/>
</template>

<script>
import {ref, provide} from 'vue'
import {router} from './router'

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width > 500)
    provide('asideVisible', asideVisible)
    router.afterEach(()=>{
      if(width <= 500){
        asideVisible.value = false
      }
    })
  }
}
</script>
