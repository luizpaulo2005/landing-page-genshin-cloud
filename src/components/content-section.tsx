import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const contentCards = [
  {
    title: 'Guia de Iniciantes',
    description:
      'Começando sua jornada em Teyvat? Aprenda o básico e evite erros comuns.',
    image: '/genshin-impact-beginner-guide-anime-style.jpg',
    category: 'Guias',
  },
  {
    title: 'Tier List Atualizada',
    description:
      'Confira o ranking dos personagens mais fortes da versão atual.',
    image: '/genshin-impact-characters-tier-list.jpg',
    category: 'Tier Lists',
  },
  {
    title: 'Builds de Personagens',
    description:
      'Maximize o potencial dos seus personagens favoritos com builds testadas.',
    image: '/genshin-impact-character-builds-artifacts.jpg',
    category: 'Builds',
  },
]

export function ContentSection() {
  return (
    <section id="guias" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-serif font-bold text-4xl lg:text-5xl text-foreground mb-4">
              Conteúdo em Destaque
            </h2>
            <p className="text-lg text-muted-foreground">
              Os guias e artigos mais populares da comunidade
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex bg-transparent">
            Ver Todos
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCards.map((card, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={card.image || '/placeholder.svg'}
                  alt={card.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {card.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {card.description}
                </p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto font-semibold text-primary hover:bg-transparent"
                >
                  Ler Mais
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full sm:w-auto bg-transparent">
            Ver Todos os Guias
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
