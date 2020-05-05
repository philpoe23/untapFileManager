import Styled from 'styled-components';

const LayOutWraper = Styled.div`
    header{
        box-shadow: 0px -15px 25px #888;
        z-index: 1;
        button{
            padding: 0px 15px 0px 0px;
        }
    }
    .ant-layout-sider-children {
        height: auto;
    }
    .navbar-brand{
        button{
            line-height: 0;
            color: ${({theme})=>theme["extra-light-color"]};
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
                .ant-menu-submenu{
                    .ant-menu-submenu-title{
                        padding-left: 15px !important;
                        > span{
                            display: flex;
                            align-items: center;
                            .feather{
                                font-size: 16px;
                                color: ${({theme}) =>theme["extra-light-color"] };
                            }
                            span{
                                padding-left: 20px;
                                display: inline-block;
                                color: ${({theme})=>theme["dark-color"]};
                            }
                        }
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
                            color: ${({theme}) =>theme["extra-light-color"] };
                        }
                        span{
                            padding-left: 20px;
                            display: inline-block;
                            color: ${({theme})=>theme["dark-color"]};
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
            }
        }
        .sidebar-nav-title{
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            color: #868EAE;
            padding: 0 15px;
        }
    }
`;

export { LayOutWraper };
