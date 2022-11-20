import React, { SyntheticEvent } from 'react';
import Styles from './Image.module.css';


interface PropsImage {
  alt: string;
  src: string;
}

export const Image = ({ alt, src, ...props }: PropsImage) => {
  const [skeleton, setSkeleton] = React.useState(true)

  function handleLoad({ target }: any) {
    setSkeleton(false)
    target.style.opacity = 1
  }

  return (
    <div className={Styles.wrapper}>
      {skeleton && <div className={Styles.skeleton}></div>}
      <img onLoad={handleLoad} className={Styles.img} alt={alt} src={src} {...props} />
    </div>
  )
}