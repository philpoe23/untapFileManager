import Styled from 'styled-components';

const Aside = Styled.aside`
    .btn-create{
        height: 50px;
        font-size: 14px;
        font-weight: 500;
        width: 100%;
        border-radius: 8px;
        box-shadow: 0 3px 5px #FF69A505;
        margin-bottom: 25px;
    }
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
        margin-bottom: 18px;
        .add-label{
            color: ${({ theme }) => theme['light-color']};
        }
    }

    .event-list{
        li{
            &:not(:last-child){
                margin-bottom: 14px;
            }
            a{
                font-size: 14px;
                font-weight: 400;
                display: block;
                color: ${({ theme }) => theme['gray-color']};
            }
        }
    }
    
`;

const CalendarWrapper = Styled.div`
    
    .react-calendar{
        font-family: 'Inter', sans-serif;
        width: 100%;
        border-radius: 10px;
        padding: 24px 35px;
        border: 0 none;
        background-color: #fff;
        box-shadow: 0 5px 20px ${({ theme }) => theme['light-color']}03;
    }
    .react-calendar__navigation{
        margin-bottom: .5rem;
        button{
            &:hover,
            &:focus{
                background-color: #fff !important;
            }
        }
        .react-calendar__navigation__arrow{
            font-size: 20px;
            min-width: auto;
            color: ${({ theme }) => theme['light-color']};
        }
        .react-calendar__navigation__label{
            font-size: 16px;
            font-weight: 500;
            color: ${({ theme }) => theme['dark-color']};
        }
    }
    .react-calendar__month-view__weekdays{
        .react-calendar__month-view__weekdays__weekday{
            abbr{
                font-size: 13px;
                font-weight: 500;
                text-decoration: none;
                color: ${({ theme }) => theme['light-color']};
            }
        }
    }
    .react-calendar__month-view__days{
        .react-calendar__tile{
            max-width: 43px !important;
            padding: 1em 0.5em;
            &:hover{
                background-color: transparent;
                font-weight: 500;
                color: ${({ theme }) => theme['dark-color']};
            }
            &.react-calendar__month-view__days__day--neighboringMonth{
                abbr{
                    color: ${({ theme }) => theme['extra-light-color']};
                }
            }
            abbr{
                font-size: 14px;
                color: ${({ theme }) => theme['gray-color']};
            }
            &.react-calendar__tile--now{
                padding: 0.929em 0.5em;
                background-color: transparent;
                border-radius: 50%;
                border: 1px solid ${({ theme }) => theme['primary-color']};
            }
            &.react-calendar__tile--active{
                border-radius: 50%;
                background-color: ${({ theme }) => theme['primary-color']};
                abbr{
                    color: #fff;
                }
            }
        }
    }
    .calendar-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
        .calendar-header__left{
            display: flex;
            align-items: center;
            position: relative;
            .btn-today{
                font-size: 13px;
                font-weight: 500;
                height: 34px;
                color: ${({ theme }) => theme['gray-color']};
                border-color: ${({ theme }) => theme['border-color-light']};
            }
            .year-select{
                .ant-select-selector{
                    border: 0 none;
                    .ant-select-selection-search{
                        input{
                            height: 35px;
                        }
                    }
                    .ant-select-selection-item{
                        font-size: 16px;
                        font-weight: 500;
                        color: ${({ theme }) => theme['dark-color']};
                    }
                }
                .ant-select-arrow{
                    right: 18px;
                }
            }
            .react-calendar{
                margin-left: 30px;
                padding: 0;
                border: none;
                .react-calendar__navigation{
                    align-items: center;
                    margin: 0;
                    border: none;
                    .react-calendar__navigation__label{
                        padding: 0 20px;
                    }
                    .react-calendar__navigation__arrow {
                        border: 1px solid ${({ theme }) => theme['border-color-light']};
                        border-radius: 5px;
                        width: 34px;
                        height: 34px;
                        svg,
                        img{
                            width: 14px;
                        }
                    }
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
                        /* display: none !important; */
                    }
                }
            }
            .calender-head__navigation{
                display: flex;
                align-items: center;
                margin-left: 30px;
                .btn-navigate{
                    width: 34px;
                    height: 34px;
                    padding: 0;
                    i,
                    svg{
                        color: ${({ theme }) => theme['light-color']};
                    }
                }
                .date-label{
                    display: inline-block;
                    margin: 0 20px;
                    font-size: 16px;
                    font-weight: 500;
                    color: ${({ theme }) => theme['dark-color']};
                }
            }
        }
        .calendar-header__right{
            display: flex;
            svg{
                width: 14px;
            }
            ul{
                li{
                    display: inline-block;
                    &:first-child{
                        border-left: 1px solid ${({ theme }) => theme['border-color-light']};
                    }
                    &:not(:first-child){
                        a{
                            border-top-left-radius: 0px
                            border-bottom-left-radius: 0px
                        }
                    }
                    &:not(:last-child){
                        a{
                            border-top-right-radius: 0px
                            border-bottom-right-radius: 0px
                        }
                    }
                    a{
                        font-size: 13px;
                        font-weight: 500;
                        color: ${({ theme }) => theme['light-color']};
                        border: 1px solid ${({ theme }) => theme['border-color-light']};
                        border-left: 0px;
                        display: block;
                        border-radius: 4px;
                        padding: 6px 13.24px;
                        &.active{
                            color: #fff;
                            border-color: ${({ theme }) => theme['primary-color']};
                            background-color: ${({ theme }) => theme['primary-color']};
                        }
                    }
                }
            }
            .schedule-list{
                margin-left: 20px;
                display: flex;
                align-items: center;
                color: ${({ theme }) => theme['light-color']};
                svg,
                img,
                i{
                    margin-right: 6px;
                    color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
    }

    .table-event{
        border: 1px solid ${({ theme }) => theme['border-color-light']};
        tr{
            th,
            td{
                padding: 16px 0;
                border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
                &:first-child{
                    min-width: 75px;
                    padding: 16px 18px 16px 18px;
                    border-right: 1px solid ${({ theme }) => theme['border-color-light']};
                }
            }
        }
        thead{
            th{
                padding: 0 22px;
                background-color: ${({ theme }) => theme['bg-color-light']};
                p{
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 0;
                }
            }
        }
        tbody{
            td{
                padding: 0 10px;
                font-size: 12px;
                color: ${({ theme }) => theme['light-color']};
                .currentTime{
                    width: calc(100% + 20px);
                    height: 1px;
                    display: block;
                    position: relative;
                    left: -10px;
                    z-index: 222;
                    &:after{
                        position: absolute;
                        left: 0;
                        top: -6px;
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        content: '';
                        background-color: ${({ theme }) => theme['secondary-color']};
                    }
                }
                .day-event-item{
                    width: 100%;
                    display: block;
                    border-radius: 3px 6px 6px 3px;
                    padding: 6px 12px;
                    margin: 2px 0;
                    position: relative;
                    &:after{
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 2px;
                        height: 100%;
                        border-radius: 6px 0 0 6px;
                        content: '';
                    }
                    &.primary{
                        background-color: #EFEFFE;
                        color: ${({ theme }) => theme['primary-color']};
                        &:hover{
                            color: ${({ theme }) => theme['primary-color']};
                        }
                        &:after{
                            background-color: ${({ theme }) => theme['primary-color']};
                        }
                    }
                    &.secondary{
                        background-color: #FFF0F6;
                        color: ${({ theme }) => theme['secondary-color']};
                        &:hover{
                            color: ${({ theme }) => theme['secondary-color']};
                        }
                        &:after{
                            background-color: ${({ theme }) => theme['secondary-color']};
                        }
                    }
                    &.success{
                        background-color: #E8FAF4;
                        color: ${({ theme }) => theme['success-color']};
                        &:after{
                            background-color: ${({ theme }) => theme['success-color']};
                        }
                    }
                    &.warning{
                        background-color: #FFF3E6;
                        color: ${({ theme }) => theme['warning-color']};
                        &:after{
                            background-color: ${({ theme }) => theme['warning-color']};
                        }
                    }
                    &.info{
                        background-color: ${({ theme }) => theme['info-color']}10;
                        color: ${({ theme }) => theme['info-color']};
                        &:after{
                            background-color: ${({ theme }) => theme['info-color']};
                        }
                    }
                    .event-title{
                        display: block;
                        font-size: 13px;
                        font-weight: 500;
                        margin-bottom: 4px;
                    }
                }
            }
        }
    }

    .event-week{
        tr{
            th,
            td{
                border-right: 1px solid ${({ theme }) => theme['border-color-light']};
            }
        }
        thead{
            tr{
                th{
                    text-align: center;
                    .week-dayName{
                        font-size: 13px;
                        font-weight: 400;
                        margin-bottom: 2px;
                        color: ${({ theme }) => theme['light-color']};
                    }
                    .week-date{
                        display: inline-block;
                        line-height: 1.45;
                        border-radius: 9px;
                        font-size: 13px;
                        &.primary{
                            padding: 0 10px;
                        }
                    }
                }
            }
        }
        tbody{
            .ant-dropdown-trigger{
                display: inline-block;
            }
        }
    }

    .schedule-event{
        tr{
            &:hover{
                box-shadow: 0 15px 40px ${({ theme }) => theme['light-color']}15;
                td{
                    border-color: #fff;
                }
            }
            td{
                padding: 10px 20px !important;
                vertical-align: top;
                font-size: 14px;
                &:first-child{
                    border-right: 0 none;
                }
                .ant-row{
                    &:not(:last-child){
                        margin-bottom: 10px;
                    }
                }
                .schedule-date{
                    font-weight: 500;
                    color: ${({ theme }) => theme['dark-color']};
                }
                .event-title{
                    font-weight: 500;
                    color: ${({ theme }) => theme['dark-color']};
                }
                .schedule-time{
                    font-size: 13px;
                    color: ${({ theme }) => theme['light-color']};
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
                padding: 5px 12px;
                z-index: 1;
                border-radius: 4px;
                font-size: 13px;
                &:hover{
                    color: #fff;
                }
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

const BlockViewCalendarWrapper = Styled.div`
    .ant-picker-calendar{
        border: 1px solid ${({ theme }) => theme['border-color-light']};
        .ant-picker-body{
            padding: 0 !important;
        }
        .ant-picker-calendar-date {
            padding-top: 10px;
            margin: 0 !important;
            border-top: 0 none !important;
        }
        .ant-picker-cell{
            &:hover{
                .ant-picker-calendar-date{
                    background-color: transparent !important;
                }
            }
            &.ant-picker-cell-today{
                .ant-picker-calendar-date-today{
                    background-color: #EFEFFE !important;
                    position: relative;
                    &:after{
                        position: absolute;
                        left: 0;
                        top: 0;
                        height: 2px;
                        width: 100%;
                        content: '';
                        background-color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
            &.ant-picker-cell-selected{
                .ant-picker-calendar-date-today{
                    background-color: transparent;
                }
            }
            &.ant-picker-cell-in-view{
                .ant-picker-calendar-date{
                    color: ${({ theme }) => theme['gray-color']};
                }
            }
            .ant-picker-calendar-date{
                color: ${({ theme }) => theme['extra-light-color']};
            }
            .ant-picker-calendar-date-value{
                margin-bottom: 10px;
            }
        }
        table{
            thead{
                tr{
                    th{
                        padding: 16px 20px !important;
                        background-color: ${({ theme }) => theme['bg-color-light']} !important;
                        color: ${({ theme }) => theme['gray-color']};;
                    }
                }
            }
            tr{
                &:last-child{
                    td{
                        border-bottom: 0 none;
                    }
                }
                th,
                td{
                    border-right: 1px solid ${({ theme }) => theme['border-color-light']};
                    border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
                }
            }
        }
    }
`;

const AddEventWrap = Styled.div`
    label{
        margin-bottom: 0 !important;
    }
    .ant-row{
        flex-flow: row !important;
        align-items: center;
    }
    .date-time-picker {
        .ant-picker{
            min-width: auto;
            width: 100%;
            &:not(:last-child){
                margin-right: 10px;
            }
        }
    }
`;

export { CalendarWrapper, Aside, UpdatePopup, BlockViewCalendarWrapper, AddEventWrap };
