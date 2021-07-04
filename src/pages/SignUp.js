import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody, Form, FormGroup, Label, Alert } from "reactstrap";
import { useAuth } from "../contexts/AuthContext";
import { NavbarContext } from "../contexts/NavContext";

function SignUp() {
  document.title = "Issue Tracker | Sign Up";
  const { navOpen, setNavOpen } = useContext(NavbarContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [registerMessage, setRegisterMessage] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    // Prevent form from refreshing page
    e.preventDefault();

    if (password !== confirmPassword) {
      return setRegisterMessage("Passwords do match");
    }

    try {
      setRegisterMessage("");
      setLoading(true);
      await signup(email, password);
      setRegisterMessage("Account successfully created");
      history.push("/login");
    } catch {
      setRegisterMessage("Failed to create an account");
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
          <h2 className="mb-3">Sign Up</h2>
          {/* {currentUser && currentUser.email} */}
          {registerMessage !== "" &&
          registerMessage !== "Account successfully created" ? (
            <Alert color="danger">{registerMessage}</Alert>
          ) : registerMessage === "Account successfully created" ? (
            <Alert color="success">Account successfully created</Alert>
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
            <FormGroup id="password-confirm" className="mt-3">
              <Label className="mb-2">Password Confirmation</Label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Confirm Password"
                className="form-control"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </FormGroup>
            <input
              disabled={loading}
              type="submit"
              id="submit"
              className="btn btn-primary mt-3"
              name="submit"
              value="Sign Up"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            />
          </Form>
        </CardBody>
        <div className="w-100 mx-3 my-1">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </Card>
    </>
  );
}

export default SignUp;
