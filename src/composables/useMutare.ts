import { ref } from "vue";

export const useMutare = () => {
    const titulus = ref<string>('Bases');
const mutareTitulus = () => {
 if (titulus.value === 'Cosas') {
   titulus.value = 'Bases';
 } else {
  titulus.value = 'Cosas';
 }
}




    return {
        titulus,
        mutareTitulus,

    }
}
