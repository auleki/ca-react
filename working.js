const vehicle = {
  brand: "Toyota",
  year: 2005,
  color: "Magenta",
  owner: "Mark Author",
  insured: false
}

const vehicleString = JSON.stringify(vehicle)

localStorage.setItem('car', JSON.stringify(vehicleString))

const savedVehicleString = localStorage.getItem('car')

const savedVehicle = JSON.parse(savedVehicleString)

console.log(savedVehicle)