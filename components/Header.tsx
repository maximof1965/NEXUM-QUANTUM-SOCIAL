'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const NavButton = ({ label, sub, active, href }: { 
    label: string
    sub: string
    active: boolean
    href: string
  }) => (
    <Link
      href={href}
      className="group flex flex-col items-center gap-1 relative py-2 whitespace-nowrap"
    >
      <span
        className={`font-orbitron text-[10px] xl:text-xs tracking-[0.15em] transition-colors duration-300 ${
          active ? 'text-[#D4AF37]' : 'text-[#D4AF37]/90 group-hover:text-[#D4AF37]'
        }`}
      >
        {label.toUpperCase()}
      </span>
      <span className="text-[8px] font-mono text-[#333] group-hover:text-[#D4AF37]/50 transition-colors opacity-0 group-hover:opacity-100 absolute -bottom-3">
        {sub}
      </span>
      <span
        className={`w-1 h-1 bg-[#D4AF37] rounded-full shadow-[0_0_5px_#D4AF37] transition-all duration-500 transform ${
          active ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      />
    </Link>
  )

  const MobileNavButton = ({ label, href, onClick }: { 
    label: string
    href: string
    onClick: () => void
  }) => (
    <Link
      href={href}
      onClick={onClick}
      className="block w-full text-left px-4 py-5 border-l-2 border-transparent hover:border-[#D4AF37] bg-[#0A0A0A] hover:bg-[#111] transition-all group"
    >
      <div className="flex justify-between items-center">
        <span className="font-orbitron text-sm text-[#CCC] tracking-widest group-hover:text-[#D4AF37]">
          {label.toUpperCase()}
        </span>
        <svg
          className="w-4 h-4 text-[#333] group-hover:text-[#D4AF37] transform group-hover:translate-x-1 transition-all"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  )

  return (
    <header
      className="fixed top-0 w-full z-40 backdrop-blur-md border-b border-[#D4AF37]/10 bg-[#050505]/70 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(5, 5, 5, 0.85)' : 'rgba(5, 5, 5, 0.7)',
        borderBottomColor: 'rgba(229, 193, 88, 0.2)',
      }}
    >
      <nav className="max-w-[100%] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 xl:gap-4 cursor-pointer group min-w-fit">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500" />
              <Image
                src="/LOGOFINAL.png"
                alt="NQS Logo"
                width={48}
                height={48}
                className="relative h-10 w-10 xl:h-12 xl:w-12 rounded-full border border-[#D4AF37]/50 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="font-orbitron font-bold text-sm xl:text-lg tracking-[0.2em] text-gold-gradient">
                NEXUM
              </span>
              <span className="font-exo text-[0.6rem] xl:text-[0.65rem] tracking-[0.4em] text-[#888] group-hover:text-[#D4AF37] transition-colors">
                QUANTUM SOCIAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 2xl:space-x-4 flex-1 justify-end overflow-x-auto scrollbar-hide">
            <NavButton label="INICIO" sub="01" active={false} href="#inicio" />
            <span className="text-[#D4AF37]/40 text-xs mx-1">|</span>
            <NavButton label="BRAIN_AI" sub="02" active={false} href="#brainstorm" />
            <span className="text-[#D4AF37]/40 text-xs mx-1">|</span>
            <NavButton label="Q_LAB" sub="03" active={false} href="#quantum" />
            <span className="text-[#D4AF37]/40 text-xs mx-1">|</span>
            <NavButton label="NOSOTROS" sub="04" active={false} href="#nosotros" />
            <span className="text-[#D4AF37]/40 text-xs mx-1">|</span>
            <NavButton label="PROGRAMAS" sub="05" active={false} href="#programas" />
            <span className="text-[#D4AF37]/40 text-xs mx-1">|</span>
            <NavButton label="IMPACTO" sub="06" active={false} href="#impacto" />
            <span className="text-[#D4AF37]/40 text-xs mx-1">|</span>
            <NavButton label="ALIADOS" sub="07" active={false} href="#aliados" />
            <span className="text-[#D4AF37]/40 text-xs mx-1">|</span>
            <NavButton label="TRANSPARENCIA" sub="08" active={false} href="#transparencia" />
            <span className="text-[#D4AF37]/40 text-xs mx-1">|</span>
            <NavButton label="CONTACTO" sub="09" active={false} href="#contacto" />
          </div>
          
          {/* Tablet Navigation - Scrollable */}
          <div className="hidden md:flex lg:hidden items-center overflow-x-auto scrollbar-hide space-x-3 flex-1 justify-end">
            <NavButton label="INICIO" sub="01" active={false} href="#inicio" />
            <NavButton label="BRAIN_AI" sub="02" active={false} href="#brainstorm" />
            <NavButton label="Q_LAB" sub="03" active={false} href="#quantum" />
            <NavButton label="NOSOTROS" sub="04" active={false} href="#nosotros" />
            <NavButton label="PROGRAMAS" sub="05" active={false} href="#programas" />
            <NavButton label="IMPACTO" sub="06" active={false} href="#impacto" />
            <NavButton label="ALIADOS" sub="07" active={false} href="#aliados" />
            <NavButton label="TRANSPARENCIA" sub="08" active={false} href="#transparencia" />
            <NavButton label="CONTACTO" sub="09" active={false} href="#contacto" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#D4AF37] p-2 hover:bg-[#D4AF37]/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#050505]/80 backdrop-blur-xl border-b border-[#E5C158]/20 absolute w-full animate-fadeIn">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <MobileNavButton
                label="INICIO"
                href="#inicio"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavButton
                label="BRAIN_AI"
                href="#brainstorm"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavButton
                label="Q_LAB"
                href="#quantum"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavButton
                label="NOSOTROS"
                href="#nosotros"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavButton
                label="PROGRAMAS"
                href="#programas"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavButton
                label="IMPACTO"
                href="#impacto"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavButton
                label="ALIADOS"
                href="#aliados"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavButton
                label="TRANSPARENCIA"
                href="#transparencia"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <MobileNavButton
                label="CONTACTO"
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
