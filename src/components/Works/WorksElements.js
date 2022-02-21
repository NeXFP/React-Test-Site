import styled from "styled-components";

export const WorksContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1920px;
    }

    @media screen and (max-width: 480px) {
        height: 1920px;
    }
`;

export const WorksWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`;


export const WorksCard = styled.div`
    background: #D6825E;
    display: flex;
    flex-direction: Column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 300px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const WorksIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const WorksH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem
    }
`

export const WorksH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    font-style: oblique;
`

export const WorksP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: white;
`

export const WorksA = styled.div`
    flex-direction: Column;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }       
`