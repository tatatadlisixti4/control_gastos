import {useContext} from "react"
import {BudgetContext} from "../context/BudgetContext"

export const useBugdet = () => {
    const context = useContext(BudgetContext)
    if(!context){
        throw new Error('useBudget must be used within a BudgetProvider')
    }
    return context
}