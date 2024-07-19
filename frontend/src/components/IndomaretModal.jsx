import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert'; // Import sweetalert

function IndomaretModal({ show, handleClose }) {
  const [paymentCode, setPaymentCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (show) {
      setPaymentCode(generatePaymentCode());
    }
  }, [show]);

  const generatePaymentCode = () => {
    let code = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < 10; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  const handleCloseModal = () => {
    handleClose();
    showConfirmation();
  };

  const showConfirmation = () => {
    Swal({
      title: 'Payment on success',
      text: 'Do you want to continue shopping?',
      icon: 'success',
      buttons: ['Cancel', 'Yes, Back to Shopping'],
      dangerMode: true,
    }).then((willReturn) => {
      if (willReturn) {
        navigate('/Shop'); 
      }
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Bayar dengan Indomaret</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Silakan pergi ke gerai Indomaret terdekat dan tunjukkan kode pembayaran berikut kepada kasir:</p>
        <h3 className="text-center">{paymentCode}</h3>
        <p>Kode pembayaran ini berlaku selama 24 jam.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default IndomaretModal;
