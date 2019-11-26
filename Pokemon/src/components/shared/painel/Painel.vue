<template>
  <div class="card">
    <div class="card-body">
        <div class="d-flex flex-wrap justify-content-end justify-content-between">
          <h4 class="">ID = {{ pokemon.pokemon_id }}</h4>
          <h4 class="">{{ pokemon.name }}</h4>
        </div>
          <h5 class="text-right">100% CP 40 = {{ pokemon.p100_CP_40 }}</h5>
          <h5 class="mt-5">{{ pokemon.type_1 }}</h5>
          <h5  class="">{{ pokemon.type_2 }}</h5>
          <h2 class="text-right mt-5">Geração {{ pokemon.generation }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pokemon'],
}
</script>

<style scoped>
  .card {
    cursor: pointer;
  }
</style>