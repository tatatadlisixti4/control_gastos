import {categories} from "../data/categories"
import {useBugdet} from "../hooks/useBudget"
import {ChangeEvent} from "react"

export default function FilterByCategory() {
    const {dispatch} = useBugdet()
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({type: 'add-filter-category', payload: {id: e.target.value}})
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-10">
            <form>
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <label htmlFor="category">Filtrar Gastos</label>
                    <select 
                        id="category"
                        className="flex-1 bg-slate-100 p-3 rounded"
                        onChange={handleChange}

                    >
                        <option value="">-- Todas las Categorías --</option>
                        {categories.map(category => (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    )
}

