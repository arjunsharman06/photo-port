// import logo from './logo.svg';
import './App.css';
import { React, useState } from 'react';
// import Pet from './components/Pet';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

// Component should be in Pascal Case
function App() {
  // Moving useState one level up so that it can be passed tO gallery
  const [categories] = useState([
    {
      name: 'commercial',
      description:
        'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    {
      name: 'landscape',
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    // This is JSX language , which represent HTML in javascript
    // <Pet />

    // Adding the ABout component
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <ContactForm></ContactForm>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About />
      </main>
    </div>
  );
}

export default App;
