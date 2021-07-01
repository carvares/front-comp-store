import styled from "styled-components";

export const GrayBox = styled.div`
    background: #e6e6e6;
    padding-top: calc(100% - 227px);
`;

export const Card = styled.div`
    margin-top: 47px;
    height: 180px;
    background: #fff059;
`;

export const LogInBox =  styled.div`
    height: 420px;
    width: 420px;
    background: white;
    position: fixed;
    top: 15%;
    left: calc(50% - 210px);
    border-radius: 5px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.15);
    color: black;
    padding: 0px 64px;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h1 {
    margin: 30px 0px 70px;
    }

    & > div {
        display: flex;
        margin-bottom: 20px;
        background: white;
        border-radius: 5px;
        font-weight: bold;
        font-size: 15px;
        color: red;
        justify-content: center;
        align-items: center;
    }
`;

export const RegisterBox =  styled.div`
    width: ${props => props.width > 720 ? "720px" : "100%"};
    background: white;
    position: fixed;
    top: ${props => props.width > 720 ? "15%" : "72px"};
    left: ${props => props.width > 720 ? "calc(50% - 360px)" : "0px"};
    border-radius: 5px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.15);
    color: black;
    padding: 0px 64px;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h1 {
        margin: 30px 0px 30px;
    }

    & > div {
        display: flex;
        margin-bottom: 20px;
        width: 325px;
        height: 50px;
        background: white;
        border-radius: 5px;
        font-weight: bold;
        font-size: 15px;
        color: red;
        justify-content: center;
        align-items: center;
    }
`;