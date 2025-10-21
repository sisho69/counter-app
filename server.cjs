/* eslint-disable */
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

// ミドルウェア
app.use(cors())
app.use(express.json())

// カウンター値を保持
let counter = 0

// 現在の値を取得
app.get('/api/counter', (req, res) => {
  res.json({ value: counter })
})

// +1
app.post('/api/increment', (req, res) => {
  counter++
  res.json({ value: counter })
})

// -1
app.post(`/api/decrement`, (req, res) => {
  counter--
  res.json({ value: counter })
})

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`)
})
