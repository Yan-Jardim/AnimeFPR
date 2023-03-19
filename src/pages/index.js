import * as S from "./styled";
import { Toolbar, Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import TemporaryDrawer from "../components/Drawer"
import CustomizedInputBase from "../components/Search"
import Head from "../components/Head"
import Swiper from "../components/Swiper"
import Footer from '../components/Footer';
import CardList from '../components/CardList';

export default function Home() {

  return (

    <>
      <Head />

      <S.Container>

        <S.Drawer>
          <TemporaryDrawer />
        </S.Drawer>

        <S.Application style={{ marginBottom: "120px" }}>

          <Toolbar sx={{ height: "456px", backgroundImage: "url('/banner.png')", backgroundSize: "cover" }}>
            <S.ContainerToolbar >

              <S.Soon item>
                <S.FprSoon src="./logo.png" alt="Logo" />
              </S.Soon>

              <S.Title>
                <Typography variant="h2">O <S.ColorOrange>Maior</S.ColorOrange> Catálogo de<br /><S.ColorGreen>Anime</S.ColorGreen> do Mundo</Typography>
              </S.Title>

              <S.Search>
                <CustomizedInputBase />
              </S.Search>

            </S.ContainerToolbar>
          </Toolbar>

          <S.Card>
            <CardList title="Animes" subtitle="Mais populares" icon={<StarBorderIcon />} sort="user_count" />
          </S.Card>

          <Swiper />

          <S.Card>
            <CardList title="Animes" subtitle="Mais bem classificados" icon={<ThumbUpOffAltIcon />} sort="average_rating" />
          </S.Card>
        </S.Application>

      </S.Container>

      <Footer />

    </>
  )
}