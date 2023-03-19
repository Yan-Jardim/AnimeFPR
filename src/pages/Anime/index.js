import React, { useEffect, useState } from 'react'
import * as S from "./styled";
import axios from "axios";
import Banner from '../../components/Banner'
import TemporaryDrawer from "../../components/Drawer"

const anime = () => {


    const [answer, setAnswer] = useState();

    let url;
    let characterId;

    if (typeof window !== "undefined") {
        url = window?.location?.href;
        characterId = url.split("id=")[1];
    }

    const selectAnime = () => {
        axios
            .get(
                `https://kitsu.io/api/edge/anime/${characterId}`
            )
            .then((response) => {
                setAnswer(response?.data?.data);
            });
    }
 
    return (
        <>
            <S.Container>

                <S.Drawer>
                    <TemporaryDrawer />
                </S.Drawer>

                <S.Application>
                    <Banner />

                </S.Application>

            </S.Container>

        </>
    )
}

export default anime