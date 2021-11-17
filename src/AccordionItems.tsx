import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Post from "./types.module";

export default function AccordionItems(props: Post) {
    return (
        <div className="section-accordion">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <strong>Кавказские войны, Адат и Шариат</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              В новой статье исследователь ЦИИМ Заур Омар рассказывает о
              Кавказских войнах, о роли адата и шариата в обществе и имперской
              политике, а также о том, в чем заключается проблема кавказского
              восприятия религии и традиции. Подробнее обо всех этих аспектах
              читайте по ссылке: <br />
              <a href="https://telegra.ph/Kavkazskie-vojny-Adat-i-SHariat-10-27">
                https://telegra.ph/Kavkazskie-vojny-Adat-i-SHariat-10-27
              </a>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    )
}