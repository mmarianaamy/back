const express = require('express');

const router = express.Router();
const CustomerHttpHandler = require('../handlers/customer');
const CustomerServiceFactory = require('../db/factory');
const CustomerController = require('../controllers/customer');

// Create the service and controller
const customerService = CustomerServiceFactory.create();
const customerController = new CustomerController(customerService);

// Create the handler instance
const customerHandler = new CustomerHttpHandler(customerController);

// Set up routes with bound handler methods
router.get('/:username/:password', customerHandler.getLogin.bind(customerHandler));

module.exports = router;
