<script setup lang="ts">
import CarrulusEmendi from './components/CarrulusEmendi.vue';
import { useProducta } from './composables/useProducta';
import { useMutare } from './composables/useMutare';
import PokemonInfo from './components/PokemonInfo.vue';
// import DesesArr from './typescript/DesesArr.vue';
// import ControlFlujo from './typescript/ControlFlujo.vue';
// import ObjectType from './typescript/ObjectType.vue';
// import ArraysType from './typescript/ArraysType.vue';
// import BasicFunctions from './typescript/BasicFunctions.vue';
// import DesesObj from './typescript/DesesObj.vue';1



const { titulus, mutareTitulus } = useMutare();
const { producta, quantitatemIncrementa, quantitatemDecrementa } = useProducta();

</script>


<template>
<div>
  <h1 v-on:click="mutareTitulus"> {{titulus}}  de Vue + TS</h1>
  <h2>Mi carrito de la compra</h2>
 
  <CarrulusEmendi 
  v-for="productum in producta"
  :nomen="productum.nomen" 
  :quantitas="productum.quantitas"
  @incrementum="quantitatemIncrementa(productum.id)"
  @decrementum="quantitatemDecrementa(productum.id)"
  />
 

</div>
  <PokemonInfo />
</template>
<style>
h1 {
  font-size: 2.2rem;
  line-height: 0.1;

}



</style>



