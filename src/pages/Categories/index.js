import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import * as S from "./styled";
import * as M from "@mui/material";
import qs from "qs";
import Head from "../../components/Head"
import Banner from '../../components/Banner'
import TemporaryDrawer from "../../components/Drawer"
import Footer from "../../components/Footer"
import CardList from "../../components/CardList"
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PaginationComponent from '../../components/Pagination';
import CardComponent from '../../components/CardComponent';
import { Loading } from '../../components/Loading';

const categories = () => {

    const router = useRouter()
    const { category } = router.query;
    const [data, setData] = useState();
    const [offset, setOffset] = useState(0);
    const [info, setInfo] = useState({});
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const LIMIT = 20;

    let api = "https://kitsu.io/api/edge/";

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                setInfo({});
                setData({})
                const query = {
                    page: {
                        limit: LIMIT,
                        offset,
                    },
                    filter: {
                        text
                    }
                };
                if (text) {
                    query.filter = {
                        text,
                    };
                }
                const response = await fetch(`${api}anime?${qs.stringify(query)}`);
                const data = await response.json();
                setInfo(data);
                setData(data);
                setLoading(false);
            } catch (error) {
                console.log(error.toJSON());
            }
        };
        fetchData();
    }, [text, offset]);

    return (
        <>
            <Head />
            <S.Container>

                <S.Drawer>
                    <TemporaryDrawer />
                </S.Drawer>

                <S.Application>
                    <Banner
                        text={text}
                        setText={setText} />
                    <M.Grid>
                        {loading ? (
                            <Loading />
                        ) : (
                            <>
                                <S.BoxText>
                                    {data && text === '' ? (
                                        <>
                                            {category && (
                                                <M.Box>
                                                    <CardList
                                                        categoryName={category}
                                                        limit={20}
                                                        icon={<LocalMoviesIcon />}
                                                        title={category}
                                                        text={text}
                                                    />
                                                </M.Box>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {text && (
                                                <>
                                                    {info.data && (
                                                        <M.Grid sx={{ marginLeft: "70px" }}>
                                                            <M.Grid
                                                                sx={{
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    margin: "15px 0 0 12px",
                                                                }}
                                                            >

                                                                <M.Typography
                                                                    sx={{
                                                                        color: "#F46D1B",
                                                                        fontSize: "22px",
                                                                        fontWeight: "700",
                                                                        paddingLeft: "10px",
                                                                    }}
                                                                >
                                                                    {info?.data[0]?.attributes?.abbreviatedTitles[0]}
                                                                </M.Typography>
                                                            </M.Grid>
                                                            <S.Test>
                                                                {info?.data?.map((item, index) => {
                                                                    return (
                                                                        <div key={index}>
                                                                            <CardComponent
                                                                                action={() => push(`/Anime?id=${item.id}`)}
                                                                                image={
                                                                                    item?.attributes?.posterImage?.original
                                                                                }
                                                                            />
                                                                        </div>
                                                                    );
                                                                }
                                                                )}
                                                            </S.Test>
                                                        </M.Grid>
                                                    )}
                                                </>
                                            )}
                                        </>
                                    )}
                                </S.BoxText>
                                {text &&
                                    <S.Main>
                                        {info?.data && (
                                            <PaginationComponent
                                                total={info?.data?.meta?.count}
                                                offset={offset}
                                                setOffset={setOffset}
                                            />
                                        )}
                                    </S.Main>
                                }
                            </>
                        )}
                    </M.Grid>
                </S.Application>
            </S.Container>
            <Footer />
        </>
    )
}
export default categories