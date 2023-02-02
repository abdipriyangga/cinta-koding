/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = styled("div")`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-top: 43px;
  margin-left: -90px;
  color: #428df5;
  text-decoration: none;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0;
  font-weight: bold;
  font-size: 24px;
  color: #3faffa;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  height: 35px;
  background: #fefefe;
  color: #3faffa;
  font-size: 1.2rem;
  font-weight: 500;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  &:first-child {
    padding-top: 0;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;
const Dropdown = (props) => {
  const options = ["Detail Profile"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>{props.name}</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  <Link
                    style={{ textDecoration: "none", color: "#428df5" }}
                    to={""}
                  >
                    {option}
                  </Link>
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
};

export default Dropdown;
