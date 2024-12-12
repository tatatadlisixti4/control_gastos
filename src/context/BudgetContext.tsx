// Importaciones
import {useReducer, createContext, Dispatch, ReactNode, useMemo} from "react"
import {BudgetActions, BudgetState, budgetReducer, initialState} from "../reducers/budget-reducer"

// Types Props
type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
    totalExpenses: number
    remainingBudget: number
}
type BudgetProviderProps = {
    children: ReactNode
}

// Definición de contexto: 
export const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps)

// Definición de proveedor
export const BudgetProvider = ({children} : BudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState)
    const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])
    const remainingBudget = state.budget - totalExpenses

    return (
        <BudgetContext.Provider // Que le vamos a proveer desde el BudgetProvider
            value={{
                state,
                dispatch,
                totalExpenses,
                remainingBudget
            }}
        > {children} </BudgetContext.Provider>
    )
}   
