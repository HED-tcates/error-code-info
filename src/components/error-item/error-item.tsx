import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import { ErrorData } from "../../types/error-types";
import "./error-item.scss";

export interface ErrorItemProps {
  error: ErrorData;
}

function ErrorItem(props: ErrorItemProps) {
  return (
    <Accordion
      id={props.error.id}
      sx={{ margin: "10px" }}
      expanded
      disableGutters
    >
      <AccordionSummary
        sx={{
          backgroundColor: "#91a0bd",
        }}
      >
        <div className="error-item-summary">
        <div>
          <strong>{props.error.id}</strong>
        </div>
        <div className="error-item-title">{props.error.title}</div>
        </div>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: "#b5c5e6" }}>
        {props.error.info}
      </AccordionDetails>
    </Accordion>
  );
}

export default ErrorItem;
