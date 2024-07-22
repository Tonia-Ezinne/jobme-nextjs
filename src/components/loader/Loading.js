import React from 'react'
import Styles from './Loader.module.css'


const Loading = () => {
  return (
    <div class={Styles.loader}>
      <li class={Styles.dots} id={Styles.dot-1}></li>
      <li class={Styles.dots} id={Styles.dot-2}></li>
      <li class={Styles.dots} id={Styles.dot-3}></li>
    </div>
  );
}

export default Loading