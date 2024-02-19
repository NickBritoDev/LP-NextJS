import { Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FaArrowDownShortWide } from 'react-icons/fa6'

export default function ButtonScrollPages({ pages }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }

  };

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.id;
      const listItem = document.querySelector(`[data-section="${sectionId}"]`);

      if (entry.isIntersecting) {
        listItem.style.borderBottom = '2px solid #229544';
      } else {
        listItem.style.borderBottom = 'none';
      }
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section');
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Button colorScheme={'telegram'} color={'white'} zIndex={9} w={'50px'} alignItems={'center'} justifyContent={'space-between'} onClick={() => scrollToSection(pages)}
      data-section={pages} cursor={'pointer'} >
      <FaArrowDownShortWide />
    </Button>
  )
}
