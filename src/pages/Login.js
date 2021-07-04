import React, { useState, useContext } from "react";
import { Card, CardBody, Form, FormGroup, Label, Alert } from "reactstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { NavbarContext } from "../contexts/NavContext";

function Login() {
  document.title = "Issue Tracker | Login";
  const { navOpen, setNavOpen } = useContext(NavbarContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    // Prevent form from refreshing page
    e.preventDefault();

    try {
      setLoginMessage("");
      setLoading(true);
      await login(email, password);
      setLoginMessage("Logged in successfully");
      history.push("/");
    } catch {
      setLoginMessage("Failed to login");
    }
    setLoading(false);
  }

  return (
    <>
      <Card
        className="p-1 my-container active-cont border-0"
        style={navOpen ? { marginLeft: "250px" } : { marginLeft: "50px" }}
      >
        <CardBody>
          <h2 className="mb-3">Login</h2>
          {loginMessage !== "" && loginMessage !== "Logged in successfully" ? (
            <Alert color="danger">{loginMessage}</Alert>
          ) : loginMessage === "Logged in successfully" ? (
            <Alert color="success">Logged in successfully</Alert>
          ) : null}

          <Form onSubmit={handleSubmit}>
            <FormGroup id="email" className="mt-3">
              <Label className="mb-2">Email</Label>
              <input
                id="email"
                type="text"
                name="email"
                placeholder="Email Address"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup id="password" className="mt-3">
              <Label className="mb-2">Password</Label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
            <input
              disabled={loading}
              type="submit"
              id="submit"
              className="btn btn-primary mt-3"
              name="submit"
              value="Login"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            />
          </Form>
        </CardBody>
        <div className="w-100 mx-3 my-1">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </Card>
    </>
  );
}

export default Login;
