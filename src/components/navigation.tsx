'use client'

import { Menu, Sparkles } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-primary animate-glow" />
            <span className="font-serif font-bold text-xl lg:text-2xl text-foreground">
              Teyvat Chronicles
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Início
            </a>
            <a
              href="#guias"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Guias
            </a>
            <a
              href="#personagens"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Personagens
            </a>
            <a
              href="#comunidade"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Comunidade
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Entrar
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="#inicio"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Início
            </a>
            <a
              href="#guias"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Guias
            </a>
            <a
              href="#personagens"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Personagens
            </a>
            <a
              href="#comunidade"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Comunidade
            </a>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Entrar
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
