import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";

const Wrapper = styled.section`
  padding: 15px;
  width: 800px;
  height: 500px;
  margin: auto;
  margin-top: 150px;
`;

const Title = styled.h1`
  padding: 10px;
  text-align: center;
`;

const Form = styled.form`
  width: 450px;
  padding: 10px;
  margin: auto;
  margin-top: 70px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  width: 300px;
  height: 30px;
  margin-left: 55px;
  margin-right: 10px;
  margin-bottom: 15px;
  border-color: #428df5;
`;

const Button = styled.button`
  background-color: #428df5;
  padding: 2px;
  width: 324px;
  height: 40px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 0 55px;
  cursor: pointer;
`;
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return setUser(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    localStorage.setItem("username", username);
    navigate("/user");
  };
  console.log("User: ", user);
  return (
    <Layout title="Login Page | Cinta Koding">
      <Wrapper>
        <Title>Login Page</Title>
        <Form onSubmit={handleLogin}>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            type={"text"}
            name="username"
            placeholder="Username"
            required
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            name="password"
            placeholder="Password"
            required
          />
          <Button type="submit">Login</Button>
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default Login;
