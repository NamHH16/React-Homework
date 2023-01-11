import { Component } from "react";

export default class ProductsItem extends Component {
  render() {
    return (
      <div className="card p-3 mt-3">
        <img src={this.props.item.image} alt="" />
        <h4>{this.props.item.name}</h4>
        <h5>price: {this.props.item.price} $</h5>
        <div className="d-flex">
          <button
            className="btn btn-success me-2"
            onClick={() => {
              this.props.setSelectedProduct(this.props.item);
            }}
          >
            Detail
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              this.props.addToCart(this.props.item);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
