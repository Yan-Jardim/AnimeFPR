import React, { useState } from 'react'
import * as S from "./styled";
import Head from "../../components/Head"
import Banner from '../../components/Banner'
import TemporaryDrawer from "../../components/Drawer"
import Footer from "../../components/Footer"
import CardList from "../../components/CardList"
import { useRouter } from "next/router"
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

const categories = () => {

    const router = useRouter()

    const { category } = router.query;

    return (
        <>
            <Head />
            <S.Container>

                <S.Drawer>
                    <TemporaryDrawer />
                </S.Drawer>

                <S.Application>
                    <Banner />
                    <S.Content>
                        {category &&
                            <CardList
                                icon={<LocalMoviesIcon />}
                                title={category}
                                categoryName={category}
                                limit={20}
                            />
                        }
                    </S.Content>
                </S.Application>

            </S.Container>

            <Footer />

        </>
    )
}

export default categories