const categories = [
  { id: 'food', label: 'Food' },
  { id: 'travel', label: 'Travel' },
  { id: 'transportation', label: 'Transportation' },
  { id: 'utilities', label: 'Utilities' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'others', label: 'Others' }
];

const categoryIds = categories.map((c) => c.id);

module.exports = { categories, categoryIds };
