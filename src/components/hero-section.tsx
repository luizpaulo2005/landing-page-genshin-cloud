import { ArrowRight, Star } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/30 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">
              Comunidade Oficial Brasileira
            </span>
          </div>

          <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight text-balance">
            Explore o Mundo de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Teyvat
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Junte-se a milhares de viajantes na maior comunidade brasileira de
            Genshin Impact. Descubra guias completos, builds otimizadas e
            conecte-se com outros jogadores.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12"
            >
              Entrar na Comunidade
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 h-12 border-2 bg-transparent"
            >
              Ver Guias
            </Button>
          </div>

          {/* Hero image placeholder */}
          <div className="relative mt-12 lg:mt-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <img
                src="/genshin-impact-teyvat-landscape-fantasy-world.jpg"
                alt="Mundo de Teyvat"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
