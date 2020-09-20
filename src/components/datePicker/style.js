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
                .rdrDay{
                    width: 36px;
                    height: 36px;
                    .rdrEndEdge{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                    .rdrDayNumber{
                        top: 10px;
                        bottom: 0;
                    }
                }
            }
        }
    }
`;

const ButtonGroup = Styled.div`
    border-top: 1px solid #ddd;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    margin: -10px;
    p{
        margin: 10px
    }
    button {
        margin: 10px;
    }
`;

export { ItemWraper, ButtonGroup };
