import { writable } from "svelte/store"

export interface Dossier {
  name: string
  items: DossierItem[]
}

export interface DossierItem {
  label: string
  value?: string

  sort: number
  type: string
  
  size: {
    x?: number
    y?: number
  }
}

export const dossier = writable<Dossier>({name: "Dossier", items: []});