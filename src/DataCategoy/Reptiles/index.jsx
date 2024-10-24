import lizardPic from '../../assets/Reptiles/lizard.png'
import partenite from '../../assets/Reptiles/partenite.png'
import turtlePic from '../../assets/Reptiles/turtle.png'
import {FrillNeckedLizard, HawksbillTurtle, Perentie} from '../../Data/Data.js'

export const reptileData = {
    title: "Reptiles",
    content: [
      {
        header: 'Frill-Necked Lizard',
        image: lizardPic,        
        text: FrillNeckedLizard.smallDescription,
        lifeSpan: FrillNeckedLizard.lifespan,
        food: FrillNeckedLizard.food,
        description: FrillNeckedLizard.description,
        length: FrillNeckedLizard.length,
        weight: FrillNeckedLizard.weight,
        found: FrillNeckedLizard.found,
        buttonText: "Read More"
      },
      {
        header: 'Parentie',
        image: partenite,        
        text: Perentie.smallDescription,
        lifeSpan: Perentie.lifespan,
        food: Perentie.food,
        description: Perentie.description,
        length: Perentie.length,
        weight: Perentie.weight,
        found: Perentie.found,
        buttonText: "Read More"
      },
      {
        header: 'Hawksbill Turtle',
        image: turtlePic,        
        text: HawksbillTurtle.smallDescription,
        lifeSpan: HawksbillTurtle.lifespan,
        food: HawksbillTurtle.food,
        description: HawksbillTurtle.description,
        length: HawksbillTurtle.length,
        weight: HawksbillTurtle.weight,
        found: HawksbillTurtle.found,
        buttonText: "Read More"
      }
    ]
  };