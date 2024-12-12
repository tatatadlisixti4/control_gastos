import {useMemo} from "react"
import {useBugdet} from "../hooks/useBudget"
import ExpenseDetailt from "./ExpenseDetailt"
export default function ExpenseList() {
    const {state} = useBugdet() 
    const filteredExpenses = state.currentCategory? state.expenses.filter(expense => expense.category ===  state.currentCategory): state.expenses
    const isEmpty = useMemo(() => filteredExpenses.length === 0, [filteredExpenses])
    
    return (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
            {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No Hay Gastos:</p> : (
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5">Listado de Gastos</p>
                    {filteredExpenses.map(expense => (
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
