import getUserInfo from '@/lib/getUserInfo';
import { useEffect, useState } from 'react';

export const useGetUser = () => {
  const [loading, setLoading] = useState(true);
  const [userSession, setUserSession] = useState<null | string>(null);
  const [initialFetchCompleted, setInitialFetchCompleted] = useState(false);
  const [userData, setUserData] = useState<
    | {
        __typename?: 'users' | undefined;
        id: any;
        email: string;
        points?: number | null | undefined;
        role?: string | null | undefined;
        username: string;
      }
    | null
    | undefined
  >(null);

  const refetch = async () => {
    const details = await getUserInfo();
    setUserData(details);
    setLoading(false);
  };

  useEffect(() => {
    const session: string | null =
      typeof window != 'undefined'
        ? window.sessionStorage.getItem('session')
        : '';
    setUserSession(session);
    const getData = async () => {
      const details = await getUserInfo();
      setUserData(details);
      setLoading(false);
      setInitialFetchCompleted(true);
    };
    if (!initialFetchCompleted) {
      getData();
    }
  }, [initialFetchCompleted]);

  return { refetch, userData, userSession, loading };
};
