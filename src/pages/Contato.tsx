import { Menu } from "../components/Menu";
import img from '../img/contato.jpg'

export const Contato = () => {
    return (
        <>
            <Menu />
            <img src={img} alt="" className="" />
            <main>
                <h1>Contato</h1>
                <br></br>
                <p>Atendimento por e-mail</p>
                <br></br>
                
                <form action="">
                    <div>
                        <label form="name">Nome:</label>
                        <br></br>
                        <input type="text" id="name" />
                        <br></br>
                    </div>
                    <div>
                        <label form="email">E-mail:</label>
                        <br></br>
                        <input type="email" id="email" />
                        <br></br>
                    </div>
                    <div>
                        <label form="mensagem">Mensagem:</label>
                        <br></br>
                        <textarea id="mensagem"></textarea>
                        <br></br>
                    </div>
                    <br></br>
                    <div className="button">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </main>
        </>
    )
}