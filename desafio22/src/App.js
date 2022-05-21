import Card from "./componentes/Card";
import ButtonConvite from "./componentes/ButtonHeader";
import { GlobalStyles } from "./estilos/globalstyles";
import {
    Autor,
    AutorDiv,
    DesComunidade,
    Footer,
    Header,
    HeaderGit,
    Li,
    Logo,
    LogoP,
    SecCards,
    SubTitulo,
    Texto,
    Titulo,
    Ul,
    UlCard,
} from "./estilos/styles";

function App() {
    return (
        <>
                <GlobalStyles />
                <Header>
                    <Logo src="./images/logo.webp" alt="Codelândia"/>
                    <nav>
                        <Ul>
                            <Li><HeaderGit href="https://github.com/TiagoTNX" target="_blank">meu github</HeaderGit> </Li>
                            <Li><ButtonConvite link="https://discord.gg/wNCWTVuxyz" text="entrar na comunidade" target="_blank" /></Li>
                        </Ul>
                    </nav>
                </Header>
                <DesComunidade>
                    <SubTitulo>comunidade dev</SubTitulo>
                    <Titulo>Projetos da comunidade Codelândia</Titulo>
                    <Texto>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec felis ligula, accumsan nec cursus in, eleifend sit
                        amet dui.
                    </Texto>
                </DesComunidade>
                <SecCards>
                    <UlCard>
                        <Card
                            src={"/images/reactJS.webp"}
                            titulo="Comunidade Dev"
                            descricao="Página criada durante o desafio 22 da comunidade Codelândia e com o intuito de praticar ReactJS."
                            link1={"http://comunidade-dev.vercel.app/"}
                            link2={"https://github.com/TiagoTNX/Codelandia-desafio22"}
                        />
                        <Card
                            src={"/images/nestJS.webp"}
                            titulo="Desafio Back-end Alura"
                            descricao="API-REST criada durante o desafio Back-End Alura. Foram utilizados NestJS, Prisma e TypeScript."
                            link1={"#"}
                            link2={"https://github.com/TiagoTNX/Desafio-Back-End-Alura"}
                        />
                        <Card
                            src={"/images/markdown.webp"}
                            titulo="README para o perfil do GitHub"
                            descricao="README personalizado para o meu perfil do GitHub."
                            link1={"https://github.com/TiagoTNX"}
                            link2={"https://github.com/TiagoTNX/TiagoTNX"}
                        />
                        <Card
                            src={"/images/reactJS.webp"}
                            titulo="Matrix Chat"
                            descricao="Tela de login criada durante a semana de imersão ReactJS da Alura que teve como tema matrix."
                            link1={"http://matrix-chat-beta.vercel.app/"}
                            link2={"https://github.com/TiagoTNX/Matrix_Chat"}
                        />
                    </UlCard>
                </SecCards>
                <Footer>
                    <LogoP src="./images/logoP.webp" alt="Codelândia"/>
                    <AutorDiv>
                        <Autor> © - 2022 - TiagoTNX </Autor>
                        <Autor>Codelândia</Autor>
                    </AutorDiv>
                </Footer>
        </>
    );
}

export default App;
