import React from 'react';

const BlogPost = (props) => {
  let {title,subtitle,meta} = props;
  return (
    <div className="BlogPost">
      <h1 className="blogtitle">{title}</h1>
      <h2 className="blogsubtitle">{subtitle}</h2>
      <p className="metadata">{meta}</p>
    </div>
  )
}

export default BlogPost;