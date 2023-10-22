import React from 'react';
import ReactDom from 'react-dom';
import { ModalWrap, ModalOverlay } from './Modal.styled';

export default function Modal({ open, children, onClose, card }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <ModalOverlay></ModalOverlay>

      <ModalWrap>
        <div>{card.id}</div>
        <div>{card.make}</div>
        <button type="button" onClick={onClose}>
          Close modal
        </button>
        {children}
      </ModalWrap>
    </>,
    document.getElementById('modal')
  );
}
