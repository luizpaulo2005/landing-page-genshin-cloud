import { ArrowRight, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '1.5s' }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Junte-se Agora
            </span>
          </div>

          <h2 className="font-serif font-bold text-4xl lg:text-6xl text-foreground leading-tight text-balance">
            Pronto para Começar Sua Jornada em Teyvat?
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Entre para a comunidade hoje e tenha acesso a guias exclusivos,
            eventos especiais e muito mais!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12"
            >
              Criar Conta Grátis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 h-12 border-2 bg-transparent"
            >
              Explorar Conteúdo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Mais de 50.000 viajantes já fazem parte da comunidade ✨
          </p>
        </div>
      </div>
    </section>
  )
}
