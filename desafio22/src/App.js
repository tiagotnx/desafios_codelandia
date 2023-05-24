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
                <Logo src='./images/logo.svg' alt='Codelândia' />
                <nav>
                    <Ul>
                        <Li>
                            <HeaderGit
                                href='https://github.com/TiagoTNX'
                                target='_blank'
                            >
                                meu github
                            </HeaderGit>{" "}
                        </Li>
                        <Li>
                            <ButtonConvite
                                link='https://www.linkedin.com/in/tiagotnx/'
                                text='LinkedIn'
                                target='_blank'
                            />
                        </Li>
                    </Ul>
                </nav>
            </Header>
            <DesComunidade>
                <SubTitulo>Tiago Nascimento da Silva</SubTitulo>
                <Titulo>Desenvolvedor Front-end</Titulo>
                <Texto>
                    Sou desenvolvedor front-end com conhecimento
                    intermediário/avançado em HTML, CSS e JavaScript. Neste
                    portfólio, você pode ver alguns dos meus projetos mais
                    recentes e interessantes que criei ou participei.
                </Texto>
            </DesComunidade>
            <SecCards>
                <UlCard>
                    <Card
                        src={"/images/art.webp"}
                        titulo='Art'
                        descricao='Página criada durante o desafio 26 da comunidade Codelândia e com o intuito de praticar HTML e CSS.'
                        link1={"https://codelandia-art.netlify.app/"}
                        link2={
                            "https://github.com/tiagotnx/desafios_codelandia/tree/main/desafio26"
                        }
                    />
                    <Card
                        src={"/images/spacelandia.webp"}
                        titulo='Spacelândia'
                        descricao='Página criada durante o desafio 01 da comunidade Codelândia e com o intuito de praticar HTML, CSS e TS.'
                        link1={"https://spacelandia.netlify.app/"}
                        link2={
                            "https://github.com/tiagotnx/desafios_codelandia/tree/main/desafio01"
                        }
                    />
                    <Card
                        src={"/images/controle-financeiro.webp"}
                        titulo='Controle financeiro'
                        descricao='Página criada com o intuito de praticar React, HTML, CSS e TS.'
                        link1={"https://controle-financas-alpha.vercel.app/"}
                        link2={"https://github.com/tiagotnx/controle-financas"}
                    />
                    <Card
                        src={"/images/web3.webp"}
                        titulo='Página de notícias'
                        descricao='Página criada durante o desafio News homepage do site Frontend Mentor e com o intuito de praticar HTML, CSS e TS.'
                        link1={"https://newshomepage-tiagotnx.netlify.app/"}
                        link2={
                            "https://github.com/TiagoTNX/frontend-mentor/tree/main/news-homepage-main"
                        }
                    />
                </UlCard>
            </SecCards>
            <Footer>
                <LogoP src='./images/logoP.svg' alt='logo no final da página' />
                <AutorDiv>
                    <Autor> © - 2023 - Tiago </Autor>
                    <Autor>Codelândia</Autor>
                </AutorDiv>
            </Footer>
        </>
    );
}

export default App;
