import { buildings } from "../buildings"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  // In un'app reale, qui avresti una query al database per aggiungere un edificio
  buildings.push(body.buildingName)
  return { success: true }
})
