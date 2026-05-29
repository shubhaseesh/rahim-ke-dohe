// Aggregates all writers — ensure UTF-8 encoding for Devanagari content
import type { Writer } from '../types'

export { rahimWriter } from './rahim'
export { kabirDasWriter } from './kabir-das'
export { tulsidasWriter } from './tulsidas'
export { surdasWriter } from './surdas'
export { chanakyaWriter } from './chanakya'
export { bhartrihariWriter } from './bhartrihari'
export { ravidasWriter } from './ravidas'
export { guruNanakWriter } from './guru-nanak'
export { vivekanandaWriter } from './vivekananda'
export { gandhiWriter } from './gandhi'
export { bachchanWriter } from './bachchan'
export { dinkarWriter } from './dinkar'
export { bihariLalWriter } from './bihari-lal'
export { mirabaiWriter } from './mirabai'
export { tukaramWriter } from './tukaram'
export { valmikiWriter } from './valmiki'
export { vedVyasaWriter } from './ved-vyasa'
export { tagoreWriter } from './tagore'
export { subhasitaWriter } from './subhasita'
export { bhagavadGitaWriter } from './bhagavad-gita'
export { panchatantraWriter } from './panchatantra'
export { hitopadeshaWriter } from './hitopadesha'
export { thiruvalluvarWriter } from './thiruvalluvar'
export { buddhaWriter } from './buddha'
export { oshoWriter } from './osho'
export { kalamWriter } from './kalam'
export { jaishankarPrasadWriter } from './jaishankar-prasad'
export { maithiliSharanGuptWriter } from './maithili-sharan-gupt'
export { niralaWriter } from './nirala'
export { bhavabhutiWriter } from './bhavabhuti'
export { kalidasaWriter } from './kalidasa'
export { vinobaBhaveWriter } from './vinoba-bhave'
export { daduDayalWriter } from './dadu-dayal'
export { namdevWriter } from './namdev'
export { samarthRamdasWriter } from './samarth-ramdas'
export { narayanaGuruWriter } from './narayana-guru'
export { basavannaWriter } from './basavanna'
export { shankaracharyaWriter } from './shankaracharya'
export { premchandWriter } from './premchand'

import { rahimWriter } from './rahim'
import { kabirDasWriter } from './kabir-das'
import { tulsidasWriter } from './tulsidas'
import { surdasWriter } from './surdas'
import { chanakyaWriter } from './chanakya'
import { bhartrihariWriter } from './bhartrihari'
import { ravidasWriter } from './ravidas'
import { guruNanakWriter } from './guru-nanak'
import { vivekanandaWriter } from './vivekananda'
import { gandhiWriter } from './gandhi'
import { bachchanWriter } from './bachchan'
import { dinkarWriter } from './dinkar'
import { bihariLalWriter } from './bihari-lal'
import { mirabaiWriter } from './mirabai'
import { tukaramWriter } from './tukaram'
import { valmikiWriter } from './valmiki'
import { vedVyasaWriter } from './ved-vyasa'
import { tagoreWriter } from './tagore'
import { subhasitaWriter } from './subhasita'
import { bhagavadGitaWriter } from './bhagavad-gita'
import { panchatantraWriter } from './panchatantra'
import { hitopadeshaWriter } from './hitopadesha'
import { thiruvalluvarWriter } from './thiruvalluvar'
import { buddhaWriter } from './buddha'
import { oshoWriter } from './osho'
import { kalamWriter } from './kalam'
import { jaishankarPrasadWriter } from './jaishankar-prasad'
import { maithiliSharanGuptWriter } from './maithili-sharan-gupt'
import { niralaWriter } from './nirala'
import { bhavabhutiWriter } from './bhavabhuti'
import { kalidasaWriter } from './kalidasa'
import { vinobaBhaveWriter } from './vinoba-bhave'
import { daduDayalWriter } from './dadu-dayal'
import { namdevWriter } from './namdev'
import { samarthRamdasWriter } from './samarth-ramdas'
import { narayanaGuruWriter } from './narayana-guru'
import { basavannaWriter } from './basavanna'
import { shankaracharyaWriter } from './shankaracharya'
import { premchandWriter } from './premchand'

/** All writers in display order (Rahim first, then GENERATION_PROMPT order). */
export const allWriters: Writer[] = [
  rahimWriter,
  kabirDasWriter,
  tulsidasWriter,
  surdasWriter,
  chanakyaWriter,
  bhartrihariWriter,
  ravidasWriter,
  guruNanakWriter,
  vivekanandaWriter,
  gandhiWriter,
  bachchanWriter,
  dinkarWriter,
  bihariLalWriter,
  mirabaiWriter,
  tukaramWriter,
  valmikiWriter,
  vedVyasaWriter,
  tagoreWriter,
  subhasitaWriter,
  bhagavadGitaWriter,
  panchatantraWriter,
  hitopadeshaWriter,
  thiruvalluvarWriter,
  buddhaWriter,
  oshoWriter,
  kalamWriter,
  jaishankarPrasadWriter,
  maithiliSharanGuptWriter,
  niralaWriter,
  bhavabhutiWriter,
  kalidasaWriter,
  vinobaBhaveWriter,
  daduDayalWriter,
  namdevWriter,
  samarthRamdasWriter,
  narayanaGuruWriter,
  basavannaWriter,
  shankaracharyaWriter,
  premchandWriter,
]

export function getWriterBySlug(slug: string): Writer | undefined {
  return allWriters.find((w) => w.slug === slug)
}
