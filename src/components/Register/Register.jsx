import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../Login/Login.module.css";
import { useFormInput } from "../utils/forms";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {
  const email = useFormInput("");
  const password = useFormInput("");

  async function handleSubmit(event) {
    event.preventDefault();
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log(user)
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
        <h1>Registro de Usuario</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="white">Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" {...email}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" {...password}/>
        </Form.Group>
        <Button
          style={{ background: "#e50914", borderColor: "#e50914" }}
          onClick={handleSubmit}
        >
          Registrarse
        </Button>
      </Form>
    </div>
  );
};

export default Register;
