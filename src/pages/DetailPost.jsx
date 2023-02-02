import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";

const WrapperSearchForm = styled.section`
  margin: 20px 0 0 600px;
`;

const WrapperContent = styled(WrapperSearchForm)`
  width: 605px;
  padding: 10px;
`;

const TextTitle = styled.h4`
  color: #808080;
`;
// const SubWrapperContentRight = styled.div`
//   display: flex;
//   gap: 28px;
// `;

// const SubWrapperContentRightAction = styled.div`
//   display: flex;
//   gap: 20px;
// `;

const TextContentRight = styled.p`
  color: #808080;
  text-align: justify;
  margin-bottom: 25px;
`;
const TextEmail = styled.p`
  color: #000;
  font-weight: bold;
  text-align: justify;
`;
const TextBodyComment = styled.p`
  color: #808080;
  text-align: justify;
`;

const DetailPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);
  const navigate = useNavigate();
  console.log(postId);
  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await response.json();
    return setPost(data);
  };
  const fetchDataComment = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    const data = await response.json();
    return setComment(data);
  };
  console.log(post);
  console.log("COMMENT", comment);
  const splitData = comment.map((x) => {
    const temp = x.email.split("@");
    return temp[0];
  });
  console.log(splitData);
  useEffect(() => {
    fetchData();
    fetchDataComment();
  }, []);

  return (
    <Layout title="Detail Post | Cinta Koding" type="afterLogin">
      <WrapperSearchForm>
        <Link to={"#"} type={"button"} onClick={() => navigate(-1)}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{
              position: "relative",
              margin: "30px 0 0 -28px",
              fontSize: "18px",
            }}
          />
        </Link>
      </WrapperSearchForm>
      <WrapperContent>
        <TextTitle>{post.title}</TextTitle>
        <TextContentRight>{post.body}</TextContentRight>
        <TextContentRight>All Comments</TextContentRight>
        {comment.map((dc, idx) => {
          return (
            <div style={{ display: "flex", gap: "20px" }} key={idx}>
              <TextEmail>{splitData[idx]}</TextEmail>
              <TextBodyComment>{dc.body}</TextBodyComment>
            </div>
          );
        })}
      </WrapperContent>
    </Layout>
  );
};

export default DetailPost;
