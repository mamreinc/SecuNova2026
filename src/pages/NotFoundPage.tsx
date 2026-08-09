import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/', { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Helmet>
        <title>SecuNova Inc. | Redirecting...</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="text-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secunova-blue mx-auto mb-4"></div>
        <p className="text-secunova-dark font-semibold text-lg">Redirecting to SecuNova Home...</p>
      </div>
    </div>
  );
};

export default NotFoundPage;