// failure.tsx
import React from 'react';
import Container from '@/components/ui/container';

const FailurePage = () => {
    return (
        <Container>
            <div className="flex flex-col items-center my-auto h-screen">
                <h1>Payment Failed</h1>
                <p>There was a problem processing your payment. Please try again.</p>
            </div>
        </Container>
    );
};

export default FailurePage;