function SearchBar({ onSubmit }) {

    const handleClick = () => {
        onSubmit('cars')
    };

    return (
        <div>
            <input type="text" />
            <button onClick={ handleClick }> Submit </button>
        </div>

    );
}

export default SearchBar;