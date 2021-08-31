import './App.css';
import publications from "./publications.json"

function App() {
  return (
    <div className="App">
      <button className="menu-icon">
        <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
        </svg>
      </button>
     {publications["publications"].map((publ, index) => {
       return (
       <div className="publications">
         <h2>{publ.title}</h2>
         <h3>{publ.subtitle}</h3>
         <span>{publ.abstract}</span>
          <button>PAPER PDF</button>
       </div>
       )
     })}
    </div>
  );
}

export default App;
