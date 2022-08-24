import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { JSXElementConstructor } from 'react';
import './accordion.css';

/* eslint-disable-next-line */

interface childrens {
  accordionTitle: string;
  accordionContent: JSX.Element;
}

export function Accordion_personal(props: childrens) {
  return (
    <>
      <Accordion className="main-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="main-accordion__sumary"
        >
          <Typography className="main-accordion__title">
            {props.accordionTitle}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="main-accordion__details">
          <Typography className="main-accordion__infos">
            {props.accordionContent}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Accordion_personal;
