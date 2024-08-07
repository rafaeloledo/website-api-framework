const express = require('express')
const pool = require('./db')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM products')
    res.json(rows)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, description, value, supplier } = req.body
    const newProduct = await pool.query(
      'INSERT INTO products (name, description, value, supplier) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, value, supplier]
    )

    res.json(newProduct.rows[0])
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
