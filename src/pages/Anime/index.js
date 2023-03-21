import React, { useState } from 'react'
import * as S from "./styled";
import Head from "../../components/Head"
import Banner from '../../components/Banner'
import TemporaryDrawer from "../../components/Drawer"
import Footer from "../../components/Footer"
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import Modal from '../../components/Modal';

const anime = () => {

    const [response, setResponse] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentTrailer, setCurrentTrailer] = useState({});



    let url;
    let characterId;

    if (typeof window !== "undefined") {
        url = window?.location?.href;
        characterId = url.split("id=")[1];
    }



    console.log(response, "w");


    const handleOpenModal = (currentTrailer) => {
        setCurrentTrailer(currentTrailer);
        setModalIsOpen(true)
    };

    return (
        <>
            <Head />
            <S.Container>

                <S.Drawer>
                    <TemporaryDrawer />
                </S.Drawer>

                <S.Application>
                    <Banner />
                    <S.BannerImg src={response?.attributes?.coverImage?.large} />
                    <S.Content>
                        <S.ContentCard>
                            <S.Card src={response?.attributes?.posterImage?.original} />
                            <S.Trailer onClick={() => handleOpenModal(response)}>
                                <YouTubeIcon sx={{ verticalAlign: 'middle', fontSize: "40px" }} /> Ver Trailer
                            </S.Trailer>
                            <S.Approval>
                                Aprovado por <span style={{ verticalAlign: 'middle', fontSize: "19px" }}>{response?.attributes?.averageRating}</span> da Comunidade
                            </S.Approval>
                            <S.Popular>
                                <FavoriteIcon sx={{ verticalAlign: 'middle', color: "red" }} /> #{response?.attributes?.popularityRank} Mais Popular
                            </S.Popular>
                            <S.Classification>
                                <StarIcon sx={{ verticalAlign: 'middle', color: "yellow" }} /> #{response?.attributes?.ratingRank} Melhor Classificado
                            </S.Classification>
                        </S.ContentCard>
                        <S.ContentText>
                            <S.Title>
                                {response?.attributes?.canonicalTitle}
                            </S.Title>
                            <S.Text>
                                {response?.attributes?.description}
                            </S.Text>
                        </S.ContentText>
                    </S.Content>

                    {
                        modalIsOpen &&
                        <Modal handleClose={() => setModalIsOpen(false)} CurrentTrailer={currentTrailer} />
                    }
                </S.Application>

            </S.Container>

            <Footer />

        </>
    )
}

export default anime