import Styled from 'styled-components';

const Aside = Styled.aside`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url("${require('../../../../static/img/auth/BG.png')}");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left top;
  .topShape {
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
  }
  .bottomShape {
    position: absolute;
    bottom: 0;
    left: 0;
    //width: 400px;
  }
`;

const Content = Styled.div`
    padding: 100px;
`;

const AuthenticationWrapper = Styled.div`
  .top-text{
    text-align: right;
    margin: 40px 40px 0 0;
    color: ${({theme})=>theme['gray-color']};
    a{
      font-weight: 500;
    }
  }
  .authentication-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    max-width: 420px;
    margin: 0 auto;
    .authentication-box__title{
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 46px;
      .autor-name{
        color: ${({theme})=>theme['secondary-color']};
      }
    }
    .ant-form-item{
      .ant-input-password {
        input{
          padding: 12px 10px;
        }
      }
      label{
        color: ${({theme})=>theme['dark-color']};
      }
    }
  }

  .atbd-signin-from{
    position: realtive;
    .remember-box{
      margin: -8px 0 26px;
    }
    .or-text{
      position: relative;
      z-index: 2;
      text-align: center;
      color: ${({theme})=>theme['light-color']};
      span{
        background: #fff;
        z-index: 2;
        padding: 4px 11px;
      }
      &:after{
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background: ${({theme})=>theme['bg-color-normal']};
        content: '';
        z-index: -1;
      }
    }
    .signin-btn{
      padding: 0 66px;
    }
  }
`;

export { Aside, Content, AuthenticationWrapper };
