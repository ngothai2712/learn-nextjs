import { ReactElement } from 'react';

type BlankLayoutProps = {
  children: ReactElement;
};

const BlankLayout = ({ children }: BlankLayoutProps) => {
  return (
    <div>
      <p>Blank Layout</p>
      {children}
    </div>
  );
};

export default BlankLayout;
