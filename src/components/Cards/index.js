import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function MediaCard({info}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 319 , width: 225}}
        image={info.attributes.posterImage.original}
        title="Anime"
      />
    </Card>
  );
}