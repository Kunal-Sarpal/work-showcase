import React from "react";
import Navbar from "./Components/Navbar";

import Section from "./Components/Section";


import {
  fullStackProjects,
  frontendProjects,
  htmlCssProjects,
  apps,
} from "./Projects"

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="p-4">
        <Section id="fullstack" title="Full Stack Projects" projects={fullStackProjects} />
        <Section id="frontend" title="Frontend Projects" projects={frontendProjects} />
        <Section id="html" title="HTML/CSS Projects" projects={htmlCssProjects} />
        <Section id="apps" title="Apps" projects={apps} />
      </div>
    </div>
  );
};

export default App;
