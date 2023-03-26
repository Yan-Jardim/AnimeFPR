import React from 'react'
import * as S from "./styled";
import SearchInput from "../Search"

const banner = ({ text, setText }) => {

    const Back = () => {
        window.location.href = "/";
    };


    return (
        <S.container>
            <S.FprSoon src="/logo.png" alt="Logo" onClick={Back} />

            <SearchInput
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </S.container>
    )
}

export default banner