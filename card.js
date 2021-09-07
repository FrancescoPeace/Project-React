import React,{Component} from 'react';
 

class Card extends Component{
    render(){
        return(
            <div className='col'>
                <div className="card" style={{width: '18rem', textAlign:'center', margin:'15px', boxShadow:'3px 3px 3px grey' }}>
                <button onClick={()=>this.props.onIncrement(this.props.card)}className="btn btn-primary">Quanti etti ne vuoi?<span className='badge badge-light'>{this.props.card.quantità}</span></button>
                     <img src={this.props.card.immagine} className="card-img-top" alt="..." style={{height:'10rem'}}/>
                    <div className="card-body">
                         <h5 className="card-title">{this.props.card.nome}</h5>
                         <p className="card-text">${this.props.card.prezzo}</p>
                         <button onClick={()=>this.props.onDelete(this.props.card.id)}className="btn btn-outline-danger">Elimina</button>
                     </div>
                 </div>
            </div>
        );
    }
   
}

export default Card;
