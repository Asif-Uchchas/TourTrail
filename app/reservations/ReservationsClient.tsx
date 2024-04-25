'use client'
import React, { useCallback, useState } from 'react';
import Container from '../components/Container';
import Heading from '../components/Heading';

import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import ListingCard from '../components/listings/ListingCard';
import { SafeReservation, SafeUser } from '../types';

interface ReservationsClientProps{
  reservations: SafeReservation []
  currentUser?: SafeUser | null;
  
}
const ReservationsClient = ({
  reservations,
  currentUser
}: ReservationsClientProps) => {

  const router = useRouter()
  const [deleteingId, setDeleteingId] = useState('')

  const onCancel = useCallback((id: string) => {
    setDeleteingId(id);

    axios.delete(`/api/reservations/${id}`)
      .then(() => {
        toast.success("Reservation Cancelled")
        router.refresh()
      })
      .catch(() => {
        toast.error("Failed to cancel Reservation");
      })
      .finally(() => {
        setDeleteingId('');
      })
  }, [router])

  return (
    <Container>
      <Heading
        title='Reservations'
        subtitle='Bookings on your properties'
      />
      <div className=' 
      mt-10 
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-5 
      2xl:grid-cols-6 
      gap-8'>
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deleteingId === reservation.id}
            actionLabel='Cancel guest reservation'
            currentUser={currentUser}
          />
          ))}
      </div>
    </Container>
  ); 
}

export default ReservationsClient;