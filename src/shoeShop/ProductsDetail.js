import { Component } from "react";

export default class ProductsDetails extends Component {
  render() {
    const { image, name, price, description, quantity } =
      this.props.selectedProduct;
    return (
      <div className="card p-4 mt-5">
        <div className="row">
          <div className="col-5">
            <img src={image} alt="" />
          </div>
          <div className="col-7 text-start">
            <h2>Name:{name}</h2>
            <h2>Price:{price}$</h2>
            <h2>Description:{description}</h2>
            <h2>Quantity:{quantity}</h2>
          </div>
        </div>
      </div>
    );
  }
}
