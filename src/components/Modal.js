import React from 'react';
import { Consumer } from '../context';

function Modal({
  visibility,
  closeModal,
  title,
  content,
  buttonLabel,
  buttonClass,
  buttonAction
}) {
  return (
    <Consumer>
      {({ dispatch }) => (
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
      )}
    </Consumer>
  );
}

export default Modal;
