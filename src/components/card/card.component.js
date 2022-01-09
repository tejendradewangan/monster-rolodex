import React from 'react'

import './card.styles.css'


export const Card = (prop) => (
    <div className="card-container">

    	<img alt="heros" src={`https://robohash.org/hero${prop.superhero.id}?set=set2&size=180x180`} />
		<h2> {prop.superhero.name} </h2>
		<p>{prop.superhero.email}</p>
		</div>

);