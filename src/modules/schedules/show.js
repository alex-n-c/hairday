import dayjs from "dayjs"

//seleciona as sessões manha, tarde e noite
const periodMornig = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNigth = document.getElementById("period-night")

export function schedulesShow( { dailySchedules }){
    try {
        periodMornig.innerHTML = ''        
        periodAfternoon.innerHTML = ''
        periodNigth.innerHTML = ''

        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

            //adiciona o id do agendamento
            item.setAttribute("data-id", schedule.id)
            
            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name            

            //Cria o icone cancelar
            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")

            // Adiciona: Tempo, nome e icone;
            item.append(time, name, cancelIcon)

            // obtem somente a hora
            const hour = dayjs(schedule.when).hour()

            //Renderiza o agedamento na sessão (Manha, tarde ou noite)
            if(hour <= 12){
                periodMornig.appendChild(item)
            }else if((hour > 12) && (hour <= 18)){
                periodAfternoon.appendChild(item)
            }else{
                periodNigth.appendChild(item)
            }

         });

    } catch (error) {
        console.log(error)
        alert("Não foi possível carregar os agendamentos")
    }

}