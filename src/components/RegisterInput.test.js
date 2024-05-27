/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import {
  describe, it, expect, vi,
} from 'vitest';
import {
  render, screen, act, cleanup,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });
  it('should handle name typing correctly', async () => {
    await act(async () => render(<RegisterInput register={() => {}} />));
    const nameInput = await screen.getByPlaceholderText('Name');

    await act(async () => userEvent.type(nameInput, 'nametest'));

    expect(nameInput).toHaveValue('nametest');
  });

  it('should handle email typing correctly', async () => {
    await act(async () => render(<RegisterInput register={() => {}} />));
    const emailInput = await screen.getByPlaceholderText('Email');

    await act(async () => userEvent.type(emailInput, 'usertest@example.com'));

    expect(emailInput).toHaveValue('usertest@example.com');
  });

  it('should handle password typing correctly', async () => {
    await act(async () => render(<RegisterInput register={() => {}} />));
    const passwordInput = await screen.getByPlaceholderText('Password');

    await act(async () => userEvent.type(passwordInput, 'passwordtest'));

    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    const mockRegister = vi.fn();
    await act(async () => render(<RegisterInput register={mockRegister} />));
    const nameInput = await screen.getByPlaceholderText('Name');
    await act(async () => userEvent.type(nameInput, 'nametest'));
    const emailInput = await screen.getByPlaceholderText('Email');
    await act(async () => userEvent.type(emailInput, 'usertest@example.com'));
    const passwordInput = await screen.getByPlaceholderText('Password');
    await act(async () => userEvent.type(passwordInput, 'passwordtest'));
    const registerButton = await screen.getByText(/Register/);

    await act(async () => userEvent.click(registerButton));

    expect(mockRegister).toBeCalledWith({
      name: 'nametest',
      email: 'usertest@example.com',
      password: 'passwordtest',
    });
  });
});
