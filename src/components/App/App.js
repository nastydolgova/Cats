import React from "react";
import "./style.css";
import CatItem from "../CatItem/CatItem";
import itemsData from "../itemsData"

class App extends React.Component {
    constructor(){
        super()
        this.state = { itemsData : itemsData }
    }

  render() {
    const catItems = this.state.itemsData.map (item =>          
        <CatItem
        onClick={this.handleClick}
        inside={item.inside}
        quantity={item.quantity}
        present={item.present}
        weight={item.weight}
        isAvailible={item.isAvailible}
        isSelected={item.isSelected}
        selectedText={item.selectedText}
        key={item.id}
      />)
    return (
      <section className="cat">
        <h3 className="cat-title">Ты сегодня покормuл кота?</h3>
        <div className="cat-wrp">
        {catItems}
        </div>
      </section>
    );
  }
}
export default App;
