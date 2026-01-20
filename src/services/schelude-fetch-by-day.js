import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }){
    try {
        //Fazendo a requisição
        const response = await fetch(`${apiConfig.baseURL}/schedules`)       
        console.log(date)
        //Converte para JSON
        const data = await response.json()        
        
        //Filtra os agendamentos do dia
        const dailySchedules = data.filter( (schedule) => {  //No filter se usar "{" usar o "return" senao entende que é false
            return dayjs(date).isSame(schedule.when, "day")                       
        })        

        return dailySchedules           

    } catch (error) {
        console.log(error)
        alert("Não foi possível buscar os agendamentos do dia selecionado.")
    }
}