import React from 'react'
import Button from '../components/Button';
import usePaymentModal from '../hooks/usePaymentModal';

interface PaymentApiProps {
    
    onSubmit: () => void;
    disabled?: boolean;
  }

const PaymentApi = ({
    onSubmit,
    disabled
}: PaymentApiProps) => {

    const paymentModal = usePaymentModal();

  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
        <hr className="m-2"/>
        
        <Button label="Test Reserve" onClick={paymentModal.onOpen}/>
        
      </div>
    </div>
  )
}

export default PaymentApi
