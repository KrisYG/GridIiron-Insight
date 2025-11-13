import './App.css'
import Button from "../components/button.tsx"
import Header from "../components/header.tsx"

function App() {
  return (
    <div>
      <Header />
      <h1>Hello World!</h1>
      <div className="card">
        <Button />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
