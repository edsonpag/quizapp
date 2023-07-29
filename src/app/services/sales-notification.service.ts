import { Injectable } from "@angular/core";
import { SalesNotification } from "../interfaces/sales-notification";

@Injectable({ providedIn: 'root' })
export class SalesNotificationService {

    private names: SalesNotification[] = [
        {
            name: "Henrique Pacheco"
        },
        {
            name: "Diogo Boaventura"
        },
        {
            name: "Diego Lemos"
        },
        {
            name: "Márcio Amaral"
        },
        {
            name: "Juliano Justino"
        },
        {
            name: "Paulo Serrano"
        },
        {
            name: "Estevão Linhares"
        },
        {
            name: "Alessandro Chagas"
        },
        {
            name: "João da Silva"
        },
        {
            name: "Maria Santos"
        },
        {
            name: "Pedro Oliveira"
        },
        {
            name: "Ana Souza"
        },
        {
            name: "Lucas Pereira"
        },
        {
            name: "Lara Rodrigues"
        },
        {
            name: "Gabriel Almeida"
        },
        {
            name: "Júlia Costa"
        },
        {
            name: "Miguel Fernandes"
        },
        {
            name: "Camila Carvalho"
        },
        {
            name: "Arthur Barbosa"
        },
        {
            name: "Laura Ribeiro"
        },
        {
            name: "Enzo Santos"
        },
        {
            name: "Larissa Martins"
        },
        {
            name: "Heitor Rocha"
        },
        {
            name: "Isabela Lima"
        },
        {
            name: "Davi Gonçalves"
        },
        {
            name: "Manuela Castro"
        },
        {
            name: "Bernardo Ferreira"
        },
        {
            name: "Valentina Gomes"
        },
        {
            name: "Gustavo Barbosa"
        },
        {
            name: "Beatriz Oliveira"
        },
        {
            name: "Samuel Costa"
        },
        {
            name: "Sophia Rodrigues"
        },
        {
            name: "Rafael Alves"
        },
        {
            name: "Alice Rocha"
        },
        {
            name: "Eduardo Mendes"
        },
        {
            name: "Luiza Fernandes"
        },
        {
            name: "Matheus Nunes"
        },
        {
            name: "Lorena Carvalho"
        },
        {
            name: "Ana Silva Santos",
        },
        {
            name: "Pedro Oliveira Souza",
        },
        {
            name: "Maria Pereira Lima",
        },
        {
            name: "Lucas Rodrigues Costa",
        },
        {
            name: "Isabela Almeida Ferreira",
        },
        {
            name: "Thiago Martins Silva",
        },
        {
            name: "Gabriela Santos Gomes",
        },
        {
            name: "Rafael Carvalho Ribeiro",
        },
        {
            name: "Camila Gonçalves Alves",
        },
        {
            name: "Matheus Fernandes Oliveira",
        },
        {
            name: "Larissa Sousa Barbosa",
        },
        {
            name: "Bruno Nunes Costa",
        },
        {
            name: "Juliana Pereira Rodrigues",
        },
        {
            name: "Felipe Costa Santos",
        },
        {
            name: "Letícia Ferreira Lima",
        },
        {
            name: "João Oliveira Souza",
        },
        {
            name: "Mariana Alves Castro",
        },
        {
            name: "Eduardo Silva Costa",
        },
        {
            name: "Fernanda Santos Oliveira",
        },
        {
            name: "Gustavo Martins Almeida",
        }
    ];

    getAll(): SalesNotification[] {
        return this.names;
    }

    remove(position: number): void {
        this.names.splice(position, 1);
    }
}