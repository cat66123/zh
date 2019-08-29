import React, { Component } from "react";
import { connect } from "react-redux";
import {
  LoginWrapper,
  Logo,
  LoginContainer,
  LoginForm,
  LoginTip,
  SignTabs,
  TabLeft,
  TabRight,
  SignInput,
  SignLogin,
  SignOptions,
  TipRight,
  TipLeft,
  TipBox
} from "./style";
import { Input, Button } from "antd";

class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <Logo />
        <LoginContainer>
          <LoginForm>
            <SignTabs>
              <TabLeft>免密码登录</TabLeft>
              <TabRight>密码登录</TabRight>
            </SignTabs>
            <SignInput>
              <Input size="large" placeholder="手机号或邮箱" />
            </SignInput>
            <SignInput>
              <Input size="large" placeholder="密码" />
            </SignInput>
            <SignOptions>
              <a>海外手机号登录</a>
              <a>忘记密码？</a>
            </SignOptions>
            <SignLogin>
              <Button size="large" type="primary" block>
                注册/登录
              </Button>
            </SignLogin>
          </LoginForm>
          <LoginTip>
            <TipBox>
              <TipLeft>
                <div>未注册手机验证后自动登录</div>
                <div>
                  注册即代表同意
                  <a>《知乎协议》</a>
                  <a>《隐私保护指引》</a>
                </div>
              </TipLeft>
              <TipRight>注册机构号</TipRight>
            </TipBox>
          </LoginTip>
        </LoginContainer>
      </LoginWrapper>
    );
  }
}

const mapStateToProps = state => ({
  bgUrl: state.getIn(["login", "bgUrl"])
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
