"use client";
import usePaymentModal from "@/app/hooks/usePaymentModal";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Button from "../Button";
import { MdOutlinePayment } from "react-icons/md";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast, { Toaster } from "react-hot-toast";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signIn } from "next-auth/react";

const PaymentModal = () => {
  const paymentModal = usePaymentModal();
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      cardno: "",
      expiry: "",
      cvc: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/payment", data)
      .then(() => {
        toast.success('Success!');
        paymentModal.onClose();
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

//   const toggle = useCallback(
//     () => {
//       registerModal.onClose()
//       loginModal.onOpen()
//     },
//     [loginModal, registerModal],
//   );

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Payment Information"
        subtitle="Add Payment"
        center
      />
      <Input
        id="name"
        label="Person Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="cardno"
        label="Card Number"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="expiry"
        label="Expiry Date"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="cvc"
        label="CVC/CVV"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <div className="flex flex-row gap-4">
        <Button
          outline
          label="Proceed to Payment Transaction"
          icon={MdOutlinePayment}
          onClick={onSubmit}
        />
        
      </div>
      <div className=" text-neutral-500 mt-4 font-light text-center">
        <div className=" flex flex-row items-center justify-center gap-2">
          <div>Already have an account?</div>
          {/* <div
            onClick={toggle}
            className=" text-neutral-800 cursor-pointer hover:underline"
          >
            Log in
          </div> */}
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={paymentModal.isOpen}
      title="Payment Window"
      actionLabel="Reserve"
      onClose={paymentModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default PaymentModal;


