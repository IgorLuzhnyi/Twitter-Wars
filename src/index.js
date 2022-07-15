import React from "react";
import ReactDOM from "react-dom/client";
import SWcomponent from "./Component.jsx";
import {
  ANAKIN_AVATAR,
  RAY_IMAGE,
  RAY_AVATAR,
  MASK_IMAGE,
  KYLO_AVATAR,
  KYLO_IMAGE,
} from "./constants.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const posts = [
  {
    author: {
      name: "Anakin Skywalker",
      photo: ANAKIN_AVATAR,
      nickname: "@dart_vader",
    },
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "Feb 26",
    reactions: {
      comments: 482,
      shares: 146,
      likes: 887,
    },
    id: 645687,
  },
  {
    author: {
      name: "Ray Skywalker",
      photo: RAY_AVATAR,
      nickname: "@i_did_not_ask_for_it",
    },
    content:
      "@dart_vader I thought we got rig of you lol. Btw, where to find Luke??",
    image: MASK_IMAGE,
    date: "Feb 27",
    reactions: {
      comments: 324,
      shares: 302,
      likes: 1002,
    },
    id: 535578,
  },
  {
    author: {
      name: "Kylo Ren",
      photo: KYLO_AVATAR,
      nickname: "@notben",
    },
    content: "@dart_vader Grandpa, I am Skywalker too! But I am not Luke's!!!",
    image: KYLO_IMAGE,
    date: "Feb 27",
    reactions: {
      comments: 805,
      shares: 1318,
      likes: 2608,
    },
    id: 709362,
  },
];

root.render(
  <React.StrictMode>
    {posts.map((post) => (
      <SWcomponent key={post.id} data={post} />
    ))}
  </React.StrictMode>
);
