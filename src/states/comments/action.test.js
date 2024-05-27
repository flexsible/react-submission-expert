/**
 * skenario test
 *
 * - asyncAddComment thunk
 *  - should dispatch action correctly when fetching success
 *  - should dispatch action and call alert correctly when fetching failed
 */

import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {
  describe, it, expect, beforeEach, afterEach, vi,
} from 'vitest';
import api from '../../utils/api';
import { asyncAddComment, addCommentActionCreator } from './action';

const fakeCommentResponse = {
  id: 'comment-1',
  content: 'Halo!',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncAddComment thunk', () => {
  beforeEach(() => {
    api._addComment = api.addComment;
  });

  afterEach(() => {
    api.addComment = api._addComment;
    delete api._addComment;
  });

  it('should dispatch action correctly when fetching success', async () => {
    const newComment = {
      id: 'comment-1',
      content: 'Ini adalah komentar pertama',
    };
    api.addComment = ({ id, content }) => Promise.resolve({
      ...fakeCommentResponse,
      id,
      content,
    });
    const dispatch = vi.fn();

    await asyncAddComment(newComment)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(dispatch).toHaveBeenCalledWith(addCommentActionCreator({
      ...fakeCommentResponse,
      ...newComment,
    }));
  });

  it('should dispatch action and call alert correctly when fetching failed', async () => {
    api.addComment = () => Promise.reject(fakeErrorResponse);
    const dispatch = vi.fn();
    window.alert = vi.fn();

    await asyncAddComment({})(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
