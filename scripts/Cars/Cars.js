export const carsHTML = (carObj) => {
    return `
    <section id="carCard"${carObj.id} class="carCard">
    <h2 class="carName">${carObj.name}</h2>
    <p class="carYear">Year ${carObj.year}</p>
    <p class="carMPG">MPG ${carObj.milesPerGallon}</p>
    </section>
    `
}