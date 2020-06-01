import Faker from 'faker';

const Invoices = [];
const numberOfInvoices = 106;

for (let i = 0; i < numberOfInvoices; i++) {
  const accountHolder = Faker.name.lastName(); // Set this here to get the same name on account and alt-text

  Invoices[i] = {
  	id: i+1,
    type: Faker.random.arrayElement(['savings', 'checking']),
    name: `${Faker.random.number({
      min: 10000000000,
      max: 99999999999,
    })} - ${accountHolder}`,
    status: Faker.random.boolean(),
    // status: Faker.random.arrayElement(['active', 'deactivated']),
    currency: 'USD',
    balance: Faker.random
      .number(100000)
      .toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
    image: {
      url: Faker.image.avatar(),
      alt: `Avatar of ${accountHolder}`,
    },
    notes: Faker.lorem.sentence(),
  };
}

export default Invoices;
