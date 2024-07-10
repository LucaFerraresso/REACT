import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <div>
          <button
            onClick={(e) => console.log(e.target.innerText)}
            className="children3"
          >
            Layout's children
          </button>
        </div>
      </Layout>
    </>
  );
}

export default App;
