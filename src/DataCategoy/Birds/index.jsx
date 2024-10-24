import cassowaryPic from '../../assets/Bird/cassowary.png'
import kookoburraPic from '../../assets/Bird/kookaburra.png'
import yellowPic from '../../assets/Bird/yellow.png'
import { Cassowary, kookaburra, yellowTailedBlackCockatoo } from '../../Data/Data.js';


export const birdData = {
    title: "Birds",
    content: [
      {
        header: 'Cassowary',
        image: cassowaryPic,
        text: Cassowary.smallDescription,
        lifeSpan: Cassowary.lifespan,
        food: Cassowary.food,
        description: Cassowary.description,
        length: Cassowary.length,
        weight: Cassowary.weight,
        found: Cassowary.found,
        buttonText: "Read More"
      },
      {      
        header: 'Yellow-tailed Black Cockatoo',
        image: yellowPic,
        text: yellowTailedBlackCockatoo.smallDescription,
        lifeSpan: yellowTailedBlackCockatoo.lifespan,
        food: yellowTailedBlackCockatoo.food,
        description: yellowTailedBlackCockatoo.description,
        length: yellowTailedBlackCockatoo.length,
        weight: yellowTailedBlackCockatoo.weight,
        found: yellowTailedBlackCockatoo.found,
        buttonText: "Read More"
      },
      {
        header: 'Kookaburra',
        image: kookoburraPic,
        text: kookaburra.smallDescription,
        lifeSpan: kookaburra.lifespan,
        food: kookaburra.food,
        description: kookaburra.description,
        length: kookaburra.length,
        weight: kookaburra.weight,
        found: kookaburra.found,
        buttonText: "Read More"
      }
    ]
  };