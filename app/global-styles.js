import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
  }

  .listWrapper {
    flex-basis: 55%;
    max-width: 55%;
    padding: 42px 36px;

    @media screen and (max-width:1000px){
      flex-basis: 100%;
      max-width: 100%;
      padding: 42px 10px;      
    }
  }

  .modalWrapper {
    flex-basis: 45%;
    max-width: 45%;

    @media screen and (max-width:1000px){
      flex-basis: 100%;
      max-width: 100%;
      padding: 0;      
    }
  }

  .table {
    color: #6A6A6A;
    @media screen and (max-width:1350px){
      font-size: 12px;
    }

    &__flexWrap {
      display: flex; 
      justify-content: space-between;
      align-items: center;
      padding: 16px 50px;

      @media screen and (max-width:1000px){
        padding: 16px 10px;        
      }
    }

    thead {
      height: 41px;
      border-top: 1px solid #F2F2F2;
      border-bottom: 1px solid #F2F2F2;
    }
    
    &__title {
      margin: 0;
    }
  }

  .table__row {
    height: 44px;

    &--body:hover,
    & th:hover {
      background: #F2F2F2;
      cursor:pointer;
    }

    th {

      span {
        position :relative;

        &:after {
          content: '';
          position: absolute;
          top: 50%;
          right: 0px;
          transform: translateX(110%)translateY(-20%);
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid #a9a9a9;
          /* background: #F2F2F2; */
        }
      }
    }

    th,
    td {
      padding: 0 6px;
    }

    td:first-child,
    th:first-child {
      padding-left: 50px;
      @media screen and (max-width:1000px){
        padding-left: 10px;
      }
    }

    td:last-child,
    th:last-child {
      padding-right: 50px;
      @media screen and (max-width:1000px){
        padding-right: 10px;
      }
    }
  }

  .box {
    box-shadow: 0px 2px 4px rgba(0,0,0,.5);
  }

  h1,h2,h3,h4,h5,h6,th { font-weight: 400; }

  th {
    padding: 4px
  }

  .filterbox {
    display: none;
    position: absolute;
    text-align: left;
    padding: 10px;
    width: max-content;
    right: 0;
    bottom: 0;
    box-shadow: 0px 2px 4px rgba(0,0,0,.05);
    transform: translate(-15%,20%);
    z-index: 998;

    @media screen and (max-width:1360px){
      bottom:unset;
      top:0;
      background: #fff;
      padding: 20px;
      transform: translate(0%,20%);
    }

    &__flexWrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width:1360px){
        flex-direction: column;
        align-items: flex-start;
      }

      &>div {
        display: flex;
        align-items: center;
        margin: 0 5px;
        
        @media screen and (max-width:1360px){
          margin: 10px 0;
        }
      }
      }
    }

    &.active { 
      display: block; 
    }
  }

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 420px;

    @media screen and (max-width:1000px){
      position: fixed;
      background: #0276ff;
      width: 90%;
    }

    .modal__wrapper {
      background: #fff;

      h3 {
        color: #0277FF;
        font-weight: 400;
        font-size: 28px;
        margin: 0;
        padding-bottom: 16px;

        @media screen and (max-width:1000px){
          font-size: 18px;
        }
      }
    }

    .modal__imageWrapper {
      position: relative;
      width: 100%;
      height: 185px;
      overflow: hidden;

      img {
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
    
    table {
      width: 100%;
      table-layout:fixed;
      color: #6A6A6A;

      td {
        padding: 8px 0px;
        vertical-align: top;
      }

      .modal__label {
        font-size: 12px;
        text-transform: uppercase;
      }

      .modal__value {
        padding-top: 4px;
        @media screen and (max-width:1000px){
          font-size: 12px;
        }
      }
    }

    .modal__closeButtonWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px 8px;

      button {
        border: none;
        outline: none;
        background: none;
        width: 34px;
        height: 34px;
        padding: 2px;
      }

      img {
        opacity: .75;
        width: 30px;
        height: 30px;
      }
    }
  }

  .menubutton {
    position: absolute;
    top: 35px;
    right: 35px;
    z-index: 999;

    @media screen and (max-width:1000px){
      position: fixed;
      top: unset;
      right: 35px;
      bottom: 35px;
      box-shadow: 0px 2px 4px rgba(0,0,0,.5);
    }
  }

  .menu{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #154988;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 55%;
    right: -100%;
    z-index: 998;
    opacity: 0;
    box-shadow: -10px -3px 50px rgba(0,0,0,.1);
    transition: right 100ms ease-in-out, opacity 150ms ease-in-out;

    @media screen and (max-width:1000px){
      width: 90%;
    }

    &.active {
      right: 0%;
      opacity: 1;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        text-align: center;

        a {
          color: #fff;
          padding: 16px;
          text-decoration: none;
          font-size: 24px;
          line-height: 1.6;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .menubutton {

    button {
      position: relative;
      padding: 33px 22px;
      background: #fff;
      border: none;
      outline: none;
      width: 90px;
      height: 90px;

      &:hover {
        span {
          transform: translate(-50%,-50%)scale(1.05);
        }
      }

      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 44px;
        height: 3px;
        background: #000;
        transition: all 100ms ease-in-out;

        &:first-child {
          top: 40%;
        }

        &:last-child {
          top: 60%;
        }
      }
    }
  }

  .ib { display: inline-block; }
  button:hover { cursor:pointer;}
`;

export default GlobalStyle;
