import { Injectable } from '@angular/core';
interface action {
  name:string,
  value:string
}
@Injectable({
  providedIn: 'root'
})
export class DataListService {
  readonly typeAction:action[] = [
    {
      name: "New construction",
      value: "new"
    },
    {
      name: "Buy",
      value: "buy"
    },
    {
      name: "Rent",
      value: "rent"
    },
    {
      name: "Transfer",
      value: "transfer"
    }
  ]
  readonly additions:action[] = [
    {
      name: "Living place",
      value: "living"
    },
    {
      name: "Office",
      value: "office"
    },
    {
      name: "Shop",
      value: "shop"
    },
    {
      name: "Industrial",
      value: "industrial"
    },
    {
      name: "Land",
      value: "land"
    },
    {
      name: "Investments",
      value: "investments"
    },
    {
      name: "Unique properties",
      value: "unique"
    },
    {
      name: "Business",
      value: "business"
    }
  ]
  readonly regions:action[] = [
    {
      name: "Andalucía",
      value: "andalucía"
    },
    {
      name: "Aragón",
      value: "aragón"
    },
    {
      name: "Asturias",
      value: "asturias"
    },
    {
      name: "Islas Baleares",
      value: "baleares"
    },
    {
      name: "Islas Canarias",
      value: "canarias"
    },
    {
      name: "Cantabria",
      value: "cantabria"
    },
    {
      name: "Castilla-La Mancha",
      value: "mancha"
    },
    {
      name: "Castilla y León",
      value: "león"
    },
    {
      name: "Cataluña",
      value: "cataluña"
    },
    {
      name: "Extremadura",
      value: "extremadura"
    },
    {
      name: "Galicia",
      value: "Galicia"
    },
    {
      name: "Comunidad de Madrid",
      value: "madrid"
    },
    {
      name: "Región de Murcia",
      value: "murcia"
    },
    {
      name: "Comunidad Foral de Navarra",
      value: "navarra"
    },
    {
      name: "La Rioja",
      value: "rioja"
    },
    {
      name: "Comunitat Valenciana",
      value: "valenciana"
    },
    {
      name: "País Vasco",
      value: "vasco"
    },
    {
      name: "Melilla",
      value: "melilla"
    },
    {
      name: "Ceuta",
      value: "ceuta"
    }
  ]
}
