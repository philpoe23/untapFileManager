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
                &:hover,
                &.rdrStaticRangeSelected{
                    span{
                        font-weight: 400;
                        color: ${({ theme }) => theme['primary-color']};
                        background-color: #EFEFFE;
                    }
                }
                .rdrStaticRangeLabel{
                    padding: 9px 10px;
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
                    font-weight: 500;
                    color: ${({ theme }) => theme['dark-color']};
                }
            }
            .rdrDays{
                .rdrSelected, 
                .rdrInRange{
                    
                    background-color: #EFEFFE;
                }
                .rdrStartEdge{
                    right: 0;
                    left: 0;
                }
                .rdrEndEdge{
                    right: 0;
                    left: 0;
                }
                .rdrDayStartOfMonth .rdrDayInPreview, .rdrDayStartOfMonth .rdrDayEndPreview, .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{
                    border-radius: 0px;
                }
                
                .rdrDayEndOfWeek .rdrDayStartPreview,
                .rdrDayEndOfWeek .rdrDayInPreview,
                .rdrDayEndOfMonth .rdrDayStartPreview,
                .rdrDayEndOfMonth .rdrDayInPreview,
                .rdrDayEndOfMonth .rdrInRange, 
                .rdrDayEndOfWeek .rdrInRange, 
                .rdrDayEndOfWeek .rdrStartEdge
                .rdrDayStartOfMonth .rdrInRange, 
                .rdrDayStartOfWeek .rdrInRange{
                    border-radius: 0;
                }

                .rdrDayEndOfWeek .rdrDayStartPreview.rdrDayEndPreview,
                .rdrDayStartOfWeek .rdrDayStartPreview.rdrDayEndPreview,
                .rdrDayEndOfMonth .rdrDayStartPreview.rdrDayEndPreview,
                .rdrDayStartOfMonth .rdrDayStartPreview.rdrDayEndPreview{
                    border-radius: 1.042em;
                    color: #fff !important;
                }
                
                .rdrDayEndPreview,
                .rdrDayStartPreview,
                .rdrDayInPreview{
                    border: 0 none;
                    background-color: #EFEFFE;
                    color: ${({ theme }) => theme['dark-color']} !importtant;
                    top: 0;
                    bottom: 0;
                }
                
                .rdrStartEdge, 
                .rdrEndEdge,
                .rdrDayStartPreview,
                .rdrDayEndPreview{
                    background-color: ${({ theme }) => theme['primary-color']};
                }

                .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,
                .rdrDay:not(.rdrDayPassive) .rdrDayInPreview ~ .rdrDayNumber span, 
                .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span{
                    color: ${({ theme }) => theme['dark-color']} !important;
                }
                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrInRange ~ .rdrDayNumber span,
                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrDayInPreview ~ .rdrDayNumber span, 
                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrSelected ~ .rdrDayNumber span{
                    color: #fff !important;
                }
                .rdrDay:not(.rdrDayPassive) .rdrDayEndPreview ~ .rdrDayNumber span,
                .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, 
                .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span{
                    color: #fff;
                }
                .rdrDay{
                    margin-bottom: 3px;
                    .rdrSelected, 
                    .rdrInRange, 
                    .rdrStartEdge, 
                    .rdrEndEdge{
                        top: 0;
                        bottom: 0;

                    }
                    .rdrDayNumber{
                        z-index: 10;
                    }
                    &.rdrDayToday{
                        background-color: ${({ theme }) => theme['primary-color']};
                        color: #fff;
                        border-radius: 50%;
                        .rdrDayNumber{
                            span{
                                color: #fff;
                                &:after{
                                    display: none;
                                }
                            }
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
    margin: -4px -4px -15px;
    p{
        font-size: 13px;
        margin: 0 20px 0 0;
        font-weight: 500;
        color: ${({ theme }) => theme['gray-color']};
    }
    button {
        font-size: 12px;
        margin: 4px;
        height: 32px;
        padding: 0px 13.26px;
    }
`;

export { ItemWraper, ButtonGroup };
