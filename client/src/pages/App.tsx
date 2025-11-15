import Button from "../components/button.tsx"
import Header from "../components/header.tsx"

function App() {
  return (
    <div className="w-full h-full">
        <Header />
      <div className="mx-12 mt-4">
        <h1 className="text-xl">Welcome to Gridiron Insight!</h1>
        <div className="card">
          <Button />
          <button className="btn btn-outline"></button>
        </div>
      </div>
    </div>
  )
}

export default App
