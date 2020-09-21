import Styled from 'styled-components';

const ItemWraper = Styled.div`
    display: flex;
    flex-direction: column;
    .rdrDateDisplay, .rdrMonthAndYearPickers{
        display: none;
    }
    .rdrMonth {
        position: relative;
        max-width: 272px;
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
                .rdrSelected, 
                .rdrInRange{
                    
                    background-color: #EFEFFE;
                }
                .rdrStartEdge{
                    border-top-left-radius: 20px;
                    border-bottom-left-radius: 20px;
                }
                .rdrEndEdge{
                    border-top-right-radius: 20px;
                    border-bottom-right-radius: 20px;
                }
                .rdrDayStartOfMonth .rdrInRange, 
                .rdrDayStartOfMonth .rdrEndEdge, 
                .rdrDayStartOfWeek .rdrInRange, 
                .rdrDayStartOfWeek .rdrEndEdge{
                    border-top-left-radius: 20px;
                    border-bottom-left-radius: 20px;
                }
                .rdrDayStartOfMonth .rdrDayInPreview, .rdrDayStartOfMonth .rdrDayEndPreview, .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{
                    border-top-left-radius: 20px;
                    border-bottom-left-radius: 20px;
                    height: 100%;
                }
                .rdrDayEndPreview,
                .rdrDayStartPreview,
                .rdrDayInPreview{
                    border: 0 none;
                    background-color: #EFEFFE;
                    color: ${({ theme }) => theme['dark-color']};
                }
                .rdrDayEndPreview,
                .rdrDayStartPreview{
                    border-radius: 20px;
                }
                .rdrStartEdge, 
                .rdrEndEdge,
                .rdrDayStartPreview,
                .rdrDayEndPreview{
                    background-color: ${({ theme }) => theme['primary-color']};
                }

                .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span, 
                .rdrDay:not(.rdrDayPassive) .rdrDayEndPreview ~ .rdrDayNumber span, 
                .rdrDay:not(.rdrDayPassive) .rdrDayInPreview ~ .rdrDayNumber span, 
                .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span{
                    color: ${({ theme }) => theme['dark-color']};
                }
                
                .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, 
                .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span{
                    color: #fff;
                }
                // .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrStartEdge ~ .rdrDayStartPreview{
                //     opacity: 0;
                // }
                // .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrEndEdge ~ .rdrDayEndPreview{
                //     opacity: 0;
                // }
                .rdrDay{
                    margin-bottom: 3px;
                    .rdrSelected, 
                    .rdrInRange, 
                    .rdrStartEdge, 
                    .rdrEndEdge{
                        height: 100%;
                        top: 0;
                        bottom: 0;

                    }
                    .rdrDayNumber{
                        z-index: 10;
                    }
                }
            }
            // .rdrDays{

            //     .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span{
            //         color: ${({ theme }) => theme['dark-color']} !important;
            //         z-index: 10;
            //     }
            //     .rdrDay:not(.rdrDayPassive) .rdrDayInPreview ~ .rdrDayNumber span,
            //     .rdrDay:not(.rdrDayPassive) .rdrDayEndPreview ~ .rdrDayNumber span{
            //         color: ${({ theme }) => theme['dark-color']} !important;
            //         z-index: 10;
            //     }
            //     .rdrStartEdge.rdrEndEdge{
            //         background-color: transparent !important;
            //         border: 1px solid ${({ theme }) => theme['primary-color']};
            //     }
            //     .rdrStartEdge.rdrEndEdge ~ .rdrDayNumber span{
            //         color: ${({ theme }) => theme['primary-color']};
            //     }
            //     .rdrStartEdge ~ .rdrDayNumber{
            //         // width: 35px;
            //         &:after{
            //             position: absolute;
            //             left: 20px;
            //             top: 0;
            //             width: 60%;
            //             height: 100%;
            //             background-color: #EFEFFE;
            //             content: '';
            //         }
            //         span{
            //             color: #fff !important;
            //             padding-right: 8px;
            //             z-index: 10;
            //         }
                    
            //     }
            //     .rdrStartEdge ~ .rdrDayNumber{
            //         .rdrDayStartPreview.rdrDayEndPreview{
            //             left: 2px;
            //         }
                    
            //     }

            //     &.rdrDayHovered .rdrStartEdge.rdrEndEdge ~ .rdrDayNumber{
            //         &:after{
            //             display: none;
            //         }
            //     }
            //     .rdrEndEdge ~ .rdrDayNumber{
            //         .rdrDayStartPreview.rdrDayEndPreview{
            //             right: 2px;
            //         }
                    
            //     }
            //     .rdrEndEdge ~ .rdrDayNumber{
            //         // width: 35px;
            //         width: 100%;
            //         height: 100%;
            //         left: 0 !important;
            //         &:after{
            //             position: absolute;
            //             right: 20px;
            //             top: 0;
            //             width: 60%;
            //             height: 100%;
            //             background-color: #EFEFFE;
            //             content: '';
            //         }
            //         span{
            //             color: #fff !important;
            //             padding-right: 8px;
            //             z-index: 10;
            //         }
            //     }
            //     .rdrDay{
            //         height: 3em;
            //         margin-bottom: 3px;
            //         // width: 2.25rem;
            //         // width: 3.25em;
            //         // border-radius: 50%;
            //         &.rdrDayPassive{
            //             .rdrDayNumber{
            //                 span{
            //                     color: ${({ theme }) => theme['extra-light-color']};
            //                 }
            //             }
            //         }
            //         >span{
            //             line-height: 1;
            //         }
            //         .rdrStartEdge,
            //         .rdrEndEdge{
            //             // border-radius: 50%;
            //             // width: 36px;
            //             // height: 36px;
            //             width: 35px;
            //             background-color: ${({ theme }) => theme['primary-color']} !important;
            //         }
            //         .rdrInRange{
            //             top: 0;
            //             bottom: 0;
            //             background-color: #EFEFFE;
            //         }
            //         .rdrEndEdge{
            //             // border-radius: 0 50% 50% 0;
            //             border-radius: 50%;
            //         }
            //         .rdrStartEdge{
            //             // border-radius: 50% 0 0 50%;
            //             border-radius: 50%;
            //         }
            //         .rdrSelected, .rdrInRange, .rdrDayInPreview, .rdrDayEndPreview, .rdrStartEdge, .rdrEndEdge{
            //             top: 0;
            //             bottom: 0;
            //             z-index: 10;
            //         }
            //         // .rdrStartEdge,
            //         // .rdrEndEdge,
            //         // .rdrStartEdge.rdrEndEdge{
            //         //     position: realtive;
            //         //     &:after{
            //         //         position: absolute;
            //         //         left: auto;
            //         //         right: -20PX !important;
            //         //         top: 0;
            //         //         width: 100% !important;
            //         //         height: 100%;
            //         //         background-color: ${({ theme }) => theme['primary-color']};
            //         //         content: "";
            //         //     }
            //         // }
            //         // .rdrEndEdge{
            //         //     &:after{
            //         //         width: 60% !important;
            //         //         right: auto;
            //         //         left: -5px;
            //         //     }
            //         // }
            //         &.rdrDayHovered{
            //             border: 0 none !important;
            //             span{
            //                 border: 0 none !important;
            //             }
            //             &.rdrInRange{
            //                 border: 0 none !important;
            //                 span{
            //                     border: 0 none !important;
            //                 }
            //             }
            //         }
            //         .rdrDayInPreview,
            //         .rdrDayEndPreview{
            //             border: 0 none;
            //             background-color: #EFEFFE;
            //         }
            //         .rdrDayStartPreview{
            //             border: 0 none !important;
            //             right: 2px;
            //             &.rdrDayEndPreview{
            //                 width: 35px;
            //                 border-radius: 50%;
            //                 background-color: ${({ theme }) => theme['primary-color']};
            //             }
            //         }
            //         .rdrDayEndPreview{
            //             // left: 2px;   
            //             // background-color: #EFEFFE;
            //         }
            //         // .rdrEndEdge{
            //         //     width: 100%;
            //         //     height: 100%;
            //         //     border-radius: 50%;
            //         // }
            //         .rdrDayNumber{
            //             border-radius: 50%;
            //             top: 0;
            //             bottom: 0;
            //             left: 0;
            //             span{
            //                 font-size: 14px;
            //                 color: ${({ theme }) => theme['dark-color']};
            //             }
            //         }
            //     }
            // }
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
