import "./index.css";
import { SearchSelect } from "./components/SearchSelect/SearchSelect";

function App() {
  return (
    <>
      <div className="bg-white text-black font-bold p-10 text-2xl">
        Simulador de Sorteio da Copa do Mundo
        <div className="text-blue-500 mt-10">
          <SearchSelect />
        </div>
      </div>
    </>
  );
}
export default App;
