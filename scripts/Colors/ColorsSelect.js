import { useColors, getColors} from "./ColorsProvider.js"

const contentTarget = document.querySelector(".ColorsPreview")
const eventHub = document.querySelector(".ColorsPreview");

eventHub.addEventListener("change", event => {
	if (event.target.id === "colorSelect"){
		const customEvent = new CustomEvent("ColorChosen", {
			detail: {
				chosenColor : parseInt(event.target.value),
				colorId: event.target.id,
			}
		})
		eventHub.dispatchEvent(customEvent)
	}
})


export const ColorSelect = () => {
	getColors()
	.then(() => {
        const colorArray = useColors()
        render(colorArray)
    })
}

const render = theColorsArray => {
	contentTarget.innerHTML = `
		<select class="dropdown" id="colorSelect">
			<option value="0">Choose a color</option>
			${theColorsArray.map(obj => {
                    return `<option value="${ obj.id }">${ obj.color }</option>`
                }).join("")
            }
		</select>
	`
}