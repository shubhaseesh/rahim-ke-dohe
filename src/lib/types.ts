export type ThemeCategory =
  | 'Love & Relationships'
  | 'Friendship'
  | 'Character'
  | 'Wisdom'
  | 'Acceptance'
  | 'Service'
  | 'Wealth & Materialism'

export interface Doha {
  id: number
  hindi: string
  english: string
  meaning_hindi: string
  explanation: string
  theme: ThemeCategory
  author: string
  authorSlug: string
  featured?: boolean
}

export interface Writer {
  slug: string
  name_english: string
  name_hindi: string
  era: string
  language: string
  genre: string
  short_bio_english: string
  short_bio_hindi: string
  biography: Biography
  dohe: Doha[]
}

export interface BiographyTimelineEntry {
  year: string
  title_english: string
  title_hindi: string
  content_english: string
  content_hindi: string
}

export interface Biography {
  introduction_english: string
  introduction_hindi: string
  timeline: BiographyTimelineEntry[]
  facts: {
    born: string
    died: string
    full_name_english: string
    full_name_hindi: string
    court: string
    works: string[]
  }
}

export interface DohaCardProps {
  doha: Doha
  variant?: 'grid' | 'featured' | 'full'
}

export interface DoheGridProps {
  dohe: Doha[]
  showSearch?: boolean
  showAuthorFilter?: boolean
  initialTheme?: string
  initialAuthor?: string
}

export interface ThemeFilterProps {
  themes: string[]
  activeTheme: string
  onThemeChange: (theme: string) => void
}

export interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
}
