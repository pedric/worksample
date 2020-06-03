const PageData = {
  title: `All invoices - ${new Date().getFullYear()}`,
  table: {
    title: 'invoices',
    tableHeads: {
      type: 'type',
      accountName: 'account name',
      status: 'status',
      currency: 'currency',
      balance: 'balance',
    },
  },
  menu: {
    	items: [
    		{
    			url: '#',
    			name: 'Link one'
    		},
    		{
    			url: '#',
    			name: 'Link two'
    		},
    		{
    			url: '#',
    			name: 'Link three'
    		}
    	]
    }
};

export default PageData;
