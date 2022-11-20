import React from 'react';
import Styles from './Footer.module.css';
import { DogsFooter } from '../../Assets/DogsFooter';

export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <DogsFooter/>
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  )
}