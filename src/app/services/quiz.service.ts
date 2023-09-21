import { Injectable } from "@angular/core";
import { Category } from "src/app/enums/category.enum";
import { Question } from "src/app/interfaces/question.interface";
import { Result } from "src/app/interfaces/results.interface";

@Injectable({
  providedIn: 'root'
})

export class QuizService {

  private submitted!: boolean;

  private result!: Result;
  
  isSubmitted(): boolean {
    let submitted = this.submitted
    if (!submitted)
      submitted = localStorage.getItem("submitted") === "true" ? true : false
    return submitted
  }

  setSubmitted(submitted: boolean): void {
    this.submitted = submitted;
  }

  getResult(): Result {
    if (!this.result) {
      let name = localStorage.getItem("name")
      let index = localStorage.getItem("index")
      let points = localStorage.getItem("points")
      if (name && index && points) {
        this.result = {
          category: {
            name: name,
            index: parseInt(index)
          },
          points: parseInt(points)
        }
      }
    }
    return this.result
  }

  setResult(result: Result): void {
    this.result = result
    localStorage.setItem("name", this.result.category.name)
    localStorage.setItem("index", this.result.category.index.toString())
    localStorage.setItem("points", this.result.points.toString())
  }

  questions: Question[] = [
    {
      id: 0,
      text: "Saber a minha verdadeira vocação profissional é a diferença entre uma vida pobre ou rica, uma vida de escassez ou abundância, uma vida com saúde ou doença, uma vida com felicidade ou tristeza, uma vida com limitação ou liberdade",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.NONE
    },
    {
      id: 1,
      text: "Você se sente muito confortavel em aparecer na frente das cameras",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.COMMUNICATIVE
    },

    {
      id: 2,
      text: "Você gosta de usar o seu tempo para editar imagens",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.STABLE
    },

    {
      id: 3,
      text: "Você gosta de analisar dados e métricas para tomar decisões estratégicas",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.ANALYTICAL
    },

    {
      id: 4,
      text: "Você gosta de trabalhar em equipe",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.STABLE
    },
    
    {
      id: 5,
      text: "Você gosta de produzir conteúdo visual (fotos, vídeos, gráficos)",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.STABLE
    },
    
    {
      id: 6,
      text: "Você considera que sua habilidade mais forte é a comunicação",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.COMMUNICATIVE
    },

    {
      id: 7,
      text: "Você se sente confortável em lidar com críticas ou feedbacks negativos sobre a sua imagem nas redes sociais",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.COMMUNICATIVE
    },

    {
      id: 8,
      text: "Você consegue facilmente lidar com varias tarefas ao mesmo tempo",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.STABLE
    },

    {
      id: 9,
      text: "Você se considera um grande resolvedor de problemas",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.ANALYTICAL
    },

    {
      id: 10,
      text: "Você sempre está estudando e apredendendo novas habilidades",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.ANALYTICAL
    },

    {
      id: 11,
      text: "Você se considera uma pessoa analítica",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.ANALYTICAL
    },
    
    {
      id: 12,
      text: "Você se considera uma pessoa muito organizada",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.STABLE
    },

    {
      id: 13,
      text: "Você gosta de ensinar ou compartilhar conhecimento e experiências",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.COMMUNICATIVE
    },

    {
      id: 14,
      text: "Você gosta e/ou tem afinidade com tecnologia",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.ANALYTICAL
    },

    {
      id: 15,
      text: "Você gosta de matemática e números",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.ANALYTICAL
    },

    {
      id: 16,
      text: "Você gosta de acompanhar blogs e perfis influentes nas redes sociais",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.STABLE
    },

    {
      id: 17,
      text: "Você se considera uma pessoa extrovertida",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.COMMUNICATIVE
    },

    {
      id: 18,
      text: "Você se considera uma pessoa estrategista",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.ANALYTICAL
    },

    {
      id: 19,
      text: "Você é uma pessoa ativa e participativa nas redes sociais",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.COMMUNICATIVE
    },

    {
      id: 20,
      text: "Você gosta de pensar e elaborar conteúdos virais nas redes sociais",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.STABLE
    },

    {
      id: 21,
      text: "Você gosta de pesquisar e se atualizar sobre as últimas tendências e novidades",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.STABLE
    },

    {
      id: 22,
      text: "Você gosta de acompanhar e monitorar métricas de desempenho",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.ANALYTICAL
    },

    
    {
      id: 23,
      text: "Você se sente confortavel em falar suas opniões para um grande público",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.COMMUNICATIVE
    },

    {
      id: 24,
      text: "Você gosta de trabalhar nos bastidores sem precisar aparecer, criando anúncios",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.ANALYTICAL
    },

    {
      id: 25,
      text: "Você prefere trabalhar no celular ao invés do notebook produzindo conteúdo",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.COMMUNICATIVE
    },

    {
      id: 26,
      text: "Você se considera persuasivo",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.COMMUNICATIVE
    },

    {
      id: 27,
      text: "Você gostaria de trabalhar de qualquer lugar do mundo, apenas com um notebook e sem depender de ninguém",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.ANALYTICAL
    },

    {
      id: 28,
      text: "Você se considera mais emocianal do que racional",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.COMMUNICATIVE
    },

    {
      id: 29,
      text: "Você considera ter uma grande capacidade de gestão individual e coletiva",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.STABLE
    },

    {
      id: 30,
      text: "Sua melhor forma de comunicação é através da escrita",
      answers: [
        {
          text: 'strongly-disagree',
          description: "Discordo Plenamente",
          selected: false,
        },
        {
          text: 'disagree',
          description: "Discordo",
          selected: false
        },
        {
          text: 'agree',
          description: "Corcordo",
          selected: false
        },
        {
          text: 'strongly-agree',
          description: "Concordo Plenamente",
          selected: false
        }
      ],
      showAlert: false,
      category: Category.STABLE
    }
  ];

}