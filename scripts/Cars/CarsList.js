import { useCars, getCars } from "./CarsProvider.js";
import {CarsHtml} from "./Cars.js"

const contentTarget = document.querySelector(".carsDrop");
const eventHub = document.querySelector("#main")

export const carList = () => {
    getCars().then(() =>{
        const carsArray = useCars();
        render(carsArray);
    })
}

eventHub.addEventListener("colorChosen", event =>{
    if(event.detail.chosenColor !== "0"){ 
        const matchingCars = useCars().filter(carObj => {
            return carObj.colorId === event.detail.chosenColor
        });
        render(matchingCars)    

    }
    else render(useCars())
    })


const render = (carsArray) => {
    const domElement = document.querySelector(".carContainer")
    let HTMLArray = carsArray.map(oneCar => {
        return carHTML(oneCar);
    })
    domElement.innerHTML = HTMLArray.join("");

}
