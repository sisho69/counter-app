<template>
  <div class="container">
    <!-- タイトル-->
    <h1>カウンター</h1>

    <div class="counter-box">
      <p class="count">{{ count }}</p>
      <div class="buttons">
        <button @click="changeCount(-1)">-</button>
        <button @click="changeCount(1)">+</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const count = ref(0)

// 起動時にサーバーのカウンター値を取得
onMounted(() => {
  const saved = localStorage.getItem('count')
  if (saved !== null) {
    count.value = parseInt(saved, 10)
  }
})

// 値が変わるたびに保存
watch(count, (newVal) => {
  localStorage.setItem('count', newVal)
})

// 操作
const increment = () => count.value++
const decrement = () => count.value--
const reset = () => (count.value = 0)
</script>

<style>
.count {
  font-size: 3rem;
  margin: 10px 0;
  color: #000;
  background-color: #ffff;
}

.buttons button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 1.2rem;
}
</style>
