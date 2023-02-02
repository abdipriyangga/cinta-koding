/* eslint-disable react/prop-types */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Background } from "../../assets";
import Dropdown from "../Dropdown";

const Button = styled.button`
  background-color: #428df5;
  padding: 5px;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
  cursor: pointer;
`;

const HeaderWrapper = styled.header`
  background-image: url(${Background});
  padding: 15px;
  display: flex;
  justify-content: space-around;
`;

const HeaderWrapperAfterLogin = styled.header`
  padding: 15px;
  display: flex;
  justify-content: space-around;
`;

const TextLogo = styled.p`
  font-size: 26px;
  font-weight: bold;
  align-items: center;
  color: black;
`;

const TextNav = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
  color: black;
`;
const WrapperBgImage = styled.section`
  width: 1846px;
  height: 500px;
`;

const ImageBG = styled.img`
  object-fit: cover;
  width: 1846px;
  height: 1000px;
`;

const TextGreeting = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
  color: black;
`;

const Header = (props) => {
  const navigate = useNavigate();
  const handleBtnLogin = () => {
    return navigate("/login");
  };
  return (
    <>
      {props.typeHeader === "afterLogin" ? (
        <>
          <HeaderWrapperAfterLogin>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <TextLogo>Cinta Koding</TextLogo>
            </Link>
            <TextNav>Post</TextNav>
            <div style={{ display: "flex", gap: "10px" }}>
              <TextGreeting>Welcome, </TextGreeting>
              <Dropdown name={props.name} />
            </div>
          </HeaderWrapperAfterLogin>
        </>
      ) : (
        <>
          <HeaderWrapper>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <TextLogo>Cinta Koding</TextLogo>
            </Link>
            <Button onClick={() => handleBtnLogin()}>Login</Button>
          </HeaderWrapper>
          <WrapperBgImage>
            <ImageBG src={Background} alt="background" />
          </WrapperBgImage>
        </>
      )}
    </>
  );
};

export default Header;
