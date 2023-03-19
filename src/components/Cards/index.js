import * as React from 'react';
import router from 'next/router';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function MediaCard({ info }) {
  
  return (
    <Card onClick={() => { router.push(`/Anime?id=${info.id}`) }}
      sx={{ maxWidth: 345, cursor: "pointer", borderRadius: 0 }}   >
      <CardMedia
        sx={{ height: 319, width: 225, }}
        image={info?.attributes?.posterImage?.original}
        title="Anime"
      />
    </Card>
  );
}