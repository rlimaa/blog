import { Typography } from "@mui/material";
import React, { ChangeEvent, FormEvent } from "react";
import { Col, Form, Row } from "react-bootstrap";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./RegisterForm.css";
import useInput from "../../Hooks/useInput";
import { Button } from "react-bootstrap";
import User from "../../Models/User";
import { useNavigate } from "react-router-dom";

interface RegisterFormProps {
  createUser: (user: User) => void;
}

export default function RegisterForm({
  createUser,
}: RegisterFormProps): JSX.Element {
  const [email, setEmail, resetEmail] = useInput<HTMLInputElement>(null);
  const [name, setName, resetName] = useInput<HTMLInputElement>(null);
  const [pwd, setPwd, resetPwd] = useInput<HTMLInputElement>(null);
  const [confirmPwd, setConfirmPwd, resetConfirmPwd] =
    useInput<HTMLInputElement>(null);
  const navigate = useNavigate();

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user: User = {
      email: email.current!.value,
      name: name.current!.value,
      pwd: pwd.current!.value,
      confirmPwd: confirmPwd.current!.value,
    };
    createUser(user);
    resetEmail();
    resetName();
    resetPwd();
    resetConfirmPwd();
    setTimeout(() => navigate("/"), 500);
  };

  return (
    <Form onSubmit={submitForm}>
      <Typography variant="h2" className="mb-3">
        Register
      </Typography>
      <Row>
        {/* <Col xs={12}>
          <div className="RegisterForm-avatar-container mb-5">
            <Typography className="text-center" variant="h2">
              <AccountCircleIcon style={{ fontSize: "10rem" }} />
            </Typography>
            <Form.Group
              controlId="formFile"
              className="mb-3 RegisterForm-file-input"
            >
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </div>
        </Col> */}
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="registerForm.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Name"
              ref={name}
              onChange={(e) => setName(e as ChangeEvent<HTMLInputElement>)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="registerForm.email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              ref={email}
              onChange={(e) => setEmail(e as ChangeEvent<HTMLInputElement>)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="registerForm.pwd">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="*************"
              ref={pwd}
              onChange={(e) => setPwd(e as ChangeEvent<HTMLInputElement>)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="registerForm.confirmPwd">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="*************"
              ref={confirmPwd}
              onChange={(e) =>
                setConfirmPwd(e as ChangeEvent<HTMLInputElement>)
              }
            />
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Button className="float-right" variant="primary" type="submit">
            Register!
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
