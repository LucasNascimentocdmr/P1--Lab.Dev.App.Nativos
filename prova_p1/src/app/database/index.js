const client = require('./client');

class ProductsRepository {
  async findAll() {
    const result = await client.query('SELECT * FROM products');
    return result.rows;
  }

  async findById(id) {
    const result = await client.query('SELECT * FROM products WHERE id = $1', [id]);
    return result.rows[0];
  }

  async delete(id) {
    await client.query('DELETE FROM products WHERE id = $1', [id]);
  }

  async create({ name, price, category_id, subcategory, }) {
    const result = await client.query(
      'INSERT INTO products (id, name, price, category_id, subcategory) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [uuid(), name, price, category_id, subcategory]
    );
    return result.rows[0];
  }

  async update(id, { name, price, category_id, subcategory, }) {
    const result = await client.query(
      'UPDATE products SET name = $1, price = $2, category_id = $3, subcategory = $4 WHERE id = $5 RETURNING *',
      [name, price, category_id, subcategory, id]
    );
    return result.rows[0];
  }
}

module.exports = new ProductsRepository();
