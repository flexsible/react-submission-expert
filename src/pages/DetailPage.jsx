import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail';
import ThreadItem from '../components/ThreadItem';
import ThreadReplyInput from '../components/ThreadReplyInput';
import { asyncReceiveDetailThread } from '../states/detailThread/action';
import { asyncAddThread } from '../states/threads/action';

function DetailPage() {
  const { id } = useParams();
  const {
    detailThread = null,
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveDetailThread(id));
  }, [id, dispatch]);

  const onReplyThread = (text) => {
    dispatch(asyncAddThread({ text, replyTo: id }));
  };

  if (!detailThread) {
    return null;
  }

  return (
    <section className="detail-page">
      {
        detailThread.parent && (
          <div className="detail-page__parent">
            <h3>Replying to</h3>
            <ThreadItem {...detailThread.parent} authUser={authUser.id} />
          </div>
        )
      }
      <ThreadDetail {...detailThread} authUser={authUser.id} />
      <ThreadReplyInput replyThread={onReplyThread} />
    </section>
  );
}

export default DetailPage;
