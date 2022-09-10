import React from "react";
import style from "../../styles/WhatYouLearn.module.css";
function WhatYouLearn(props) {
  return (
    <>
    <div className={style.WhatYouLearn_container}>
      <h1>What you'll learn</h1>
      <div className={style.WhatYouLearn}>
        {props.data.map((item) => {
          return <div className={style.WhatYouLearn_item}><span>&#10003;</span> {item}</div>;
        })}
      </div>
    </div>
    </>
  );
}

export default WhatYouLearn;
