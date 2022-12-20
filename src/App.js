import { Component } from 'react';
import prostar from "./resources/prostars.json";
import './App.css';

export default class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      currStars:[{
        "name": "Idris Elba",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
        "popularity": 11.622713,
        "id": "11731993-0604-4bee-80d5-67ad845d0a38"
      },
      {
        "name": "Johnny Depp",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
        "popularity": 15.656534,
        "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06"
      },
      {
        "name": "Monica Bellucci",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
        "popularity": 16.096436,
        "id": "0ad5e441-3084-47a1-9e9b-b917539bba71"
      },
      {
        "name": "Gal Gadot",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
        "popularity": 10.049256,
        "id": "b497e3c4-50bb-4ae2-912f-eb36802c5bc2"
      },
      {
        "name": "Ian McKellen",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
        "popularity": 10.070132,
        "id": "0067ae32-97b6-4431-898e-eb1c10150abb"
      },]
    }
  };

  randomFunctionGenerator(){
    return Math.floor(Math.random() * (prostar.length - 1) + 1);
  }

  
  handleRandomStars =()=>{
    let randomNumber = this.randomFunctionGenerator();
    let check=true
    let newStar = prostar[randomNumber];
    this.state.currStars.map(star=>{
      if(star.id===newStar.id){
        alert(`${star.name} Already added`);
        check=false
        return false
      }
      else{
        return true
      }
    })

    if(check===true){
      this.state.currStars.push(newStar);
    }
    
    this.setState({
      currStars:this.state.currStars
    })
  };

  sortingByName(object1, object2, key) {
    const obj1 = object1[key].toUpperCase()
    const obj2 = object2[key].toUpperCase()
  
    if (obj1 < obj2) {
      return -1
    }
    if (obj1 > obj2) {
      return 1
    }
    return 0
  }

  sortingByPopularity(object1, object2, key) {
    const obj1 = object1[key]
    const obj2 = object2[key]
    return obj2-obj1;
  }
  

  handleSortByName=()=>{
    let sortedList = this.state.currStars.sort((starOne,starTwo)=>{
      return this.sortingByName(starOne, starTwo, 'name')
    })
    this.setState({
      currStars:sortedList
    })
  }


  handleSortByPopularity=()=>{
    let sortedList = this.state.currStars.sort((starOne,starTwo)=>{
      return this.sortingByPopularity(starOne, starTwo, 'popularity')
    })
    this.setState({
      currStars:sortedList
    })
  }

  handleDelete=(id)=>{
    const newList = this.state.currStars.filter(star=>{
      if(star.id!==id){
        return true
      }
      else{
        return false
      }
    })
    this.setState({
      currStars:newList
    })
  }

  render(){
    return(
      <div className='main'>
        <button className="random-button" onClick={this.handleRandomStars}>Random Star</button>
        <button className="sort-by-name-button" onClick={this.handleSortByName}>Sort By Name</button>
        <button className="sort-by-pop-button" onClick={this.handleSortByPopularity}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.currStars.map(star=>{
                return(
                <tr key={star.id}>
                  <td><img src={star.pictureUrl} alt=""></img></td>
                  <td>{star.name}</td>
                  <td>{star.popularity}</td>
                  <td><button className="delete-button" onClick={()=>{this.handleDelete(star.id)}}>Delete</button></td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
