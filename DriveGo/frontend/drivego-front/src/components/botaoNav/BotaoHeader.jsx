// src/components/ScrollToHeaderButton.jsx
import { Button } from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import './BotaoHeader.css'

export default function ScrollToHeaderButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        const headerBottom = header.getBoundingClientRect().bottom;
        setVisible(headerBottom < 0);
      } else {
        setVisible(window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHeader = () => {
    const headerElement = document.getElementById('header');
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    visible && (
      <Button className="fixed-button" onClick={scrollToHeader}>
        <ArrowUp size={20} />
      </Button>
    )
  );
}
