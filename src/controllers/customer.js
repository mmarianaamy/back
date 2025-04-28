class CustomerController {
  constructor(service) {
    this.service = service;
  }

  async getLogin(username, password) {
    console.log(username, password);
    const customer = await this.service.getCustomerLogin(username, password);
    console.log(customer);
    if (!customer) throw new Error('Customer not found new message');
    return customer;
  }
}

module.exports = CustomerController;
