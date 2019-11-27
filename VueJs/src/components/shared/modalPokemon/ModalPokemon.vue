<template>
    <div>
        <div class="d-flex flex-wrap justify-content-between">
          <ul>
            <li class="caixa-modal" v-for="pokemonC of pokemon">
              <div class="d-flex flex-wrap justify-content-between">
                <h4 class="">{{ pokemonC.pokemon_id }}</h4>
                <h4 class="">{{ pokemonC.name }}</h4>
              </div>
                <h5 class="">{{ pokemonC.type_1 }}</h5>
                <h5 class="">{{ pokemonC.type_2 }}</h5>
              <div class="mt-3 mb-4">
                <h5 class="text-right text-danger">ATK = {{ pokemonC.atk }}</h5>
                <h5 class="text-right text-primary">DEF = {{ pokemonC.def }}</h5>
                <h5 class="text-right text-success">STA = {{ pokemonC.sta }}</h5>
              </div>
              <div class="my-5">
                <h5 class="">{{ pokemonC.weather_1 }}</h5>
                <h5 class="">{{ pokemonC.weather_2 }}</h5>
              </div>
                <h5 class="text-right">100% CP 40 = {{ pokemonC.p100_CP_40 }}</h5>
                <h5 class="text-right">100% CP 39 = {{ pokemonC.p100_CP_39 }}</h5>
                <h2 class="text-right mt-5 mb-2">Geração {{ pokemonC.generation }}</h2>
            </li>
          </ul>
      </div>
    </div>
</template>

<script>
export default {
    props: ['pokemon'],
}
</script>

<style scoped>
    .caixa-modal{
      width: 35vh;
    }
    ul{
      margin: 0;
      padding: 0;
    }
    li{
      list-style: none;
    }
</style>