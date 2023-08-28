import { useGetUser } from '@/components/hooks/useGetUser';
import { useRouter, redirect } from 'next/navigation';
import { useEffect } from 'react';

export const checkAdminAccess = (WrappedComponent: React.ComponentType<any>) => {
  const AdminComponent: React.FC<any> = (props) => {
    const router = useRouter();
    const { userData } = useGetUser()
    const userRole = userData?.role
    useEffect(() => {
       if (typeof userRole !== 'undefined') {
         if (userRole !== 'admin') {
           redirect('/')
         }
         console.log(userRole)
       }
    }, [router, userRole])

     if (userRole === 'admin') {
       return <WrappedComponent {...props} />
     } else {
       return null 
     }
  };

  return AdminComponent;
};
