<script setup>
import { ref, onMounted, watch } from 'vue'

// カウンターの値
const count = ref(0)

// 起動時にlocalStorageからカウンター値を取得
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

<template>
  <div class="container">
    <!-- タイトル-->
    <h1>カウンター</h1>

    <div class="counter-box">
      <p class="count">{{ count }}</p>
      <div class="buttons">
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
        <button @click="reset">リセット</button>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  text-align: center;
  margin-top: 100px;
  background-color: white;
  color: black;
  padding: 30px;
  border-radius: 10px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.count {
  font-size: 3rem;
  margin: 20px 0;
}

/*ボタン*/

.buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.buttons button {
  flex: 1 1 30%;
  min-width: 80px;
  padding: 12px 0;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #0078d7;
  color: white;
  transition: 0.2s;
}

.buttons button:hover {
  background-color: #005fa3;
}

/*スマホ対応*/
@media (max-width: 600px) {
  .container {
    width: 95%;
    padding: 20px;
  }

  .count {
    font-size: 2.5rem;
  }

  .buttons .button {
    font-size: 1rem;
    min-width: 70px;
    padding: 10px 0;
  }
}
</style>
