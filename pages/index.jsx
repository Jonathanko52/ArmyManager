import { useState } from 'react';
import Link from "next/link";
import App from '../src/App'
import Layout from '../nextComponents/layout'

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
  }
  
  export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = useState(0);
  
    function handleClick() {
      setLikes(likes + 1);
    }
  
    return (
      <Layout>
        <div>
          <Header title="Develop. Preview. Ship. 🚀" />
          <ul>
            {names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <h1 className>
              Learn <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <button onClick={handleClick}>Like ({likes})</button>
        </div>
      </Layout>
    );
  }