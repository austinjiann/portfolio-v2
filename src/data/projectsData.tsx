import type { ReactNode } from 'react';
import flowboardImg from '../assets/images/flowboardImg.png';
import planthopperImg from '../assets/images/planthopper.png';
import playcreateImg from '../assets/images/playcreateImg.png';
import { HoverLink } from '../components/ui/HoverLink';

export type Project = {
  slug: string;
  title: string;
  description: ReactNode;
  image: string;
  color: string;
  glowColor?: string;
};

export const projects: Project[] = [
  {
    slug: 'flowboard',
    title: 'FlowBoard',
    description: (
      <>
        Turn sketches and annotations into videos by drawing on a canvas. 1000+ users, 100+ stars, & 100k+ views
      </>
    ),
    image: flowboardImg,
    color: '#FF5F56',
    glowColor: 'rgba(0, 60, 220, 0.6)',
  },
  {
    slug: 'playcreate',
    title: 'PlayCreate',
    description: (
      <>
        Traditional coaching boards reinvented with AI & animations.<br />
        Over 10 million views on socials, winners @{' '}
        <HoverLink href="https://unfounders.com">Unfounders</HoverLink>, flown out to pitch at SF tech week 2025
      </>
    ),
    image: playcreateImg,
    color: '#27C93F',
    glowColor: 'rgba(0, 100, 50, 0.6)',
  },
  {
    slug: 'plant-hopper',
    title: 'Plant Hopper',
    description: (
      <>
        Automatic plant-watering turret that auto aims and waters plants based on soil moisture. 
        1st place @ <HoverLink href="https://hackthevalley.io">Hack the Valley</HoverLink>
      </>
    ),
    image: planthopperImg,
    color: '#FFBD2E',
    glowColor: 'rgba(255, 255, 255, 0.6)',
  },
];