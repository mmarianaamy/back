class CustomerHttpHandler {
  constructor(customerController) {
    this.customerController = customerController;
  }

  async getLogin(req, res) {
    try {
      const customers = await this.customerController.getLogin(
        req.params.username,
        req.params.password,
      );
      res.json(customers);
    } catch (error) {
      res.status(500).json({ error: 'Username or password incorrect' });
    }
  }
}

// Export the class directly
module.exports = CustomerHttpHandler;
