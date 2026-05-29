'use client'

import { useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SpeakButtonProps {
  text: string
  lang?: string
  label?: string
  className?: string
}

export function SpeakButton({ text, lang = 'hi-IN', label, className }: SpeakButtonProps) {
  const [speaking, setSpeaking] = useState(false)

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (typeof window === 'undefined' || !window.speechSynthesis) return

    if (speaking) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
      return
    }

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang
    utterance.rate = 0.8
    utterance.pitch = 1
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)
    window.speechSynthesis.speak(utterance)
    setSpeaking(true)
  }

  return (
    <button
      onClick={handleSpeak}
      title={speaking ? 'Stop' : `Listen (${label ?? lang})`}
      className={cn(
        'flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-ui transition-all duration-200',
        speaking
          ? 'bg-gold/30 text-gold border border-gold/50'
          : 'bg-white/8 text-parchment/60 border border-white/10 hover:text-gold hover:border-gold/30',
        className
      )}
    >
      {speaking ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
      <span>{speaking ? 'Stop' : 'Listen'}</span>
    </button>
  )
}
