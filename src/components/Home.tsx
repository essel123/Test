import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/icon-accessibility.svg";
import "../assets/icon-css.svg";
import "../assets/icon-html.svg";
import "../assets/icon-js.svg";


import "../index.css";
// import { useState } from "react";

// var topic = 0;
// var data =
// {

function Home() {
  var topics = [["HTML"], ["CSS"], ["Javascript"], ["Accessibility"]];
  var myimage = "./assets/icon-html.svg";

  const listItems = topics.map((topic) => (
    <li className="topic">
      <span>
        <img src={myimage} alt="" />
      </span>
      <h3> {topic}</h3>
    </li>
  ));

  return (
    <>
      <div className="container">
        <div className="row_">
          <div className="left">
            <h1 className="title"> Welcome to the</h1>
            <h1 className="subtitle"> Frontend Quiz!</h1>

            <p className="subject"> Pick a subject to get started.</p>
          </div>
          <div className="right">
            <ul>{listItems}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
