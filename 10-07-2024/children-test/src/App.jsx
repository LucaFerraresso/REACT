import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="big">
      <Layout>
        <div className="children">
          <button
            onClick={(e) => console.log(e.target.innerText)}
            className="children3"
          >
            Layout's children
          </button>
        </div>
      </Layout>
    </div>
  );
}

export default App;
