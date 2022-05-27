//the card that is used for the website
import React from 'react';

function Template({anime}) {
	const getSelectedAnime = () => {
		
	}
	const handleList = (e)  => {
		e.preventDefault();
		var check = window.confirm("Would you like to add this anime to your list?");
		if(check) {

		}else {

		}
	};
	
	return (
		<article className="card">
			<a 
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={anime.image_url} 
						alt="Anime Image" />
				</figure>
				<h3>{ anime.title }</h3>
				<a  
				onClick={handleList}
				className = "list-text" 
				href = "">add to list</a>
			</a>
		</article>
	)
    }

export default Template;