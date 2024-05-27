/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import {
  describe, it, expect, vi,
} from 'vitest';
import {
  cleanup, render, screen, act,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    await act(async () => render(<LoginInput login={() => {}} />));
    const emailInput = await screen.getByPlaceholderText('Email');

    await act(async () => userEvent.type(emailInput, 'admin@gmail.com'));

    expect(emailInput).toHaveValue('admin@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    await act(async () => render(<LoginInput login={() => {}} />));
    const passwordInput = await screen.getByPlaceholderText('Password');

    await act(async () => userEvent.type(passwordInput, 'admin123'));

    expect(passwordInput).toHaveValue('admin123');
  });

  it('should call login function when login button is clicked', async () => {
    const mockLogin = vi.fn();
    await act(async () => render(<LoginInput login={mockLogin} />));
    const emailInput = await screen.getByPlaceholderText('Email');
    await act(async () => userEvent.type(emailInput, 'admin@gmail.com'));
    const passwordInput = await screen.getByPlaceholderText('Password');
    await act(async () => userEvent.type(passwordInput, 'admin123'));
    const loginButton = await screen.getByText('Login');

    await act(async () => userEvent.click(loginButton));

    expect(mockLogin).toBeCalledWith({
      email: 'admin@gmail.com',
      password: 'admin123',
    });
  });
});
