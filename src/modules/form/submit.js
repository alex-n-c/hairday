import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//Data atual para input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual
selectedDate.value = inputToday

//Definindo a data minima
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        const name = clientName.value.trim()
        if (!name) {
            return alert("Informe o nome do cliente")
        }
        
        const hourSelected = document.querySelector(".hour-selected")
        if(!hourSelected){
            return alert("Selecione a hora.")
        }
        const [hour] = hourSelected.innerText.split(":")
        
        const when = dayjs(selectedDate.value).add(hour, "hour")
        // const when = dayjs(selectedDate.value)
        //     .hour(Number(hour))
        //     .minute(0)
        //     .second(0)
        //     .format("YYYY-MM-DDTHH:mm:ss")              
        
        //Gerando um ID
        const id = new Date().getTime()       

        await scheduleNew({
            id,
            name,
            when 
        })

    } catch (error) {
       alert("Não foi possível realizar o agendamento")  
       console.log(error)
    }
}