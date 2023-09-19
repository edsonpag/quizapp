import { Injectable } from "@angular/core";
import { Depoiment } from "../interfaces/depoiment.interface";

@Injectable({ providedIn: 'root' })
export class DepoimentsService {

    depoiments: Depoiment[] = [
        {
            rate: 5,
            name: "Henrique Prestes",
            age: 25,
            text: "Eu já tinha perdido a esperança de encontrar algum conhecimento verdadeiro na internet, pois anteriormente já havia feito diversos testes vocacionais e nunca obtive nenhum resultado deles, porém esse foi diferente. O aplicativo é muito bom, além de revelar mimnha profissão digital, tirou todas as minhas duvidas de como iniciar nessa profissão. Comecei a aplicar os conhecimentos ensinados e hoje estou ganhando uma renda mensal que jamais imaginaria ser possível com a profissão revelada. Gostaria de agradecer a todos envolvidos no desolvimento desse teste vocacional, obrigado por terem mudado a minha vida.",
            quizDate: "Teste realizado dia 20/05/2023 ás 15:18",
            commentDate: "Comentário enviado dia 28/10/2023 ás 11:10"
        },
        {
            rate: 5,
            name: "Artur Ruiz",
            age: 19,
            text: "Meu nome é Artur, tenho 19 anos e gostaria de deixar minha experiência sobre como esse aplicativo me ajudou. Sempre tive um sonho em dar entrada no meu primeiro carro, porém os salarios de jovens sem experiência são uma merda, eu era caixa em um supermercado na minha cidade, recebia apenas 1400 R$ por mês, estava muito puto com o meu trabalho e com o rumo da minha vida, nunca sobrava dinheiro no final do mês para fazer uma viagem ou dar entrada no meu sonhado carro e o pior que todo mês eu fechava no vermelho aculamando cada vez mais dívidas. Decidi dar uma chance a esse teste vocacional e seguir a profissão disponibilizada no aplicativo. Iniciei minha carreira como uma renda extra, todo mês tinha entre 500-800 reais entrando na minha conta de forma automática e isso me ajudou muito no começo, principalmente a pagar as minhas dividas. Hoje em dia já é a minha renda princípal e eu consigo viver apenas dela e o melhor de tudo é que no proximo mês vou conseguir dar entrada no meu carro dos sonhos e tenho certeza que isso é só o começo!",
            quizDate: "Teste realizado dia 12/03/2023 ás 09:20",
            commentDate: "Comentário enviado dia 08/08/2023 ás 16:10"
        },
        {
            rate: 5,
            name: "Paloma Matos",
            age: 22,
            text: "Sensacional! Chego a estar arrepiada. Tinha o sonho de seguir uma carreira trabalhando pela internet e eu desisti por comentários alheios. Sou formada e atuo numa área totalmente diferente e não me sinto realizada, estou naquela fase da vida \"cansada de trabalhar no mesmo lugar por anos e não se sentir satisfeita\", a sensação de que não estou atingindo meu potencial como deveria, por isso resolvi fazer o teste vocacional e amei, pois o resultado disponibilizado no aplicativo era exatamente o que eu estava procurando. Obrigada e recomendo 100%.",
            quizDate: "Teste realizado dia 31/03/2023 ás 08:47",
            commentDate: "Comentário enviado dia 17/07/2023 ás 12:19"
        },
        {
            rate: 5,
            name: "Jaqueline Aguiar",
            age: 48,
            text: "Eu nunca imaginei que um simples quiz online pudesse ser tão revelador. Tenho 48 anos e achei que já era tarde de mais para começar uma nova carreira, porem com a ajuda de vocês, consegui desbloquear todo o potêncial que estava preso dentro de mim. Graças a essa descoberta, iniciei uma nova carreira e estou prosperando! Sou grata por toda a orientação que me proporcionaram e por me ajudarem a encontrar minha verdadeira paixão.",
            quizDate: "Teste realizado dia 15/02/2023 ás 09:47",
            commentDate: "Comentário enviado dia 02/09/2023 ás 10:13"
        },
        {
            rate: 5,
            name: "Mauro Rodrigues",
            age: 17,
            text: "Palavras não são suficientes para expressar minha gratidão a essa plataforma incrível. Nunca imaginei que tão jovem poderia ter uma grande realização profissional. Sou grato por me apontarem o caminho certo e os passos necessários para alcançar meus objetivos. Mesmo eu que não sabia nada sobre a profissão, consegui começar com as orientações de vocês e hoje tenho ganhos expressivos em pouco tempo, pois vocês ensinam do absoluto zero ao avançado, o que fez total diferença na minha jornada de sucesso!",
            quizDate: "Teste realizado dia 14/01/2023 ás 08:10",
            commentDate: "Comentário enviado dia 02/06/2023 ás 20:15"
        }
    ]

    getAll(): Depoiment[] {
        return this.depoiments
    }

    add(depoiment: Depoiment) {
        this.depoiments.push(depoiment)
    }
}