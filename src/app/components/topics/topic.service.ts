import { Injectable } from "@angular/core";
import { Topic } from "./topic.interface";

@Injectable({
    providedIn: 'root'
})

export class TopicService {
    getAllTopics(): Topic[] {
        return [
            {
                title: "Profissão digital realmente vai mudar minha vida?",
                description: "Com certeza. As profissões digitais têm o poder de revolucionar sua vida, permitindo que você aproveite as vantagens da era digital. Através desse quiz você vai descobrir sua profissão digital secreta, que irá abrir as portas para uma nova realidade de sucesso, reconhecimento e satisfação profissional."
            },
            {
                title: "O segredo revelado nesse quiz realmente funciona?",
                description: "Sim, milhares de pessoas já descobriram oportunidades lucrativas por meio desse quiz. Apenas em 2022, ajudamos mais de 64 mil pessoas e o melhor é que qualquer pessoa é capaz de fazer o mesmo. Não deixe passar essa chance única de explorar seu potencial e abrir portas para o sucesso. Acredite, o quiz realmente funciona e está pronto para mudar sua vida de uma vez por todas!"
            },
            {
                title: "Sobre o Digital Quiz",
                description: "Somos uma plataforma desenvolvida por programadores que utiliza tecnologia de ponta e inteligência artificial, juntamente com estudos comportamentais e psicologicos para dar as respostas mais precisas sobre a escolha da sua carreira"
            }
        ]
    }
}