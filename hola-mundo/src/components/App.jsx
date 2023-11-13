import '../css/App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export default function App() {
    // funcion que se paso como parametro en el componente TwiiterFollowCard y que se define aca para que formatee el nombre de usuario agregandole un @ y se
    const formatUserName = (userName) => `@${userName}`

    // otra opcion es pasar un elemento html como parametro
    //const formattedUserName = (userName) => <span>@{midudev}</span>  Aqui la idea seria usarlo dinamicamente pero como adentro de cada componente ya estoy definiendo userName, le definimos uno afuera para la prueba

    return (
        <section className='App'>
            <TwitterFollowCard
                formatUserName={formatUserName}
                // formattedUserName={formattedUserName}
                userName='midudev'
                name='Miguel Angel Moran' />
                {/* podria pasarse tambien como texto plano lo que ahora esta como prop, ejemplo el name. En ese caso, en el componente hijo (twiiterFollowCard) pasariamos una prop especial que es "children" => ir a mirar alla. Tener en cuenta que con la prop children no solo se puede pasar texto plano sino tb por ejemplo otra etiqueta html o incluso un componente */}
            <TwitterFollowCard
                formatUserName={formatUserName}
                // formattedUserName={formattedUserName} 
                userName='pheralb'
                name='Pablo Hernandez' />
            <TwitterFollowCard
                formatUserName={formatUserName}
                // formattedUserName={formattedUserName}
                userName='vxnder'
                name='Vanderhart' />
        </section>
    )
}