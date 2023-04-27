import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#FFFFFF',
  rosa: '#E66767',
  rosaclaro: '#FFEBD9',
  preto: '#000000'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.rosaclaro};
    body: ${cores.branco};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
