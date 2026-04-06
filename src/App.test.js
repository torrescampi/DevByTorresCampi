import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renderiza las secciones clave del portfolio', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', {
      name: /creo paginas y aplicaciones que convierten ideas en resultados/i
    })
  ).toBeInTheDocument();

  const nav = screen.getByRole('navigation');
  expect(within(nav).getByRole('link', { name: /^proyectos$/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /trabajo reciente/i })).toBeInTheDocument();
});
