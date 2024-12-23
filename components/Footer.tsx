import React from 'react';

export default function Footer() {
  return (
    <footer className='text-white p-10 bg-blue-800'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-lg'>
        <div>
          <h2 className='font-semibold text-4xl mb-2'>coursera</h2>
        </div>
        <div>
          <h2 className='font-semibold mb-2'>Help</h2>
          <ul className='font-extralight text-sm'>
            <li>FAQ</li>
            <li>Contact form link</li>
            <li>Troubleshooting</li>
            <li>User Guide</li>
          </ul>
        </div>
        <div>
          <h2 className='font-semibold mb-2'>Resources</h2>
          <ul className='font-extralight text-sm'>
            <li>Blogs</li>
            <li>Case studies</li>
            <li>White papers</li>
            <li>Reports</li>
          </ul>
        </div>
        <div>
          <h2 className='font-semibold mb-2'>Extra Links</h2>
          <ul className='font-extralight text-sm'>
            <li>Careers</li>
            <li>Privacy policy</li>
            <li>Terms of use</li>
          </ul>
        </div>
      </div>
      <div className='flex items-center mt-14 justify-center'>
        <p className='copy-right mx-4 text-center'>© 2024 coursera. All rights reserved.</p>
      </div>
    </footer>
  );
}