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
import { ref, onMounted } from 'vue'

const count = ref(0)

// 起動時にサーバーのカウンター値を取得
onMounted(async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/counter`)
    const data = await res.json()
    count.value = data.value
  } catch (err) {
    console.error('初期値取得エラー:', err)
  }
})

// カウント変更(サーバー連動)
const changeCount = async (amount) => {
  try {
    const endpoint = amount > 0 ? 'increment' : 'decrement'
    const res = await fetch(`http://localhost:3000/api/${endpoint}`, { method: 'POST' })
    const data = await res.json()
    count.value = data.value
  } catch (err) {
    console.error('通信エラー:', err)
  }
}
</script>

<style>
.container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  font-family: 'segoe UI', sans-serif;
  color: #000;
  background-color: #ffff;
}

.counter-box {
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.count {
  font-size: 3rem;
  margin: 10px 0;
}

.buttons button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 1.2rem;
}
</style>
