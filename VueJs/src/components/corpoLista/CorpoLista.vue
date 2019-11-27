<template>
  <div>

    <!-- input para filtrar pokemon -->
    <div class="p-3">
        <input type="text" 
        class="form-control mb-1"
        v-on:input="filtro = $event.target.value"
        placeholder="Busque o Pokemon por nome ou número...">
    </div>  

     <!-- caixinha do pokemon --> 
    <div class="corpo shadow-lg py-4 px-3 bg-white">
        <ul class="card-columns mt-4">
          <li class="" v-on:click="abrirModal(pokemon.pokemon_id)" 
          v-for="pokemon of pokemonsComFiltro">
              <painel
                :pokemon="pokemon">
              </painel>

          </li>
        </ul>
    </div>

    <!-- modal de quando clicar no pokemon -->
    <div v-on:click="fecharModal" id="modal" class="modal-container">
      <div class="card">
        <div class="card-body">
          <modal :pokemon="pokemonC">
          </modal>

          <input class="btn btn-dark float-right" v-on:click="fecharModal" type="button" value="Fechar">
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
  import Painel from '../shared/painel/Painel.vue';
  import ModalPokemon from '../shared/modalPokemon/ModalPokemon.vue';

  export default {

    components: {
      'painel': Painel,
      'modal': ModalPokemon
    },

    data(){
      return{
        pokemons : [],
        pokemonC: [],
        filtro : ''
      }
    },

    methods:{
      abrirModal: function(id){
        var modal = document.getElementById('modal');
        modal.classList.add('mostrar');
        
        this.$http.get(`http://localhost:3000/pokemon/${id}`)
        .then(res => res.json())
        .then(pokemons => this.pokemonC = pokemons, err => console.log(err))
      },
      fecharModal(){
        var modal = document.getElementById('modal');
        modal.classList.remove('mostrar');
      }
    },

    computed: {

      pokemonsComFiltro(){
        if (this.filtro) {
          let exp = new RegExp(this.filtro.trim(), 'i');
          return this.pokemons.filter(pokemon => exp.test(pokemon.name));
        } else{
          return this.pokemons;
        }
      }
    },

    created(){

      this.$http.get('http://localhost:3000/')
        .then(res => res.json())
        .then(pokemons => this.pokemons = pokemons, err => console.log(err))
    }
  }
</script>

<style scoped>
    ul{
      margin: 0;
      padding: 0;
    }

    li{
        list-style-type: none;
    }

    .modal-container{
        display: none;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    .mostrar{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal{
        background: #fff;
        border-radius: 2em;
        padding: 2em;
    }
</style>