import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ControlPanel } from '../components/ControlPanel';
import { HomeComp } from '../components/HomeComp';
import { changeName } from '../store/profile/actions';
import { profileReducer } from '../store/profile/reducer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { Gists } from '../pages/Gists';

// 1. Написать тесты для (как минимум) одного редьюсера, и одного презентационного компонента.

it("returns state with new username", () => {
    const expected = {
        showName: false,
        name: 'Vasya',
    }
    const received = profileReducer(undefined, changeName('Vasya'));
    expect(received).toEqual(expected);
});

// Хотела исп-ть тест с созданием mockStore, но он в обоих случаях выдает ошибку TypeError: store.getState is not a function. 
// Буду признательна за подсказку, что не так.


describe('Control Panel', () => {
    test('calls updateList when clicked', () => {
        const middleware = [thunk]
        const mockStore = configureMockStore(middleware)
        mockStore.dispatch = jest.fn(mockStore.dispatch)

        render (<Provider store={mockStore}>
                    <ControlPanel/>
                </Provider>);

        const fabBtn = screen.querySelector('#sendBTN');
        
        fireEvent.click(fabBtn)
        expect(updateList()).toHaveBeenCalledTimes(1)
    });
});

describe('Gist page', () => {
    test('it displays a list of gists', async () => {
    const middleware = []
    const mockStore = configureMockStore(middleware)
    mockStore.dispatch = jest.fn(mockStore.dispatch)

      render(<Provider store={mockStore}>
                <Gists/>
            </Provider>);
   
      const gistList = await waitFor(() => screen.getByTestId('gistlist'));
      expect(gistList).toBeInTheDocument();
    });
   });
   


// 2. Написать тест для (как минимум) одного компонента-контейнера
it ('rendering of the Homepage component', () =>{
    const currentView = render(<HomeComp/>);
    expect(currentView).toMatchSnapshot();
})