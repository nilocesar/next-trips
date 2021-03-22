import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('shoud render link and children', () => {
    render(<LinkWrapper href="/my-link">Aniss</LinkWrapper>)

    const children = screen.getByRole('link', { name: /aniss/i })
    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')

    // screen.logTestingPlaygroundURL()
  })
})
