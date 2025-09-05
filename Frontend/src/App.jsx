import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import ListProduct from "./component/ListProduct.jsx"
import ProductAdd from "./component/ProductAdd.jsx"
import ProductEdit from "./component/ProductEdit.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/add" element={<ProductAdd />} />
        <Route path="/edit/:id" element={<ProductEdit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App  