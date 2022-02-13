import { render, screen } from '@testing-library/react'
import Home from './index'

describe('Home', () => {
  it('matches snapshot', () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })

  it('renders app name with version', () => {
    render(<Home />)

    const appNameText = screen.getByText(/at version/i)

    expect(appNameText).toBeInTheDocument()
  })
})
