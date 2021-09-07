import React, {Component} from 'react';
import Navbar from './Components/navbar';
import Card from './Components/card';
import aglio from'./Immagini/aglio.jpg';
import amatriciana from'./Immagini/amatriciana.jpg';
import cacio from'./Immagini/cacio.jpg';
import carbonara from'./Immagini/Carbonara.jpg';
import gricia from'./Immagini/gricia.jpg';
import zozza from'./Immagini/zozza.png';



class App extends Component{
  state={
    cards:[
      {id: 0, nome:'Ajo e Ojo', prezzo: 7.99, immagine: aglio, quantità: 0 },
      {id: 1, nome:'Amatriciana', prezzo: 8.99, immagine: amatriciana, quantità: 0 },
      {id: 2, nome:'Cacio e pepe', prezzo: 8.99, immagine: cacio, quantità: 0 },
      {id: 3, nome:'Carbonara', prezzo: 9.99, immagine: carbonara, quantità: 0 },
      {id: 4, nome:'Gricia', prezzo: 6.99, immagine: gricia, quantità: 0 },
      {id: 5, nome:'Zozzona', prezzo: 5.99, immagine: zozza, quantità: 0 },
    ]
  }


  handleDelete= cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({cards});
  }
  handleIncrement= card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] ={...card};
    cards[id].quantità++;
    this.setState({cards});
  }
   render(){
    return (
      <>
     <Navbar />
     <div className='container'>
     <h2>Cosa desideri ordinare?</h2>
     <hr/> 
     <div className='row'>
       {this.state.cards.map(card =>(
         <Card
         key={card.id}
         onDelete={this.handleDelete}
         onIncrement={this.handleIncrement}
         card={card} />
       ))}
       </div>
     </div>
     </>
    );
  }
    
    
}




export default App;
