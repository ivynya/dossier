import { writable } from "svelte/store"

export interface Dossier {
  name: string
  items: DossierItem[]
}

export interface DossierItem {
  label: string
  sort: number
  type: string
}

export const dossier = writable<Dossier>({name: "Dossier", items: []});