import React from 'react';

import styles from './SliderItem.module.css';

const SliderItem = ({item, transformValue}) => {
  
  return (
    <li style={{transform: `translateX(${transformValue}px)`}} className={styles['slider-item']}>
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <h4>{item.role}</h4>
        <p>{item.comment}</p>
    </li>
  )
}

export default SliderItem