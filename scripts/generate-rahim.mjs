import fs from 'fs'

const src = fs.readFileSync('src/lib/data.ts', 'utf8')
const doheMatch = src.match(
  /export const dohe: Doha\[\] = (\[[\s\S]*?\])\n\nexport const rahimBiography/
)
const bioMatch = src.match(
  /export const rahimBiography: Biography = (\{[\s\S]*?\})\n\n\/\/ Keep backward/
)
if (!doheMatch || !bioMatch) {
  console.error('parse fail')
  process.exit(1)
}

const out = `// This file contains Devanagari script — ensure UTF-8 encoding
import type { Writer } from '../types'

export const rahimWriter: Writer = {
  slug: 'rahim',
  name_english: 'Abdul Rahim Khan-i-Khana (Rahim)',
  name_hindi: 'अब्दुल रहीम खान-ए-खाना',
  era: 'Mughal era (1556–1627)',
  language: 'Hindi / Braj Bhasha',
  genre: 'Niti doha, Bhakti poetry',
  short_bio_english:
    'One of Akbar\\'s Navaratnas, Rahim composed timeless Hindi dohas on love, friendship, and wisdom.',
  short_bio_hindi:
    'अकबर के नवरत्नों में से एक, रहीम ने प्रेम, मित्रता और जीवन-ज्ञान पर अमर दोहे लिखे।',
  biography: ${bioMatch[1]},
  dohe: ${doheMatch[1]},
}
`

fs.writeFileSync('src/lib/writers/rahim.ts', out)
console.log('wrote rahim.ts', out.length)
