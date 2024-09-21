import { MyContext } from "./App"
import { useContext } from "react"

function MyComponent () {
	const contextValue = useContext(MyContext)

	return (
		<div>
			<p>Testando valor atual do contexto: {contextValue}</p>
		</div>
	)
}

export default MyComponent
