import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard'
import Error from './pages/Error'
import Main, { mainLoader } from './layouts/Main'
import { logoutAction } from './actions/logout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ExpensesPage, { expenseAction, expensesLoader } from './pages/ExpensesPage'
import BudgetPage, { budgetAction, budgetLoader } from './pages/BudgetPage'
import { deleteBudget } from './actions/deleteBudget'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        errorElement: <Error />,
        action: budgetAction,
        children: [
          {
            path: "delete",
            action: deleteBudget
          }
        ]
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expenseAction,
        errorElement: <Error />
      },
      {
        path: "logout",
        action: logoutAction
      }

    ]
  },

])
const App = () => {
  return (
    <div className='App'>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App