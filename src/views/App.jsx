import api from "../services/callApi";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-red-500 font-bold underline">Hello world!</h1>
      {api.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </>
  );
}

export default App;
