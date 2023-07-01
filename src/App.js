import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/roopalisarode')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar user={user} />
      <About user={user} />
      <Experience user={user} />
      <Projects user={user} />
      <Skills user={user} />
      <Contact user={user} />
    </main>
  );
}