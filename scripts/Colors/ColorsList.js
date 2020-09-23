// import { ColorHTML } from "./Color.js"
// import { getColors, useColors } from "./ColorProvider.js"


// export const ColorList = () => {
// 	getColors().then(()=> {
// 		const colorArray = useColors();
// 		renderColors(colorArray);
// 	})
// }

// const renderColors = (colorsArray) => {
// 	const domElement = document.querySelector(".colorsContainer");
// 	let HTMLArray = colorsArray.map(singleColor => {
// 		return ColorHTML(singleColor);
//     })
// 	domElement.innerHTML = HTMLArray.join("");
// }