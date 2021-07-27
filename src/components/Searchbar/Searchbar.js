import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../style.css';
class Searchbar extends Component {
    static propTypes = {
        query: PropTypes.string,
    };
    
    state = {
        query: ''
    };

    handleChange = event => {
        this.setState({ query: event.currentTarget.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.query)

        this.setState({query: ''})
    }

    render() {
        const { query } = this.state;

        return (
    <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
            </button>

            <input
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={query}
                onChange={this.handleChange}
            />
        </form>
    </header>
    )
}
};

export default Searchbar;