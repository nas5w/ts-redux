import React from "react";
import { Nav } from "./components/header/Nav";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import { Shop } from "./components/main/shop/Shop";
import { Cart } from "./components/main/cart/Cart";
import { Login } from "./components/main/auth/Login";

const App = () => {
  return (
    <Container>
      <Nav />
      <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
      </Switch>
    </Container>
  );
};

export default App;
