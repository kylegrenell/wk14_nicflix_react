var React = require('react');

var FilmSelector = React.createClass({
  getInitialState: function(){
    return {selectedIndex: undefined}
  },

  render: function(){
    var options = this.props.films.map(function(film, index){
      return(<option value={index} key={index}> {film.show_title} </option>)
    });

    return(
      <select 
      id="films"
      value={this.state.selectedIndex}
      onChange={this.handleChange}
      >
      {options}
      </select>
    );
  },

  handleChange: function(event){
    var newIndex = parseInt(event.target.value);
    this.setState({selectedIndex: newIndex});
    var film = this.props.films[newIndex];
    this.props.selectFilm(film);
  }
});

module.exports = FilmSelector;