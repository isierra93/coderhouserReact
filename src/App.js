import ItemDetailContainer from "./components/container/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="BIENVENIDOS!"/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
