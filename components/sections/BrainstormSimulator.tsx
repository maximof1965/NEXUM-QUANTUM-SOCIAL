'use client'

import { useState, useMemo } from 'react'
import { Brain, Terminal } from 'lucide-react'

export default function BrainstormSimulator() {
  const [messages, setMessages] = useState([
    { 
      role: 'ai', 
      text: 'INITIALIZING NEXUM CORE... Neural uplink established. Awaiting strategic parameters for quantum analysis.' 
    }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    setMessages((prev) => [...prev, { role: 'user', text: input }])
    setInput('')
    setIsTyping(true)
    setTimeout(() => {
      const responses = [
        'Analyzing vectors... Optimization requires decentralized architecture with a focus on maximum engagement entropy.',
        'Pattern detected in Sector 7. Recommending genetic algorithms applied to user acquisition strategies.',
        'Calculated probability 99.8%. Initiating digital twin prototype for market validation simulation.'
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setMessages((prev) => [...prev, { role: 'ai', text: randomResponse }])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <section
      id="brainstorm"
      className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 animate-fadeIn section-padding"
      style={{ 
        backgroundColor: 'transparent', 
        minHeight: '100vh',
      }}
    >
      <div className="w-full max-w-5xl bg-[#050505]/60 backdrop-blur-md border border-[#D4AF37]/20 rounded-sm flex flex-col h-[75vh] shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-20 h-[1px] bg-[#D4AF37]" />
        <div className="absolute top-0 left-0 w-[1px] h-20 bg-[#D4AF37]" />
        <div className="absolute bottom-0 right-0 w-20 h-[1px] bg-[#D4AF37]" />
        <div className="absolute bottom-0 right-0 w-[1px] h-20 bg-[#D4AF37]" />

        {/* Header */}
        <div className="p-5 border-b border-[#D4AF37]/10 bg-[#050505]/50 backdrop-blur-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 border border-[#D4AF37]/30 rounded-full">
              <Brain className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h2 className="font-orbitron font-bold text-[#FBF5B7] tracking-widest text-sm">
                QUANTUM BRAINSTORM
              </h2>
              <p className="font-exo text-[10px] text-[#555] tracking-[0.2em] uppercase">
                Status: Connected
              </p>
            </div>
          </div>
          <div className="flex gap-2 font-mono text-[10px] text-[#D4AF37]/50">
            <span>CPU: 42%</span>
            <span>MEM: 12TB</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8" style={{ scrollbarWidth: 'thin' }}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] relative group ${
                  msg.role === 'user' ? 'items-end' : 'items-start'
                } flex flex-col`}
              >
                <span className="text-[10px] font-orbitron text-[#D4AF37]/40 mb-1 tracking-widest uppercase">
                  {msg.role === 'ai' ? 'NEXUM_CORE' : 'OPERATOR'}
                </span>
                <div
                  className={`p-5 backdrop-blur-sm border ${
                    msg.role === 'user'
                      ? 'bg-[#D4AF37]/10 border-[#D4AF37]/30 text-[#FBF5B7] rounded-tl-xl rounded-bl-xl rounded-br-none'
                      : 'bg-[#050505]/50 backdrop-blur-sm border-[#333] text-[#AAA] rounded-tr-xl rounded-br-xl rounded-bl-none'
                  }`}
                >
                  <p className="font-exo leading-relaxed text-sm md:text-base">{msg.text}</p>
                </div>
                {msg.role === 'ai' && (
                  <div className="absolute -left-2 top-8 w-1 h-8 bg-[#D4AF37]/50" />
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[#050505]/50 backdrop-blur-sm border border-[#333] px-6 py-4 rounded-tr-xl rounded-br-xl flex gap-1 items-center">
                <span className="w-1 h-1 bg-[#D4AF37] animate-pulse" />
                <span className="w-1 h-1 bg-[#D4AF37] animate-pulse" style={{ animationDelay: '0.1s' }} />
                <span className="w-1 h-1 bg-[#D4AF37] animate-pulse" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-[#D4AF37]/10 bg-[#050505]/50 backdrop-blur-sm">
          <div className="flex gap-0 relative group">
            <div className="absolute inset-0 border border-[#D4AF37]/30 rounded-none pointer-events-none group-hover:border-[#D4AF37]/60 transition-colors" />
            <div className="flex items-center pl-4 pr-2 bg-[#050505]/50 backdrop-blur-sm">
              <Terminal className="w-4 h-4 text-[#D4AF37]/50" />
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Enter command parameters..."
              className="flex-1 bg-[#050505]/50 backdrop-blur-sm border-none py-4 px-4 text-[#FBF5B7] font-exo focus:outline-none placeholder-[#444]"
            />
            <button
              onClick={handleSend}
              className="px-8 bg-[#D4AF37] text-black font-orbitron font-bold text-xs tracking-widest hover:bg-[#FFD700] transition-colors flex items-center gap-2"
            >
              EXECUTE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

