import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdOutlineIosShare } from "react-icons/md";

const SWcomponent = ({ data }) => {
  const { author, content, image, date, reactions } = data;
  const { name, photo, nickname } = author;
  const { comments, shares, likes } = reactions;
  return (
    <div className="sw-post">
      <img className="author-avatar" src={photo} alt="author-avatar" />
      <div className="sw-post__container">
        <div className="sw-post__container__author-info">
          <div id="author_name">{name}</div>
          <div id="author_nickname">{nickname}</div>
          <div>·</div>
          <div id="date">{date}</div>
        </div>
        <div className="sw-post__content">{content}</div>
        <img className="content-image" src={image} />
        <div className="sw-post--actions">
          <p className="sw-action-icon">
            <span className="sw-icon" id="sw-icon__comment">
              <AiOutlineComment />
            </span>
            {comments}
          </p>
          <p className="sw-action-icon">
            <span className="sw-icon" id="sw-icon__share">
              <AiOutlineShareAlt />
            </span>
            {shares}
          </p>
          <p className="sw-action-icon">
            <span className="sw-icon" id="sw-icon__like">
              <AiOutlineHeart />
            </span>
            {likes}
          </p>
          <p className="sw-action-icon">
            <span className="sw-icon" id="sw-icon__send">
              <MdOutlineIosShare />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SWcomponent;
