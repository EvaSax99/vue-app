<script setup lang="ts">
import { ref } from 'vue';
import CarrulusEmendi from './components/CarrulusEmendi.vue';
// import DesesArr from './typescript/DesesArr.vue';
// import ControlFlujo from './typescript/ControlFlujo.vue';
// import ObjectType from './typescript/ObjectType.vue';
// import ArraysType from './typescript/ArraysType.vue';
// import BasicFunctions from './typescript/BasicFunctions.vue';
// import DesesObj from './typescript/DesesObj.vue';1

const producta = ref( [
 {
  id: 1,
  nomen: 'Camisa',
  quantitas: 10,
},
{
  id: 2,
  nomen:'Pantalón',
  quantitas: 5,
},
{
  id: 3,
  nomen:'Zapato',
  quantitas: 3,
},
])
 


const quantitatemIncrementa = (id: number) => {
  const productum = producta.value.find(p => p.id === id);
  if (!productum) return; 
  if (productum.quantitas === 0) return;
  
  productum.quantitas++;
}

const quantitatemDecrementa = (id: number) => {
  const productum = producta.value.find(p => p.id === id);
  if (!productum) return;
  if (productum.quantitas === 0) return;
    productum.quantitas--;
  
}

const titulus = ref<string>('Bases');
const mutareTitulus = () => {
 if (titulus.value === 'Cosas') {
   titulus.value = 'Bases';
 } else {
  titulus.value = 'Cosas';
 }
}

</script>


<template>

  <h1 v-on:click="mutareTitulus"> {{titulus}}  de Vue + TS</h1>
  <h2>Mi carrito de la compra</h2>
 
  <CarrulusEmendi 
  v-for="productum in producta"
  :nomen="productum.nomen" 
  :quantitas="productum.quantitas"
  @incrementum="quantitatemIncrementa(productum.id)"
  @decrementum="quantitatemDecrementa(productum.id)"
  />
 
</template>
<style>
h1 {
  font-size: 2.2rem;
  line-height: 0.1;

}



</style>



