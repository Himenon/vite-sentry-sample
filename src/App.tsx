import './App.css'

const version = process.env.APP_VERSION;

function App() {
  const handleOnClick = () => {
    throw new Error("エラーだよー");
  }

  const handleOnClick2 = () => {
    throw new Error(`Please Fix Me: ${Math.random()}`);
  }

  return (
    <div>
      <h1>Sentry Sample {version}</h1>
      <div>
        <button onClick={handleOnClick}>Throw Error {version}</button>
        <button onClick={handleOnClick2}>Random Error {version}</button>
      </div>
    </div>
  )
}

export default App
