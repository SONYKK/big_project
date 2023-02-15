import {render, screen} from "@testing-library/react";
import {Button, ThemeButton} from "./Button";

describe('Button', () => {
  test('with only first param', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
  
  test('with button clear', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear')
  })

})