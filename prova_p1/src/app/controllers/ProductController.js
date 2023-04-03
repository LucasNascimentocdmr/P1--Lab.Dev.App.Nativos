

const ProductsRepository = require('../repositories/ProductsRepository');

class ProductController {
  async index(request, response) {
    const products = await ProductsRepository.findAll();

    response.json(products);
  }

  async show(request, response) {
    const { id } = request.params;

    const product = await ProductsRepository.findById(id);

    if (!product) {
      return response.status(404).json({ error: 'Produto não encontrado' });
    }

    response.json(product);
  }

  async store(request, response) {
    const { name, price, category_id, subcategory } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Produto cadastrado sem nome' });
    }

    const product = await ProductsRepository.create({
      name,
      price,
      category_id,
      subcategory,
    });

    response.json(product);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, price, category_id, subcategory } = request.body;

    const productExists = await ProductsRepository.findById(id);

    if (!productExists) {
      return response.status(404).json({ error: 'Não existe produto com esse id cadastrado' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Nome precisa ser preenchido ou válido' });
    }

    const product = await ProductsRepository.update(id, {
      name,
      price,
      category_id,
      subcategory,
    });

    response.json(product);
  }

  async delete(request, response) {
    const { id } = request.params;

    const product = await ProductsRepository.findById(id);

    if (!product) {
      return response.status(404).json({ error: 'Produto não encontrado' });
    }

    await ProductsRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new ProductController();

//Adicionei uma quebra de linha após a declaração da importação ProductsRepository.
//Adicionei espaçamentos entre os parâmetros dos métodos create, update, ProductsRepository.update e ProductsRepository.delete para melhorar a legibilidade.
//Adicionei uma mensagem mais clara no retorno de erro para o caso em que o produto não é encontrado no método delete.
//Padronizei a mensagem de erro no retorno do método delete.
