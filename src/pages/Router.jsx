/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import DetailPost from "./DetailPost";
import Login from "./Login";
import Post from "./Post";

export default function RouterFunc() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Post />} />
        <Route path="/user/post/:postId" element={<DetailPost />} />
      </Routes>
    </Router>
  );
}
