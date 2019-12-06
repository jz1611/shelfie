import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.product.name}</h1>
        <h1>{this.props.product.price}</h1>
        <img src={this.props.product.imgurl} alt={this.props.product.name}/>
      </div>
    )
  }
}

export default Product;