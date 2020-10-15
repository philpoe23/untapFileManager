import Styled from 'styled-components';

const Div = Styled.div`
    position: relative;
    header{
        box-shadow: 0 2px 30px ${({ theme }) => theme['gray-solid']}10;
        ${({ darkMode }) => (darkMode ? `background: #272B41;` : '')};
        z-index: 999;

        .ant-btn-link{
            ${({ darkMode }) =>
              darkMode ? `background: #272B41;border-color: #272B41;color: #7D808D !important` : ''};
        }

        .head-example{
            ${({ darkMode }) => (darkMode ? `color: #A8AAB3;` : '')};
        }
        .ant-menu-sub.ant-menu-vertical{
            .ant-menu-item{
                a{
                    color: ${({ theme }) => theme['gray-color']};
                }
            }
        }
        .ant-menu.ant-menu-horizontal{
            display: flex;
            align-items: center;
            margin: 0 -16px;
            li.ant-menu-submenu{
                margin: 0 16px;
            }
            .ant-menu-submenu{
                &.ant-menu-submenu-active,
                &.ant-menu-submenu-selected,
                &.ant-menu-submenu-open{
                    .ant-menu-submenu-title{
                        color: ${({ darkMode }) => (darkMode ? `#fff;` : '#5A5F7D')};
                        svg,
                        i{
                            color: ${({ darkMode }) => (darkMode ? `#fff;` : '#5A5F7D')};
                        }
                    }
                }
                .ant-menu-submenu-title{
                    font-size: 14px;
                    font-weight: 500;
                    color: ${({ darkMode }) => (darkMode ? `#ffffff90;` : '#5A5F7D')};
                    svg,
                    i{
                        color: ${({ darkMode }) => (darkMode ? `#ffffff90;` : '#5A5F7D')};
                    }
                    .ant-menu-submenu-arrow{
                        font-family: "FontAwesome";
                        font-style: normal;
                        ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 6px;
                        &:after{
                            color: ${({ darkMode }) => (darkMode ? `#ffffff90;` : '#9299B8')};
                            content: '\f107';
                            background-color: transparent;
                        }
                    }
                }
            }
        }
       

    }
    .header-more{
        .head-example{
            ${({ darkMode }) => (darkMode ? `color: #A8AAB3;` : '')};
        }
    }
    .customizer-trigger{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: ${({ theme }) => (theme.rtl ? '0 10px 10px 0' : '10px 0 0 10px')};
        background-color: #5F63F2;
        position: fixed;
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: all .3s ease;
        z-index: 999;
        box-shadow: 0 10px 15px rgba(#5F63F2,.20);
        &.show{
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 295px;
        }
        svg,
        img{
            width: 20px;
            color: #fff;
            animation: antRotate 3s infinite linear;
        }
    }
    .customizer-wrapper{
        position: fixed;
        top: 0;
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
        width: 350px;
        transform: translateX(${({ theme }) => (theme.rtl ? '-350px' : '350px')});
        height: 100vh;
        overflow-y: auto;
        background-color: #fff;
        box-shadow: 0 0 30px #9299B810;
        z-index: 99999999999;
        transition: all .3s ease;
        @media only screen and (max-width: 479px){
            width: 280px;
            transform: translateX(${({ theme }) => (theme.rtl ? '-280px' : '280px')});
        }
        &.show{
            transform: translateX(0);
        }
    }
    .customizer{
        height: 100%;
        .customizer__head{
            position: relative
            padding: 18px 24px;
            border-bottom: 1px solid #f0f0f0;
            text-align: left;
            .customizer-close{
                position: absolute;
                right: 15px;
                top: 15px;
                svg,
                i{
                    color: #FF4D4F;
                }
            }
            .customizer__title{
                font-weight: 600;
                color: #272B41;
                font-size: 16px;
                margin-bottom: 2px;
            }
        }
        .customizer__body{
            padding: 25px;
        }
        .customizer__single{
            &:not(:last-child){
                margin-bottom: 35px;
            }
            h4{
                font-weight: 600;
                font-size: 16px;
                margin-bottom: 10px;
                color: #272B41;
            }
        }
    }
    .customizer-list{
        margin: -10px;
        .customizer-list__item{
            position: relative;
            display: inline-block;
            min-height: 60px;
            background-size: cover;
            margin: 10px;
            &.top{
                span.fa{
                    top: 35px;
                }
            }
            &:hover{
                span{
                    color: #5F63F2;
                }
            }
            a{
                position: relative;
                display: block;
                &.active{
                    span.fa{
                        display: block;
                    }
                }
                span.fa{
                    display: none;
                    font-size: 16px;
                    margin-top: 0;
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    color: ${({ theme }) => theme['success-color']};
                }
            }
            img{
                width: 100%;
            }
            span{
                display: inline-block;
                margin-top: 15px;
                color: #272B41;
            }
        }
    }
    .striking-logo{
        @media only screen and (max-width: 875px){
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
        }
        @media only screen and (max-width: 767px){
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
        }
        img{
            max-width: 120px;
            width: 100%;
        }
        &.top-menu{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 15px;
        }
    }
    .certain-category-search-wrapper{
        ${({ darkMode, theme }) =>
          darkMode ? `${!theme.rtl ? 'border-right' : 'border-left'}: 1px solid #272B41;` : ''};
        @media only screen and (max-width: 767px){
            padding: 0 15px;
        }
        input{
            ${({ darkMode }) => (darkMode ? `background: #272B41;` : '')};
            ${({ darkMode }) => (darkMode ? `color: #fff;` : '#5A5F7D')};
            @media only screen and (max-width: 875px){
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 5px;
            }
        }
    }
    
    .navbar-brand{
        button{
            padding: ${({ theme }) => (theme.rtl ? '0 15px 0 25px' : '0 25px 0 15px')};
            line-height: 0;
            margin-top: 4px;
            color: ${({ theme }) => theme['extra-light-color']};
            @media only screen and (max-width: 875px){
                padding: ${({ theme }) => (theme.rtl ? '0 10px 0 25px' : '0 25px 0 10px')};
            }
            @media only screen and (max-width: 767px){
                padding: ${({ theme }) => (theme.rtl ? '0 0px 0 15px' : '0 15px 0 0px')};
            }
        }
    }

    /* Sidebar styles */
    .ant-layout-sider{
        box-shadow: 0 0 30px #9299B810;
        @media (max-width: 991px){
            box-shadow: 0 0 10px #00000020;
        }
        &.ant-layout-sider-dark{
            background: ${({ theme }) => theme['dark-color']};
            .ant-layout-sider-children{
                .ant-menu{
                    .ant-menu-submenu-inline{
                        > .ant-menu-submenu-title{
                            padding: 0 30px !important;
                        }
                    }
                    .ant-menu-item{
                        padding: 0 30px !important;
                    }
                }
            }
        }
        
        .ant-layout-sider-children{
            padding-bottom: 15px;
            >.sidebar-nav-title{
                margin-top: 8px;
            }

            .ant-menu{
                overflow-x: hidden;
                ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 0 none;
                .ant-menu-submenu, .ant-menu-item{
                    .feather{
                        width: 16px;
                        font-size: 16px;
                        color: ${({ theme }) => theme['extra-light-color']};
                    }
                    span{
                        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 20px;
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
                            right: auto;
                            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 24px;
                            &:after,
                            &:before{
                                width: 7px;
                                background: #868EAE;
                                height: 1.25px;
                            }
                            &:before{
                                transform: rotate(45deg) ${({ theme }) =>
                                  !theme.rtl ? 'translateY(-3.3px)' : 'translateY(3.3px)'};
                            }
                            &:after{
                                transform: rotate(-45deg) ${({ theme }) =>
                                  theme.rtl ? 'translateY(-3.3px)' : 'translateY(3.3px)'};
                            }
                        }
                    }
                    &.ant-menu-submenu-open{
                        > .ant-menu-submenu-title{
                            .ant-menu-submenu-arrow{
                                transform: translateY(4px);
                                &:before{
                                    transform: rotate(45deg) translateX(-3.3px);
                                }
                                &:after{
                                    transform: rotate(-45deg) translateX(3.3px);
                                }
                            }
                        }
                    }
                    .ant-menu-item{
                        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 50px !important;
                        ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 0 !important;
                        transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
                    }
                }
                .ant-menu-item{
                    display: flex;
                    align-items: center;
                    padding: 0 15px !important;
                    &.ant-menu-item-active{
                        border-radius: 4px;
                        ${({ darkMode }) => (darkMode ? `background-color: rgba(255, 255, 255, .05);` : '')};
                    }
                    a{
                        display: flex !important;
                        align-items: center;
                        .feather{
                            width: 16px;
                            color: ${({ theme }) => theme['extra-light-color']};
                        }
                        span{
                            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 20px;
                            display: inline-block;
                            color: ${({ theme }) => theme['dark-color']};
                        }
                    }
                    &.ant-menu-item-selected{
                        svg,
                        i{
                            color: ${({ theme }) => theme['primary-color']};
                        }
                    }
                }
                .ant-menu-submenu,
                .ant-menu-item{
                    ${({ theme }) => theme.rtl && `padding-right: 5px;`}
                    
                    &.ant-menu-item-selected{
                        border-radius: 4px;
                        &:after{
                            content: none;
                        }
                    }
                    &.ant-menu-submenu-active{
                        border-radius: 4px;
                        ${({ darkMode }) => (darkMode ? `background-color: rgba(255, 255, 255, .05);` : '')};
                    }
                }
                .sidebar-nav-title{
                    margin-top: 40px;
                    margin-bottom: 24px;
                }
                &.ant-menu-inline-collapsed{
                    .ant-menu-submenu{
                        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};                        
                        .ant-menu-submenu-title{
                            padding: 0 20px;
                            justify-content: center;
                        }
                    }
                    .ant-menu-item{
                        padding: 0 20px !important;
                        justify-content: center;
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
            font-weight: 500;
            text-transform: uppercase;
            ${({ darkMode }) => (darkMode ? `color: rgba(255, 255, 255, .38);` : 'color: #9299B8;')};
            padding: 0 ${({ theme }) => (theme.rtl ? '20px' : '15px')};
            display: flex;
        }
        &.ant-layout-sider-collapsed{
            padding: 15px 0px 55px !important;
            .sidebar-nav-title{
                display: none;
            }
            & + .atbd-main-layout{
                ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 80px;
            }
        }
    }
    @media only screen and (max-width: 1150px){
        .ant-layout-sider.ant-layout-sider-collapsed{
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: -80px !important;
        }

    }

    .atbd-main-layout{
    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: ${({ theme }) => (theme.topMenu ? 0 : '280px')};
        margin-top: 64px;
        transition: 0.3s ease;
        @media only screen and (max-width: 1150px){
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: auto !important;
        }
    }

    /* Mobile Actions */
    .mobile-action{
        position: absolute;
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 20px;
        top: 50%;
        transform: translateY(-50%);
        display: inline-flex;
        align-items: center;
        @media only screen and (max-width: 767px){
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
        }
        a{
            display: inline-flex;
            color: ${({ theme }) => theme['light-color']};
            &.btn-search{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 18px;
            }
            svg{
                width: 20px
                height: 20px;
            }
        }
    }
    .admin-footer{
        .admin-footer__copyright{
            display: inline-block;
            width: 100%;
            color: ${({ theme }) => theme['light-color']};
            @media only screen and (max-width: 767px){
                text-align: center;
                margin-bottom: 10px;
            }
        }
        .admin-footer__links{
            text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
            @media only screen and (max-width: 767px){
                text-align: center;
            }
            a{
                color: ${({ theme }) => theme['light-color']};
                &:not(:last-child){
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
                }
                &:hover{
                    color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
    }    
`;

const SmallScreenAuthInfo = Styled.div`
        ${({ darkMode }) => (darkMode ? `background: #272B41;` : 'background: #fff')};
        width: 100%;
        position: fixed;
        margin-top: ${({ hide }) => (hide ? '0px' : '64px')};
        top: 0;
        ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
        transition: .3s;
        opacity: ${({ hide }) => (hide ? 0 : 1)}
        z-index: ${({ hide }) => (hide ? -1 : 1)}
        box-shadow: 0 2px 30px #9299b810;

`;

const SmallScreenSearch = Styled.div`
        ${({ darkMode }) => (darkMode ? `background: #272B41;` : 'background: #fff')};
        width: 100%;
        position: fixed;
        margin-top: ${({ hide }) => (hide ? '0px' : '64px')};
        top: 0;
        ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
        transition: .3s;
        opacity: ${({ hide }) => (hide ? 0 : 1)}
        z-index: ${({ hide }) => (hide ? -1 : 999)}
        box-shadow: 0 2px 30px #9299b810;

`;

const ModeSwitch = Styled.div`
    background: #ddd;
    width: 200px;
    position: fixed;
    ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
    top: 50%;
    margin-top: -100px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 5px;
    button{
        margin-top: 5px;
    }
`;

const TopMenuStyle = Styled.div`
    .strikingDash-top-menu{
        ul{
            li{
                display: inline-block;
                position: relative;
                padding-right: 14px;
                &:not(:last-child){
                    margin-right: 34px;
                }
                &.has-subMenu{
                    >a{
                        position: relative;
                        &:before{
                            position: absolute;
                            right: -14px;
                            top: 50%;
                            transform: translateY(-50%);
                            font-family: "FontAwesome";
                            content: '\f107';
                            line-height: 1;
                            color: ${({ theme }) => theme['light-color']};
                        }
                    }
                }
                &.has-subMenu-left{
                    >a{
                        position: relative;
                        &:before{
                            position: absolute;
                            right: 30px;
                            top: 50%;
                            transform: translateY(-50%);
                            font-family: "FontAwesome";
                            content: '\f105';
                            line-height: 1;
                            color: ${({ theme }) => theme['light-color']};
                        }
                    }
                }
                &:hover{
                    >.subMenu{
                        top: 64px;
                        opacity: 1;
                        visibility: visible;
                    }
                }
                a{
                    display: block;
                    font-weight: 500;
                    ${({ theme }) => (theme.darkMode ? `color: #ffffff60;` : 'color: #5A5F7D')};
                    &.active{
                        ${({ theme }) => (theme.darkMode ? `color: #5F63F2;` : 'color: #fff')};
                    }
                }
                >ul{
                    li{
                        display: block;
                        position: relative;
                        padding-right: 0;
                        margin-right: 0 !important;
                        a{
                            font-weight: 400;
                            padding: 0 30px;
                            line-height: 3;
                            color: #868EAE;
                            transition: .3s;
                            &:hover,
                            &.active{
                                color: ${({ theme }) => theme['primary-color']};
                                background-color: ${({ theme }) => theme['primary-color']}06;
                                padding-left: 40px;
                            }
                        }
                        &:hover{
                            .subMenu{
                                top: 0;
                                left: 250px;
                            }
                        }
                    }
                }
            }
        }
        .subMenu{
            width: 250px;
            background: #fff;
            border-radius: 6px;
            position: absolute;
            left: 0;
            top: 80px;
            padding: 12px 0;
            visibility: hidden;
            opacity: 0;
            transition: 0.3s;
            z-index: 98;
            box-shadow: 0px 15px 40px 0px rgba(82, 63, 105, 0.15);
            .subMenu{
                width: 250px;
                background: #fff;
                position: absolute;
                left: 250px;
                top: 0px;
                padding: 12px 0;
                visibility: hidden;
                opacity: 0;
                transition: 0.3s;
                z-index: 98;
                box-shadow: 0px 15px 40px 0px rgba(82, 63, 105, 0.15);
            }
        }
    }
    // Mega Menu
    .strikingDash-top-menu{
        >ul{
            >li{
                &:hover{
                    .megaMenu-wrapper{
                        opacity: 1;
                        visibility: visible;
                        z-index: 99;
                    }
                }
                &.mega-item{
                    position: static;
                }
                .megaMenu-wrapper{
                    display: flex;
                    position: absolute;
                    left: 0;
                    top: 100%;
                    overflow: hidden;
                    z-index: -1;
                    padding: 16px 0;
                    text-align: left;
                    box-shadow: 0px 15px 40px 0px rgba(82, 63, 105, 0.15);
                    border-radius: 0 0 6px 6px;
                    opacity: 0;
                    visibility: hidden;
                    transition: .4s;
                    background-color: #fff;
                    &.megaMenu-small{
                        width: 500px;
                        >li{
                            flex: 0 0 50%;
                        }
                        ul{
                            li{
                                >a{
                                    padding: 0 45px;
                                    position: relative
                                    &:after{
                                        width: 5px;
                                        height: 5px;
                                        border-radius: 50%;
                                        position: absolute;
                                        left: 30px;
                                        top: 50%;
                                        transform: translateY(-50%);
                                        background-color: #C6D0DC;
                                        content: '';
                                        transition: .3s;
                                    }
                                    &:hover,
                                    &.active{
                                        padding-left: 45px;
                                        color: ${({ theme }) => theme['primary-color']};
                                        &:after{
                                            background-color: ${({ theme }) => theme['primary-color']};;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    &.megaMenu-wide{
                        width: 1000px;
                        padding: 5px 0 18px;
                        >li{
                            position: relative;
                            flex: 0 0 25%;
                            .mega-title{
                                position: relative;
                                font-size: 14px;
                                font-weight: 500;
                                padding-left: 45px;
                                color: ${({ theme }) => theme['dark-color']};
                                &:after{
                                    position: absolute;
                                    height: 5px;
                                    width: 5px;
                                    border-radius: 50%;
                                    left: 30px;
                                    top: 50%;
                                    transform: translateY(-50%);
                                    background-color: #C6D0DC;
                                    content: '';
                                }
                            }
                        }
                    }
                    ul{
                        li{
                            position: relative;
                            &:hover{
                                >a{
                                    padding-left: 45px;
                                }
                                &:after{
                                    opacity: 1;
                                    visibility: visible;
                                }
                            }
                            >a{
                                line-height: 3;
                                color: #868EAE;
                                font-weight: 400;
                                transition: .3s;
                            }
                            
                            &:after{
                                width: 6px;
                                height: 1px;
                                border-radius: 50%;
                                position: absolute;
                                left: 30px;
                                top: 50%;
                                transform: translateY(-50%);
                                background-color: ${({ theme }) => theme['light-color']};
                                content: '';
                                transition: .3s;
                                opacity: 0;
                                visibility: hidden;
                            }
                        }
                    }
                }
            }
        }
    }
`;
export { Div, SmallScreenAuthInfo, SmallScreenSearch, ModeSwitch, TopMenuStyle };
