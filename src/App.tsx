import './App.css'

const version = process.env.APP_VERSION;

function App() {
  const handleOnClick = () => {
    throw new Error("エラーだよー");
  }

  return (
    <div>
      <h1>Sentry Sample {version}</h1>
      <div>
        <button onClick={handleOnClick}>Throw Error</button>
      </div>
    </div>
  )
}

export default App
