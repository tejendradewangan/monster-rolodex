import React from 'react';
import './card-list.styles.css'
import { Card } from '../card/card.component'


export const CardList = (prop) => {
    console.log(prop)
    return (
        <div className="card-list">
	{
		prop.superheros.map(superhero => 
			 <Card key={superhero.id} superhero={superhero} />) 
	}
	</div>
    )
}