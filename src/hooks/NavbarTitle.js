import { useState, useEffect } from 'react';

const useNavbarTitle = (initialTitle = 'Home') => {
  const [navbartitle, setNavBarTitle] = useState(() => {
    return localStorage.getItem('navbartitle') || initialTitle;
  });

  useEffect(() => {
    localStorage.setItem('navbartitle', navbartitle);
  }, [navbartitle]);

  return [navbartitle, setNavBarTitle];
};

export default useNavbarTitle;