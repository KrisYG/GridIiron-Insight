import Button from "../components/button.tsx"
import Header from "../components/header.tsx"

function Homepage() {
  return (
    <div className="w-full h-full">
        <Header />
      <div className="mx-12 px-4 mt-8">
        <h1 className="text-xl">Welcome to Gridiron Insight!</h1>
        <div className="card mt-4">
          <div className="h-64 border border-accent">
            <a></a>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;