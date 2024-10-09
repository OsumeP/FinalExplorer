interface categoriesProps{
    params: {
        categories: string[],
    },

    searchParams: {
        nombre?: string,
    }
}

export default function Categories(props: categoriesProps){
    const {categories} = props.params;
    const {nombre} = props.searchParams;
    return (
        <div>
            <h1>Game: {categories}</h1>
            <p> Buscaste al personaje: {nombre}</p>
        </div>
    )
}