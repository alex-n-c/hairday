import { scheduleFetchByDay } from "../../services/schelude-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"
import { hoursLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export async function scheduleDays(){
    //Obtem a data do input
    const date = selectedDate.value

    //Busca os agendamentos do dia 
    const dailySchedules = await scheduleFetchByDay({date})
    
    //Exibe os agendamentos
    schedulesShow({dailySchedules})   
    
    //Renderiza as horas disponiveis
    hoursLoad({date})
}