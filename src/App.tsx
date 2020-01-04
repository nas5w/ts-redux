import React from "react";
import { Nav } from "./components/header/Nav";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import { Shop } from "./components/main/shop/Shop";

const App: React.FC = () => {
  return (
    <Container>
      <Nav />
      <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/shop" component={Shop} />
        <Route path="/cart">Cart</Route>
      </Switch>
    </Container>
  );
};

export default App;
