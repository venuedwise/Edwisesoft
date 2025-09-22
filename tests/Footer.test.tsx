import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  it('renders career opportunities link and modal', () => {
    render(<Footer />);
    
    // Check that Career Opportunities link exists
    const careerLink = screen.getByText('Career Opportunities');
    expect(careerLink).toBeInTheDocument();
    
    // Click the career opportunities link
    fireEvent.click(careerLink);
    
    // Check that modal opens with correct content
    expect(screen.getByText('Join Our Team')).toBeInTheDocument();
    expect(screen.getByText('Phone: +91 7799132754')).toBeInTheDocument();
    
    // Verify phone number format (no square brackets)
    const phoneText = screen.getByText('Phone: +91 7799132754');
    expect(phoneText).toBeInTheDocument();
    expect(screen.queryByText('Phone: [+91 7799132754]')).not.toBeInTheDocument();
  });
});