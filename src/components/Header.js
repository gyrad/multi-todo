import React, { useState } from 'react';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../actions';

const Header = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists);
  const [modalVisibility, setModalVisibility] = useState(false);

  const renderDeleteAllModal = (
    <Modal
      visibility={modalVisibility}
      closeModal={() => setModalVisibility(false)}
      title="Delete All Lists"
      content="Are you sure you want to delete all lists? This action is irreversible."
      buttonLabel="Delete All Lists"
      buttonClass="is-danger"
      buttonAction={{ type: 'DELETE_ALL_LISTS' }}
    />
  );

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <div className="level-item">
                <h1 className="title">Multi Todo</h1>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <button
                  className="button is-success"
                  onClick={() => dispatch(addList())}
                >
                  <span className="icon">
                    <i className="fas fa-plus" />
                  </span>
                  <span>Add New List</span>
                </button>
                &nbsp;&nbsp;
                <button
                  className="button is-danger"
                  onClick={() => setModalVisibility(true)}
                  disabled={lists.length === 0 ? true : false}
                >
                  <span className="icon">
                    <i className="fas fa-trash" />
                  </span>
                  <span>Delete All Lists</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderDeleteAllModal}
    </>
  );
};

export default Header;
