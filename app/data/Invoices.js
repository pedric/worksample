import Faker from 'faker';

const Invoices = [];
const numberOfInvoices = 100;

for (let i = 0; i < numberOfInvoices; i++) {
  const accountHolder = Faker.name.lastName();
  Invoices[i] = {
    type: Faker.random.arrayElement(['savings', 'checking']),
    name: `${Faker.random.number({
      min: 10000000000,
      max: 99999999999,
    })} - ${accountHolder}`,
    // 'status': Faker.random.boolean(),
    status: Faker.random.arrayElement(['active', 'deactivated']),
    currency: 'USD',
    balance: Faker.finance.amount(1, 10000, 2),
    image: {
      url: Faker.image.avatar(),
      alt: `Avatar of ${accountHolder}`,
    },
    notes: Faker.lorem.sentence(),
  };
}

export default Invoices;
