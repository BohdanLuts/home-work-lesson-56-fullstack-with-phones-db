const { Router } = require('express');
const phonesRouter = Router();
const { phonesController } = require('./../controllers');

phonesRouter
  .route('/')
  .post(phonesController.createPhone)
  .get(phonesController.getPhones);

phonesRouter
  .route('/:phoneId')
  .get(phonesController.getPhoneById)
  .patch(phonesController.updatePhoneById)
  .delete(phonesController.deletePhoneById);

module.exports = phonesRouter;
