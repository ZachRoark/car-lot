export const carsHTML = (carObj) => {
    return `
    <section id="carCard"${carObj.id} class="carCard">
        <strong class="carName">${carObj.name}</strong>
        <p class="carYear">Year ${carObj.year}</p>
        <p class="carMPG">MPG ${carObj.milesPerGallon}</p>
    </section>
    `
}