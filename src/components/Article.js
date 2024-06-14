import React from 'react';
import './styles/Article.css'; // Import the CSS file

const Article = ({ headline, subheading, image, imageAltText, paragraph }) => {
  return (
    <div className="article-container">
      <h1 className="article-headline">{headline}</h1>
      <h2 className="article-subheading">{subheading}</h2>
      <img src={image} alt={imageAltText} className="article-image" width="100%"/>
      <p className="article-paragraph">{paragraph}</p>
    </div>
  );
};

export default Article;