import React from 'react';
import { useDispatch } from 'react-redux';

const Modal = ({
  visibility,
  closeModal,
  title,
  content,
  buttonLabel,
  buttonClass,
  buttonAction
}) => {
  const dispatch = useDispatch();

  return (
    <div className={`modal ${visibility ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
        </header>
        <section className="modal-card-body">{content}</section>
        <footer
          className="modal-card-foot"
          style={{ justifyContent: 'flex-end' }}
        >
          <button
            className={`button ${buttonClass}`}
            onClick={() => {
              dispatch(buttonAction);
              closeModal();
            }}
          >
            {buttonLabel}
          </button>
          <button className="button" onClick={closeModal}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
