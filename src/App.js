import React, {Component} from "react";
// import logo from "./logo.svg"; import './App.css';
import _ from "lodash";
import uniqueCards from "./data.json";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
				constructor(props) {
								super();
								this.uniqueCards = _.shuffle(this.uniqueCards);

								this.state = {
												clickedImages: [],
												uniqueCards:uniqueCards,
												score :0
											}
				}

				clickHandler = (event, imageid) => {
								event.preventDefault();
								if (this.state.clickedImages.includes(imageid)) {
												alert(' Already Clicked Before !!! ')
												//clear the state
												this.setState({clickedImages: [],
													score : 0
												})
								} else {
												// this.state.uniqueCards = _.shuffle(this.state.uniqueCards);
												this.setState({
																clickedImages: [
																				...this.state.clickedImages,
																				imageid
																],
																uniqueCards : _.shuffle(this.state.uniqueCards),
																score : this.state.score+1
															});
												console.log(this.state.clickedImages);
								}
				};

				render() {
								return (
									<div>
									<Navbar score={this.state.score}/>
									{this.state.uniqueCards.map((image) => <Card imageURL={image.imageURL} id={image.id} clickHandler={this.clickHandler}/>)}
									</div>
								);
				}
}

export default App;
