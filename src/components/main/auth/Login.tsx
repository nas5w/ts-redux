import React, { useState } from "react";
import { RootState } from "../../../redux";
import { login } from "../../../redux/modules/user";
import { connect } from "react-redux";
import { Form, Input, Header, Button, Container } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state: RootState) => ({
  username: state.user.username
});

const mapDispatchToProps = { login };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const UnconnectedLogin: React.FC<Props> = ({ login, username }) => {
  const [inputName, setInputName] = useState("");

  const tryLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    login(inputName);
  };

  if (username !== null) {
    return <Redirect to="/shop" />;
  }

  return (
    <Container>
      <Header as="h2">Login</Header>
      <Form>
        <Form.Field>
          <Input
            label="Username"
            value={inputName}
            onChange={e => setInputName(e.target.value)}
          />
        </Form.Field>
        <Button onClick={tryLogin}>Login</Button>
      </Form>
    </Container>
  );
};

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedLogin);
