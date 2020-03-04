<template lang="pug">
  main.main
    <Menu/>
    <transition mode="out-in" name ="fade">
      <router-view :key="key"></router-view>
    </transition>
</template>

<script>
import { on_load_mixin } from "@/system/statistics";
import Menu from "@/components/Menu";
import About from "@/components/About";
export default {
  mixins: [on_load_mixin],
  components: {
    Menu,
    About
  }
};
</script>

<style lang="stylus">
.main
  pos relative
  height 100vh
</style>
  