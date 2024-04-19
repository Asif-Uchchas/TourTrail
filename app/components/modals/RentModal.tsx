'use client'
import React from 'react'
import Modal from './Modal'
import useRentModal from '@/app/hooks/useRentModal'


const RentModal = () => {

    const rentModal = useRentModal();
  return (
      <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel= "Submit"
    //   secondaryActionLabel={secondaryActionLabel}
    //   secondaryAction={step=== STEPS.CATEGORY ? undefined : onBack}
      title='TourTrail'
    //   body={bodyContent}
      />
  )
}

export default RentModal