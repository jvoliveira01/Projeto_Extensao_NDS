import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return <></>;
};

export default Page;
