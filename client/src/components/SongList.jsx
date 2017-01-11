var React = require('react');

var SongList = React.createClass({

  render: function() {
    return (
      <div>
      <img
        className="Top20Image"
        src={ this.props.songData["im:image"][2].label }
      />
      <p>{this.props.songData.title.label}</p>
      <p>{this.props.songData["im:price"].label}</p>
      </div>
    )
  }

});

module.exports = SongList;
