import FirstColumn from './components/FirstColumn'
import SecondColumn from './components/SecondColumn'
import './App.scss'

const App = () => {
  return (
    <div className="app">
      <div className="card">
        <FirstColumn />
        <SecondColumn />
      </div>
    </div>
  )
}

export default App
