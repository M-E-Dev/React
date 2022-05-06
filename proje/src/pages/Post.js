import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {

  const params = useParams();

  return (
    <div>
      <h2>Post name: {JSON.stringify(params.name)}</h2>
    </div>
  );
};

export default Post;
