import Styled from 'styled-components';

const Aside = Styled.aside`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url("${require('../../../../static/img/auth/BG.png')}");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left top;
  @media only screen and (max-width: 767px){
    height: 100%;
  }
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
  .auth-side-content{
    @media only screen and (max-width: 991px){
      h1{
        font-size: 20px;
      }
    }
    @media only screen and (max-width: 767px){
      h1{
        font-size: 24px;
        margin-bottom: 28px;
      }
    }
  }
`;

const Content = Styled.div`
    padding: 100px;
    @media only screen and (max-width: 1599px){
      padding: 50px;
    }
    @media only screen and (max-width: 991px){
      padding: 20px;
    }
    @media only screen and (max-width: 767px){
      text-align: center;
    }
    .auth-content-figure{
      @media only screen and (max-width: 1199px){
        max-width: 420px;
      }
      @media only screen and (max-width: 991px){
        max-width: 100%;
      }
    }
`;

const AuthWrapper = Styled.div`
  height: 100%;
  padding: 40px;
  @media only screen and (max-width: 1599px){
    padding: 25px;
  }
  
  @media only screen and (max-width: 767px){
    text-align: center;
  }
  .auth-notice{
    text-align: right;
    font-weight: 500;
    @media only screen and (max-width: 767px){
      text-align: center;
      margin-bottom: 10px;
    }
  }
  .auth-contents{
    display: flex;
    align-items: center;
    justify-content: center;
    form{
      width: 420px;
      h1{
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 45px;
        @media only screen and (max-width: 767px){
          margin-bottom: 28px;
        }
      }
      .auth-form-action{
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        @media only screen and (max-width: 379px){
          flex-flow: column;
          .ant-checkbox-wrapper{
            margin-bottom: 15px;
          }
        }
      }
    }
    .form-divider{
      font-size: 13px;
      color: ${({theme})=>theme['gray-solid']};
      text-align: center;
      position: relative;
      margin-bottom: 25px;
      &:before{
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        height: 1px;
        background: ${({theme})=>theme['border-color-light']};
      }
      span{
        background: #fff;
        padding: 0 15px;
        display: inline-block;
        position: relative;
        z-index: 2;
      }
    }
    .social-login{
      display: flex;
      align-items: center;
      margin: -6px;
      @media only screen and (max-width: 767px){
        justify-content: center;
      }
      li{
        padding:6px;
        a{
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          height: 48px;
          padding: 0 15px;
          border: 1px solid ${({theme})=>theme['border-color-light']};
          background: ${({theme})=>theme['bg-color-light']};
          color: ${({theme})=>theme['text-color']};
          font-weight: 500;
          span:not(.anticon){
            display: inline-block;
            margin-left: 5px;
          }
        }
      }
    }
  }
`;

export { Aside, Content, AuthWrapper };
