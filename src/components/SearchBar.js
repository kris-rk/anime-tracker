import React from 'react'
import Template from './Template';

function SearchBar(props) {
	return (
		<main>
			<div className="main-head">
                <h1> Koushik's Shitty MAL copy </h1>
				<form 
					className="search-box"
					onSubmit={props.HandleSearch}>
					<input 
						type="search"
						placeholder="Search for an anime..."
						required
						value={props.search}
						onChange={e => props.SetSearch(e.target.value)}/>
				</form>
			</div>
			<div className="anime-list">
				{props.animeList.map(anime => (
					<Template
						anime={anime}
						key={anime.mal_id} />
				))}
			</div>
		</main>
	)
}

export default SearchBar
