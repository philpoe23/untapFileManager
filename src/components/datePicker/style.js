import Styled from 'styled-components';

const ItemWraper = Styled.div`
    display: flex;
    flex-direction: column;
    .rdrDateDisplay, .rdrMonthAndYearPickers{
        display: none;
    }
    .rdrMonth {
        position: relative;
    }
    .rdrMonthName {
        text-align: center;
        font-size: 18px;
        position: absolute;
        top: -50px;
        left: 100px;
        font-weight: 400;
    }
    .rdrDefinedRangesWrapper{
        .rdrStaticRanges{
            .rdrStaticRange{
                border-bottom: 0 none;
                &:hover{
                    span{
                        color: ${({ theme }) => theme['primary-color']};
                        background-color: ${({ theme }) => theme['primary-color']}10;
                    }
                }
            }
        }
    }
    .rdrCalendarWrapper{
        .rdrPprevButton,
        .rdrNextButton{
            padding: 0;
            background: transparent;
        }
        .rdrMonthsHorizontal{
            .rdrMonth{
                .rdrMonthName{
                    font-size: 14px;
                    font-weight: 600;
                    color: ${({ theme }) => theme['dark-color']};
                }
            }
            .rdrDays{
                .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span{
                    color: ${({ theme }) => theme['dark-color']} !important;
                }
                .rdrStartEdge.rdrEndEdge{
                    background-color: transparent !important;
                    border: 1px solid ${({ theme }) => theme['primary-color']};
                }
                .rdrStartEdge.rdrEndEdge ~ .rdrDayNumber span{
                    color: ${({ theme }) => theme['primary-color']};
                }
                .rdrStartEdge ~ .rdrDayNumber{
                    width: 35px;
                    span{
                        color: #fff !important;
                    }
                    
                }
                .rdrEndEdge ~ .rdrDayNumber{
                    // width: 35px;
                    left: 0 !important;
                    span{
                        color: #fff !important;
                    }
                }
                .rdrDay{
                    height: 3em;
                    // width: 3.25em;
                    // border-radius: 50%;
                    // >span{
                    //     height: 36px;
                    // }
                    .rdrStartEdge,
                    .rdrEndEdge{
                        // border-radius: 50%;
                        // width: 36px;
                        // height: 36px;
                        // width: 35px;
                        background-color: ${({ theme }) => theme['primary-color']} !important;
                    }
                    .rdrInRange{
                        background-color: ${({ theme }) => theme['primary-color']}10;
                    }
                    .rdrEndEdge{
                        // border-radius: 0 50% 50% 0;
                        border-radius: 50%;
                    }
                    .rdrStartEdge{
                        // border-radius: 50% 0 0 50%;
                        border-radius: 50%;
                    }
                    // .rdrStartEdge,
                    // .rdrEndEdge,
                    // .rdrStartEdge.rdrEndEdge{
                    //     position: realtive;
                    //     &:after{
                    //         position: absolute;
                    //         left: auto;
                    //         right: -20PX !important;
                    //         top: 0;
                    //         width: 100% !important;
                    //         height: 100%;
                    //         background-color: ${({ theme }) => theme['primary-color']};
                    //         content: "";
                    //     }
                    // }
                    // .rdrEndEdge{
                    //     &:after{
                    //         width: 60% !important;
                    //         right: auto;
                    //         left: -5px;
                    //     }
                    // }
                    &.rdrDayHovered{
                        border: 0 none !important;
                        span{
                            border: 0 none !important;
                        }
                        &.rdrInRange{
                            border: 0 none !important;
                            span{
                                border: 0 none !important;
                            }
                        }
                    }
                    .rdrDayInPreview{
                        border: 0 none;
                        background-color: ${({ theme }) => theme['primary-color']}10;
                    }
                    .rdrDayStartPreview{
                        border: 0 none !important;
                    }
                    .rdrDayEndPreview{
                        background-color: ${({ theme }) => theme['primary-color']}10;
                    }
                    // .rdrEndEdge{
                    //     width: 100%;
                    //     height: 100%;
                    //     border-radius: 50%;
                    // }
                    .rdrDayNumber{
                        border-radius: 50%;
                        top: 6px;
                        bottom: 6px;
                        left: 3px;
                        span{
                            font-size: 14px;
                            color: ${({ theme }) => theme['dark-color']};
                        }
                    }
                }
            }
        }
    }
`;

const ButtonGroup = Styled.div`
    border-top: 1px solid #EEEFF2;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    margin: -4px -4px -25px;
    p{
        font-size: 13px;
        margin: 0 20px 0 0;
        font-weight: 500;
        color: ${({ theme }) => theme['gray-color']};
    }
    button {
        margin: 4px;
        height: 32px;
        padding: 0px 13.26px;
    }
`;

export { ItemWraper, ButtonGroup };
