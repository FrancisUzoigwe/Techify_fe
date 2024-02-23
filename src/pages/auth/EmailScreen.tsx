import React from 'react';

const EmailNotificationScreen: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Email Sent!</h2>
                <p className="text-gray-600 mb-4">A verification code has been sent to your email address. Please check your inbox.</p>
                <p className="text-sm text-gray-600">Didn't receive the email? <a href="https://gmail.com/" className="text-blue-500 hover:underline">Check</a></p>
            </div>
        </div>
    );
};

export default EmailNotificationScreen;
