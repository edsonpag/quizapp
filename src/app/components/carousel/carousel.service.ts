import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CarouselService {

    getSlides(): { image: string, text: string }[] {
        return [
            {
              image: '../../../assets/img/avatares/avatar-01.png',
              text: 'Fiz diversos testes vocacionais na internet, porém nenhum foi tão assertivo quanto esse. Para quem deseja seguir uma carreira trabalhando pela internet esse quiz é perfeito, graças a ele sai de um trabalho estressante e hoje ganho 6000,00 R$ todo mês sem precisar sair de casa e lidar com chefes chatos'
            },
            {
              image: '../../../assets/img/avatares/avatar-02.png',
              text: 'Olha, de verdade, esse quiz me surpreendeu. Confesso que era cético em relação a esses testes, pois já havia feito outros sem nenhuma precisão. Hoje sou empregado público e estou em busca de realizar uma transição de carreira e esse quiz me ajudou bastante! Muito obrigado, pessoal!'
            },
            {
              image: '../../../assets/img/avatares/avatar-03.png',
              text: 'Excelente avaliação, bem contundente com minha realidade, a profissão digital que obtive maior afinidade me surpreendeu um pouco o que achei importante para abrir novos ares e repensar os objetivos.'
            },
            {
              image: '../../../assets/img/avatares/avatar-04.png',
              text: 'Não tenho palavras para expressar minha gratidão por esse quiz incrível! Eu estava completamente perdida em relação à minha carreira, mas depois de responder às perguntas do quiz, descobri que minha vocação está no digital. Hoje, sou uma nova pessoa realizada e apaixonada pelo meu trabalho. Muito obrigada por me ajudarem a encontrar meu caminho!'
            },
            {
              image: '../../../assets/img/avatares/avatar-06.png',
              text: 'Foi absurdo!!! Não coloquei muita esperança quando comecei o teste, porém conforme fui respondendo as perguntas percebi que não era brincadeira já que levantava questões realmente importantes. O resultado do teste me surpreendeu por ser tão assertivo! Irei recomendar esse teste para amigos e familiares que acredito que precise do mesmo esclarecimento que eu para começar uma carreira online. Gratidão pela equipe desenvolvedora, recomendo!'  
            }
        ];
    }
}