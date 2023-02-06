import { Paper } from "@mui/material";
import React, { ChangeEvent, FormEvent, useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { ThemeContext } from "../../Contexts/ThemeProvider";
import useInput from "../../Hooks/useInput";
import Post from "../../Models/Post";

interface PostProps {
  handlePost: (post: Partial<Post>) => void;
}

export default function PostForm({ handlePost }: PostProps): JSX.Element {
  const { isDarkMode } = useContext(ThemeContext);
  const [title, setTitle, resetTitle] = useInput<HTMLInputElement>(null);
  const [body, setBody, resetBody] = useInput<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post: Partial<Post> = {
      title: title.current!.value,
      body: body.current!.value,
    };
    handlePost(post);
    resetTitle();
    resetBody();
  };

  return (
    <Paper
      className="Post-card"
      style={{
        backgroundColor: isDarkMode ? "#545464" : "white",
        color: isDarkMode ? "white" : "#545464",
      }}
    >
      <Form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <Row>
          <Col xs={12}>
            <Form.Group className="mb-3" controlId="postForm.title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="Title"
                ref={title}
                onChange={(e) => setTitle(e as ChangeEvent<HTMLInputElement>)}
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group className="mb-3" controlId="postForm.body">
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Type something..."
                rows={5}
                ref={body}
                onChange={(e) => setBody(e as ChangeEvent<HTMLTextAreaElement>)}
              />
            </Form.Group>
            <Col xs={12}>
              <Button className="float-right" variant="primary" type="submit">
                Post!
              </Button>
            </Col>
          </Col>
        </Row>
      </Form>
    </Paper>
  );
}
