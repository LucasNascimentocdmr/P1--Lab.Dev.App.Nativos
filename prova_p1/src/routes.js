
const { Router } = require('express');
const ProductController = require('../app/controllers/ProductController');

const router = Router();

router.get('/produtos', ProductController.index);
router.get('/produtos/:id', ProductController.show);
router.delete('/produtos/:id', ProductController.delete);
router.post('/produtos', ProductController.store);
router.put('/produtos/:id', ProductController.update);

module.exports = router;

//Adicionei o caminho correto para importar o ProductController (assumindo que ele está em ../app/controllers/ProductController).
//Removi a quebra de linha após a declaração do router.
//Mantive a exportação do router no final.