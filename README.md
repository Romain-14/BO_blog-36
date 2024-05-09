# Correction blog-bo

La plupart des composants sont commentés

## structure dossier stories

- Index -> page principale
    - utilise les composants :
        - Menu
        - Table
            - utilise le composant RowStory
        - Modal
- AddStory et EditStory -> pages secondaires
    - utilisent le composant Form 

Le composant form est utilisé pour 2 actions différentes mais on utilise les props pour le personnaliser


## Custom Hooks

C'est une fonction qui commence par `use` suivi du nom du hook et qui peut utiliser d'autres hooks ..
Il peut retourner n'importe quel type de données.

Le hook suivant permettra de changer le title de l'onglet à notre convenance, là où on l'appelera (voir exemple d'après dans le composant Home )

useTitle :
```jsx
function useTitle(title) {
	useEffect(() => {
		document.title = title + " - Blog Admin";
	}, [title]);

	return null;
}

export default useTitle;
```

```jsx
function Home() {

    useTitle("Home");

	return (
		<main id="home">
        {/* reste du code */}        
    )
}
```

## Toast

Ce composant est utilisé afin d'afficher un message/une notification lorsqu'une story a été ajouté ou modifié.
Ce message indique l'action et précise qu'il y aura une redirection dans X secondes 