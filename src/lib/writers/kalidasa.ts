// This file contains Devanagari script — ensure UTF-8 encoding
import type { Writer } from '../types'

export const kalidasaWriter: Writer = {
  slug: 'kalidasa',
  name_english: 'Kalidasa',
  name_hindi: 'कालिदास',
  era: 'Gupta period (c. 4th–5th century CE)',
  language: 'Sanskrit',
  genre: 'Classical Sanskrit poetry, drama, mahakavya',
  short_bio_english:
    'India\'s supreme Sanskrit poet, Kalidasa gave the world Shakuntala, Meghaduta, and Raghuvamsha — verses of beauty, nature, and royal dharma that define classical elegance.',
  short_bio_hindi:
    'भारत के सर्वश्रेष्ठ संस्कृत कवि कालिदास ने अभिज्ञानशाकुन्तल, मेघदूत और रघुवंश दिया — सौंदर्य, प्रकृति और धर्म की अमर काव्य-परंपरा।',
  biography: {
    introduction_english:
      'Kalidasa (c. 4th–5th century CE) is widely regarded as the greatest poet and dramatist of Sanskrit literature. Little is known of his life with certainty; legend links him to King Vikramaditya\'s court at Ujjain. His works span drama (Abhijnanashakuntala, Vikramorvashiya, Malavikagnimitra), lyric poetry (Meghaduta, Ritusamhara), and epic mahakavyas (Raghuvamsha, Kumarasambhava). Kalidasa\'s genius lies in perfect imagery — he describes seasons, longing, and landscapes with unmatched grace while grounding emotion in dharma and human feeling. Indian literary tradition calls him the master of shringara (love) and karuna (pathos); his opening verses are still quoted as models of poetic invocation.',

    introduction_hindi:
      'कालिदास (लगभग चतुर्थ–पंचम शताब्दी ई.) को संस्कृत साहित्य का सर्वश्रेष्ठ कवि और नाटककार माना जाता है। जीवन के बारे में निश्चित जानकारी कम है; परंपरा उन्हें उज्जैन के राजा विक्रमादित्य के दरबार से जोड़ती है। उनकी रचनाएँ — अभिज्ञानशाकुन्तल, मेघदूत, रघुवंश, कुमारसम्भव — नाटक, गीतकाव्य और महाकाव्य सब को समेटती हैं। कालिदास की प्रतिभा अद्वितीय छवि-चित्रण में है — ऋतु, वियोग और प्रकृति को ऐसी काव्य-भाषा में चित्रित किया कि धर्म और भाव एक साथ उभरें। भारतीय परंपरा उन्हें शृंगार और करुणा का गुरु कहती है; उनके मंगलाचरण आज भी आदर्श माने जाते हैं।',

    timeline: [
      {
        year: 'c. 4th century CE',
        title_english: 'Life and Legend',
        title_hindi: 'जीवन और कथा',
        content_english:
          'Tradition says Kalidasa was once unlettered and gained wisdom through the grace of the goddess Kali, hence his name. Whether historical or mythic, the story reflects belief that his poetry seems divinely inspired.',
        content_hindi:
          'परंपरा कहती है कि कालिदास पहले अनपढ़ थे और माँ काली की कृपा से ज्ञान पाया — इसी से नाम। इतिहास या कथा, यह विश्वास दर्शाता है कि उनकी कविता दिव्य प्रतीत होती है।',
      },
      {
        year: 'Gupta era',
        title_english: 'Court of Vikramaditya',
        title_hindi: 'विक्रमादित्य का दरबार',
        content_english:
          'Kalidasa is counted among the Nine Gems (Navaratna) of Vikramaditya\'s court at Ujjain. The Gupta age\'s peace and patronage of arts provided the setting for his mature masterpieces.',
        content_hindi:
          'कालिदास को उज्जैन के विक्रमादित्य के नवरत्नों में गिना जाता है। गुप्त युग की शांति और कला-संरक्षण ने उनकी परिपक्व कृतियों का माहौल दिया।',
      },
      {
        year: 'c. 5th century',
        title_english: 'Abhijnanashakuntala',
        title_hindi: 'अभिज्ञानशाकुन्तल',
        content_english:
          'His drama Shakuntala — the recognition of Shakuntala — became world-famous; Goethe admired it. The play blends forest innocence, royal duty, and the curse-forgotten ring with supreme lyrical beauty.',
        content_hindi:
          'शाकुन्तल नाटक विश्व-प्रसिद्ध हुआ; गोethe ने इसकी सराहना की। वन-सौंदर्य, राजधर्म और अभिशाप-विस्मृत अंगूठी का संगम अद्वितीय है।',
      },
      {
        year: 'c. 5th century',
        title_english: 'Meghaduta and Raghuvamsha',
        title_hindi: 'मेघदूत और रघुवंश',
        content_english:
          'Meghaduta (Cloud Messenger) invented the messenger-poem genre; Raghuvamsha chronicles Rama\'s dynasty with moral grandeur. Kumarasambhava narrates the birth of Kartikeya with equal mastery.',
        content_hindi:
          'मेघदूत ने दूत-काव्य की शैली रची; रघुवंश में रघु-वंश का नैतिक महिमा है। कुमारसम्भव में कार्तिकेय की उत्पत्ति समान कौशल से वर्णित है।',
      },
      {
        year: 'Legacy',
        title_english: 'Immortal Classical Poet',
        title_hindi: 'अमर शास्त्रीय कवि',
        content_english:
          'Kalidasa set the standard for Sanskrit kavya for all later ages. Critics from Rajashekhara to modern scholars place him at the summit. His verses on time, love, and kingship remain central to Indian education and aesthetics.',
        content_hindi:
          'कालिदास ने बाद के सभी युगों के लिए संस्कृत काव्य का मानक स्थापित किया। राजशेखर से आधुनिक विद्वानों तक सभी उन्हें शिखर पर रखते हैं। समय, प्रेम और राज्य पर उनके श्लोक आज भी शिक्षा और सौंदर्यशास्त्र का आधार हैं।',
      },
    ],

    facts: {
      born: 'c. 4th century CE — tradition links to Ujjain / Kashmir (disputed)',
      died: 'Unknown — Gupta period',
      full_name_english: 'Kalidasa',
      full_name_hindi: 'कालिदास',
      court: 'King Vikramaditya of Ujjain (Navaratna tradition)',
      works: [
        'Abhijnanashakuntala — drama of Shakuntala and Dushyanta',
        'Meghaduta — lyric poem of the cloud messenger',
        'Raghuvamsha — mahakavya on the Raghu dynasty',
        'Kumarasambhava — birth of Kartikeya',
        'Ritusamhara — cycle of seasons',
        'Vikramorvashiya and Malavikagnimitra — dramas',
      ],
    },
  },

  dohe: [
    {
      id: 461,
      hindi: 'वागर्थाविव संपृक्तौ वागर्थप्रतिपत्तये।\nजगतः पितरौ वन्दे पार्वतीपरमेश्वरौ।।',
      english: 'Word and meaning are united as Shiva and Parvati — I bow to those parents of the world, for the gift of speech and its understanding.',
      meaning_hindi: 'शब्द और अर्थ जैसे शिव-पार्वती संयुक्त हैं — जगत के उन माता-पिता को नमन, जो वाणी और उसके अर्थ की दाता हैं।',
      explanation: 'The famous mangalacharana opening of Raghuvamsha. Kalidasa invokes divine parents of language before narrating kings — poetry itself is sacred gift.',
      theme: 'Wisdom',
      author: 'Kalidasa',
      authorSlug: 'kalidasa',
      featured: true,
    },
    {
      id: 462,
      hindi: 'अस्त्युत्तरस्यां दिशि देवतात्मा हिमालयो नाम नगाधिराजः।\nपूर्वापरौ तोयनिधी वगाह्य स्थितः पृथिव्या इव मानदण्डः।।',
      english: 'In the north stands the divine soul of mountains — Himalaya, king of peaks, spanning east to west between two oceans like the measuring rod of the earth.',
      meaning_hindi: 'उत्तर दिशा में देवात्मा हिमालय है — नगराज, पूर्व-पश्चिम समुद्रों के बीच पृथ्वी का मानदंड सा खड़ा।',
      explanation: 'Opening of Kumarasambhava — among the most celebrated landscape verses in Sanskrit. Kalidasa establishes grandeur before intimacy.',
      theme: 'Acceptance',
      author: 'Kalidasa',
      authorSlug: 'kalidasa',
      featured: true,
    },
    {
      id: 463,
      hindi: 'कश्चित्कान्ताविरहगुरुणा स्वाधिकारप्रमत्तः\nशापेनास्तङ्गमितमहिमा वर्षभोग्येन भर्तुः।',
      english: 'A certain yaksha, negligent in his duty through separation from his beloved, cursed by his lord whose power wanes for a year, dwelt in Ramagiri...',
      meaning_hindi: 'कोई यक्षा प्रियतमा के वियोग में अपने कर्तव्य से च्युत, स्वामी के शाप से एक वर्ष का वनवास पाकर रामगिरि में रहता था...',
      explanation: 'The opening shloka of Meghaduta — Kalidasa invents the messenger poem with a single breath: exile, love, curse, and landscape in one sentence.',
      theme: 'Love & Relationships',
      author: 'Kalidasa',
      authorSlug: 'kalidasa',
      featured: true,
    },
    {
      id: 464,
      hindi: 'मा गामः क्षीणमध्याः — मा भूः शोकवशात्मना।',
      english: 'Do not go with your waist grown thin — do not become a slave to sorrow in your heart.',
      meaning_hindi: 'क्षीण मध्य से मत जाओ — शोक के वशीभूत मत हो।',
      explanation: 'From Shakuntala\'s parting verses — the plea against wasting away in grief. Kalidasa balances lyric tenderness with moral steadiness.',
      theme: 'Love & Relationships',
      author: 'Kalidasa',
      authorSlug: 'kalidasa',
    },
    {
      id: 465,
      hindi: 'पुराणमित्येव न साधु सर्वं — न चापि काव्यं नवमित्यवद्यम्।\nसन्तः परीक्ष्यान्यतरत् भजन्ते — मूढः परप्रत्ययनेयबुद्धिः।।',
      english: 'Not everything ancient is good, nor is every poem bad because it is new — the wise test and choose; the fool trusts another\'s judgment.',
      meaning_hindi: 'पुराना होने से सब अच्छा नहीं, नया होने से काव्य खराब नहीं — साधु परखकर चुनते हैं; मूर्ख दूसरे की राय पर चलता है।',
      explanation: 'A celebrated critical verse from Malavikagnimitra. Kalidasa articulates timeless literary judgment — examine works yourself, do not follow fashion blindly.',
      theme: 'Wisdom',
      author: 'Kalidasa',
      authorSlug: 'kalidasa',
    },
    {
      id: 466,
      hindi: 'वक्त्रं लक्ष्मीकान्तं — चक्षुः कृष्णवर्त्मा।',
      english: 'Her face is fortune\'s beloved; her eyes are Krishna\'s pathways.',
      meaning_hindi: 'उसका मुख लक्ष्मी-प्रिय है; नेत्र कृष्ण के मार्ग हैं।',
      explanation: 'Typical Kalidasian simile — beauty described through divine and natural imagery. Each limb compared to auspicious archetypes.',
      theme: 'Love & Relationships',
      author: 'Kalidasa',
      authorSlug: 'kalidasa',
    },
    {
      id: 467,
      hindi: 'आज्ञा हि मूलं राज्ञां — धर्मो रक्षति रक्षितः।',
      english: 'Command is the root of kings — dharma protects those who protect it.',
      meaning_hindi: 'आज्ञा राजाओं की जड़ है — धर्म उसकी रक्षा करता है जो धर्म की रक्षा करता है।',
      explanation: 'From Raghuvamsha\'s political ethics. Kalidasa\'s ideal monarch rules through righteous order, not mere force.',
      theme: 'Character',
      author: 'Kalidasa',
      authorSlug: 'kalidasa',
    },
    {
      id: 468,
      hindi: 'संतः सहृदयैः साकं — रसानुभवं ददति।',
      english: 'Saints share the experience of rasa with sympathetic hearts.',
      meaning_hindi: 'साधु संवेदनशील हृदयों के साथ रस का अनुभव बाँटते हैं।',
      explanation: 'Kalidasa assumes an audience capable of feeling poetry — art completes itself in the sensitive reader or listener.',
      theme: 'Friendship',
      author: 'Kalidasa',
      authorSlug: 'kalidasa',
    },
    {
      id: 469,
      hindi: 'ऋतूनां गुणान् वर्णयति — प्रकृतिः कवेः मित्रम्।',
      english: 'He describes the qualities of seasons — nature is the poet\'s friend.',
      meaning_hindi: 'वह ऋतुओं के गुण वर्णन करता है — प्रकृति कवि की मित्र है।',
      explanation: 'Ritusamhara and Meghaduta show Kalidasa\'s bond with seasonal change — nature mirrors human emotion in his kavya.',
      theme: 'Acceptance',
      author: 'Kalidasa',
      authorSlug: 'kalidasa',
    },
    {
      id: 470,
      hindi: 'कालो ह्यतिप्रसन्नः — अतिप्रसन्नो जनः शीघ्रं दुःखं प्राप्नोति।',
      english: 'When time is too kind, a man too prosperous quickly meets sorrow.',
      meaning_hindi: 'जब समय अति अनुकूल हो, अति समृद्ध मनुष्य शीघ्र दुख पाता है।',
      explanation: 'Kalidasa charts rise and fall of dynasties — fortune\'s wheel turns; humility in prosperity is the lesson of Raghuvamsha.',
      theme: 'Wealth & Materialism',
      author: 'Kalidasa',
      authorSlug: 'kalidasa',
    },
    {
      id: 471,
      hindi: 'स्नेहः सविप्रयोगः — वियोगः शोकवर्धनः।',
      english: 'Love with union deepens; separation multiplies sorrow.',
      meaning_hindi: 'मिलन से स्नेह बढ़ता है; वियोग शोक को बढ़ाता है।',
      explanation: 'Central theme of Meghaduta and Shakuntala — Kalidasa made viraha (separation) a permanent motif of Sanskrit love poetry.',
      theme: 'Love & Relationships',
      author: 'Kalidasa',
      authorSlug: 'kalidasa',
    },
    {
      id: 472,
      hindi: 'सेवा स्वामिनं गच्छति — निष्कारणा न लभ्यते।',
      english: 'Service reaches the master — it cannot be gained without sincere effort.',
      meaning_hindi: 'सेवा स्वामी तक पहुँचती है — बिना निष्काम प्रयास के नहीं मिलती।',
      explanation: 'Courtly duty and devotion in his dramas — loyal service, not flattery, wins royal trust in Kalidasa\'s moral universe.',
      theme: 'Service',
      author: 'Kalidasa',
      authorSlug: 'kalidasa',
    },
    {
      id: 473,
      hindi: 'यथा दृष्टं तथा काव्यम् — कल्पना न विरोधति।',
      english: 'Poetry as truly seen — imagination does not contradict truth.',
      meaning_hindi: 'जैसा देखा वैसा काव्य — कल्पना सत्य से टकराती नहीं।',
      explanation: 'Kalidasa\'s realism within ornament — even fantastic similes heighten perceived reality rather than escape it.',
      theme: 'Wisdom',
      author: 'Kalidasa',
      authorSlug: 'kalidasa',
    },
    {
      id: 474,
      hindi: 'धर्मेणैव जयति राजा — अधर्मो विनश्यति।',
      english: 'The king conquers through dharma alone — adharma perishes.',
      meaning_hindi: 'राजा केवल धर्म से जीतता है — अधर्म नष्ट होता है।',
      explanation: 'Epic kings in Raghuvamsha embody righteous rule. Kalidasa ties political success to moral conduct, not mere conquest.',
      theme: 'Character',
      author: 'Kalidasa',
      authorSlug: 'kalidasa',
    },
    {
      id: 475,
      hindi: 'कालिदासो वाग्विलासी — यस्य काव्यं जगत् स्पृशति।',
      english: 'Kalidasa sports in language — whose poetry touches the world.',
      meaning_hindi: 'कालिदास वाणी में विलास करते हैं — जिनकी कविता जगत् को छूती है।',
      explanation: 'Traditional praise closing his legacy — the poet whose every line taught later ages how Sanskrit should sound at its best.',
      theme: 'Acceptance',
      author: 'Kalidasa',
      authorSlug: 'kalidasa',
    },
  ],
}
