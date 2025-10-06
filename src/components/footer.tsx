import { Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="font-serif font-bold text-xl text-foreground">
                Teyvat Chronicles
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A maior comunidade brasileira de Genshin Impact. Guias, builds e
              muito mais!
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Conteúdo</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Guias
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Personagens
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tier Lists
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Eventos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Comunidade</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Fórum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Torneios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Criadores
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Sobre</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © 2025 Teyvat Chronicles. Todos os direitos reservados. Este é um
            projeto de fãs não oficial.
          </p>
          <p className="mt-2">
            Genshin Impact™ é uma marca registrada da HoYoverse.
          </p>
        </div>
      </div>
    </footer>
  )
}
