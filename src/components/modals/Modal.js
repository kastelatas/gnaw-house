import React from 'react';
import ModalReact from 'react-modal';
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../redux/actions/modals";
import SVG from "react-inlinesvg";

function Modal({children, title}) {
  const dispatch = useDispatch()
  const {modals} = useSelector(state => state)


  function afterOpenModal() {
  }

  function closeModalhandle() {
    dispatch(closeModal())
  }

  return (
    <ModalReact
      isOpen={modals.modalOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModalhandle}
      className="Modal"
      overlayClassName="Overlay"
      contentLabel="Modal"
    >
      <div className="modal-header">
        <div className="title"> {title}</div>
        <div className="exit" onClick={closeModalhandle}>
        <SVG src={'/icons/close-modal.svg'}/>
        </div>
      </div>
      {children}
    </ModalReact>
  );
}


export default Modal;