import Styled from 'styled-components';

const UserBioBox = Styled.div`
    .ant-card-body{
        padding: 25px 15px 25px !important;
        .btn-outlined{
        margin: ${({ theme }) => (theme.rtl ? '0 0 10px 10px' : '0 10px 10px 0')};
        }
    }
    
`;

const SettingWrapper = Styled.div`
    .cover-image{
        position: relative;
        margin-bottom: 25px;
        .ant-upload-select{
            position: absolute;
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 20px;
            top: 20px;
            border: 1px solid #ffffff50;
            border-radius: 6px;
            @media only screen and (max-width: 991px){
                top: 50%;
                ${({ theme }) => (theme.rtl ? 'left' : 'right')}: auto;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            a{
                color: #fff;
                padding: 8px 17.35px;
                display: inline-flex;
                align-items: center;
                @media only screen and (max-width: 479px){
                    padding: 5px 10px;
                }
                i,
                svg,
                img
                {
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
                }
            }
        }
    }
    .coverWrapper{
        position: relative;
        z-index: 1;
        margin-bottom: 60px;
        nav{
            background: #ffff;
            position: absolute;
            bottom: -40px;
            width: 100%;
            z-index: -1;
            border-radius: 10px;
            ul{
                margin: 0;
                li{
                    display: inline-block;
                    a{
                        display: block;
                        padding: 20px 5px;
                    }
                }
            }
        }

    }
    .setting-card-title{
        @media only screen and (max-width: 479px){
            text-align: center;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
            margin-bottom: 0;
            font-size: 16px;
            font-weight: 500;
        }
        span{
            font-size: 13px;
            font-weight: 400;
            margin: 0;
            color: ${({ theme }) => theme['light-color']};
        }
    }
`;

const RightAsideWrapper = Styled.div`
    .ant-card-body{
        padding: 0 !important;
        .video{
            display: block;
            position: relative;
            z-index: 4;
            margin-bottom: 10px;
            span{
                width: 100%;
                height: 100%;
                background: #272B4120;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 5;
            }
        }
        ul{
            margin: 0;
            padding: 0;
            
            li{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 15px;
                cursor: pointer;

                &:hover{
                    box-shadow: 0 15px 50px #9299B820;
                }

                div{
                    display: flex;
                    img{
                        width: 46px;
                        height: 46px;
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                        border-radius: 50%;
                    }
                    p{
                        margin: 0;
                        padding: 0;
                        span{
                            display: block;
                        }
                    }
                }
            }
        }
    }
`;
const ActivityContents = Styled.div`
    .ant-card-body{
        ul{
            margin: 0;
            li{
                display: flex;
                align-items: center;
                justify-content: space-between;
                .more{
                    visibility: hidden;
                }
                &:hover{
                    box-shadow: 0 15px 50px #88888820;
                    .more{                        
                        visibility: visible;
                    }
                }
                div{
                    display: flex;
                    img{
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                    }
                    p{
                        span{
                            display: block;
                        }
                    }
                }
            }
        }        
    }
`;
export { UserBioBox, SettingWrapper, RightAsideWrapper, ActivityContents };
