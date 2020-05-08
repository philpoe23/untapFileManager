import Styled from "styled-components";

const Focard = Styled.div`

    canvas{
        width: 100% !important;
        margin-top: 45px;
    }
    .focard-details{
        h1{
            margin-bottom: 0;
        }
        .subtitle{
            font-size: 14px;
            color: #868EAE;
            margin-bottom: 10px;
        }
        p{
            display: flex;
            align-items: center;
            span{
                display: inline-flex;
                align-items: center;
            }
            span + span{
                margin-left: 10px;
                color: #868EAE;
                font-size: 13px;
            }
        }
        svg{
            color: ${({theme})=>theme['success-color']};
            width: 15px;
            margin-right: 10px;
        }
        &.growth-downward{
            svg{
                color: ${({theme})=>theme['danger-color']};
            }
        }
    }
`;

const CardBarChart = Styled.div`
    div{
        p{
            font-size: 14px;
            color: ${({theme})=>theme['light-gray-color']};
        }
        h1{
            sub{
                font-size: 14px;
                color: ${({theme})=>theme['success-color']};
            }
        }
    }
`;

const CardGroup = Styled.div`
    .focard-wrapper{
        margin: 0 -12px;
        .ant-col-md-12{
            padding: 0 12px;
        }
    }
`;

const Exlist = Styled.div`
    
`;

export { Focard, CardBarChart, CardGroup, Exlist };