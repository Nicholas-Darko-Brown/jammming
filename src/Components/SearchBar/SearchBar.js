import React from 'react'
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            term: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    search (){
        this.props.onSearch(this.state.term)
    }

    handleTermChange (event){
        this.setState({term: event.target.value});
    }

    handleKeyPress (){
        const inputSelect = document.querySelector('.InputSearch');
        inputSelect.addEventListener('keyup', (event) => {
            if (event.keyCode === 13){
                this.props.onSearch(this.state.term)
            }
        })
    }

    render (){
        return (
            <div className="SearchBar">
                <input 
                    className="InputSearch" 
                    onChange={this.handleTermChange}  
                    onKeyDown={this.handleKeyPress}
                    placeholder="Enter A Song, Album, or Artist" 
                />
                <button onClick={() => this.search(this.state.term)} className="SearchButton">SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;
