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

    const AnimeId = () => {
        axios
          .get(`https://kitsu.io/api/edge/anime/${characterId}`)
          .then((res) => {
            setResponse(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      
    console.log(response, "w");


    return (
        <>
            <S.Container>

                <S.Drawer>
                    <TemporaryDrawer />
                </S.Drawer>

                <S.Application>
                    <Banner />

                    {response?.id}
                </S.Application>

            </S.Container>

        </>
    )
}

export default anime