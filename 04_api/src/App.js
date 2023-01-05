import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import ImageShow from "./components/ImageShow";
function App() {

    const handleSubmit = (term) => {
        console.log('Do a Search with : ', term)
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
        </div>
    );
}

export default App;