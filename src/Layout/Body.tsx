import React, { ReactNode, useContext } from "react";
import Paper from "@mui/material/Paper";
import { Col, Container, Row } from "react-bootstrap";
import "./styles/Body.css"
import { ThemeContext } from "../Contexts/ThemeProvider";

interface BodyProps {
    children: ReactNode
}

export default function Body({ children }: BodyProps): JSX.Element {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div 
            className="content-wrapper"
            style={{
                backgroundColor: isDarkMode ? "#091929" : "#f5f5f5"
            }}
        >
            <Container fluid>
                    <Row>
                        <Col xs={12}>
                            {children}
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}