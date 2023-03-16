import React from 'react'
import * as S from "./styled";
import { Toolbar } from '@mui/material';

const footer = () => {
    return (
        <Toolbar sx={{ height: "276px", background: "#262626", display: "flex", justifyContent: "center", flexDirection: "column", marginTop: "128px" }}>
            <S.FieldTop>
                <S.Yuzu src='./yuzu.png' />
                <S.Paragraph>Ainda está procurando algo pra assistir?</S.Paragraph>
                <S.Paragraph1> Confira o nosso acervo completo</S.Paragraph1>
                <S.Btn>VER TUDO</S.Btn>
            </S.FieldTop>
            <S.FieldFooter>
                <S.Copy>© 2023 FPR Animes - Todos os direitos reservados.</S.Copy>
                <S.Icon src='icon.png' />
            </S.FieldFooter>
        </Toolbar>
    )
}

export default footer