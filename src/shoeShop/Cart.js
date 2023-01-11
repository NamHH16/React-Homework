import { Component } from "react";

export default class Cart extends Component {
  renderCart = () => {
    return this.props.cartList.map((cartItem, index) => {
      return (
        <tr key={cartItem.product.id}>
          <td>{index + 1}</td>
          <td>
            <img width="100" src={cartItem.product.image} alt="" />
          </td>
          <td>{cartItem.product.name}</td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => {
                this.props.decreaseCart(cartItem.product.id);
              }}
            >
              -
            </button>
            <span>{cartItem.quantity}</span>
            <button
              className="btn btn-info"
              onClick={() => {
                this.props.increaseCart(cartItem.product.id);
              }}
            >
              +
            </button>
          </td>
          <td>{cartItem.product.price} $</td>
          <td>{cartItem.quantity * cartItem.product.price} $</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.deleteCart(cartItem.product.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  totalCart = () => {
    const total = this.props.cartList.reduce((prevValue, currentItem) => {
      return prevValue + currentItem.quantity * currentItem.product.price;
    }, 0);
    return total;
  };

  render() {
    return (
      <div
        className="modal fade"
        id="cartModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Cart
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.renderCart()}</tbody>
              </table>

              <h2>Total: {this.totalCart()} $</h2>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  this.props.checkout();
                }}
              >
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
