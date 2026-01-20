import { dayjs } from "dayjs"

//seleciona as sessões manha, tarde e noite

const periodMornig = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNigth = document.getElementById("period-night")

export function schedulesShow( { dailySchedules}){
    try {
        periodMornig.innerHTML = ''        
        periodAfternoon.innerHTML = ''
        periodNigth.innerHTML = ''
    } catch (error) {
        console.log(error)
        alert("Não foi possível carregar os agendamentos")
    }

}