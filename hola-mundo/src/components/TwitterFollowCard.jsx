/* eslint-disable react/prop-types */
import { useState } from "react"; 
// useState es uno de los hooks en react, que permiten agregar funcionalidad al componente.
// El useState nos va a permitir guardar una variable que nos diga si estamos o no siguiendo al usuario

export function TwitterFollowCard({formatUserName, userName, name}) { 
    const [isFollowing, setIsFollowing] = useState(false); // Asignamos un valor inicial al estado. Es decir, en este caso por default no estas siguiendo al usuario. El useState devuelve un array con dos elementos, el primero es el valor del estado y el segundo es una funcion que nos permite cambiar el valor del estado. En este caso, el valor inicial del estado es false, y la funcion que nos permite cambiar el valor del estado es la que se guarda en la variable setState

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button';
    // en caso de usar en el componente App la opcion de pasar algo envuelto dentro de una etiqueta html (puede ser texto plano, una etiqueta, incluso otro componente), aca pasariamos una prop especial que es "children". y luego en el div correspondiente en el que ahora tenemos <strong>{name}</strong>, reemplazariamos name por children
    // en caso de usar la opcion de pasar el elemento html, se debe pasar como parametro el elemento html (formattedUserName) y no la funcion que lo retorna (formatUserName)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                src={`https://unavatar.io/${userName}`} alt="Avatar Midudev" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                    {/* <span className='tw-followCard-infoUserName'>{formattedUserName}</span> */}
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}