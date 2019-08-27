import React,{Component} from "react";
import {
    HeaderWrapper,
    PageWrapper,
    HeaderContainer,
    LogoIcon,
    HeaderUl,
    HeaderLi,
    HeaderSearch,
    HeaderInfo
} from "./style";

import "antd/dist/antd.css";
import {
    Input,
    Button
} from "antd";

class Header extends Component{

    render(){
        return (
    
              <HeaderWrapper>
                  <HeaderContainer>
                      <LogoIcon>知乎</LogoIcon>
                      <HeaderUl>
                          <HeaderLi key="首页"><a>首页</a></HeaderLi>
                          <HeaderLi key="发现"><a>发现</a></HeaderLi>
                          <HeaderLi key="等你来答"><a>等你来答</a></HeaderLi>
                      </HeaderUl>
                      <HeaderSearch>
                          <Input 
                            className="searchInput" 
                            placeholder="轮到你了" 
                            suffix={<span className="iconfont">&#xe6e4;</span>}
                          />
                          <Button className="searchButton" type="primary">提问</Button>
                      </HeaderSearch>
                      <HeaderInfo>
                          <span className="iconfont">&#xe8c0;</span>
                          <span className="iconfont">&#xe615;</span>
                          <span className="iconfont"><img className="headerImg"/></span>
                      </HeaderInfo>
                  </HeaderContainer>
              </HeaderWrapper> 
       
            
        )
    }
}

export default Header;