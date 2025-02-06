import {Box, useTheme, Typography} from "@mui/material";
import Header from '../../components/Header';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {tokens} from "../../theme";
import { Expand } from "@mui/icons-material";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                            An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam quia culpa eveniet, 
                        beatae debitis molestiae nobis perferendis commodi. Aliquid, reprehenderit.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* question 02 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                            An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam quia culpa eveniet, 
                        beatae debitis molestiae nobis perferendis commodi. Aliquid, reprehenderit.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* question 03 */}

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                            An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam quia culpa eveniet, 
                        beatae debitis molestiae nobis perferendis commodi. Aliquid, reprehenderit.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* question 04 */}

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                            An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam quia culpa eveniet, 
                        beatae debitis molestiae nobis perferendis commodi. Aliquid, reprehenderit.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* question 05 */}
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                            An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam quia culpa eveniet, 
                        beatae debitis molestiae nobis perferendis commodi. Aliquid, reprehenderit.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* question 06 */}

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                            An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam quia culpa eveniet, 
                        beatae debitis molestiae nobis perferendis commodi. Aliquid, reprehenderit.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}

export default FAQ;