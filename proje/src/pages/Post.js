import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Post = () => {

  const {name} = useParams();
  const person = new URLSearchParams(useLocation().search);

  return (
    <div>
      <h2>Post name: {name}</h2>
      <h3>{person.get('name')}</h3>
      <h3>{person.get('surname')}</h3>
      {/* Arama çubuğu -> http://localhost:3000/post/postitem?name=Harry&surname=Potter
            Post name: postitem
            Harry
            Potter        */}
    </div>
  );
};

export default Post;
