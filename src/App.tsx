import './App.css'
import { FC } from 'react'

// TypeScript version of the App component
// In JS: function App() { ... }
// In TS: We use FC (Function Component) type for better type safety
const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Your TypeScript React App</h1>
        <p>Successfully migrated from JavaScript to TypeScript!</p>
      </header>
    </div>
  )
}

export default App
