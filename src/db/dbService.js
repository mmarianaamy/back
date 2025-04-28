class DBService {
  constructor() {
    this.initialized = false;
  }

  async getCustomerLogin(_username, _password) {
    if (!this.initialized) {
      throw new Error('Service not initialized');
    }
    throw new Error('Method not implemented');
  }
}

module.exports = DBService;
