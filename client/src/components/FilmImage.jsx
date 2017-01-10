var React = require('react');

var FilmImage = function(props){
  if(!props.image){
   return <h4> Nae Nic here.</h4> 
  }
  return(
  <div className='film-image'>
  <p>{props.image.summary}</p>
  <p>Current rating: {props.image.rating}</p>
  <img src={props.image.poster}/>
  <a href="http://i.imgur.com/pwsKLTw.jpg"><button>click nic</button></a>
  
  </div>
  );
};

module.exports = FilmImage;