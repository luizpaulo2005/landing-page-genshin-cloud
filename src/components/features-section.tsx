import { BookOpen, Sword, Trophy, Users } from 'lucide-react'

import { Card } from '@/components/ui/card'

const features = [
  {
    icon: BookOpen,
    title: 'Guias Completos',
    description:
      'Aprenda tudo sobre personagens, armas, artefatos e estratégias com nossos guias detalhados.',
    color: 'text-primary',
  },
  {
    icon: Sword,
    title: 'Builds Otimizadas',
    description:
      'Descubra as melhores builds para cada personagem e domine qualquer desafio em Teyvat.',
    color: 'text-secondary',
  },
  {
    icon: Users,
    title: 'Comunidade Ativa',
    description:
      'Conecte-se com milhares de jogadores, compartilhe experiências e faça novos amigos.',
    color: 'text-accent',
  },
  {
    icon: Trophy,
    title: 'Eventos & Torneios',
    description:
      'Participe de eventos exclusivos, torneios e ganhe prêmios incríveis da comunidade.',
    color: 'text-primary',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Tudo que Você Precisa em Um Só Lugar
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Recursos completos para elevar sua jornada em Genshin Impact ao
            próximo nível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/5 flex items-center justify-center mb-4`}
              >
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="font-semibold text-xl text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
