import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {

  return (
    <Link to={"/item/" + producto.id}>
      <Card sx={{ maxWidth: 345 }}>
        <Typography gutterBottom variant="h5" component="div">
          {producto.title}
        </Typography>
        <CardMedia
          component="img"
          height="300"
          image={producto.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {producto.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Ver</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default Item;
