import React, { useState } from 'react'
import * as S from "./styled";
import Head from "../../components/Head"
import Banner from '../../components/Banner'
import TemporaryDrawer from "../../components/Drawer"
import Footer from "../../components/Footer"

const categories = () => {
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

                    </S.Content>
                </S.Application>

            </S.Container>

            <Footer />

        </>
    )
}

export default categories