import {useMemo} from "react"
import {useBugdet} from "../hooks/useBudget"
import ExpenseDetailt from "./ExpenseDetailt"
export default function ExpenseList() {
    const {state} = useBugdet() 
    const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses])
    return (
        <div className="mt-10">
            {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No Hay Gastos:</p> : (
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5">Listado de Gastos</p>
                    {state.expenses.map(expense => (
                        <ExpenseDetailt
                            key={expense.id}
                            expense={expense} 
                        />
                    ))}
                </>
            )}
        </div>
    )
}
