import { computed, onMounted, ref, watch } from "vue";


export const useFetch =  (url: string | (() => string) ) => {

  const data = ref(null)

  const reactiveUrl = computed(() => {
    return typeof url === 'function' ? url() : url;
  })

  onMounted(() => {
    fetchData();
  })

  watch(reactiveUrl, () => {
    fetchData();
  })

  async function fetchData() {

    try {
      const responsum = await fetch(reactiveUrl.value);
      const responsumData = await responsum.json();

      data.value = responsumData;
      
    } catch (error) {
      console.log(error);
    }  
  }

  return {
    data,
  }
}