import React from "react";
import { Box, Card, CardContent, CardActions, Button, Typography, CardMedia } from "@mui/material";
function CardMUI(props)
{
    const cardImageLink = props.cardImageLink;
    const cardTitle = props.cardTitle;
    const cardDescription = props.cardDescription;
    return(
        <div>
            <Box width='350px' marginBottom='2rem'>
                <Card>
                    <CardMedia component='img' height='140' image={cardImageLink}/>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component='div'>
                            {cardTitle}
                        </Typography>
                        <Typography variant="body1" color='text.secondary' padding={2} >
                            {cardDescription}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Visit</Button>
                        <Button size="small">Share</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    );

}

export default CardMUI;