const { Router } = require('express');
const {
  getAll,
  getOne,
  create,
  update,
  remove,
} = require('../controllers/params');

const router = Router();
router.get('/', getAll);
router.get('/:codigo', getOne);
router.post('/', create);
router.put('/:codigo', update);
router.delete('/:codigo', remove);

module.exports = router;
