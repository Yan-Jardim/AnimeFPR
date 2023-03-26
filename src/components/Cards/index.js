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
    <Tooltip

      PopperProps={{
        sx: {
          "& .MuiTooltip-tooltip": {
            background: "#262626",
            padding: "2px 0 2px 20px",
            margin: " 0 auto",
            width: 230,
            height: 250
          }
        }
      }}
      arrow
      placement="bottom"
      title={
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
            # {info?.attributes?.popularityRank} Mais Popular
          </S.Popular>

          <S.Classification>
            <StarIcon
              sx={{ verticalAlign: 'middle', color: "yellow" }} />
            # {info?.attributes?.ratingRank} Melhor Classificado
          </S.Classification>

          <S.Description>{info?.attributes?.description}</S.Description>
        </S.TooltipContent>
      }
    >
      <Card onClick={() => { router.push(`/Anime?id=${info.id}`) }}
        sx={{
          width: "225px",
          cursor: "pointer"
        }}   >
        <CardMedia
          sx={{ height: 319 }}
          image={info?.attributes?.posterImage?.original ? info?.attributes?.posterImage?.original : <img src='./missing.png' />}
          title="Anime"
        />
      </Card>
    </Tooltip>
  );
}