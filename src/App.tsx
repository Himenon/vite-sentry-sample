import './App.css'

function App() {
  const handleOnClick = () => {
    throw new Error("エラーだよー");
  }

  return (
    <div>
      <h1>Sentry Sample</h1>
      <div>
        <button onClick={handleOnClick}>Throw Error</button>
      </div>
    </div>
  )
}

export default App