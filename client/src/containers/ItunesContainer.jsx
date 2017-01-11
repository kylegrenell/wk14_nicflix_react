var React = require('react');

var SongList = require('../components/SongList');

var ItunesContainer = React.createClass({

 getInitialState: function () {
   return { albums: []
   };
 },

  componentDidMount(){
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=200/json";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      this.setState({
        data: JSON.parse(request.responseText)
      },
      );
    }.bind( this );
    request.send( null );
  },

  render() {

    if ( this.state.data ) {
      var options = this.state.data.feed.entry.map(function(songData, index){
          return <SongList
          key={index}
          songData={songData}
          />
        }
        );

      return (
        <div className="itunes">
        <h1>A big list of not so good songs....</h1>
        { options }
        </div>
        )
    } else {
      return <h1>nae working mate</h1>
    }
  }

});

module.exports = ItunesContainer;