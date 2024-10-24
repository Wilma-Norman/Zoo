import echidnaPic from '../../assets/Mammals/echidna.png'
import quokkaPic from '../../assets/Mammals/Quokka.png'
import devilPic from '../../assets/Mammals/tasmanian.png'
import {Echidna, TasmanianDevil, quokka} from '../../Data/Data.js'

export const mammalsData = {
    title: "Mammals",
    content: [
      {
        header: 'Echidna',
        image: echidnaPic,
        text: Echidna.smallDescription,
        lifeSpan: Echidna.lifespan,
        food: Echidna.food,
        description: Echidna.description,
        length: Echidna.length,
        weight: Echidna.weight,
        found: Echidna.found,
        buttonText: "Read More"
      },
      {
        header: 'Quokka',
        image: quokkaPic,
        text: quokka.smallDescription,
        lifeSpan: Echidna.lifespan,
        food: quokka.food,
        description: quokka.description,
        length: quokka.length,
        weight: quokka.weight,
        found: quokka.found,
        buttonText: "Read More"
      },
      {
        header: 'Tasmanian Devil',
        image: devilPic,
        text: TasmanianDevil.smallDescription,
        lifeSpan: TasmanianDevil.lifespan,
        food: TasmanianDevil.food,
        description: TasmanianDevil.description,
        length: TasmanianDevil.length,
        weight: TasmanianDevil.weight,
        found: TasmanianDevil.found,
        buttonText: "Read More"
      }
    ]
  };
  