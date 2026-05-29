import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ThemeCategory } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const themeColors: Record<ThemeCategory, { bg: string; text: string; badge: string }> = {
  'Love & Relationships': {
    bg: 'bg-rose-900/20',
    text: 'text-rose-200',
    badge: 'bg-rose-800 text-rose-100',
  },
  Friendship: {
    bg: 'bg-amber-900/20',
    text: 'text-amber-200',
    badge: 'bg-amber-800 text-amber-100',
  },
  Character: {
    bg: 'bg-teal-900/20',
    text: 'text-teal-200',
    badge: 'bg-teal-800 text-teal-100',
  },
  Wisdom: {
    bg: 'bg-indigo-900/20',
    text: 'text-indigo-200',
    badge: 'bg-indigo-800 text-indigo-100',
  },
  Acceptance: {
    bg: 'bg-purple-900/20',
    text: 'text-purple-200',
    badge: 'bg-purple-800 text-purple-100',
  },
  Service: {
    bg: 'bg-emerald-900/20',
    text: 'text-emerald-200',
    badge: 'bg-emerald-800 text-emerald-100',
  },
  'Wealth & Materialism': {
    bg: 'bg-yellow-900/20',
    text: 'text-yellow-200',
    badge: 'bg-yellow-800 text-yellow-100',
  },
}

export const themeAccentColors: Record<string, string> = {
  'All': 'bg-[#D4AF37] text-[#2C1810]',
  'Love & Relationships': 'bg-rose-700 text-white',
  'Friendship': 'bg-amber-700 text-white',
  'Character': 'bg-teal-700 text-white',
  'Wisdom': 'bg-indigo-700 text-white',
  'Acceptance': 'bg-purple-700 text-white',
  'Service': 'bg-emerald-700 text-white',
  'Wealth & Materialism': 'bg-yellow-700 text-white',
}
