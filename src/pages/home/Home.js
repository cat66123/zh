import React,{Component} from "react";
import {
    HomeWrapper,
    HomeContainer,
    ContainerLeft,
    ContainerRight
} from "./style";

class Home extends Component{
    render(){
        return (
            <HomeWrapper>
                <HomeContainer>
                    <ContainerLeft>
                        <div className="leftOptions"></div>
                    </ContainerLeft>
                    <ContainerRight></ContainerRight>
                </HomeContainer>
            </HomeWrapper>
        )
    }
}

export default Home;