import "../styles/modal.css";
import Button from "./Button";

interface ModalProps {
  content: string;
  closeModal: () => void;
  onConfirm: () => void;
}

export default function Modal ({content, closeModal, onConfirm}: ModalProps) {
  return (
    <div className="overlay">
      <dialog open className="modal-container">
        <p>{content}</p>
        <div className="btn-box">
          <Button onClick={closeModal} color="secondary">취소</Button>
          <Button onClick={onConfirm} color="destructive">확인</Button>
        </div>
      </dialog>
    </div>
  )
}