import React from 'react';

class SearchBar extends React.Component{
    handleUpdate = (event) => {
      console.log(event.currentTarget.value)
      this.props.searchFunction(event.currentTarget.value)
    }
    render(){
        return(
            <input type="text" className="form-control form-search" 
              onChange={this.handleUpdate}
            />
        )

    }
}

export default SearchBar;