import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: '',
      name: '',
      price: ''
    }
  }
  render() {
    return (
      <div>
        Form
        <input />
        <input />
        <input />
        <button>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    )
  }
}

export default Form;