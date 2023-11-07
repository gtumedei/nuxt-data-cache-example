import { buildings } from "../buildings"

export default defineEventHandler(() => {
  // In un'app reale, qui avresti una query al database per ottenere l'elenco degli edifici
  return buildings
})
