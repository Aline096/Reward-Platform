import { useRouter, redirect } from 'next/navigation';
import { useEffect } from 'react';

export const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const AuthenticatedComponent: React.FC<any> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const session = sessionStorage.getItem('session');
      if (!session) {
        redirect('/auth/login');
      }
    }, []);

    if (typeof window === 'undefined' || !sessionStorage.getItem('session')) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};
