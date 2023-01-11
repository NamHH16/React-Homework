import { Component } from "react";
import ProductsItem from "./ProductsItem";

export default class ProductsList extends Component {
  // renderProduct = () => {

  //   return this.props.products.map((item) => {
  //     return (
  //       <div className="col-3">
  //         <ProductsItem key={item.id} item={item} />
  //       </div>
  //     );
  //   });
  // };
  renderProduct = () => {
    return this.props.products.map((item) => {
      return (
        <div className="col-3" key={item.id}>
          <ProductsItem
            addToCart={this.props.addToCart}
            setSelectedProduct={this.props.setSelectedProduct}
            item={item}
          />
        </div>
      );
    });
  };
  render() {
    return <div className="row mt-5">{this.renderProduct()}</div>;
  }
}
