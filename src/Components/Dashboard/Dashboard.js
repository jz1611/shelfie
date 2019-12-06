import React from 'react';

import Product from '../Product/Product';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { inventory } = this.props;
    const mappedInventory = inventory.map(product => {
      return (
        <div key={ product.id }>
          <Product product={ product } />
        </div>
      );
    })
    return (
      <div>
        Dashboard
        { mappedInventory }
      </div>
    )
  }
}

export default Dashboard;