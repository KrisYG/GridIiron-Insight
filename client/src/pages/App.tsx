import Button from "../components/button.tsx"
import Header from "../components/header.tsx"

function App() {
  return (
    <div className="w-full h-full">
        <Header />
      <div>
        <h1>Hello World!</h1>
        <div className="card">
          <Button />
        </div>
      </div>
    </div>
  )
}

export default App
