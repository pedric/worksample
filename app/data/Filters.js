const Filters = [
  {
    name: 'type',
    values: ['savings', 'checking'],
    active: false,
  },
  {
    name: 'status',
    values: [true, false],
    active: false,
  },
  {
    name: 'balance',
    values: [0, 100000],
    active: false,
  },
];

export default Filters;
