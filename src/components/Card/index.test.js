import Card from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Card', () => {
   test("Devrait rendre le titre et l'image", async () => {
      render(
         <ThemeProvider>
            <Card
               title="Harry Potter"
               label="Magicien frontend"
               picture="/myPicture.png"
            />
         </ThemeProvider>
      )
      const cardPicture = screen.getByRole('img')
      const cardTitle = screen.getByText(/Harry/i)
      expect(cardPicture.src).toBe('http://localhost/myPicture.png')
      expect(cardTitle.textContent).toBe(' Harry Potter ')
   })
   test('Devrait ajouter ⭐️ autour du titre', async () => {
      render(
         <ThemeProvider>
            <Card
               title="Harry Potter"
               label="Magicien frontend"
               picture="/myPicture.png"
            />
         </ThemeProvider>
      )
      const cardTitle = screen.getByText(/Harry/i)
      const parentNode = cardTitle.closest('div')
      fireEvent.click(parentNode)
      expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️')
   })
})
