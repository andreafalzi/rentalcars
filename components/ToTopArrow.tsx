'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ToTopArrow = () => {
  const [toTop, setToTop] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setToTop(true);
    } else {
      setToTop(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {toTop && (
        <div
          className='bg-primary-blue w-10 h-10 rounded-full fixed right-3 2xl:right-14  bottom-9 flex items-center justify-center cursor-pointer z-30'
          onClick={goToTop}
        >
          <FaArrowUp size={26} color='white' />
          {/* <Image
            src='/right-arrow.svg'
            alt='right arrow'
            className='object-contain'
            width={20}
            height={20}
          /> */}
        </div>
      )}
    </>
  );
};
export default ToTopArrow;
