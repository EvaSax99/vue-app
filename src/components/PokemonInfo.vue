<script setup lang="ts">
import { ref, watch } from 'vue';
import { useFetch } from '../composables/useFetch';


interface Pokemon {
  id: number,
  nomen: string,
  imagem: string,
}

const pokemonId = ref<number>(1);

const pokemon = ref<Pokemon | null>(null)

const { data } = useFetch(
  () =>`https://pokeapi.co/api/v2/pokemon/${ pokemonId.value }`
);

watch(data, (novusPokemon: any) => {
  
  if (!novusPokemon) return;

  pokemon.value = { 
    id: novusPokemon.id,
    nomen: novusPokemon.name,
    imagem: novusPokemon.sprites.other.dream_world.front_default
  }

})


</script>

<template>
  <section v-if="pokemon">
    <h2>#{{ pokemon.id }} {{ pokemon.nomen }}</h2>

    <img :src="pokemon.imagem" :alt="pokemon.nomen">

    <div>
      <button :disabled="pokemonId === 1" @click="pokemonId--">Anterior</button>
      <button @click="pokemonId++">Siguiente</button>
    </div>

  </section>
</template>


<style scoped>

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

section > div {
  display: flex;
  width: 230px;
  justify-content: space-between;
}

img {
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
}

</style>