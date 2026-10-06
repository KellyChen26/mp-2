import styled from "styled-components";
import type {Characters} from "../types.ts";

const HPDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #890000;
    width: 100%;
`;

const SingleCharDiv=styled.div<{alive:boolean}>`
    width: 25%;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2%;
    margin: 1%;
    background-color: ${(props) => (props.alive ? 'lightskyblue' : '#013220')};
    color: ${(props) => (!props.alive ? 'black' : 'white')};
    border: 3px #c98932 solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

const StyledImages = styled.img`
    max-width: 80%;
    margin: auto;
`;

const StyledImageDiv = styled.div`
    width: 80%;
    height: 50%;
    margin: auto;
`;


export default function HarryPotter(props : {data:Characters[]}){
    return(
        <HPDiv>
            {
                props.data.map((char: Characters) =>
                    <SingleCharDiv key={char.id} alive={char.alive}>
                        <h1>{char.name}</h1>
                        <h2>{char.ancestry}</h2>
                        <h3>{char.house}</h3>
                        <h4>{char.species}</h4>
                        <StyledImageDiv>
                            <StyledImages src={char.image} alt={`image of ${char.name}`}/>
                        </StyledImageDiv>
                    </SingleCharDiv>
                )
            }
        </HPDiv>
    );

}