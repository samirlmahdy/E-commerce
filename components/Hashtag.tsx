import React from "react";

type HashtagsProps = {
  hashtag: string;
};

const Hashtags = (props: HashtagsProps) => {
  return <span className="hashtags">#{props.hashtag} </span>;
};

export default Hashtags;
