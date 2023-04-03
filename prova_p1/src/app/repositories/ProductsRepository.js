

const { v4 } = require('uuid');

let products = [
  {
    id: v4(),
    name: 'Mana leak',
    price: '10,00',
    category_id: v4(),
    subcategory: 'card',
  },
  {
    id: v4(),
    name: 'Counterspell',
    price: '10,00',
    category_id: v4(),
    subcategory: 'card',
  },
];

class ProductsRepository {
  findAll() {
    return Promise.resolve(products);
  }

  findById(id) {
    return Promise.resolve(products.find(product => product.id === id));
  }

  delete(id) {
    return new Promise(resolve => {
      products = products.filter(product => product.id !== id);
      resolve();
    });
  }

  create({ name, price, category_id, subcategory }) {
    const newProduct = {
      id: v4(),
      name,
      price,
      category_id,
      subcategory,
    };
    products.push(newProduct);
    return Promise.resolve(newProduct);
  }

  update(id, { name, price, category_id, subcategory }) {
    const updatedProduct = {
      id,
      name,
      price,
      category_id,
      subcategory,
    };
    products = products.map(product => (product.id === id ? updatedProduct : product));
    return Promise.resolve(updatedProduct);
  }
}

module.exports = new ProductsRepository();


//Foi removido o uso de Promise construtor, uma vez que as funções assíncronas internas já utilizam promises, portanto podemos usar Promise.resolve() para retornar a promise resolvida de forma mais simples;
//O uso de resolve dentro da promise foi substituído por retornar diretamente o resultado da operação, o que simplifica o código;
//As chamadas de métodos foram simplificadas para usar a sintaxe reduzida de função anônima com arrow function;
//As chaves e a palavra reservada return foram removidas onde era possível retornar o valor diretamente com Promise.resolve().