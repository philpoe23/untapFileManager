import Styled from 'styled-components';

const KanvanBoardWrap = Styled.div`
  h1{
    margin-bottom: 20px;
  }
  .sDash_kanban-board-list{
    display: flex;
    margin: -10px;
    flex-wrap: wrap;
    .sDash_kanban-board-item{
      flex: 0 0 18.6%;
      padding-bottom: 80px;
      border-radius: 5px;
      margin: 10px;
      background-color: ${({ theme }) => theme['bg-color-normal']};
      .sDash_addTask-control{
        .sDash_addTask-from{
          padding: 0 20px;
        }
        .sDash_addTask-input{
          padding: 10px;
          border-radius: 4px;
          background-color: #fff;
          width: 100%;
          height: 38px;
          border: 1px solid ${({ theme }) => theme['border-color-normal']};
          &:focus{
            outline: none;
          }
        }
        .sDash_addTask-action{
          margin-top: 10px;
          display: flex;
          align-items: center;
          .add-column{
            margin-right: 15px;
          }
          a{
            line-height: 1;
          }
          svg,
          i{
            color: ${({ theme }) => theme['gray-color']};
          }
        }
      }
    }
    .btn-addColumn{
      flex: 0 0 18.6%;
    }
    .sDash_kanban-board-item__header{
      padding: 18px 20px 10px 20px;
      position: relative;
      .list-header-target{
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      .list-header-title{
        font-size: 15px;
        font-weight: 500;
        display:  flex;
        justify-content: space-between;
        .btn-more{
          padding: 0 4px;
          color: #868EAE;
          position: relative;
          z-index: 22;
        }
      }
      .title-edit{
        display: none;
      }
    }
    .sDash_kanvan-task{
      padding: 0 20px 0 20px;
    }
    .sDash_kanvan-task__single{
      min-height: 48px;
      padding: 12px 15px;
      background-color: #fff;
      box-shadow: 0 0 5px #9299BB10;
      border-radius: 4px;
      margin-bottom: 10px;
      cursor: pointer;
      &:hover{
        .sDash_kanvan-task__title{
          .btn-edit{
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
  
          }
        }
      }
      .sDash_kanvan-task__title{
        font-size: 15px;
        font-weight: 500;
        margin: 0 5px 0 0;
        display: flex;
        justify-content: space-between;
        a{
          color: ${({ theme }) => theme['gray-color']};
        }
        .btn-edit{
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          svg{
            color: ${({ theme }) => theme['gray-color']}
          }
        }
      }
      .sDash_kanvan-task__edit{
        display: none;
      }
    }
    
    .btn-addTask{
      display: inline-block;
      width: calc(100% - 40px);
      padding: 8px 0;
      text-align: center;
      border-radius: 4px;
      position: relative;
      left: 20px;
      color: ${({ theme }) => theme['gray-color']};
      background-color: ${({ theme }) => theme['border-color-normal']};
      svg,
      i,
      img{
        margin-right: 3px;
      }
    }
    .btn-addColumn{
      margin: 10px;
      &.add-column-on{
        .btn-addColumn-inner{
          .btn-add{
            display: none;
          }
          .btn-addColumn-form{
            display: block;
          }
        }
      }
      .btn-add{
        display: block;
        width: 100%;
        height: fit-content;
        border-radius: 5px;
        padding: 12px 20px;
        background-color: #F4F5F7;
        color: ${({ theme }) => theme['gray-color']};
        svg,
        i,
        img{
          margin-right: 3px;
        }
      }
      .btn-addColumn-inner{
        background-color: #F4F5F7;
        .sDash-add-column-input{
          padding: 10px;
          border-radius: 4px;
          background-color: #fff;
          width: 100%;
          height: 38px;
          border: 1px solid ${({ theme }) => theme['border-color-normal']};
          &:focus{
            outline: none;
          }
        }
      }
      .btn-addColumn-form{
        display: none;
        padding: 15px 20px 15px;
        .sDash_add-column-action{
          margin-top: 10px;
          display: flex;
          align-items: center;
          .add-column{
            margin-right: 15px;
          }
          a{
            line-height: 1;
          }
          svg,
          i{
            color: ${({ theme }) => theme['gray-color']};
          }
        }
      }
    }
  }
`;

export { KanvanBoardWrap };
