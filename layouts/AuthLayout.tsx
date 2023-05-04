import TheHeader from '@/components/layouts/TheHeader';
import TheFooter from '@/components/layouts/TheFooter';
import { ReactElement } from 'react';

type AuthLayoutProps = {
  children: ReactElement;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <TheHeader />
      {children}
      <TheFooter />
    </>
  );
};

export default AuthLayout;
