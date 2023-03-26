import { useEffect, useState } from "react";
import * as S from "./styled";
import axios from "axios";
import Cards from "../../components/Cards"
import PaginationComponent from "../Pagination";
import { Grid } from "@mui/material";
import qs from "qs";

const CardList = (props) => {
    const { title, subtitle, icon, sort, categoryName, limit } = props;

    const [response, setResponse] = useState();
    const [offset, setOffset] = useState(0);

    const createUrl = () => {
        const query = {
            page: {
                limit: limit ?? 5,
                offset,
            },
        };
        let url = `https://kitsu.io/api/edge/anime?${qs.stringify(query)}`;

        if (sort === "user_count") {
            url += "&sort=-user_count";
        }

        if (sort === "average_rating") {
            url += "&sort=-average_rating";
        }

        if (categoryName && categoryName !== "All") {
            url += `&filter[categories]=${categoryName}`;
        }
        return url;
    };

    useEffect(() => {
        const url = createUrl();
        axios
            .get(url)
            .then((response) => {
                setResponse(response.data.data);
            })
            .catch((error) => {
                console.log(error.toJSON());
            });
    }, [sort, categoryName, offset]);

    return (
        <S.List>
            <S.Paragraph>
                <S.Title>
                    {icon}
                    {title}
                </S.Title>
                <S.Subtitle>
                    {subtitle}
                </S.Subtitle>
            </S.Paragraph>

            <Grid container sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                {response && Object.values(response)?.map((item) => {
                    return (
                        <Grid sx={{ display: "flex" }}>
                            <Cards info={item} />
                        </Grid>
                    )
                })}
            </Grid>
            <S.Pagination>
                {categoryName && response &&
                    <PaginationComponent
                        total={response?.meta?.count}
                        offset={offset}
                        setOffset={setOffset}
                    />
                }
            </S.Pagination>
        </S.List >
    )
}

export default CardList;