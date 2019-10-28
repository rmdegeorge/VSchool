import React from 'react';
import BlogPost from './BlogPost';

const BlogPostContainer = () => {
  return (
    <div className="BlogPostContainer">
      <BlogPost title="Man must Explore, and this is exploration at its greatest"
                subtitle="Problems look mighty small from 150 miles up"
                meta="Posted by Start Bootstrap on September 24, 2019"/>
      <BlogPost title="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."
                subtitle=""
                meta="Posted by Start Bootstrap on September 218, 2019"/>
      <BlogPost title="Science has not yet mastered prophecy"
                subtitle="We predict too much for the next year and yet far too little for the next ten."
                meta="Posted by Start Bootstrap on September 24, 2019"/>
      <BlogPost title="Failure is not an option"
                subtitle="Many say exploration is part of our destiny, but it's actually our duty to future generations."
                meta="Posted by Start Bootstrap on July 8, 2019"/>
    </div>
  )
}

export default BlogPostContainer;