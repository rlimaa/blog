import { Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { ThemeContext } from "../../Contexts/ThemeProvider";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PostModel from "../../Models/Post";
import "./Post.css"

interface PostProps {
    post: PostModel
}

export default function Post({ post }: PostProps): JSX.Element {
    const { isDarkMode } = useContext(ThemeContext);
    
    return (
        <Paper 
            className="Post-card" 
            style={{
                backgroundColor: isDarkMode ? "#545464" : "white",
                color: isDarkMode ? "white" : "#545464"
            }}>
            <Row>
                <Col xs={2} lg={1}>
                    <div className="Post-user-container align-middle">
                        <AccountCircleIcon style={{fontSize: "5rem"}} />
                        <p>User</p>
                    </div>
                </Col>    
                <Col xs={10} lg={11}>
                    <div className="align-middle">
                        <Typography variant="h5">{post.title}</Typography>
                        <Typography variant="h6">{post.body}</Typography>
                    </div>
                </Col>
            </Row> 
        </Paper>
    );
}