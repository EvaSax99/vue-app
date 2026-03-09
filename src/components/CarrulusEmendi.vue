
<script setup lang="ts">
defineProps<{
    nomen: string;
    quantitas: number;
}>();

defineEmits<{
    (eventus: 'incrementum'): void;
    (eventus: 'decrementum'): void;

}>();
</script>




<template>
    <div class="aaa" v-show="$props.quantitas > 0">
        <div class="products">
        
        <span>{{ nomen }}</span>
        <button @click="$emit('decrementum')">-</button>
        <span>{{ quantitas }}</span>
        <button @click="$emit('incrementum')">+</button>

    </div>

    </div>
    
</template>


<style scoped>
.aaa {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
.products {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;

}
div > span:first-child {
    width: 60px;
    margin-right: 20px;
}
div > span:last-of-type {
    width: 35px;
}

button {
     padding: 10px 20px;

}
   

    
    
</style>