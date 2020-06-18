import Styled from 'styled-components';

const Div = Styled.div`
    header{
        box-shadow: 0px -15px 25px #888;
        z-index: 9999;
        button{
            padding: 0px 15px 0px 0px;
        }
    }
    .ant-layout-sider-children {
        /* height: auto; */
    }
    .navbar-brand{
        button{
            line-height: 0;
            color: ${({ theme }) => theme['extra-light-color']};
        }
    }

    /* Sidebar styles */
    .ant-layout-sider{
        padding-left: 15px;
        padding-right: 15px;
        .ant-layout-sider-children{
            padding-bottom: 50px;
            >.sidebar-nav-title{
                margin-top: 8px;
            }
            .ant-menu{
                border-right: 0 none;

                .ant-menu-submenu, .ant-menu-item{
                    .feather{
                        font-size: 16px;
                        color: ${({ theme }) => theme['extra-light-color']};
                        margin-top: 7px;
                    }
                    span{
                        padding-left: 20px;
                        display: inline-block;
                        color: ${({ theme }) => theme['dark-color']};
                        transition: 0.3s ease;
                    }
                    .ant-menu-submenu-title{
                        padding-left: 15px !important;
                    }
                    .ant-menu-item{
                        padding-left: 48px !important;
                    }
                }
                .ant-menu-item{
                    padding-left: 15px !important;
                    a{
                        display: flex !important;
                        align-items: center;
                        .feather{
                            font-size: 16px;
                            color: ${({ theme }) => theme['extra-light-color']};
                        }
                        span{
                            padding-left: 20px;
                            display: inline-block;
                            color: ${({ theme }) => theme['dark-color']};
                        }
                    }
                }
                .ant-menu-submenu,
                .ant-menu-item{
                    &.ant-menu-item-selected{
                        border-radius: 4px;
                        &:after{
                            content: none;
                        }
                    }
                }
                .sidebar-nav-title{
                    margin-top: 40px;
                    margin-bottom: 24px;
                }
                &.ant-menu-inline-collapsed{
                    .ant-menu-submenu, .ant-menu-item{
                        span{
                            visibility: hidden;
                            opacity: 0;
                        }
                    }
                }
            }
        }
        .sidebar-nav-title{
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            color: #868EAE;
            padding: 0 15px;
        }
        &.ant-layout-sider-collapsed{
            .sidebar-nav-title{
                display: none;
            }
            & + .atbd-main-layout{
                margin-left: 80px;
            }
        }
    }
    @media only screen and (max-width: 991px){
        .ant-layout-sider.ant-layout-sider-collapsed{
            left: -80px !important;
        }

    }

    .atbd-main-layout{
        margin-left: 280px;
        margin-top: 64px;
        transition: 0.3s ease;
        @media only screen and (max-width: 991px){
            margin-left: auto !important;
        }
        /* @media only screen and (max-width: 767px){
            margin-left: 0 !important;
        } */
    }

    // Mobile Actions
    .mobile-action{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        display: inline-flex;
        align-items: center;
        a{
            display: inline-flex;
            color: ${({theme})=>theme['light-color']};
            &.btn-search{
                margin-right: 18px;
            }
        }
    }
`;

const SmallScreenAuthInfo = Styled.div`    
        background: #fff;
        width: 100%;
        position: absolute;
        bottom: ${({ hide }) => (hide ? '-60px' : '-65px')};
        left: 0;
        transition: .5s;
        border-top: 1px solid #eee;
        opacity: ${({ hide }) => (hide ? 0 : 1)}
                    
`;

const SmallScreenSearch = Styled.div`    
        background: #fff;
        width: 100%;
        position: absolute;
        bottom: ${({ hide }) => (hide ? '-60px' : '-65px')};
        left: 0;
        transition: .5s;
        border-top: 1px solid #eee;
        opacity: ${({ hide }) => (hide ? 0 : 1)}
                    
`;

export { Div, SmallScreenAuthInfo, SmallScreenSearch };
