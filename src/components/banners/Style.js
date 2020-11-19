import Styled from 'styled-components';

const Figure2 = Styled.figure`
    position: relative;
    padding: 10px 0px;
    margin-bottom: 0;
    img {
        position: absolute;
        bottom : -15px;
        right : 0;
    }
    figcaption{
        h2{
            font-size: 30px;
            font-weight: 600;
            color: #fff;
        }
    }
`;

const Figure3 = Styled.figure`
    position: relative;    
    min-height: 150px;
    img {
        position: absolute;
        bottom: -38px;
        right: -25px;
    }
`;

const Figure6 = Styled.figure`
    position: relative;    
    min-height: 150px;
    /* img {
        position: absolute;
        bottom: -38px;
        right: -25px;
    } */
`;

const Figure7 = Styled.figure`
    display: flex;  
    min-height: 150px;
    /* img {
        position: absolute;
        bottom: -38px;
        right: -25px;
    } */
`;

const BannerNormal = Styled.div`
    .ant-card-body{
        padding: 35px 30px 46px !important;
    }
    h2{
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 12px;
        color: ${({ theme }) => theme['dark-color']};
    }
    p{
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 18px;
        line-height: 1.667;
        color: ${({ theme }) => theme['gray-color']};
    }
    .ant-btn{
        height: 38px;
    }
`;

export { Figure2, Figure3, Figure6, Figure7, BannerNormal };
