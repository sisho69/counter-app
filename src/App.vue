<template>
  <div class="container">
    <!-- タイトル-->
    <h1>メモ付きカウンター</h1>

    <!-- カウンター -->
    <div class="counter">
      <button @click="decrement">-</button>
      <span>{{ count }}</span>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => count.value++
const decrement = () => count.value--
</script>

<style>
.container {
  text-align: center;
  margin-top: 50pc;
}

.counter {
  margin-top: 20px;
}

.counter button {
  margin: 0 10px;
  font-size: 1.5rem;
  padding: 5px 15px;
}

.counter span {
  display: inline-block;
  width: 50px;
  text-align: center;
  font-size: 1.5rem;
}
</style>
