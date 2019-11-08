import React from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            gifs: [],
            selectedGifId: "zCq3TyuABrRrG",
        }
    }

    search = (query) => {
      giphy("8S7fdpfVuZcl0XduQVj2DefChUQie7uo").search({
          q: query,
          rating: 'g',
      }, (error, result) => {
          this.setState({
              gifs: result.data
          });
      });
    }

    selectGif = (id) => {
        this.setState({
            selectedGifId: id
        })
    }

    render(){
        return(
            <div>
                <div className="left-scene">
                    <SearchBar searchFunction={this.search}/>
                    <div className="selected-gif">
                        <Gif id={this.state.selectedGifId}/>
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
                </div>
            </div>
        )

    }
}

export default App;