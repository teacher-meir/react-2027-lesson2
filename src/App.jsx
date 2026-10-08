import './App.css'
import Card from './Card'

function App() {
  return (
    <>
      <Card />
      <Card title='sara' colors={['pink', 'red']} />
      <Card title='rivka' colors={['blue', 'green', 'red', 'red']} />
      <Card title='lea' />
    </>
  )
}

export default App
