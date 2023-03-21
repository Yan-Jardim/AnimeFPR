import React from 'react';
import * as S from "./styled"

export default function Modal(item) {

    console.log(item, "resposta");

    return (
        <S.Container >
            <S.Content>
                <S.Fechar onClick={item.handleClose}>X</S.Fechar>

                {item?.CurrentTrailer?.attributes?.youtubeVideoId}
            </S.Content>
        </S.Container>
    )
}