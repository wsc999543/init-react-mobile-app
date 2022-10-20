import { Button, Toast } from 'antd-mobile'

function App() {
  const showInfo = () => {
    Toast.show({ content: 'Hello World' })
  }
  return (
    <div className="App">
      <Button block color="primary" size="large" onClick={showInfo}>
        Block Button
      </Button>
    </div>
  )
}

export default App
