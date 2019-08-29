import styled from 'styled-components';
import img from '../../statics/login/bg.jpg';

export const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Logo = styled.img.attrs({
  src: 'https://pic4.zhimg.com/80/v2-a47051e92cf74930bedd7469978e6c08_hd.png',
})`
  width: 128px;
  margin-top: 30px;
`;

export const LoginContainer = styled.div`
  width: 400px;
  height: 375px;
  background: white;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginForm = styled.form`
  width: 352px;
  height: 330px;
`;

export const LoginTip = styled.div`
  width: 400px;
  height: 70px;
  background: #f6f6f6;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SignTabs = styled.div`
  width: 352px;
  height: 60px;
  display: flex;
  flex-direction: row;
  line-height: 60px;
  font-size: 16px;
`;

export const TabLeft = styled.div`
  height: 60px;
  width: 80px;
  border-bottom: 2px solid black;
`;

export const TabRight = styled.div`
  height: 60px;
  width: 64px;
  border-bottom: 2px solid green;
  margin-left: 30px;
`;

export const SignInput = styled.div`
  width: 352px;
  height: 48px;
  margin-top: 20px;
  line-height: 48px;
`;

export const SignLogin = styled.div`
  width: 352px;
  height: 36px;
  margin-top: 20px;
`;

export const SignOptions = styled.div`
  width: 352px;
  height: 20px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const TipLeft = styled.div``;

export const TipRight = styled.a``;

export const TipBox = styled.div`
  width: 352px;
  height: 60px;
  align-items: center;
  margin-left: 25px;
  font-size: 13px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
