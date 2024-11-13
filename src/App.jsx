import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { ColorPicker } from 'colorPicker/ColorPicker'
import { useColors } from 'colorPicker/useColors'
import { ColorList } from 'colorList/ColorList'

function App() {
  //const [count, setCount] = useState(0)
  const { color, handleChangeColor, handleSubmitSaveColor, onSubmit, colorList } = useColors();
  //const colorsList = ['#0fcc7a', '#c90fcc', '#cc480f']
  //const colorsList = []

  console.log(useColors())

  return (
    <>
        <h1 className="text-center bg-dark text-white p-2 m-0 w-100">Color Picker</h1>
        <div className="container-fluid mt-0">
            <div className="row">
                <div className="col-12 col-md-4">
                    <ColorList colorsList={colorList} />
                </div>
                <div className="col-12 col-md-8">
                    <ColorPicker colorList={colorList} color={color} handleChangeColor={handleChangeColor} handleSubmitSaveColor={handleSubmitSaveColor} onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    </>
  )
}

export default App
