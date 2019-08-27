import styled,{createGlobalStyle} from "styled-components";

export const HomeWrapper = styled.div`
    width:100%;
    height:100%;
    background:#f6f6f6;
    position:absolute;
`;

export const HomeContainer = styled.div`
    width:1032px;
    margin:0 auto;
    margin-top:10px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;

export const ContainerLeft = styled.div`
    width:700px;
    height:300px;
    background:white;
    box-shadow:0 0 2px lightgray;

    .leftOptions{
        height:60px;
        background:red;
    }
`;

export const ContainerRight = styled.div`
    width:320px;
    height:300px;
    background:white;
    box-shadow:0 0 2px lightgray;
`;