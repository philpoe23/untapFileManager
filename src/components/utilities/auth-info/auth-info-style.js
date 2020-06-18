import Styled from 'styled-components';

const InfoWraper = Styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 16px;
    @media only screen and (max-width: 767px) {
        padding: 16px;
    }
    .head-example{
        text-decoration: none;
        color: ${({ theme }) => theme['text-color-secondary']};
        box-shadow: none;
        padding: 0px 8px;
    }
    .message .ant-badge-dot{
        background: green
    }
    .ant-badge{
        .ant-badge-dot{
            right: 50% !important;
        }
    }
    .flag-select{
        padding-bottom: 0;
        .flag-select__option{
            margin: 0;
            img{
                top: 0;
            }
        }
        .flag-select__btn{
            line-height: 0;
            padding-right: 0;
            cursor: pointer;
        }
        .flag-select__btn:after{
            content: none;
        }
        .flag-select__options{
            width: 120px;
            padding-top: 0;
            margin: 0;
            right: 0;
            top: 30px;
            display: block;
            .flag-select__option{
                line-height: normal;
                display: block;
                padding: 5px 10px;
                span{
                    width: auto !important;
                    height: auto !important;
                    display: block;
                }
            }
        }
    }
    .message, .notification, .settings, .support, .flag-select, .nav-author{
        display: flex;
        span, a{
            display: block;
            line-height: normal;
        }
    }
`;

export { InfoWraper };
