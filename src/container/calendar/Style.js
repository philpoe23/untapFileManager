import Styled from 'styled-components';

const Aside = Styled.aside`
    .ant-picker{
        visibility: hidden;
    }
    .ant-picker .ant-picker-input{
        display: none;
    }
    .listHeader{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .eventList{
        li{
            a{
                display: block;
                line-height: 36px;
            }
        }
    }
    
`;

const CalendarWrapper = Styled.div`
   
    .primary{
        background: #5F63F2;
    }
    .secondary{
        background: #FF69A5;
    }
    .success{
        background: #20C997;
    }
    .info{
        background: #2C99FF;
    }
    .warning{
        background: #FA8B0C;
    }

    .bullet{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')} : 12px;
    }

    .calenderHeader{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        border-bottom: 1px solid #ddd;
        padding-bottom: 5px;
        .left{
            display: flex;
            position: relative;
            .react-calendar{
                border: none;
                .react-calendar__navigation{
                    margin: 0;
                    border: none;
                }
                .react-calendar__viewContainer{
                    position: absolute;
                    background: #fff;
                    z-index: 999;
                    border: 1px solid #ddd;
                    display: none;
                    &.show{
                        display: block;
                    }
                }
            }
        }
        .right{
            display: flex;
            svg{
                width: 14px;
            }
            ul{
                li{
                    display: inline-block;
                    a{
                        display: block;
                        padding: 4px 4px;
                    }
                }
            }
        }
    }
    
`;

export { CalendarWrapper, Aside };
