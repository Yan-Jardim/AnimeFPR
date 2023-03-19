import { useEffect, useState } from "react";
import * as S from "./styled";
import axios from "axios";
import Cards from "../../components/Cards"


const CardList = (props) => {
    const { title, subtitle, icon, sort } = props;

    const [response, setResponse] = useState();


    let url = `https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0`;

    if (sort === "user_count") {
        url += "&sort=-user_count";
    }

    if (sort === "average_rating") {
        url += "&sort=-average_rating";
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
    }, [url]);


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
            <div style={{ display: "flex", gap: "10px" }}>
                {response && response.map((item) => {
                    return (
                        <Cards info={item} />
                    )
                })}
            </div>
        </S.List>
    )
}

export default CardList;