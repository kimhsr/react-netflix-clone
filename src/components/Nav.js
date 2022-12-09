import React, { useEffect, useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log('window.scrollY',window.scrollY);
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        className="nav_logo"
        onClick={() => window.location.reload()}
      />
      <img
        alt="User logged"
        src="https://pbs.twimg.com/media/DgNr961WAAEBGu5?format=jpg&name=small"
        className="nav_avatar"
      />
    </nav>
  );
}
