import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./Login.module.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useFormInput } from "../utils/forms";
import { Link } from "react-router-dom";
import { db } from "../Firebase/Firebase";


var myDB = db;


function Login(props) {
  const username = useFormInput("");
  const password = useFormInput("");

  async function handleSubmit(event) {
    event.preventDefault();
    const auth = getAuth();
    const { user } = await signInWithEmailAndPassword(
      auth,
      username.value,
      password.value
    );
    console.log(user)
    props.onSuccess(user);
  }
  return (
    <div
      className={styles.loginContainer}
      style={{
        backgroundImage:
          "url(https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/01c351de-df04-40e5-a38e-29e75096b88a/AR-es-20220530-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
      }}
    >
      <Form className={styles.loginForm}>
        <h1>Inicia Sesión</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="white">Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" {...username} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" {...password} />
        </Form.Group>
        <Button
          style={{ background: "#e50914", borderColor: "#e50914" }}
          onClick={handleSubmit}
        >
          Ingresar
        </Button>
        <p>¿No tienes usuario? Registrate <Link to="/register">acá</Link></p>
      </Form>
    </div>
  );
};

const AuthenticatedUserApp = ({ user }) => {
  return (
    <div>
      <h1> You're logged as {user.email}</h1>
    </div>
  );
};

export { Login, AuthenticatedUserApp };
