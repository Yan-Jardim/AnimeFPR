import React from 'react';
import * as S from "./styled"

export default function Modal(item) {

    return (
        <S.Container onClick={item.handleClose} >
            <S.Content>
                <S.Trailer src={`https://www.youtube.com/embed/${item?.CurrentTrailer?.attributes?.youtubeVideoId}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </S.Trailer>
            </S.Content>
        </S.Container>
    )
}