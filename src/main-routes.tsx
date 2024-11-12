import { Route, Routes } from "react-router-dom"
import { FormBudget } from "./pages/form-budget"

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FormBudget />} />
    </Routes>
  )
}