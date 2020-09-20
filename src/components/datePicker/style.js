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
                        background-color: #EFEFFE;
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
                    font-size: 13px;
                    font-weight: 600;
                    color: ${({ theme }) => theme['dark-color']};
                }
            }
            .rdrDays{

                .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span{
                    color: ${({ theme }) => theme['dark-color']} !important;
                    z-index: 10;
                }
                .rdrDay:not(.rdrDayPassive) .rdrDayInPreview ~ .rdrDayNumber span,
                .rdrDay:not(.rdrDayPassive) .rdrDayEndPreview ~ .rdrDayNumber span{
                    color: ${({ theme }) => theme['dark-color']} !important;
                    z-index: 10;
                }
                .rdrStartEdge.rdrEndEdge{
                    background-color: transparent !important;
                    border: 1px solid ${({ theme }) => theme['primary-color']};
                }
                .rdrStartEdge.rdrEndEdge ~ .rdrDayNumber span{
                    color: ${({ theme }) => theme['primary-color']};
                }
                .rdrStartEdge ~ .rdrDayNumber{
                    // width: 35px;
                    &:after{
                        position: absolute;
                        left: 20px;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #EFEFFE;
                        content: '';
                    }
                    span{
                        color: #fff !important;
                        padding-right: 8px;
                        z-index: 10;
                    }
                    
                }
                .rdrEndEdge ~ .rdrDayNumber{
                    // width: 35px;
                    width: 100%;
                    height: 100%;
                    left: 0 !important;
                    &:after{
                        position: absolute;
                        right: 20px;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #EFEFFE;
                        content: '';
                    }
                    span{
                        color: #fff !important;
                        padding-right: 8px;
                        z-index: 10;
                    }
                }
                .rdrDay{
                    height: 3em;
                    margin-bottom: 3px;
                    // width: 2.25rem;
                    // width: 3.25em;
                    // border-radius: 50%;
                    &.rdrDayPassive{
                        .rdrDayNumber{
                            span{
                                color: ${({ theme }) => theme['extra-light-color']};
                            }
                        }
                    }
                    >span{
                        line-height: 1;
                    }
                    .rdrStartEdge,
                    .rdrEndEdge{
                        // border-radius: 50%;
                        // width: 36px;
                        // height: 36px;
                        width: 35px;
                        background-color: ${({ theme }) => theme['primary-color']} !important;
                    }
                    .rdrInRange{
                        top: 0;
                        bottom: 0;
                        background-color: #EFEFFE;
                    }
                    .rdrEndEdge{
                        // border-radius: 0 50% 50% 0;
                        border-radius: 50%;
                    }
                    .rdrStartEdge{
                        // border-radius: 50% 0 0 50%;
                        border-radius: 50%;
                    }
                    .rdrSelected, .rdrInRange, .rdrDayInPreview, .rdrDayEndPreview, .rdrStartEdge, .rdrEndEdge{
                        top: 0;
                        bottom: 0;
                        z-index: 10;
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
                    .rdrDayInPreview,
                    .rdrDayEndPreview{
                        border: 0 none;
                        background-color: #EFEFFE;
                    }
                    .rdrDayStartPreview{
                        border: 0 none !important;
                    }
                    .rdrDayEndPreview{
                        background-color: #EFEFFE;
                    }
                    // .rdrEndEdge{
                    //     width: 100%;
                    //     height: 100%;
                    //     border-radius: 50%;
                    // }
                    .rdrDayNumber{
                        border-radius: 50%;
                        top: 0;
                        bottom: 0;
                        left: 0;
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
