var React = require('react');
var FilmSelector = require('../components/FilmSelector');
var FilmImage = require('../components/FilmImage');

var FilmContainer = React.createClass({
  getInitialState: function(){
    return{
      films: [],
      image: null
    };
  },

  componentDidMount(){
    var url = "http://netflixroulette.net/api/api.php?actor=Nicolas%20Cage";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState({
        films: data
      });
    }.bind(this);
    request.send(null);
  },

  render: function(){
    return (
      <div className='film-box'>
      <h2> NicFlix </h2>
      <FilmSelector 
      films={this.state.films}
      selectFilm={this.setFilm}
      />
      <FilmImage 
      image={this.state.image}
      />
      </div>
    );
  },

  setFilm: function(film){
    this.setState({image: film})
  }
});


module.exports = FilmContainer;