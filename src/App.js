import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import React from 'react';
import Navigation from './components/Navigation';
import Article from './components/Article';

const App = () => {
  return (
    <div className='App'>
      <Router>    
          <header>
            <Navigation />
          </header>
      </Router>
      <Article 
        headline="Let's work together!"
        subheading="We're ready to make something great with you."
        paragraph='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
      />
            <Article 
        headline="Outpacing competitors!"
        subheading="Take a look at our case studies to learn more."
        image="http://localhost:4503/content/dam/sample/motorcycle-race.png"
        imageAltText="motorcycles in a race"
        paragraph='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
      />
    </div>
  );
}

export default App;
