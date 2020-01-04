import React, { useEffect } from "react";
import { Container, Header, Card } from "semantic-ui-react";
import { RootState } from "../../../redux";
import { bindActionCreators, Dispatch } from "redux";
import { loadProducts } from "../../../redux/modules/products";
import { connect } from "react-redux";
import { ProductCard } from "./ProductCard";

const mapStateToProps = (state: RootState) => ({
  products: state.products.products
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loadProducts
    },
    dispatch
  );

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const UnconnectedShop: React.FC<Props> = ({ loadProducts, products }) => {
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <Container>
      <Header as="h2">Shop</Header>
      <Card.Group>
        {products.map(product => (
          <ProductCard product={product} />
        ))}
      </Card.Group>
    </Container>
  );
};

export const Shop = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedShop);
