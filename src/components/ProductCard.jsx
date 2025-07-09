import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 ,m:2}}>
      <CardMedia
        component="img"
        height="140"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h6">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description.slice(0, 60)}...
        </Typography>
        <Typography variant="subtitle1" color="text.primary" sx={{ mt: 1 }}>
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;