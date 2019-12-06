import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgurl: '',
      name: '',
      price: 0
    }

    this.changeHandler = this.changeHandler.bind(this);
    this.resetState = this.resetState.bind(this);
    this.postProduct = this.postProduct.bind(this);
  }

  changeHandler(key, value) {
    this.setState({
      [key]: value
    });
  }

  resetState() {
    this.setState({
      imgurl: '',
      name: '',
      price: 0
    });
  }

  postProduct() {
    const {name, price, imgurl } = this.state;
    axios
      .post('/api/product', {name, price, imgurl})
      .then(res => {
        this.props.getInventory();
        this.resetState();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        Form
        <input name="imgurl" type="text" value={ this.state.imgurl } onChange={event => this.changeHandler(event.target.name, event.target.value)}/>
        <input name="name" type="text" value={ this.state.name} onChange={event => this.changeHandler(event.target.name, event.target.value)}/>
        <input name="price" type="number" value={ this.state.price } onChange={event => this.changeHandler(event.target.name, event.target.value)}/>
        <button onClick={ this.resetState }>Cancel</button>
        <button onClick={ this.postProduct }>Add to Inventory</button>
      </div>
    )
  }
}

export default Form;