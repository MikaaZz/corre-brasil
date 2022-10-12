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
  accordionInfos: object[];
  accordionListContent: object[];
  accordionItemsContent: object[];
}

export function Accordion_personal(props: childrens) {
  const AccordionContent = props.accordionInfos.map((element: any) => (
    <Accordion className="main-accordion" key={element.id}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
        className="main-accordion__sumary"
      >
        <Typography className="main-accordion__title">
          {element.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="main-accordion__details">
        <Typography className="main-accordion__infos">
          {props.accordionItemsContent.map((element: any) => (
            <ul>
              {props.accordionListContent.map((element: any) => (
                <li>{element.listContent}</li>
              ))}
            </ul>
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  ));
  return <>{AccordionContent}</>;
}

export default Accordion_personal;
