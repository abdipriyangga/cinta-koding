import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: #428df5;
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const Header = (props) => {
  const navigate = useNavigate();
  const handleBtnLogin = () => {
    return navigate("/login");
  };
  return (
    <header>
      <p>Cinta Koding</p>
      <Button onClick={() => handleBtnLogin()}>Login</Button>
    </header>
  );
};

export default Header;
