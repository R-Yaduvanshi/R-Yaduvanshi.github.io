import React from "react";
import {
  Footer,
  Landing,
  About,
  Skills,
  Education,
  Contacts,
  Projects,
} from "../../components";
import GithubStatic from "./GithubStatic";
function Main() {
  return (
    <div>
      <Landing />
      <About />
      <Education />
      <Skills />
      <GithubStatic />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
