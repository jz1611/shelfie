import React from 'react';
import axios from 'axios';

import Product from '../Product/Product';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct(id) {
    axios
      .delete(`/api/inventory/${id}`)
      .then(res => {
        this.props.getInventory();
      })
  }
  
  render() {
    const { inventory } = this.props;
    const mappedInventory = inventory.map(product => {
      return (
        <div key={ product.id }>
          <Product
            product={ product }
            deleteProduct={ this.deleteProduct }
          />
        </div>
      );
    })
    return (
      <div>
        { mappedInventory }
      </div>
    )
  }
}

export default Dashboard;