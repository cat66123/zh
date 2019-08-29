import styled from "styled-components";

export const PageWrapper = styled.div`
    width:100%;
    height:100%;
    background:#f6f6f6;
    position:absolute;
`;

export const HeaderWrapper = styled.div`
    min-width: 1032px;
    height:52px;
    background:white;
    box-shadow:0 0 3px lightgray;
`;

export const HeaderContainer = styled.div`
    width:1032px;
    height:52px;
    margin:auto;
    display:flex;
    flex-direction:row;
`;

export const LogoIcon = styled.a`
    width:64px;
    height:30px;
    display:block;
    font-size:30px;
    line-height:30px;
    margin:auto 0;
`;

export const HeaderUl = styled.ul`
    display:flex;
    flex-direction:row;
    margin:auto 0;
    padding:0 20px 0 20px;
    font-size:15px;
    color:#8590a6;
`;

export const HeaderLi = styled.li`
    padding:0 20px 0 20px;

    a{
        color:#8590a6;
    }

    a:hover{
        color:black;
    }
`;

export const HeaderSearch = styled.div`
    width:400px;
    height:34px;
    margin:auto 0;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    .searchInput{
        width:326px;
        font-size:14px;
        .iconfont{
            font-size:20px;
            color:gray;
        }
    }

    .searchButton{

    }
`;

export const HeaderInfo = styled.div`
    height:30px;
    margin:auto 0;
    padding:0 0 0 120px ;

    span{
        font-size:25px;
        padding:0 0 0 30px;
        color:gray;
    }

    .headerImg{
        width:30px;
        height:30px;
        margin-top:-10px;
        margin-left:-5px;
        background:url("https://c-ssl.duitang.com/uploads/item/201906/29/20190629145715_qmixm.thumb.400_0.jpg");
        background-size:cover;
    }
`;