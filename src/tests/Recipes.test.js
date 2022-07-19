import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderPath from './renderWithPath';

describe('Teste do Componente Recipes', () => {
    it('Teste se ao encontrar uma bebida faz o redirecionamento para a pagina de Drinks com o id', async () => {
        const { history } = renderPath('/drinks');
  
        const searchBarBtn = screen.getByTestId('search-top-btn');
        userEvent.click(searchBarBtn);
  
        const searchInput = screen.getByTestId('search-input');
        const radioName = screen.getByTestId('name-search-radio');
        const submitBtn = screen.getByTestId('exec-search-btn');
  
        userEvent.type(searchInput, 'Mai Tai');
        userEvent.click(radioName);
        userEvent.click(submitBtn);
  
        await waitFor(() => expect(history.location.pathname).toBe('/drinks/11690'));
    });
  it('Teste se ao encontrar um prato faz o redirecionamento para a pagina de Foods com o id', async () => {
      const { history } = renderPath('/foods');

      const searchIcon = screen.getByTestId('search-top-btn');
      userEvent.click(searchIcon);

      const searchInput = screen.getByTestId('search-input');
      const radioName = screen.getByTestId('name-search-radio');
      const submitBtn = screen.getByTestId('exec-search-btn');

      userEvent.type(searchInput, 'Arrabiata');
      userEvent.click(radioName);
      userEvent.click(submitBtn);

      await waitFor(() => expect(history.location.pathname).toBe('/foods/52771'));
  });

  it('Testando o toggle do botão de categoria da tela de food', async () => {
    renderPath('/foods');

    await waitFor(() => screen.getByRole('button', {name: /breakfast/i }));
    const breakfastCategory = screen.getByRole('button', {name: /breakfast/i });
    userEvent.click(breakfastCategory);

    await waitFor(() => screen.getByRole('heading', {name: /breakfast potatoes/i }));
    const mbuzi = screen.getByRole('heading', {name: /breakfast potatoes/i });
    expect(mbuzi).toBeInTheDocument();

    userEvent.click(breakfastCategory);

    await waitFor(() => screen.getByRole('heading', {name: /corba/i }));
    const corba = screen.getByRole('heading', {name: /corba/i })
    expect(corba).toBeInTheDocument();
  });

  it('Teste se a resposta da api for menor que 1 é exibido um alerta', async () => {
      renderPath('/drinks');
      jest.spyOn(window, 'alert').mockImplementation(() => {});

      const searchBarBtn = screen.getByTestId('search-top-btn');
      userEvent.click(searchBarBtn);

      const searchInput = screen.getByTestId('search-input');
      const ingredientRadio = screen.getByTestId('ingredient-search-radio');
      const submitBtn = screen.getByTestId('exec-search-btn');

      userEvent.type(searchInput, 's');
      userEvent.click(ingredientRadio);
      userEvent.click(submitBtn);

      await waitFor(() => expect(window.alert).toBeCalledWith('Sorry, we haven\'t found any recipes for these filters.'));
  });

  it('Testando o toggle do botão de categoria da tela de drink', async () => {
    renderPath('/drinks');

    await waitFor(() => screen.getByRole('button', { name: /shake/i }));
    const shakeCategory = screen.getByRole('button', { name: /shake/i });
    userEvent.click(shakeCategory);

    await waitFor(() => screen.getByRole('heading', {name: /151 florida bushwacker/i }));
    const bushwacker = screen.getByRole('heading', {name: /151 florida bushwacker/i });
    expect(bushwacker).toBeInTheDocument();

    userEvent.click(shakeCategory);

    await waitFor(() => screen.getByRole('heading', {name: /gg/i }));
    const gg = screen.getByRole('heading', {name: /gg/i })
    expect(gg).toBeInTheDocument();
  });
});