import Styled from 'styled-components';

const ProjectHeader = Styled.div`
    .ant-page-header-heading-sub-title{
        margin-right: 0;
        position: relative;
        padding-left: 15px;
        font-weight: 500;
        &:before{
            position: absolute;
            content: '';
            width: 1px;
            height: 24px;
            background: ${({theme})=>theme['dash-color']};
            left: 0;
            top:0;
        }
    }
`;

const ProjectSorting = Styled.div`
    margin-bottom: 25px;

    .project-sort-bar{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0 -10px;
        .project-sort-nav,
        .project-sort-search,
        .project-sort-group{
            padding: 0 10px;
        }
        .project-sort-group{
            margin-left: auto;
        }
    }
    @media (max-width: 1500px){
        .project-sort-search{
            .ant-select{
                width: 237px !important;
            }
        }
        .project-sort-group .sort-group{
            .ant-select{
                min-width: 180px;
            }
        }
    }
    @media (max-width: 1300px){
        .project-sort-search{
            .ant-select{
                width: 145px !important;
            }
        }
    }
    @media (max-width: 1199px){
        .project-sort-search{
            flex: 0 0 100%;
            order: 0;
            margin-bottom: 15px;
            display: flex;
            justify-content: center;
            .ant-select{
                width: 350px !important;
            }
        }
        .project-sort-nav{
            order: 1;
            margin: 0 auto;
        }
        .project-sort-group{
            order: 2;
        }
    }
    @media (max-width: 991px){
        .project-sort-group{
            margin-left: unset;
            flex: 0 0 100%;
            margin-top: 15px;
            .sort-group{
                justify-content: flex-start;
                .layout-style{
                    margin-left: auto;
                }
            }
        }
    }
    @media (max-width: 575px){
        .project-sort-group{
            .sort-group{
                > span{
                    display: none;
                }
                .ant-select{
                    padding-left: 0;
                }
            }
        }
    }

    nav{
        background: #fff;
        border-radius: 5px;
        padding: 9px 20px;
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            li{
                padding-right: 12px;
                margin-right: 11px;
                border-right: 1px solid ${({theme})=>theme['border-color-light']};
                &:last-child{
                    padding-right: 0;
                    margin-right: 0;
                    border-right: 0 none;
                }
                a{
                    color: ${({theme})=>theme['gray-solid']};
                    font-weight: 500;
                }
                &.active{
                    a{
                        color: ${({theme})=>theme['primary-color']};
                    }
                }
            }
        }
    }
    .ant-select-selection-search-input{
        border: 0 none;
        border-radius: 23px;
        input{
            height: 40px !important;
            border-radius: 23px;
        }
    }
    .sort-group{
        color: ${({theme})=>theme['gray-solid']};
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .ant-select{
            padding-left: 10px;
            margin-right: 15px;
            min-width: 260px;
            .ant-select-selector{
                border: 0 none;
                .ant-select-selection-item{
                    color: ${({theme})=>theme['gray-solid']};
                }
            }
        }
        .layout-style{
            display: flex;
            align-items: center;
            a{
                display: flex;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                align-items: center;
                justify-content: center;
                color: ${({theme})=>theme['gray-solid']};
                &:hover{
                    color: ${({theme})=>theme['primary-color']};
                    background: #fff;
                }
            }
        }
    }
    @media (max-width: 400px){
        .sort-group .ant-select{
            min-width: 200px;
        }
        .project-sort-search{
            .ant-select-auto-complete{
                width: 100% !important;
            }
        }
        .project-sort-nav{
            nav ul{
                flex-wrap: wrap;
                justify-content: flex-start;
            }
        }
    }
`;

const ProjectCard = Styled.div`
    .project-title{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        h1{
            font-size: 16px;
            display: flex;
            align-items: center;
            a{
                color: ${({theme})=>theme['dark-color']};
                margin-right: 11px;
            }
        }
        .ant-dropdown-trigger{
            color: ${({theme})=>theme['extra-light-color']};
        }
    }
    .project-desc{
        margin: 7px 0 20px 0;
    }
    .project-timing{
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        div{
            margin-right: 30px;
            &:last-child{
                margin-right: 0;
            }
            span, strong{
                display: block;
            }
            span{
                color: ${({theme})=>theme['gray-solid']};
            }
            strong{
                font-weight: 500;
            }
        }
    }
    .project-progress{
        p{
            margin: 0;
            color: ${({theme})=>theme['gray-solid']};
            font-size: 12px;
        }
    }
    .project-assignees{
        border-top: 1px solid ${({theme})=>theme['border-color-light']};
        margin-top: 17px;
        padding-top: 16px;
        p{
            font-size: 13px;
            color: ${({theme})=>theme['gray-solid']}
        }
        ul{
            margin: -3px;
            padding: 0;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            li{
                list-style: none;
                padding: 3px;
                img{
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }
        }
    }
`;

const ProjectPagination = Styled.div`
    .ant-pagination{
        display: flex;
        justify-content: flex-end;
    }
`;

const ProjectListTitle = Styled.div`
    h1{
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 5px;
    }
    p{
        margin: 0;
        font-size: 12px;
        color: ${({theme})=>theme['gray-solid']};
    }
`;

const ProjectListAssignees = Styled.div`
    ul{
        margin: -3px;
        padding: 0;
        display: flex;
        align-items: center;
        li{
            list-style: none;
            padding: 3px;
            img{
                width: 35px;
                height: 35px;
                border-radius: 50%;
                object-fit: cover;
            }
        }
    }
`;

const ProjectList = Styled.div`
    
    .project-list-progress{
        p{
            margin: 0;
            font-size: 12px;
            color: ${({theme})=>theme['gray-solid']};
        }
    }
    .date-started,
    .date-finished{
        font-weight: 500;
    }
`;

const ProjectDetailsWrapper = Styled.div`
    .project-header{
        display: flex;
        align-items: center;
        h1{
            margin-right: 20px;
            margin-bottom: 0;
            font-size: 20px;
        }
        button{
            margin-right: 10px;
        }
    }
    .project-action{
        .project-edit,
        .project-remove{
            border-radius: 6px;
            background: #fff;
            height: 35px;
            padding: 0 15px;
            font-size: 12px;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0 5px;
        }
        .project-edit{
            color: ${({theme})=>theme['primary-color']};
        }
        .project-remove{
            color: ${({theme})=>theme['danger-color']};
        }
    }
    .project-progress{
        border-radius: 10px;
        background: ${({theme})=>theme['success-color']};
        padding: 25px;
        margin-bottom: 25px;
        h3{
            color: #fff;
        }
        .ant-progress-inner{
            background: rgba(255,255,255, 0.2);
        }
        .ant-progress-bg{
            background: #fff;
        }
        .ant-progress-text{
            color: #fff;
            font-weight: 500;
        }
    }
    .state-single{
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        &:last-child{
            margin-bottom: 0;
        }
        > div{
            margin-right: 20px;
        }
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border-radius: 12px;
            background: rgba(95,99,242,0.1);
        }
        h1{
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 3px;
        }
        p{
            color: ${({theme})=>theme['gray-solid']};
            margin: 0;
        }
        .color-primary{
            a{
                background: rgba(95,99,242,0.1);
                svg{
                    color: ${({theme})=>theme['primary-color']};
                }
            }
        }
        .color-secondary{
            a{
                background: rgba(255,105,165,0.1);
                svg{
                    color: ${({theme})=>theme['secondary-color']};
                }
            }
        }
        .color-success{
            a{
                background: rgba(32,201,151,0.1);
                svg{
                    color: ${({theme})=>theme['success-color']};
                }
            }
        }
        .color-warning{
            a{
                background: rgba(250,139,12,0.1);
                svg{
                    color: ${({theme})=>theme['warning-color']};
                }
            }
        }
    }
    .about-content{
        p{
            font-size: 15px;
            line-height: 25px;
            color: ${({theme})=>theme['gray-color']};
        }
    }
    .about-project{
        margin: 50px -40px 0;
        display: flex;
        align-items: center;
        div{
            margin: 0 40px;
            span{
                color: ${({theme})=>theme['gray-solid']};
                font-size: 13px;
                display: block;
                margin-bottom: 3px;
            }
            p{
                font-weight: 600;
            }
        }
    }
    .project-users{
        .porject-user-single{
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            &:last-child{
                margin-bottom: 0;
            }
            & > div{
                margin-right: 15px;
            }
            div{
                img{
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    object-fit: cover;
                    display: block;
                }
                h1{
                    font-size: 14px;
                    font-weight: 600;
                    margin-bottom: 2px;
                }
                p{
                    color: ${({theme})=>theme['gray-solid']};
                    margin: 0;
                }
            }
        }
    }
`;

const TaskLists = Styled.div`
    nav{
        a{
            font-size: 14px;
            font-weight: 500;
            color: ${({theme})=>theme['gray-solid']};
            position: relative;
            &:before{
                position: absolute;
                content: '';
                width: 100%;
                left: 0;
                bottom: -22px;
                height: 1px;

            }
            &.active{
                color: ${({theme})=>theme['primary-color']};
                &:before{
                    background: ${({theme})=>theme['primary-color']};
                }
            }
        }
    }
`;

const TasklistAction = Styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 -10px;
    span, img, div{
        display: block;
        margin: 0 10px;
        line-height: normal;
    }
    span, a{
        color: ${({theme})=>theme['gray-solid']};
    }
`;

export {
    ProjectHeader,
    ProjectSorting,
    ProjectCard,
    ProjectPagination,
    ProjectListTitle,
    ProjectListAssignees,
    ProjectList,
    ProjectDetailsWrapper,
    TaskLists,
    TasklistAction
};