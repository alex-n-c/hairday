
import { scheduleDays } from "../schedules/load"
//selecionar o input date
const selectedDate = document.getElementById("date")

selectedDate.onchange = () => scheduleDays()