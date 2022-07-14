import React from 'react';
import App from '../App';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';

describe('Testando a tela de Login', () => {
    beforeEach(() => {
        renderWithRouter(<App/>)
    })
    it('Testando se os elementos já estão na página', () => {
        const inputEmail = screen.getByTestId('email-input');
        const inputSenha = screen.getByTestId('password-input');
        const btnSubmit = screen.getByTestId('login-submit-btn');

        expect(inputEmail).toBeInTheDocument();
        expect(inputSenha).toBeInTheDocument();
        expect(btnSubmit).toBeInTheDocument();
    })
})