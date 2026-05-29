# -*- coding: utf-8 -*-
"""Generate writer TypeScript files with clean Devanagari Hindi."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WRITERS = ROOT / 'src' / 'lib' / 'writers'

HEADER = """// This file contains Devanagari script — ensure UTF-8 encoding
import type { Writer } from '../types'
"""

def write_file(name: str, export_name: str, content: str):
    path = WRITERS / name
    path.write_text(content, encoding='utf-8')
    lines = len(content.splitlines())
    print(f'Wrote {path.name}: {lines} lines')

# --- VED VYASA ---
ved_vyasa_content = HEADER + """
export const vedVyasaWriter: Writer = {
  slug: 'ved-vyasa',
  name_english: 'Ved Vyasa',
  name_hindi: 'वेद व्यास',
  era: 'Ancient (Mahabharata era, traditionally c. 1500 BCE)',
  language: 'Sanskrit / Hindi',
  genre: 'Epic poetry, Puranic literature, spiritual wisdom',
  short_bio_english:
    'The legendary compiler of the Vedas and author of the Mahabharata, Vyasa is called the guru of gurus — his epic and the Gita within it remain India\\'s greatest moral compass.',
  short_bio_hindi:
    'वेदों के संकलनकर्ता और महाभारत के रचयिता पौराणिक व्यास को गुरुओं का गुरु कहा जाता है — उनका महाकाव्य और उसमें भगवद्गीता आज भी भारत का सर्वश्रेष्ठ नैतिक दिशासूचक हैं।',
  biography: {
    introduction_english:
      'Krishna Dvaipayana, known as Ved Vyasa (Vyasa of the Vedas), is among the most towering sages of Hindu tradition. Born on an island in the Yamuna to Satyavati and the sage Parashara, he is credited with dividing the primordial Veda into four — Rig, Yajur, Sama, and Atharva — so that humanity could study them. He composed the Mahabharata, the world\\'s longest epic, embedding within it the Bhagavad Gita, the wisdom of Bhishma, Vidura Niti, and countless moral tales. Vyasa also compiled the eighteen Puranas and is considered a partial incarnation of Vishnu. His life intersects with nearly every major figure of the epic age — as father of Pandu and Dhritarashtra, guide to the Pandavas, and chronicler of dharma\\'s trials.',

    introduction_hindi:
      'कृष्ण द्वैपायन, जिन्हें वेद व्यास कहा जाता है, हिंदू परंपरा के सबसे महान ऋषियों में हैं। यमुना के द्वीप पर सत्यवती और ऋषि पराशर से जन्मे व्यास ने एक वेद को चार भागों — ऋग, यजुस, साम और अथर्व — में विभाजित किया। उन्होंने महाभारत रचा, जिसमें भगवद्गीता, भीष्म-विदुर की नीति और अनगिनत नैतिक कथाएँ समाहित हैं। व्यास ने अठारह पुराणों का संकलन भी किया और विष्णु के अंशावतार माने जाते हैं। पांडु-धृतarashtra के पिता, पांडवों के मार्गदर्शक और धर्म की कथा के वर्णनकर्ता — उनका जीवन महाकाव्य युग के लगभग हर प्रमुख पात्र से जुड़ा है।',

    timeline: [
      {
        year: 'Ancient era',
        title_english: 'Birth on the Yamuna Island',
        title_hindi: 'यमुना द्वीप पर जन्म',
        content_english:
          'Vyasa was born to Satyavati, daughter of a fisherman, and the sage Parashara on a dark island in the Yamuna. Named Krishna for his dark complexion and Dvaipayana for his birthplace, he was destined for extraordinary literary and spiritual work.',
        content_hindi:
          'व्यास का जन्म मछुआरे की पुत्री सत्यवती और ऋषि पराशर से यमुना के एक द्वीप पर हुआ। कृष्णवर्ण और द्वीप-जन्म के कारण नाम कृष्ण द्वैपायन पड़ा। उनका जीवन असाधारण साहित्यिक और आध्यात्मिक कार्य के लिए निर्धारित था।',
      },
      {
        year: 'Vedic age (tradition)',
        title_english: 'Division of the Vedas',
        title_hindi: 'वेदों का विभाजन',
        content_english:
          'When the single Veda became too vast for one age to master, Vyasa divided it into four and entrusted each to disciples — Paila, Vaisampayana, Jaimini, and Sumantu. This earned him the title Vyasa (arranger/compiler) and made him the adi-guru of Vedic learning.',
        content_hindi:
          'जब एक वेद बहुत विशाल हो गया, व्यास ने उसे चार भागों में बाँटकर शिष्यों — पैल, वैसंपायन, जैमिनी और सुमंतु — को सौंपा। इसी से व्यास नाम और वेद-शिक्षा के आदि-गुरु का स्थान मिला।',
      },
      {
        year: 'Epic age (tradition)',
        title_english: 'Composition of the Mahabharata',
        title_hindi: 'महाभारत की रचना',
        content_english:
          'Vyasa composed the Mahabharata of 100,000 verses — "what is found here may be found elsewhere; what is not found here is nowhere" — dictating it while Ganesha wrote. The epic encompasses war, philosophy, law, and devotion, with the Bhagavad Gita as its spiritual heart.',
        content_hindi:
          'व्यास ने एक लाख श्लokों का महाभारत रचा — जo यहाँ नहीं, वह कहीं नहीं — गणेश लिखते रहे और व्यास बोलते रहे। इसमें युद्ध, दर्शन, नीति और भक्ति सब समाहित हैं; भगवद्गीता इसका आध्यात्मिक हृदय है।',
      },
      {
        year: 'Kurukshetra era (tradition)',
        title_english: 'Guide to the Pandavas',
        title_hindi: 'पांडवों के मार्गदर्शक',
        content_english:
          'As grandfather and spiritual guide, Vyasa counselled the Pandavas through exile and war. He revealed divine truths, arranged for celestial weapons and teachings, and witnessed the great destruction at Kurukshetra with the sorrow of a sage who sees fate unfold.',
        content_hindi:
          'पितामह और आध्यात्मिक गुरु के रूप में व्यास ने पांडवों को वनवास और युद्ध में मार्गदर्शन दिया। उन्होंne दिव्य सत्य प्रकट किए, शिक्षा और अस्त्र की व्यवस्था की और कुरुक्षेtra के महाविनाश को विधाता का दर्शन करते हुए ऋषि की दृष्टि से देखा।',
      },
      {
        year: 'Legacy',
        title_english: 'Guru of Gurus and Living Scripture',
        title_hindi: 'गुरुओं के गुरु और जीवित शास्त्र',
        content_english:
          'Vyasa\\'s Puranas, Brahma Sutras (attributed), and the Mahabharata shaped Hindu philosophy, law, and storytelling for millennia. Guru Purnima is celebrated in his honour. He remains the symbolic father of Indian literary and spiritual civilization.',
        content_hindi:
          'व्यास के पुराण, बrahma सूत्र (श्रेय) और महाभारत ने सहस्त्राब्दियों तक हिंदू दर्शन, विधि और कatha-परंपरा को आकार दिया। गुरु पूर्णिमा उनके सम्मान में मनाई जाती है। वे भारतीय साहित्यिक और आध्यात्मिक सभ्यता के प्रतीक पिता हैं।',
      },
    ],

    facts: {
      born: 'Ancient era — Yamuna island (tradition); son of Parashara and Satyavati',
      died: 'Unknown — immortal through scripture',
      full_name_english: 'Krishna Dvaipayana (Ved Vyasa)',
      full_name_hindi: 'कृष्ण द्वैपायन (वेद व्यास)',
      court: 'Independent sage; chronicler of the Kuru dynasty',
      works: [
        'Mahabharata — 100,000 verses including the Bhagavad Gita',
        'Compilation and division of the four Vedas',
        'Eighteen Mahapuranas (tradition)',
        'Brahma Sutras (attributed)',
        'Vyasa Smriti and foundational dharmic texts',
      ],
    },
  },

  dohe: [
    {
      id: 251,
      hindi: 'यतो धर्मस्ततो जयः।\\nधर्म एव हतो हन्ति, धर्मो रक्षति रक्षितः।।',
      english: 'Where there is dharma, there is victory. Dharma destroyed destroys; dharma protected protects.',
      meaning_hindi: 'जहाँ धर्म है, वहीं विजय है। धर्म का अनादर करने वाला नष्ट होता है; धर्म की रक्षा करने वाले की धर्म रक्षा करता है।',
      explanation: 'Core Mahabharata ethics attributed to Vyasa\\'s vision. The epic\\'s entire narrative demonstrates that ultimate victory belongs to righteousness, not mere force.',
      theme: 'Wisdom',
      author: 'Ved Vyasa',
      authorSlug: 'ved-vyasa',
      featured: true,
    },
"""

print('Script needs completion - run partial write')
