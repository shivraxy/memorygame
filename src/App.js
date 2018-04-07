import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';

const uniqueCards = ['pig','fish','cactus','corn','shroom'];
const numCardsToMatch = 2;

class App extends React.Component{
  
  constructor(){
		super();
		 this.shuffleCards = this.shuffleCards.bind(this);
    // this.pickCard = this.pickCard.bind(this);
    // this.addWin = this.addWin.bind(this);

    // this.ignoreCardClicks = false;
    
		this.state = { 
      cards : [],
      gamesWon: 0,
      selectedCards: [],
      gameOver: 1
    };
	}
  
  // multiplyCards(cards,multiplier){
  //   let loopTimes = multiplier - 1;
  //   let multiplied = cards;
  //   for (var i = 0; i < loopTimes; i++){
  //     multiplied = _.concat(multiplied,cards);
  //   }
    
  //   return multiplied;
  // }
  
   shuffleCards(){
    //  let multipliedCards = this.multiplyCards(uniqueCards,numCardsToMatch);
     let shuffled = _.shuffle(uniqueCards);
     console.log(shuffled);
    
     let cards = shuffled.map(function(val){
       return {
         type: val,
         position: 'unselected'
       }
     });
    
     this.setState({ 
       cards: cards,
       gameOver: 0
     });
    
   }
  
  // changeAllPositionsOfSelected(allCards,selectedCards,newPosition){
  //   for (var v of selectedCards) {
  //     allCards[v].position=newPosition;
  //   }
  //   return allCards;
  // }
  
  // addWin(){
  //   let newGamesWon = this.state.gamesWon + 1;
  //   this.setState({ gamesWon: newGamesWon, gameOver: 1 });
  // }
  
  // selectedHasSameAttribute(allCards,selectedCards,attribute){
  //   let eq = allCards[selectedCards[0]][attribute];
  //   for (var v of selectedCards) {
  //     if(allCards[v][attribute] !== eq){ return false; }
  //   }
  //   return true;
  // }
  
  
  // checkForMatch(curCards, curSelectedCards){
  //     //console.log('checkForMatch');
    
  //     //2 cards selected... check for match
  //    if( this.selectedHasSameAttribute(curCards,curSelectedCards,'type') ){
  //       curCards = this.changeAllPositionsOfSelected(curCards,curSelectedCards,"removed");
  //       //check if won game!

  //      let winTest =  _.reduce(curCards, function(result, value, key) {
  //         //console.log('value.position='+value.position);
  //         //console.log('result='+result);
         
  //         if(result === value.position){
  //           return result;
  //         }else{
  //           return false;
  //         }
  //        //return true;
          
  //       }, curCards[0].position); 
        
  //      //console.log('WINTEST='+winTest);
  //      if(winTest !== false){
  //        this.addWin();
  //      }
       
  //     }else{
  //       curCards = this.changeAllPositionsOfSelected(curCards,curSelectedCards,"unselected");
  //     }
    
  //     //only curCards is transformed
  //     return curCards;
  // }

  // pickCard(index){
  //   //console.log('card type='+this.state.cards[index].type+', index='+index);
    
  //   if(this.ignoreCardClicks !== true){

  //     let curSelectedCards = _.concat(this.state.selectedCards, index);
  //     let curCards = this.state.cards;

  //     //if(curSelectedCards.length !== )
  //     //console.log('cards stored: '+curSelectedCards.length);

  //     curCards[curSelectedCards[ curSelectedCards.length-1 ]].position="selected";

  //     if(curSelectedCards.length === numCardsToMatch){

  //         this.setState({
  //           //selectedCards: curSelectedCards,
  //           cards: curCards
  //         })

  //       let _this = this; //needed for timeout because 'this' changes 
  //       this.ignoreCardClicks = true;

  //       let pauseGame = setTimeout(function(){ 
  //         curCards = _this.checkForMatch(curCards, curSelectedCards);
  //         curSelectedCards = [];

  //         _this.ignoreCardClicks = false;

  //         _this.setState({
  //           selectedCards: curSelectedCards,
  //           cards: curCards
  //         })

  //       }, 750);

  //     }else{
  //       curCards[curSelectedCards[0]].position="selected";

  //         this.setState({
  //           selectedCards: curSelectedCards,
  //           cards: curCards
  //         })
  //     }
  //   }
  // }
  
  render(){ 
     let clickEvent = this.pickCard;
    let cardIndex = 0;
     return(
     <div className="memory-app">


       {/* <HomeScreen gameOver={this.state.gameOver} gamesWon={this.state.gamesWon} clickEvent={this.shuffleCards} /> */}
       
       <div className="cards">
           {this.state.cards.map(function(thisCard) {
            return <Card index={cardIndex++} clickEvent={clickEvent} position={thisCard.position} type={thisCard.type}/>
            })}
       
       </div> 

      </div>
     )
  }
}

class Card extends React.Component{
 constructor(){
		super();
		this.clickMe = this.clickMe.bind(this);
 }
  clickMe(){
    //call parent function that manages state
    if(this.props.position === 'unselected'){
      this.props.clickEvent(this.props.index);
    }else{
      console.log('cant click me! my position is '+this.props.position);
    }
    
  }
 
   render(){ 
     return (
       <div data-index={this.props.index} data-cardtype={this.props.type} onClick={this.clickMe } className={ 'card card--'+this.props.type+' card--'+this.props.position } > 
        <div className="card__inner"> 
            <div className="card__face card__front"> 
              
            </div> 
            {/* <div className="card__face card__back"> 
               
            </div>  */}
        </div> 
    </div> 
     ) 
   }
}


class HomeScreen extends React.Component{
   constructor(){
		  super();
		  this.clickMe = this.clickMe.bind(this);
    }
  clickMe(){
     this.props.clickEvent(this.props.clickEvent);
  } 
     render(){ 



      
       return (
          <div className={this.props.gameOver ? "homescreen homescreen--visible" : "homescreen homescreen--hidden"}>
            <div className="homescreen__box">
              <h1 className="homescreen__title">Emoji&nbsp;  Match</h1>
              <div className="homescreen__stats">
                Games Won: <strong className="homescreen__number" >{this.props.gamesWon}</strong>
              </div>
              <button className="homescreen__shuffle-button " onClick={this.clickMe} >Start!</button>
           </div>
          </div>
        )

     }





}

export default App;
