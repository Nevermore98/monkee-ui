<template>
  <div class="layout">
    <Topnav class="nav" toggleMenuButtonVisible/>
    <div class="content">
      <aside v-if="asideVisible">
        <h3>开发指南</h3>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">快速上手</router-link>
          </li>
        </ol>

        <h3>组件列表</h3>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 弹出框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
        </ol>
        <div class="mask" @click="onClickMask"></div>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {Topnav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const onClickMask = () => {
      asideVisible!.value = false
    };
    return {asideVisible, onClickMask};
  }
};
</script>

<style lang="scss" scoped>

@media screen and (max-width: 500px){
  .mask {
    position: fixed;
    top: 0;
    left: 150px;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.8);
    z-index: 10;
  }
}

aside {
  background: white;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 70px 8px;
  height: 100%;
  z-index: 1;

  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  > ol {
    > li {
      > a {
        display: block;
        padding: 8px 16px;
        margin: 8px 0;
        text-decoration: none;

        &:hover {
          color: #4fc08d;
        }
      }

      .router-link-active {
        color: #4fc08d;
        font-weight: bold;
        background: #ebfff0;
        border-radius: 999px;
      }
    }
  }
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 0 16px 16px 16px;
    overflow: auto;

    @media (max-width: 500px) {
      padding: 0 12px 12px 12px;

    }
  }
}
</style>
