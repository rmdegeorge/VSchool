import React from 'react';
import Hero from './Hero';

export default function SuperHeroList(props) {
  const mappedHeroes = props.heroes.map((hero,i) => {
    return <Hero  key = {hero.name + i}
                  name = {hero.name}
                  catchPhrase = {hero.catchPhrase}
                  image = {hero.imageName}
                  />

  })
  return (
    <div className="SuperHeroList">
      {mappedHeroes}
    </div>
  )
}