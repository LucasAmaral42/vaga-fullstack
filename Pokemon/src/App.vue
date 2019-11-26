<template>
  <div class="">
      <menu-topo></menu-topo>
      <corpo></corpo>
  </div>
</template>

<script>
import Menu from './components/shared/menu/Menu.vue';
import CorpoLista from './components/corpoLista/CorpoLista.vue';

export default {
    components: {
      'menu-topo' : Menu,
      'corpo' : CorpoLista
    },
    }
</script>

<style>

</style>