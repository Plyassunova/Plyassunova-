const moscow = document.getElementById("Moscow")
const tucson = document.getElementById("Tucson")
const miami = document.getElementById("Miami")

async function Api() {
    const respons_moscow = await fetch("https://api.open-meteo.com/v1/forecast?latitude=55.7522&longitude=37.6156&current=temperature_2m&hourly=temperature_2m")
    const respons_tucson = await fetch("https://api.open-meteo.com/v1/forecast?latitude=32.2217&longitude=-110.9265&current=temperature_2m&hourly=temperature_2m")
    const respons_miami = await fetch("https://api.open-meteo.com/v1/forecast?latitude=25.7743&longitude=-80.1937&current=temperature_2m&hourly=temperature_2m")
    const data_moscow = await respons_moscow.json()
    const data_tucson = await respons_tucson.json()
    const data_miami = await respons_miami.json()
    return [data_moscow, data_tucson, data_miami]
}

async function output() {
    try {
        let out = await Api()
        console.log(out)
        moscow.textContent = `Air temperature: ${out[0].current.temperature_2m} \u00B0C`
        tucson.textContent = `Air temperature: ${out[1].current.temperature_2m} \u00B0C`
        miami.textContent = `Air temperature: ${out[2].current.temperature_2m} \u00B0C`
    }
    catch(error) {
        console.log(error)
    }
    finally {
        setTimeout(output, 10000)
    }   
}

output()
