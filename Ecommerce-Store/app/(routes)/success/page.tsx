// success.tsx
import React from 'react';
import Container from '@/components/ui/container';



const SuccessPage = () => {
    return (
        <Container>
            <div className="flex flex-col my-auto items-center h-screen">
            <h1>Payment Successful</h1>
            <p>Your payment was successful. Thank you for your purchase.</p>
            <p>Details will be sent to your email.</p>

            </div>
        </Container>
    );
};

export default SuccessPage;