const DBService = require('../dbService');

class FakeService extends DBService {
  constructor() {
    super();
    this.customers = new Map();
    // Initialize with 5 dummy customers
    const dummyCustomers = [
      {
        id: '1',
        usuario: 'sandra.g',
        contra: 'latte123',
        nombre: 'Sandra García',
        num: '5001',
      },
      {
        id: '2',
        usuario: 'roberto.m',
        contra: 'capuccino456',
        nombre: 'Roberto Martínez',
        num: '5002',
      },
      {
        id: '3',
        usuario: 'esteban.l',
        contra: 'espresso789',
        nombre: 'Esteban López',
        num: '5003',
      },
    ];

    dummyCustomers.forEach((customer) => {
      this.customers.set(customer.id, customer);
    });
  }

  async getCustomerLogin(username, password) {
    // eslint-disable-next-line consistent-return, no-restricted-syntax
    for (const customer of this.customers.values()) {
      if (customer.usuario === username && customer.contra === password) {
        return { nombre: customer.nombre, num: customer.num };
      }
    }
    return null;
  }
}

module.exports = FakeService;
