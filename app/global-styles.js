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
    min-width: 400px;
    padding: 42px 36px;
  }

  .modalWrapper {
    flex-basis: 45%;
    max-width: 45%;
  }

  .table {
    color: #6A6A6A;

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

    &:hover {
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
    }

    td:last-child,
    th:last-child {
      padding-right: 50px; 
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
    background: lightgray;
    padding: 10px;
    width: 500px;
    right: 0;
    bottom: 0;
    transform: translateY(100%);
    z-index: 999;

    &.active { display: block; }
  }

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 420px;

    .modal__wrapper {
      background: #fff;
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
    }
  }

  .ib { display: inline-block; }
  button:hover { cursor:pointer;}
`;

export default GlobalStyle;
