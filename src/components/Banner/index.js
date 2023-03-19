import React from 'react'
import * as S from "./styled";
import Search from "../Search"

const banner = () => {
    return (
        <S.container>
            <S.FprSoon src="/logo.png" alt="Logo" />

            <Search />
        </S.container>
    )
}

export default banner