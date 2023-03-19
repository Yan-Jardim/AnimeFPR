import React, { useEffect, useState } from 'react'
import * as S from "./styled";
import axios from "axios";
import Banner from '../../components/Banner'
import TemporaryDrawer from "../../components/Drawer"

const anime = () => {

    const [response, setResponse] = useState();

    let url;
    let characterId;

    if (typeof window !== "undefined") {
        url = window?.location?.href;
        characterId = url.split("id=")[1];
    }

    useEffect(() => {
        axios
            .get(`https://kitsu.io/api/edge/anime/${characterId}`)
            .then((res) => {
                setResponse(res?.data?.data);
                console.log(res, 'ress');
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    console.log(response, "w");

    return (
        <>
            <S.Container>

                <S.Drawer>
                    <TemporaryDrawer />
                </S.Drawer>

                <S.Application>
                    <Banner />
                    <p>{response?.id}</p>
                    <img src={response?.attributes?.posterImage?.original} alt='img' />

                </S.Application>

            </S.Container>

        </>
    )
}

export default anime