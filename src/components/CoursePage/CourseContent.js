import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "../../styles/CourseContent.css";
import ShowMoreText from "react-show-more-text";
function CourseContent(props) {
  return (
    <div className="CourseContent">
      {/* <ShowMoreText> */}
        {props.data.map((content) => {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <h3>{content[0]}</h3>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {content[1].map((subContent) => {
                  return (
                    <Typography>
                      <PlayCircleIcon />
                      {subContent}
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          );
        })}
      {/* </ShowMoreText> */}
    </div>
  );
}
export default CourseContent;
