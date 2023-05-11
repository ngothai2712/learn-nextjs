import { render, screen } from '@testing-library/react';

import DashboardIndexPage from '@/pages/dashboard';

describe('DashboardIndexPage', () => {
  it('Test heading success', () => {
    render(<DashboardIndexPage />);

    const headerText = 'Dashboard page';

    const heading = screen.getByText(headerText);

    expect(heading).toBeInTheDocument();
  });

  it('Change text heading', () => {
    render(<DashboardIndexPage />);

    const headerText = 'Dashboard page';

    const heading = screen.getByText(headerText);

    console.log('heading fail:', heading);

    // expect(heading).toBeInTheDocument();
  });
});
