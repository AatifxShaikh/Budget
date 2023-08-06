import { redirect } from 'react-router-dom'
import { deleteItem } from '../helper'
import { toast } from 'react-toastify'
export async function logoutAction() {
    deleteItem({
        key: "userName"
    })
    deleteItem({
        key: "budgets"
    })
    deleteItem({
        key: "expenses"
    })
    toast.success("You have deleted your account!")

    return redirect("/")
}