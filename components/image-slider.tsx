import { ImageCard } from '@/components/image-card';
import useMeasure from 'react-use-measure';
import { animate, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export const ImageSlider = () => {
  const images = [
    '/bag-of-beans.jpg',
    '/everyone-drink-sho.jpg',
    '/glass-of-latte.jpg',
    '/Iced-latte.jpg',
    '/latte-beans.jpg',
  ];

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      duration: 25,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
      ease: 'linear',
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <motion.div
      className="z-30 flex gap-4 my-2"
      ref={ref}
      style={{ x: xTranslation }}
    >
      {[...images, ...images].map((image, index) => (
        <ImageCard key={index} image={image} />
      ))}
    </motion.div>
  );
};
