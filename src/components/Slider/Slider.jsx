import React, {useState, useRef, useEffect} from 'react';
import data from '../../testimonial-data';
import SliderItem from './SliderItem';

import styles from './Slider.module.css';

const Slider = () => {

  const [counter, setCounter] = useState(0);
  const [transformValue, setTransformValue] = useState(0);
  const sliderRef = useRef();

  const nextClickHandler = () => {
    setCounter(prev => {
      if((prev + 1) == data.length) {
        setTransformValue(-sliderRef.current.offsetWidth*(0));
        return 0;
      }
      setTransformValue(-sliderRef.current.offsetWidth*(prev+1));
      return prev + 1;
    })
  }
  
  const prevClickHandler = () => {
    setCounter(prev => {
      if(prev-1 < 0) {
        setTransformValue(-sliderRef.current.offsetWidth*(data.length-1));
        return data.length-1;
      } else {
        setTransformValue(-sliderRef.current.offsetWidth*(prev - 1));
        return prev - 1;
      }
    })
  }


  return (
    <div className={styles.slider}>
      <ul ref={sliderRef}>
        {data.map(item => {
            return <SliderItem key={item.id} item={{...item}} transformValue={transformValue} />
        })}
      </ul>
      <div className={styles.actions}>
        <button onClick={prevClickHandler}><img src="img/prev.png" alt="prev" /></button>
        <button onClick={nextClickHandler}><img src="img/next.png" alt="next" /></button>
      </div>
    </div>
  )
}

export default Slider