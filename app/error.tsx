"use client"

interface ErrorStateProps{
    error: Error
}

import React, { useEffect } from 'react';
import EmptyState from './components/EmptyState';

const ErrorState = ({ error }: ErrorStateProps) => {
    useEffect(() => {
      console.log(error)
    }, [error])
    
    return (
        <EmptyState
            title='Oops! An error occurred.'
            subtitle='Something went wrong'
        />
    )
}

export default ErrorState;