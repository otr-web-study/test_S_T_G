import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event';

import { controlsReducer } from '../../futures/controls/controlsSlice';
import CharacterCard from '.';

const data = {
  id: '1',
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  filterField: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  url: 'https://swapi.dev/api/people/1/',
  tags: [
    ['19BBY', 'blue'],
    ['male', 'green'],
  ]
}

const dataWookie = {
  id: '1',
  name: 'Lhuorwo Sorroohraanorworc',
  height: '152',
  mass: '79',
  hair_color: 'rhanoowhwa',
  skin_color: 'wwraahrc',
  eye_color: 'rhanhuwo',
  filterField: 'rhanhuwo',
  birth_year: '19BBY',
  gender: 'scraanwo',
  url: 'acaoaoakc://cohraakah.wawoho/raakah/akwoooakanwo/1/',
  tags: [
    ['19BBY', 'blue'],
    ['scraanwo', 'green'],
  ]
}

function renderWithProviders (
  ui,
  {
    preloadedState = {},
    store = configureStore({reducer: {controls: controlsReducer}, preloadedState}),
    ...renderOptions
  } = {}
) {
  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

const onClick = jest.fn();

describe('Character\'s card component', () => {
  it('Card renders en', () => {
    renderWithProviders(<CharacterCard card={data} />);

    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(screen.getByText(/172/i)).toBeInTheDocument();
    expect(screen.getByText(/77/i)).toBeInTheDocument();
    expect(screen.getByText(/height/i)).toBeInTheDocument();
    expect(screen.getByText(/mass/i)).toBeInTheDocument();
    expect(screen.getByText(/19BBY/i)).toBeInTheDocument();
    expect(screen.getByText(/male/i)).toBeInTheDocument();
  });

  it('Card renders wookiee', () => {
    renderWithProviders(
      <CharacterCard card={dataWookie} />, 
      { preloadedState: { controls: { lang: 'wo', page: 1, filter: 'All' }}}
    );

    expect(screen.getByText(/Lhuorwo Sorroohraanorworc/i)).toBeInTheDocument();
    expect(screen.getByText(/152/i)).toBeInTheDocument();
    expect(screen.getByText(/79/i)).toBeInTheDocument();
    expect(screen.getByText(/acwoahrracao/i)).toBeInTheDocument();
    expect(screen.getByText(/scracc/i)).toBeInTheDocument();
    expect(screen.getByText(/19BBY/i)).toBeInTheDocument();
    expect(screen.getByText(/scraanwo/i)).toBeInTheDocument();
  });

  it('Card renders without tags', () => {
    renderWithProviders(<CharacterCard card={{...data, tags: []}} />);

    expect(screen.queryByText(/19BBY/)).toBeNull();
  });

  it('Dynamic styles works', ()=> {
    renderWithProviders(<CharacterCard card={data} />);

    expect(screen.getByText(/19BBY/i)).toHaveClass('tags__tag_color_blue');
    expect(screen.getByText(/male/i)).toHaveClass('tags__tag_color_green');
  });

  it('onClick works', () => {
    renderWithProviders(<CharacterCard card={data} onClick={onClick}/>);

    userEvent.click(screen.getByText(/Luke Skywalker/i));
    expect(onClick).toHaveBeenCalledWith('1');
  });
})