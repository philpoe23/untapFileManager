import Styled from 'styled-components';

const Div = Styled.div`
    header{
        box-shadow: 0 2px 30px ${({ theme }) => theme['gray-solid']}10;
        z-index: 99999;
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
        .ant-layout-sider-children{
            padding-bottom: 15px;
            >.sidebar-nav-title{
                margin-top: 8px;
            }
            
            .ant-menu{
                overflow-x: hidden;
                border-right: 0 none;
                .ant-menu-submenu, .ant-menu-item{
                    .feather{
                        width: 16px;
                        font-size: 16px;
                        color: ${({ theme }) => theme['extra-light-color']};
                    }
                    span{
                        padding-left: 20px;
                        display: inline-block;
                        color: ${({ theme }) => theme['dark-color']};
                        transition: 0.3s ease;
                    }
                }
                .ant-menu-submenu{
                    .ant-menu-submenu-title{
                        display: flex;
                        align-items: center;
                    }
                }
                .ant-menu-submenu-inline{
                    > .ant-menu-submenu-title{
                        display: flex;
                        align-items: center;
                        padding: 0 15px !important;
                        svg,
                        img{
                            width: 16px;
                            height: 16px;
                        }
                        .ant-menu-submenu-arrow{
                            right: 24px;
                            &:after,
                            &:before{
                                width: 7px;
                                background: #868EAE;
                                height: 1.25px;
                            }
                            &:before{
                                transform: rotate(45deg) translateY(-4px);
                            }
                            &:after{
                                transform: rotate(-45deg) translateY(4px);
                            }
                        }
                    }
                    &.ant-menu-submenu-open{
                        > .ant-menu-submenu-title{
                            .ant-menu-submenu-arrow{
                                &:before{
                                    transform: rotate(45deg) translateX(-4px);
                                }
                                &:after{
                                    transform: rotate(-45deg) translateX(4px);
                                }
                            }
                        }
                    }
                    .ant-menu-item{
                        padding-left: 50px !important;
                        padding-right: 0 !important;
                        transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
                    }
                }
                .ant-menu-item{
                    display: flex;
                    align-items: center;
                    padding: 0 15px !important; 
                    a{
                        display: flex !important;
                        align-items: center;
                        .feather{
                            width: 16px;
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
                    .ant-menu-submenu{
                        text-align: left;
                        .ant-menu-submenu-title{
                            padding: 0 20px;
                        }
                    }
                    .ant-menu-item{
                        padding: 0 20px !important;
                    }
                    .ant-menu-submenu, .ant-menu-item{
                        span{
                            display: none;
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
            padding: 15px 10px 55px !important;
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
            svg{
                width: 20px
                height: 20px;
            }
        }
    }
`;

const SmallScreenAuthInfo = Styled.div`    
        background: #fff;
        width: 100%;
        position: fixed;
        margin-top: ${({ hide }) => (hide ? '0px' : '64px')};
        top: 0;
        left: 0;
        transition: .3s;
        border-top: 1px solid #eee;
        opacity: ${({ hide }) => (hide ? 0 : 1)}
        z-index: ${({ hide }) => (hide ? -1 : 1)}
        box-shadow: 0 2px 30px #9299b810;
                    
`;

const SmallScreenSearch = Styled.div`    
        background: #fff;
        width: 100%;
        height: 40px;
        position: fixed;
        margin-top: ${({ hide }) => (hide ? '0px' : '64px')};
        top: 0;
        left: 0;
        transition: .3s;
        border-top: 1px solid #eee;
        opacity: ${({ hide }) => (hide ? 0 : 1)}
        z-index: ${({ hide }) => (hide ? -1 : 999)}
        box-shadow: 0 2px 30px #9299b810;
                    
`;

export { Div, SmallScreenAuthInfo, SmallScreenSearch };
