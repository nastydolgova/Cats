import React from 'react';
import './style.css'

function CatItem(props) {
    let ClassForItem = 'availible';
    if( props.isAvailible && props.isSelected){
        ClassForItem = 'selected'
    } else if (!props.isAvailible){
        ClassForItem = 'disabled'
    }
    return (
        <div className={ClassForItem} >
        <header className="header">
            <div className="header-angle"></div>
            <p className="header-p">Сказочное заморское яство</p>
        </header>
        <div className="cat-item-content">
            <h2 className="content-h2">Нямушка</h2>
            <h4 className="content-h4">{props.inside}</h4>
            <ul className="content-list">
    <li>{props.quantity} порций</li>
    <li>{props.present}</li>
            </ul>

        </div>
        <p className="cat-item-txt">Чего сидишь? Порадуй котэ, купи. </p>
        <p className="cat-item-txt-s">{props.selectedText} </p>
        <p className="cat-item-txt-d">Печалька, {props.inside} закончился. </p>
        <div className="cat-item-circle">
    <p>{props.weight} </p><span>кг</span>
        </div>
    </div>
    );
  }
  
  export default CatItem;
  