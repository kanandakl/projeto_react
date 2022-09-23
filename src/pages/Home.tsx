import { Menu } from "../components/Menu";
import img from '../img/home.jpg'

export const Home = () => {
    return(
        <>
        <Menu />
        <img src={img} alt="" className="" />
        <main>
             <h1>Ceará Sporting Club</h1>
             <br></br>
             <p>Ceará Sporting Club é um clube poliesportivo brasileiro.</p>
             <br></br>
               <p>Sua sede situa-se em Fortaleza, na Região Nordeste do Brasil.</p>
               <br></br>
                <p>O clube foi fundado na noite do dia 2 de junho de 1914, pelas ruas do histórico bairro do Centro da Capital.</p>
        </main>        
        </>
    )
}
 