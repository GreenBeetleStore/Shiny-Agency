import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'

const StyledGlobalStyle = createGlobalStyle`
      * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
      }

      body {
            background-color: ${({ isDarkMode }) =>
               isDarkMode ? '#2F2E41' : 'white'};
            margin: 0;
      }
`

function GlobalStyle() {
   const { theme } = useTheme()
   
   return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
