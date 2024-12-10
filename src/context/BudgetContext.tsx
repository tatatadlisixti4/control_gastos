// Importaciones
import {useReducer, createContext, Dispatch, ReactNode} from "react"
import {BudgetActions, BudgetState, budgetReducer, initialState} from "../reducers/budget-reducer"

// Types Props
type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
}
type BudgetProviderProps = {
    children: ReactNode
}

// Definición de contexto: 
export const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps)

// Definición de proveedor
export const BudgetProvider = ({children} : BudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState)
    return (
        <BudgetContext.Provider // Que le vamos a proveer desde el BudgetProvider
            value={{
                state,
                dispatch
            }}
        > {children} </BudgetContext.Provider>
    )
}   
