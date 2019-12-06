import React from 'react';

import './Product.css';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <img className="product-image" src={this.props.product.imgurl} alt={this.props.product.name}/>
        <h1>{this.props.product.name}</h1>
        <h2>{this.props.product.price}</h2>
        <button onClick={ () => this.props.deleteProduct(this.props.product.id) }>Delete</button>
      </div>
    )
  }
}

export default Product;