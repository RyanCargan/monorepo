import { describe, expect, it, vi } from 'vitest'

import App from './App'

import { render, screen, userEvent } from '../test-utils'

/**
 * Mock modules
 */
// jest.mock('react-helmet-async', () => ({
// 	Helmet: () => jest.fn(),
// 	HelmetProvider: () => jest.fn(),
// }))
// Helmet module
// const HelmetMock = vi.fn(() => ({
// 	Helmet: () => vi.fn(),
// 	HelmetProvider: () => vi.fn(),
// }))
// vi.stubGlobal('Helmet', HelmetMock.Helmet)
// vi.stubGlobal('HelmetProvider', HelmetMock.HelmetProvider)
// import { Helmet } from 'react-helmet-async'
vi.mock('react-helmet-async', () => {
  const Helmet = vi.fn()
//   Helmet.prototype.Helmet = vi.fn()
  return { Helmet }
})
vi.mock('react-push-notification', () => {
  const Notifications = vi.fn()
//   Notifications.prototype.Notifications = vi.fn()
  return { Notifications }
})

describe('Simple working test', () => {

  it('the title is visible', () => {

    render(<App />)

    // const welcomeText = screen.getByText(/Hello Vite \+ React!/i)
	// const welcomeText = screen.getByText(/TEST/i)
	const welcomeText = screen.getByText(/Welcome/i)

    screen.debug(welcomeText)

    // expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument()
    // expect(screen.getByText(/TEST/i)).toBeInTheDocument()
	expect(screen.getByText(/Welcome/i)).toBeInTheDocument()
  })

//   it('should increment count on click', async () => {

//     render(<App />)

//     userEvent.click(screen.getByRole('button'))

//     expect(await screen.findByText(/count is: 1/i)).toBeInT
//   })

})
