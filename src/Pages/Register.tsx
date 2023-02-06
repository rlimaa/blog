import { Paper } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeProvider";
import RegisterForm from "../Features/Register/RegisterForm";
import User from "../Models/User";
import "./Register.css";

export default function Register(): JSX.Element {
  const { isDarkMode } = useContext(ThemeContext);

  const createUser = (user: User) => {
    console.log(JSON.stringify(user));
  };

  return (
    <Paper
      className="Register-container"
      style={{
        backgroundColor: isDarkMode ? "#545464" : "white",
        color: isDarkMode ? "white" : "#545464",
      }}
    >
      <RegisterForm createUser={createUser} />
    </Paper>
  );
}
