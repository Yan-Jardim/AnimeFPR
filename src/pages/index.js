import { useState, useEffect } from 'react'
import { Toolbar, Grid, Typography } from '@mui/material';
import * as S from "./styled";
import axios from "axios";
import TemporaryDrawer from "../components/Drawer"
import CustomizedInputBase from "../components/Search"
import Head from "../components/Head"
import Cards from "../components/Cards"
import Swiper from "../components/Swiper"
import Footer from '../components/Footer';

export default function Home() {

  const [response, setResponse] = useState();

  const baseURL = `https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0`

  useEffect(() => {
    axios
      .get(
        baseURL
      )
      .then((response) => {
        setResponse(response?.data?.data);
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, [baseURL]);


  console.log(response, "response in Api");


  return (

    <>
      <Head />

      <S.Container>

        <S.Drawer>
          <TemporaryDrawer />
        </S.Drawer>

        <S.Application>

          <Toolbar sx={{ height: "456px", backgroundImage: "url('/banner.png')", backgroundSize: "cover", display: "flex", justifyContent: "center" }}>
            <S.ContainerToolbar >

              <S.Soon item>
                <S.FprSoon src="/logo.png" alt="Logo" />
              </S.Soon>

              <S.Title>
                <Typography variant="h2">O Maior Catálogo de<br /> Anime do Mundo</Typography>
              </S.Title>

              <S.Search>
                <CustomizedInputBase />
              </S.Search>

            </S.ContainerToolbar>
          </Toolbar>

          <S.Card>

            {response && response.map((item, index) => {
              return (
                <Grid key={index}>
                  <Cards info={item} />
                </Grid>
              )
            })}
          </S.Card>

          <Swiper info={response} />

          <S.Card>

            {response && response.map((item, index) => {
              return (
                <Grid key={index}>
                  <Cards info={item} />
                </Grid>
              )
            })}
          </S.Card>
        </S.Application>

      </S.Container>

      <Footer />

    </>
  )
}