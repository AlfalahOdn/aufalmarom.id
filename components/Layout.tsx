import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type Props = {
  children: ReactNode; // Define children as a ReactNode
};

export default function Layout({ children }: Props) {
  return (
    <div className='w-full'>
      <Navbar />
      {children} {/* Render children */}
      <Footer />
    </div>
  );
}
