interface Posts {
    date: string;
    liked: boolean;
    title: string;
    text: string;
}

export const posts: Array<Posts> = [
    {
        date: "02 de jul, 2021",
        liked: true,
        title: "Agora é oficial: o Windows 11 está vindo",
        text: "O Windows 11 é a versão mais recente do sistema operacional da Microsoft. Ele traz novidades como um design renovado, uma nova central de widgets, uma loja de aplicativos reformulada e a integração com o Android. O Windows 11 está disponível para download para PCs qualificados que atendem às especificações mínimas de dispositivo.",
    },
    {
        date: "02 de jul, 2021",
        liked: false,
        title: "Tim Berners-Lee vai leiloar código-fonte da web",
        text: "O criador da World Wide Web, Tim Berners-Lee, anunciou que vai leiloar o código-fonte original da web como um NFT (token não fungível). O leilão será realizado pela Sotheby's entre 23 e 30 de junho e terá um lance inicial de US$ 1.000. O código-fonte da web contém cerca de 9.555 linhas de código escritas por Berners-Lee entre 1989 e 1991, incluindo os primeiros protocolos da web, como HTML, HTTP e URL.",
    },
    {
        date: "02 de jul, 2021",
        liked: false,
        title: "Tem Firefox novo no pedaço e você vai querer migrar",
        text: "O Firefox lançou uma nova versão do seu navegador, com recursos e melhorias que vão te convencer a fazer a mudança. O novo Firefox é mais rápido, seguro e personalizável do que nunca. Você pode navegar com mais privacidade, sincronizar seus dados entre dispositivos e aproveitar as extensões exclusivas do Firefox. Não perca tempo e baixe o novo Firefox hoje mesmo!",
    },
    {
        date: "02 de jul, 2021",
        liked: false,
        title: "John McAfee, criador do antivírus McAfee, morre",
        text: "John McAfee, o fundador da empresa de software de segurança McAfee, faleceu aos 75 anos. Ele foi encontrado morto em sua cela na Espanha, onde aguardava a extradição para os Estados Unidos por acusações de fraude fiscal.",
    },
];
