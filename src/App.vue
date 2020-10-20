<template>
  <div id="app">
    <game-2048-vue/>
  </div>
</template>

<script>
import Game2048Vue from './views/Game2048.vue'
export default {
  components: {
    Game2048Vue,
  },
}
</script>

<style>
body {
    color: #33333d;
    font: 17px/1.5 "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif;
    background: white;
}
</style>
