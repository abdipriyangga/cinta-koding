/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const WrapperSearchForm = styled.section`
  margin: 20px 0 0 600px;
`;

const SearchForm = styled.input`
  position: relative;
  width: 600px;
  padding: 10px;
  border-radius: 10px;
`;

const WrapperContent = styled(WrapperSearchForm)`
  width: 605px;
  padding: 10px;
`;

const TextContentLeft = styled.p`
  font-weight: bold;
`;
const SubWrapperContentRight = styled.div`
  display: flex;
  gap: 28px;
`;

const SubWrapperContentRightAction = styled.div`
  display: flex;
  gap: 20px;
`;

const TextContentRight = styled.p`
  color: #808080;
  text-align: justify;
`;
const TextCountComment = styled.p`
  color: #428df5;
  margin: -2px 0 0 0;
`;
const TextLinkDetail = styled.p`
  color: #428df5;
  margin: -2px 0 0 15px;
`;

// PAGINATION STYLE
const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: "active",
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 5rem;
  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

function Items({ currentItems }) {
  let uniqueChars = [];
  currentItems.forEach((element) => {
    if (!uniqueChars.includes(element)) {
      uniqueChars.push(element);
    }
  });
  return (
    <>
      {uniqueChars &&
        uniqueChars.map((item, idx) => (
          <>
            {console.log(item)}
            <SubWrapperContentRight key={idx}>
              <TextContentLeft>{item.userId}</TextContentLeft>
              <div>
                <TextContentRight>{item.title}</TextContentRight>
                <SubWrapperContentRightAction>
                  <FontAwesomeIcon
                    icon={faCommentAlt}
                    style={{ color: "#428df5" }}
                  />
                  <TextCountComment>{uniqueChars.length}</TextCountComment>
                  <TextLinkDetail>
                    <Link
                      to={`/user/post/${item.id}`}
                      style={{
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "#428df5",
                      }}
                    >
                      Detail
                    </Link>
                  </TextLinkDetail>
                </SubWrapperContentRightAction>
              </div>
            </SubWrapperContentRight>
          </>
        ))}
    </>
  );
}

const Post = () => {
  const [user, setUser] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    user.filter((data) => {
      return data.title.match(searchInput);
    });
  }
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return setUser(data);
  };
  const getData = localStorage.getItem("username");
  useEffect(() => {
    fetchData();
  }, []);

  function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);
    const currentPage = Math.round(itemOffset / itemsPerPage);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = user.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(user.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % user.length;
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <MyPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          forcePage={currentPage}
        />
      </>
    );
  }
  return (
    <Layout title="Post | Cinta Koding" type="afterLogin" name={getData}>
      <WrapperSearchForm>
        <SearchForm
          type={"search"}
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        ></SearchForm>
        <FontAwesomeIcon
          icon={faSearch}
          style={{
            position: "relative",
            margin: "30px 0 0 -28px",
            fontSize: "18px",
          }}
        />
      </WrapperSearchForm>
      <WrapperContent>
        <PaginatedItems itemsPerPage={10} />,
      </WrapperContent>
    </Layout>
  );
};

export default Post;
