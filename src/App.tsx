import {useEffect, useState} from "react";
import type {Characters} from "./types.ts";
import styled from "styled-components";
import HarryPotter from "./components/HarryPotter.tsx";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`

export default function App() {
    const [data, setData] = useState<Characters[]>([]);
    useEffect(() => {
            async function fetchData() {
                const rawData = await fetch("https://hp-api.onrender.com/api/characters/students");
                const results = await rawData.json(); //converts json to object
                setData(results);
                console.log(results);
            }

            fetchData().then(() => console.log("Hooray")) //exception handling here
                .catch((e: Error) => console.log("this error occurred:" + e))


        }, [data.length]
    );

    return (
        <ParentDiv>
            <HarryPotter data={data}/>
        </ParentDiv>
    )
}


