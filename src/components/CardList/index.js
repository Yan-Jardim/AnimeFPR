import { useEffect, useState } from "react";
import * as S from "./styled";
import axios from "axios";
import Cards from "../../components/Cards"
import { Grid } from "@mui/material";

const CardList = (props) => {
    const { title, subtitle, icon, sort, categoryName, limit } = props;

    const [response, setResponse] = useState();

    let url = `https://kitsu.io/api/edge/anime?page[limit]=${limit ?? 5}&page[offset]=0`;

    if (sort === "user_count") {
        url += "&sort=-user_count";
    }

    if (sort === "average_rating") {
        url += "&sort=-average_rating";
    }

    if (categoryName && categoryName !== "All") {
        url += `&filter[categories]=${categoryName}`
    }

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setResponse(response?.data?.data);
            })
            .catch(function (error) {
                console.log(error.toJSON());
            });
    }, []);

    console.log(response, "aqui é a resposta dos cards");


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
            <Grid container>
                {response && Object.values(response)?.map((item) => {
                    return (
                        <Grid item xs={3}>
                            <Cards info={item} />
                        </Grid>
                    )
                })} 
            </Grid>
        </S.List>
    )
}

export default CardList;