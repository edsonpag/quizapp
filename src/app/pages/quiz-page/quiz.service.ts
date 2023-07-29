import { Injectable } from "@angular/core";
import { Category } from "src/app/enums/category.enum";
import { FormDataQuiz } from "src/app/interfaces/form-data.interface";
import { Question } from "src/app/interfaces/question.interface";
import { Result } from "src/app/interfaces/results.interface";

@Injectable({
  providedIn: 'root'
})

export class QuizService {

  private results!: Result[];
  
  private submitted!: boolean;

  private formDataQuiz!: FormDataQuiz;

  getResults(): Result[] {
    return this.results;
  }

  setResults(results: Result[]): void {
    this.results = results;
  }

  isSubmitted(): boolean {
    return this.submitted;
  }

  setSubmitted(submitted: boolean): void {
    this.submitted = submitted;
  }

  getFormDateQuiz(): FormDataQuiz {
    return this.formDataQuiz;
  }

  setFormDataQuiz(formDataQuiz: FormDataQuiz): void{
    this.formDataQuiz = formDataQuiz;
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
      category: Category.INFLUENCER
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
      category: Category.SOCIAL_MEDIA
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
      category: Category.TRAFFIC_MANAGER
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
      category: Category.SOCIAL_MEDIA
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
      category: Category.SOCIAL_MEDIA
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
      category: Category.INFLUENCER
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
      category: Category.INFLUENCER
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
      category: Category.SOCIAL_MEDIA
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
      category: Category.TRAFFIC_MANAGER
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
      category: Category.TRAFFIC_MANAGER
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
      category: Category.TRAFFIC_MANAGER
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
      category: Category.SOCIAL_MEDIA
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
      category: Category.INFLUENCER
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
      category: Category.TRAFFIC_MANAGER
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
      category: Category.TRAFFIC_MANAGER
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
      category: Category.SOCIAL_MEDIA
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
      category: Category.INFLUENCER
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
      category: Category.TRAFFIC_MANAGER
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
      category: Category.INFLUENCER
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
      category: Category.SOCIAL_MEDIA
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
      category: Category.SOCIAL_MEDIA
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
      category: Category.TRAFFIC_MANAGER
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
      category: Category.INFLUENCER
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
      category: Category.TRAFFIC_MANAGER
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
      category: Category.INFLUENCER
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
      category: Category.INFLUENCER
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
      category: Category.TRAFFIC_MANAGER
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
      category: Category.INFLUENCER
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
      category: Category.SOCIAL_MEDIA
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
      category: Category.SOCIAL_MEDIA
    }
  ];

}