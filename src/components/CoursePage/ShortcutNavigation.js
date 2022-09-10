import React from "react";
import "../../styles/ShortcutNavigation.css";
function ShortcutNavigation() {
  return (
    <>
      <div className="Shortcuts-container">
        <div className="ShortcutNavigation">
          <a href="#overview">Overview</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#instructor">Instructor</a>
          <a href="#reviews">Reviews</a>
        </div>
      </div>
    </>
  );
}

export default ShortcutNavigation;
