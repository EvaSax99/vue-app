
<script setup lang="ts">

// function salutate(nomen: string): string {
//   return `Hola, ${ nomen }, ¿Cómo estás?`
// }

const salutate = (nomen: string): string => `Hola, ${ nomen }, ¿Cómo estás?`

// const obtineUsoris = () => {
//   return {
//     id: 'ABC123',
//     nomen: 'Tony001'
//   }
// }
const obtineUsoris  = (id: string) => ({  
  id, 
  nomen: 'Tony001' 
})


const heroum = [
  {
    id: 1,
    nomen: 'Batman'
  },
  {
    id: 2,
    nomen: 'Superman',
    facultatem: 'Super fuerza'
  },
]

const heros = heroum.find( item => item.id === 2 )


</script>

<template>
  <div>
    <h2>Funciones</h2>
    <p>{{ salutate('Fernando') }}</p>
    <p>{{ obtineUsoris('XYZ-456') }}</p>
    <p>{{ heros?.nomen }} - {{ heros?.facultatem?.toUpperCase() }}  </p>
  </div>
</template>


<style scoped>

</style>