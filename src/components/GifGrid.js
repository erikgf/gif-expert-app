import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { PropTypes } from "prop-types";

export const GifGrid = ( {category} ) => {
 /* Este es un contenedor de varias cosas, es un grid, ergo
 aca deberiamos obtener un api donde vamos a usar varios objetos
 */
    const { images, isLoading } = useFetchGifs( category );

    return (
        <div>
            <h3>{category}</h3>
            {
                isLoading 
                ? (<h2>Cargando...</h2>) : 
                (                    
                    <div className="card-grid">
                        {
                            images.map((image)=>{
                                return <GifGridItem { ...image} key={image.id} />
                            })
                        }
                    </div>
                )
           }
        </div>
    )
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};