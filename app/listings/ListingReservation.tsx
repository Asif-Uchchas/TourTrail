"use client";
import React, { useCallback, useState } from "react";
import { Range } from "react-date-range";
import Calender from "../components/inputs/Calender";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import PaymentModal from "../components/modals/PaymentModal";
import usePaymentModal from "../hooks/usePaymentModal";


interface ListingReservationProps {
  price: number;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  dateRange: Range;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation = ({
  price,
  totalPrice,
  onChangeDate,
  dateRange,
  onSubmit,
  disabled,
  disabledDates,
}: ListingReservationProps) => {

  

  const paymentModal = usePaymentModal();



  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className=" text-2xl font-semibold">$ {price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <Calender
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
        <hr className="m-2"/>
        
        <Button label="Test Reserve" onClick={paymentModal.onOpen}/>
        
      </div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>

      
    </div>
  );
};

export default ListingReservation;
