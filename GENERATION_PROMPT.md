# Data Generation Prompt

Copy the entire block below and paste it into Claude (or any capable LLM) to generate writer data.
Generate **one writer at a time** for best quality, or ask for a batch of 5.

---

## PROMPT

You are generating structured TypeScript data for a Hindi literature app called **Rahim ke Dohe**.
The app displays dohe (couplets/verses), biography, and facts for classical Indian writers and saints.

---

### TypeScript interfaces (do not change these)

```ts
type ThemeCategory =
  | 'Love & Relationships'
  | 'Friendship'
  | 'Character'
  | 'Wisdom'
  | 'Acceptance'
  | 'Service'
  | 'Wealth & Materialism'

interface Doha {
  id: number           // globally unique — continue from last used id
  hindi: string        // original Devanagari text, lines joined with \n
  english: string      // natural English translation (not word-for-word)
  meaning_hindi: string // plain-Hindi explanation (2-3 sentences)
  explanation: string  // English contextual explanation (2-3 sentences)
  theme: ThemeCategory
  author: string       // full display name e.g. "Kabir Das"
  authorSlug: string   // lowercase-hyphenated e.g. "kabir-das"
  featured?: boolean   // mark 2-3 standout dohe per author as true
}

interface BiographyTimelineEntry {
  year: string              // e.g. "1440", "15th century", "c. 630 BCE"
  title_english: string
  title_hindi: string
  content_english: string   // 2-4 sentences
  content_hindi: string     // 2-4 sentences
}

interface Biography {
  introduction_english: string   // 3-5 sentences
  introduction_hindi: string     // 3-5 sentences
  timeline: BiographyTimelineEntry[]  // 4-6 entries covering life milestones
  facts: {
    born: string            // "Year — Place" or "c. Year" if approximate
    died: string            // "Year — Place (aged N)" or "Unknown"
    full_name_english: string
    full_name_hindi: string
    court: string           // patronage / affiliation / tradition, or "Independent saint-poet"
    works: string[]         // 3-6 major works
  }
}

interface Writer {
  slug: string             // lowercase-hyphenated unique identifier
  name_english: string
  name_hindi: string
  era: string              // e.g. "15th century", "Mughal era (1556–1627)"
  language: string         // e.g. "Hindi / Awadhi", "Sanskrit", "Punjabi / Braj"
  genre: string            // e.g. "Bhakti poetry", "Niti shastra", "Epic poetry"
  short_bio_english: string  // 1-2 sentence teaser shown on cards
  short_bio_hindi: string    // 1-2 sentence teaser shown on cards
  biography: Biography
  dohe: Doha[]             // 15–25 representative dohe / verses / slokas
}
```

---

### Complete reference example (Rahim — already in the codebase, do NOT regenerate)

```ts
export const rahimWriter: Writer = {
  slug: 'rahim',
  name_english: 'Abdul Rahim Khan-i-Khana (Rahim)',
  name_hindi: 'अब्दुल रहीम खान-ए-खाना',
  era: 'Mughal era (1556–1627)',
  language: 'Hindi / Braj Bhasha',
  genre: 'Niti doha, Bhakti poetry',
  short_bio_english: 'One of Akbar\'s Navaratnas, Rahim composed timeless Hindi dohas on love, friendship, and wisdom.',
  short_bio_hindi: 'अकबर के नवरत्नों में से एक, रहीम ने प्रेम, मित्रता और जीवन-ज्ञान पर अमर दोहे लिखे।',
  biography: {
    introduction_english: 'Abdul Rahim Khan-i-Khanan (1556–1627) was one of the most extraordinary figures of the Mughal era...',
    introduction_hindi: 'अब्दुल रहीम खान-ए-खाना (1556–1627) मुगल युग के सबसे असाधारण व्यक्तित्वों में से एक थे...',
    timeline: [
      { year: '1556', title_english: 'Birth in Lahore', title_hindi: 'लाहौर में जन्म', content_english: '...', content_hindi: '...' },
      // ... more entries
    ],
    facts: {
      born: 'December 17, 1556 — Lahore',
      died: 'October 1, 1627 — Agra (aged 70)',
      full_name_english: 'Abdul Rahim Khan-i-Khanan',
      full_name_hindi: 'अब्दुल रहीम खान-ए-खाना',
      court: 'One of Akbar\'s Navaratnas (Nine Gems)',
      works: ['Rahim ke Dohe — 500+ Hindi couplets', 'Baburnama Translation', '...'],
    },
  },
  dohe: [
    {
      id: 1,
      hindi: 'रहिमन धागा प्रेम का, मत तोरो चटकाय।\nटूटे पे फिर न जुरे, जुरे गाँठ परी जाय।।',
      english: 'Do not snap the thread of love abruptly...',
      meaning_hindi: 'प्रेम का रिश्ता बहुत नाज़ुक होता है...',
      explanation: 'This doha emphasizes the delicate nature of love...',
      theme: 'Love & Relationships',
      author: 'Abdul Rahim Khan-i-Khana (Rahim)',
      authorSlug: 'rahim',
      featured: true,
    },
    // id 2–25 follow...
  ],
}
```

---

### Writers to generate

Generate a complete `Writer` object for each writer below.
Export each as a named `const` following the pattern `export const <camelCaseSlug>Writer: Writer = { ... }`.

The last used doha `id` in the existing codebase is **25** (Rahim's dohe are 1–25).
Continue incrementing `id` sequentially across all writers so every doha has a globally unique id.

```
Writers (generate in this order):
 1. Kabir Das                          slug: kabir-das
 2. Goswami Tulsidas                   slug: tulsidas
 3. Surdas                             slug: surdas
 4. Chanakya                           slug: chanakya
 5. Bhartrihari                        slug: bhartrihari
 6. Sant Ravidas                       slug: ravidas
 7. Guru Nanak                         slug: guru-nanak
 8. Swami Vivekananda                  slug: vivekananda
 9. Mahatma Gandhi                     slug: gandhi
10. Harivansh Rai Bachchan             slug: bachchan
11. Ramdhari Singh Dinkar              slug: dinkar
12. Bihari Lal                         slug: bihari-lal
13. Mirabai                            slug: mirabai
14. Sant Tukaram                       slug: tukaram
15. Valmiki                            slug: valmiki
16. Ved Vyasa                          slug: ved-vyasa
17. Rabindranath Tagore                slug: tagore
18. Subhasita Collection               slug: subhasita
19. Bhagavad Gita                      slug: bhagavad-gita
20. Panchatantra                       slug: panchatantra
21. Hitopadesha                        slug: hitopadesha
22. Thiruvalluvar                      slug: thiruvalluvar
23. Buddha                             slug: buddha
24. Osho                               slug: osho
25. A. P. J. Abdul Kalam               slug: kalam
26. Jaishankar Prasad                  slug: jaishankar-prasad
27. Maithili Sharan Gupt               slug: maithili-sharan-gupt
28. Suryakant Tripathi 'Nirala'        slug: nirala
29. Bhavabhuti                         slug: bhavabhuti
30. Kalidasa                           slug: kalidasa
31. Acharya Vinoba Bhave               slug: vinoba-bhave
32. Dadu Dayal                         slug: dadu-dayal
33. Sant Namdev                        slug: namdev
34. Samarth Ramdas                     slug: samarth-ramdas
35. Narayana Guru                      slug: narayana-guru
36. Basavanna                          slug: basavanna
37. Adi Shankaracharya                 slug: shankaracharya
38. Premchand / Munshi Premchand       slug: premchand
```

> **Note:** "Premchand" and "Munshi Premchand" are the same person — generate only one entry under slug `premchand`.

---

### Quality rules

- **Dohe / verses must be authentic** — only use well-known, verifiably attributed works. If a verse is disputed, note it briefly in `explanation`.
- For Sanskrit works (Chanakya, Bhartrihari, Kalidasa, Adi Shankaracharya, etc.) write the Sanskrit original in Devanagari in the `hindi` field, followed by a transliteration note in the `explanation`.
- For Thiruvalluvar use Tamil Kural in the `hindi` field (Devanagari transliteration is acceptable if Tamil script is unavailable).
- `meaning_hindi` must be in simple modern Hindi (not Sanskrit/archaic).
- `explanation` must be in clear, modern English.
- Spread themes evenly — do not put all dohe of a writer in "Wisdom".
- Each writer should have **at least 15 dohe** and at most 25.
- Mark 2–3 per writer as `featured: true`.
- Biography `timeline` should have 4–6 entries; `facts.works` should list 3–6 titles.
- All strings must be valid JSON/TypeScript — escape single quotes inside template literals or use double quotes inside single-quoted strings.
- **Output only the TypeScript `const` export** — no prose, no markdown fences inside the output.

---

### Example request (use this phrasing)

> "Generate the Writer data object for **Kabir Das** following the schema and rules above. Start doha ids at 26."

Then for the next:

> "Generate the Writer data object for **Goswami Tulsidas**. The last doha id used was [N]."

Continue until all 38 writers are done, then consolidate into a single file:

```ts
// src/lib/writers-data.ts
export { rahimWriter } from './data'   // re-export existing
export const kabirDasWriter: Writer = { ... }
export const tulsidasWriter: Writer = { ... }
// ... all others
```
