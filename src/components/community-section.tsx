import { Heart, MessageSquare, Share2 } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'

const posts = [
  {
    author: 'Viajante Anemo',
    avatar: '/anime-character-avatar.png',
    content:
      'Finalmente consegui 36 estrelas no Abismo Espiral! Obrigado pelos guias da comunidade! 🌟',
    likes: 234,
    comments: 45,
    time: '2h atrás',
  },
  {
    author: 'Mestre Pyro',
    avatar: '/anime-character-avatar-red.jpg',
    content:
      'Alguém mais animado para o novo banner? Estou juntando primos há meses! 💎',
    likes: 189,
    comments: 67,
    time: '5h atrás',
  },
  {
    author: 'Guardião Geo',
    avatar: '/anime-character-avatar-gold.jpg',
    content:
      'Criei um guia completo de farming para iniciantes. Confira no link! 📚',
    likes: 456,
    comments: 92,
    time: '1d atrás',
  },
]

export function CommunitySection() {
  return (
    <section id="comunidade" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Faça Parte da Comunidade
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Milhares de viajantes compartilhando conquistas, dicas e fazendo
            amizades todos os dias
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground font-medium">
                Membros Ativos
              </div>
            </div>
          </Card>
          <Card className="p-8 bg-gradient-to-br from-secondary/10 to-accent/5 border-secondary/20">
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">
                1.5K+
              </div>
              <div className="text-muted-foreground font-medium">
                Guias Publicados
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow border-border/50 bg-card"
            >
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src={post.avatar || '/placeholder.svg'}
                    alt={post.author}
                  />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-semibold text-card-foreground">
                        {post.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {post.time}
                      </div>
                    </div>
                  </div>
                  <p className="text-card-foreground mb-4 leading-relaxed">
                    {post.content}
                  </p>
                  <div className="flex items-center gap-6 text-muted-foreground">
                    <button className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-primary transition-colors">
                      <MessageSquare className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        {post.comments}
                      </span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
