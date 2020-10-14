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
                    .react-calendar__month-view__days{
                        display: none !important;
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

    .events{
        li{
            position: relative;
            height: 35px;
            a{
                position: absolute;
                top: 0;
                left: 0;
                padding: 2px 5px;
                z-index: 1;
                border-radius: 4px;
                font-size: 13px;
            }
        }
    }

    .ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-content {
        overflow-y: unset;
    }  
    
`;

const UpdatePopup = Styled.div`
    .ant-card{
        width: 320px !important;
        .ant-card-body{
            padding: 0 !important;
            
            .headerUpdate{
                border-radius: 8px 8px 0 0;
                padding: 8px 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                h4{
                    color: #fff;
                }
                .action{
                    display: flex;
                    align-items: center;
                    width: 100px;
                    justify-content: flex-end;
                    color: #fff;
                    a{
                        padding: 0;
                        color: #fff;
                        svg{
                            margin: 0;
                        }
                    }
                }
            }
            .bodyUpdate{
                padding: 8px;
            }
        }
    }
`;

export { CalendarWrapper, Aside, UpdatePopup };
