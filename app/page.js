// app/page.js
'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Roboto } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { Lora } from 'next/font/google';
import Logo from './components/Logo';
import { contactInfo } from './components/info';
import Popup from './components/pop';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });
const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] });

const images = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
  '/images/photo5.jpg',
  '/images/photo6.jpg',
  '/images/photo7.jpg',
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [hearts, setHearts] = useState([]);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('popup-open', !popupClosed);
  }, [popupClosed]);

  const popupEnabled = 0; // 1 - включить попап, 0 - отключить

  useEffect(() => {
    document.body.classList.toggle('popup-open', popupEnabled === 1 && !popupClosed);
  }, [popupClosed, popupEnabled]);
  
  useEffect(() => {
    if (popupEnabled === 0 || popupClosed) {
      AOS.init();
  
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000);
  
      const heartInterval = setInterval(() => {
        setHearts((prev) => {
          if (prev.length >= 10) return prev.slice(1);
          return [
            ...prev,
            {
              id: Math.random(),
              left: Math.random() * 100,
              top: Math.random() * 100,
              size: Math.random() * 20 + 10,
              opacity: Math.random() * 0.7 + 0.3,
            },
          ];
        });
      }, 500);
  
      const observer = new IntersectionObserver(
        ([entry]) => setIsFooterVisible(entry.isIntersecting),
        { threshold: 0.1 }
      );
  
      const footer = document.querySelector('footer');
      if (footer) observer.observe(footer);
  
      return () => {
        clearInterval(interval);
        clearInterval(heartInterval);
        if (footer) observer.unobserve(footer);
      };
    }
  }, [popupClosed, popupEnabled]);

  return (
    <>
{popupEnabled === 1 && !popupClosed && <Popup onClose={() => setPopupClosed(true)} />}
      <Head>
        <title>Stella Monroe</title>
        <meta name="description" content="Welcome to Stella Monroe - Your trusted partner for exclusive connections and high-quality companionship services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Stella Monroe, escort services, luxury, companionship, exclusive connections" />
        <meta name="author" content="Stella Monroe" />
        <link rel="icon" href="/images/favicon-heart.png" type="image/png" />
      </Head>

      <div
        className={`${styles.container} ${lora.className} ${!popupClosed ? 'page-blurred' : ''}`}
        style={{
          backgroundColor: '#1e1e1e',
          color: '#f0f0f0',
          overflowX: 'hidden',
          padding: '0 20px',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <header className={styles.header} style={{ textAlign: 'center' }}>
          <h1 className={playfair.className} style={{ color: '#d6ac66', fontFamily: 'cursive' }}>
           Stella Monroe
          </h1>
          <p className={lora.className}>
            Your trusted partner for exclusive connections
          </p>
        </header>

        <section
          className={styles.gallery}
          style={{
            textAlign: 'center',
            position: 'relative',
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            className={styles.imageContainer}
            data-aos="fade-up"
            style={{
              width: '100%',
              maxWidth: '100%',
              height: '500px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index}`}
                className={styles.image}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  opacity: currentImage === index ? 1 : 0,
                  position: 'absolute',
                  transition: 'opacity 1s ease-in-out',
                }}
              />
            ))}
        
            <Logo
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '40px',
                zIndex: 10, // убедимся, что логотип поверх картинок
              }}
            />
          </div>

          <div
            className={styles.thumbnailContainer}
            style={{
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'center',
              gap: '5px',
              overflowX: 'auto',
            }}
          >
            {images.map((src, index) => (
              <img
                key={`thumb-${index}`}
                src={src}
                alt={`Thumbnail ${index}`}
                className={styles.thumbnail}
                onClick={() => setCurrentImage(index)}
                style={{
                  width: '50px',
                  height: '50px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  border: currentImage === index ? '2px solid #d6ac66' : '2px solid transparent',
                  borderRadius: '5px',
                }}
              />
            ))}
          </div>
        </section>

        <section
          className={styles.contentSection}
          style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '20px' }}
        >
          <div data-aos="fade-right" style={{ gridColumn: '1 / -1', textAlign: 'left' }}>
            <h2
              className={playfair.className}
              style={{ fontFamily: 'cursive', color: '#d6ac66' }}
            >
              Are you yearning for a truly extraordinary and unforgettable experience? Look no further!
            </h2>
            <p>
            
              I am here to cater to your desires and provide you with the utmost satisfaction. I am well spoken, elegant, and sophisticated woman with a fun and open-minded personality.
              Once you get to know me, you'll want to stay with me forever. I take great pride in my appearance and always strive to deliver the best experience for my clients. 
              I enjoy building intimate connections and expressing my affection in the bedroom.
              I am interested in meeting gentlemen who know how to respect a woman and appreciate the finest things that life has to offer.
              The best way to contact me is via text message or email.
              I look forward to meeting you.
            </p>
            <h3
                className={playfair.className}
                style={{ fontFamily: 'cursive', color: '#d6ac66', textAlign: 'right' }}>
                   Yours, Stella
              </h3>
          </div>

          <div data-aos="fade-left" style={{ textAlign: 'left' }}>
            <h2
              className={playfair.className}
              style={{ fontFamily: 'cursive', color: '#d6ac66' }}
            >
             Donation
            </h2>
            
            <p>Inacll  $700</p> 
            <p>Outcall $800 + Uber</p>
          </div>

          <div data-aos="fade-up" style={{ textAlign: 'left' }}>
            <h2
              className={playfair.className}
              style={{ fontFamily: 'cursive', color: '#d6ac66' }}
            >
              Statistics
            </h2>
            
            <p>Location - New York </p>
            <p>Age - 27</p>
            <p>Height - 5ft 6in</p>
            <p>Weight - 123ibs</p>
            <p>Measurements - 33Dd 28-37</p>
            <p>Body type - Athletic</p>
            <p>Ethnicity - Caucasian</p>
            <p>Eyes - Brown</p>
            <p>Hair - Brunette</p>
          </div>

          <div data-aos="fade-up" style={{ gridColumn: '1 / -1', textAlign: 'left' }}>
            <h2
              className={playfair.className}
              style={{ fontFamily: 'cursive', color: '#d6ac66' }}
            >
              Contact Me
            </h2>
            <p>
              Phone: <a href={`tel:${contactInfo.phone}`} style={{ color: '#d6ac66', textDecoration: 'none' }}>{contactInfo.phone}</a>
            </p>
            <p>
              Email: <a href={`mailto:${contactInfo.email}`} style={{ color: '#d6ac66', textDecoration: 'none' }}>{contactInfo.email}</a>
            </p>
            <p>
              My reviews: <a href={contactInfo.ter} style={{ color: '#d6ac66', textDecoration: 'none' }}>{contactInfo.terShort}</a>
            </p>
          </div>
        </section>

        <footer
          className={styles.footer}
          style={{ textAlign: 'center', padding: '20px 0', backgroundColor: '#1e1e1e' }}
        >
          &copy; 2025 Stella Monroe. All rights reserved.
        </footer>
        
{/* Ниже код для сердец летающих на фоне 
        {!isFooterVisible && (
          <div
            style={{
              position: 'fixed',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'blink 1.5s infinite',
              fontSize: '24px',
              width: '75px',
              textAlign: 'center',
              color: '#d6ac66',
              zIndex: 0,
            }}
          >
            ↓
          </div>
        )}

        {hearts.map((heart) => (
          <div
            key={heart.id}
            style={{
              position: 'fixed',
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              fontSize: `${heart.size}px`,
              color: '#d6ac66',
              opacity: heart.opacity,
              animation: 'float 2s ease-in',
            }}
          >
            ❤️
          </div>
        ))} */}

        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(-50px);
              opacity: 0;
            }
          }

          @keyframes blink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }

          @media (max-width: 768px) {
            .${styles.imageContainer} {
              position: relative;
              width: 100%;
              max-width: 100%;
              height: 300px;
            }
            .${styles.image} {
              width: 100%;
              max-width: 100%;
            }
          }
        `}</style>
      </div>
    </>
  );
}
