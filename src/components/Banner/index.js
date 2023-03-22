import React from 'react'
import * as S from "./styled";
import Search from "../Search"

const banner = () => {

    const Back = () => {
        window.location.href = "/";
    };
    return (
        <S.container>
            <S.FprSoon src="/logo.png" alt="Logo" onClick={Back} />

            <Search />
        </S.container>
    )
}

export default banner