import * as React from 'react';
import * as S from "./styled";
import router from 'next/router';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function MediaCard({ info }) {

  return (
    <Tooltip title={
      <S.TooltipContent>
        <S.Title>
          {info?.attributes?.canonicalTitle}
        </S.Title>
        <S.Approval>
          {info?.attributes?.averageRating}
        </S.Approval>
        <S.Popular>
          <FavoriteIcon
            sx={{ verticalAlign: 'middle', color: "red" }} />
          #{info?.attributes?.popularityRank}
          Mais Popular
        </S.Popular>

        <S.Classification>
          <StarIcon
            sx={{ verticalAlign: 'middle', color: "yellow" }} />
          #{info?.attributes?.ratingRank} Melhor Classificado
        </S.Classification>

        <S.Description>{info?.attributes?.description}</S.Description>
      </S.TooltipContent>
    }
      placement="bottom"
      
    >

      <Card onClick={() => { router.push(`/Anime?id=${info.id}`) }}
        sx={{ width: "225px", cursor: "pointer", borderRadius: 0 }}   >
        <CardMedia
          sx={{ height: 319 }}
          image={info?.attributes?.posterImage?.original}
          title="Anime"
        />
      </Card>
    </Tooltip>
  );
}