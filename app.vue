<script setup lang="ts">
// Richiede l'elenco degli edifici al backend (server/api/buildings.get.ts) e lo salva in cache con key="buildings"
const { data } = await useFetch("/api/buildings", { key: "buildings" })

const newBuildingName = ref("")
const onSubmit = async () => {
  // Invia al backend la richiesta per aggiungere un edificio (server/api/buildings.post.ts)
  await useFetch("/api/buildings", {
    method: "post",
    body: {
      buildingName: newBuildingName.value,
    },
    // Quando riceve la risposta
    onResponse: async () => {
      // Pulisce la form
      newBuildingName.value = ""
      // Aggiorna i dati della richiesta con key="buildings" (ossia quella a riga 3)
      await refreshNuxtData("buildings")
    },
  })
}
</script>

<template>
  <div>
    <ul>
      <li v-for="building in data">{{ building }}</li>
    </ul>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="newBuildingName" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>
