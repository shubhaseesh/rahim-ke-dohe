// This file contains Devanagari and Pali-derived script — ensure UTF-8 encoding
import type { Writer } from '../types'

export const buddhaWriter: Writer = {
  slug: 'buddha',
  name_english: 'Gautama Buddha',
  name_hindi: 'गौतम बुद्ध',
  era: 'c. 563–483 BCE',
  language: 'Pali / Sanskrit tradition',
  genre: 'Dhamma verses, spiritual teaching',
  short_bio_english:
    'The awakened one who taught the Middle Way — non-violence, mindfulness, and the end of suffering through wisdom and compassion.',
  short_bio_hindi:
    'जागृत महात्मा जिन्होंने मध्य मार्ग सिखाया — अहिंसा, सचेतनता, और ज्ञान व करुणा से दुख का अंत।',
  biography: {
    introduction_english:
      'Siddhartha Gautama (c. 563–483 BCE), known as the Buddha — "the Awakened One" — was a spiritual teacher whose insights founded Buddhism, one of the world\'s major religions and philosophical traditions. Born a prince in Lumbini (present-day Nepal), he renounced palace life after encountering old age, sickness, and death. After years of ascetic practice and meditation under the Bodhi tree at Bodh Gaya, he attained enlightenment and spent the remaining forty-five years teaching the Four Noble Truths and the Noble Eightfold Path across the Gangetic plain. The Buddha\'s teachings — preserved in the Pali Canon and Dhammapada — emphasise impermanence, non-attachment, compassion for all beings, and the power of the mind to overcome suffering. His influence extends across Asia and, in modern times, to mindfulness practices worldwide.',

    introduction_hindi:
      'सिद्धार्थ गौतम (लगभग 563–483 ई.पू.), जिन्हें बुद्ध — "जागृत" — कहा जाता है, एक आध्यात्मिक शिक्षक थे जिनकी अंतर्दृष्टि ने बौद्ध धर्म की स्थापना की — विश्व के प्रमुख धर्मों और दर्शनों में से एक। लुंबिनी (वर्तमान नेपाल) में राजकुमार के रूप में जन्मे, वृद्धावस्था, रोग और मृत्यु देखकर उन्होंने राजमहल त्याग दिया। वर्षों की तपस्या और बोधगया के बोधि वृक्ष के नीचे ध्यान के बाद उन्होंने बोध प्राप्त की और अगले पैंतालीस वर्ष गंगा के मैदान में चार आर्य सत्य और अष्टांगिक मार्ग सिखाते रहे। बुद्ध की शिक्षाएँ — पालि कanon और धम्मपद में संरक्षित — अनित्यता, निरासक्ति, सभी प्राणियों के प्रति करुणा और दुख पर विजय के लिए मन की शक्तi पर बल देती हैं।',

    timeline: [
      {
        year: 'c. 563 BCE',
        title_english: 'Birth in Lumbini',
        title_hindi: 'लुंबिनी में जन्म',
        content_english:
          'Siddhartha Gautama was born in Lumbini, in the Shakya republic of ancient Nepal. His father Suddhodana was a chieftain who shielded the young prince from witnessing human suffering.',
        content_hindi:
          'सिद्धार्थ गौतम का जन्म प्राचीन नेपाल के शाक्य गणराज्य के लुंबिनी में हुआ। उनके पिता शुद्धोदन ने युवा राजकुमार को मानव दुख से दूर रखा।',
      },
      {
        year: 'c. 534 BCE',
        title_english: 'The Great Renunciation',
        title_hindi: 'महाप्रस्थान',
        content_english:
          'After witnessing an old man, a sick person, a corpse, and a wandering ascetic — the Four Sights — Siddhartha left his palace, wife, and newborn son Rahula to seek the end of suffering.',
        content_hindi:
          'वृद्ध, रोगी, मृतक और तपस्वी — चार दृश्य — देखकर सिद्धार्थ ने महल, पत्नी और नवजात पुत्र राहुल को छोड़कर दुख का अंत खोजने निकल पड़े।',
      },
      {
        year: 'c. 528 BCE',
        title_english: 'Enlightenment at Bodh Gaya',
        title_hindi: 'बोधगया में बोध',
        content_english:
          'After rejecting extreme asceticism and discovering the Middle Way, Siddhartha meditated under the Bodhi tree until he attained full awakening — becoming the Buddha, the knower of truth.',
        content_hindi:
          'अत्यंत तपस्या को त्यागकर और मध्य मार्ग की खोज के बाद, सिद्धार्थ ने बोधि वृक्ष के नीचे ध्यान किया जब तक पूर्ण बोध न प्राप्त हुई — और वे बुद्ध, सत्य के ज्ञाता बने।',
      },
      {
        year: 'c. 528–483 BCE',
        title_english: 'Teaching the Dhamma',
        title_hindi: 'धम्म का उपदेश',
        content_english:
          'The Buddha taught for forty-five years across Magadha and Kosala, founding the Sangha (monastic community). His first sermon at Sarnath set the Wheel of Dhamma in motion. Kings, merchants, and outcasts alike became his disciples.',
        content_hindi:
          'बुद्ध ने पैंतालीस वर्ष मगध और कोसala में उपदेश दिया, संघ (भिक्षु समुदाय) की स्थापना की। सarnath में प्रथम उपदेश ने धर्मचक्र प्रवर्तन किया। राजा, व्यापारी और सबसे नीचे जाति के लोग भी शिष्य बने।',
      },
      {
        year: 'c. 483 BCE',
        title_english: 'Parinirvana and Enduring Legacy',
        title_hindi: 'महापarinirvana और स्थायी विरासत',
        content_english:
          'The Buddha passed away at Kushinagar at the age of eighty. His final words urged disciples to be lamps unto themselves. Buddhism spread across Asia and his teachings on mindfulness and compassion continue to transform lives worldwide.',
        content_hindi:
          'बुद्ध का अस्सी वर्ष की आयु में कुशीनगर में महापarinirvana हुआ। अंतिम शब्दों में शिष्यों से कहा — अपना दीपक स्वयं बनो। बौद्ध धर्म पूरे एशिया में फैला और सचेतनता व करुणा की शिक्षा आज भी जीवन बदलती है।',
      },
    ],

    facts: {
      born: 'c. 563 BCE — Lumbini, Shakya republic (present-day Nepal)',
      died: 'c. 483 BCE — Kushinagar, Malla republic',
      full_name_english: 'Siddhartha Gautama (Shakyamuni Buddha)',
      full_name_hindi: 'सिद्धार्थ गौतम (शाक्यमुनि बुद्ध)',
      court: 'Independent spiritual teacher; taught kings including Bimbisara and Pasenadi',
      works: [
        'Dhammapada — 423 verses of ethical teaching',
        'Sutta Pitaka — discourses preserved in Pali Canon',
        'Four Noble Truths and Noble Eightfold Path',
        'Vinaya Pitaka — monastic discipline code',
      ],
    },
  },

  dohe: [
    {
      id: 356,
      hindi: 'अनिच्चा वट्ट dukkha anattā।\nसब कुछ अनित्य है, दुख है, और निरात्म है — यही तीन लक्षण हैं।',
      english: 'All conditioned things are impermanent, suffering, and without a permanent self — these are the three marks of existence.',
      meaning_hindi: 'सब संskrit बंधन वाली वस्तुएँ अनित्य, दुखमय और निरात्म हैं — यही अस्तित्व के तीन लक्षण हैं।',
      explanation: 'The three marks (tilakkhana) are foundational to Buddhist wisdom. Recognising impermanence loosens attachment and opens the path to liberation.',
      theme: 'Acceptance',
      author: 'Gautama Buddha',
      authorSlug: 'buddha',
      featured: true,
    },
    {
      id: 357,
      hindi: 'मनopubbangama dhamma manosettha manomaya।\nमन hi सबसे पहले है, मन श्रेष्ठ है, मन से ही सब बनता है।',
      english: 'Mind is the forerunner of all things; mind is chief; all things are mind-made.',
      meaning_hindi: 'मन सब कर्मों का अग्रणी है, मन श्रेष्ठ है — सब कुछ मन से निर्मित होता है।',
      explanation: 'Opening verse of the Dhammapada (1). The Buddha teaches that mental states shape experience — guard the mind and you guard your entire life.',
      theme: 'Wisdom',
      author: 'Gautama Buddha',
      authorSlug: 'buddha',
      featured: true,
    },
    {
      id: 358,
      hindi: 'अक्कोचhi kovida assa, ayudho dhanapalito।\nन हि verena verani sammantidha kudacanam।',
      english: 'Let one not strike another; let one not scold another. Never in this world does hatred cease through hatred.',
      meaning_hindi: 'कोई दूसरे को न मारे, न डांटे — इस संसार में कभी घृणा से घृणा नहीं मिटती।',
      explanation: 'Dhammapada 3–5. Non-violence in thought, word, and deed is the Buddha\'s radical ethic — only love and understanding can end conflict.',
      theme: 'Character',
      author: 'Gautama Buddha',
      authorSlug: 'buddha',
    },
    {
      id: 359,
      hindi: 'सुखkaram bhavayati, dukkharam bhavayati।\nयो धम्मं deseti vinnu paresa।',
      english: 'One who teaches the Dhamma to others creates happiness; one who lives wrongly creates suffering.',
      meaning_hindi: 'जो धर्म सिखाता है, सुख उत्पन्न करता है; जो गलत जीवन जीता है, दुख उत्पन्न करता है।',
      explanation: 'Sharing wisdom benefits both teacher and listener. The Buddha valued teaching as the highest service — pointing others toward the path of peace.',
      theme: 'Service',
      author: 'Gautama Buddha',
      authorSlug: 'buddha',
    },
    {
      id: 360,
      hindi: 'उदanvayam anupassati, aniccato dukkhato ca।\nattani attanam passati, khemam pappoti pandito।',
      english: 'The wise one observes rise and fall, sees impermanence and suffering in the self, and attains peace.',
      meaning_hindi: 'बुद्धिमान उत्थान-पतन देखता है, आत्म में अनित्यता और दुख पहचानता है, और शांति पाता है।',
      explanation: 'Insight meditation reveals the transient nature of all phenomena. Seeing clearly, the wise person releases clinging and finds security within.',
      theme: 'Wisdom',
      author: 'Gautama Buddha',
      authorSlug: 'buddha',
    },
    {
      id: 361,
      hindi: 'न तु puttasamam dhanam, na jayisamam sukham।\nन silasamam kincanam, na panna samam tapo।',
      english: 'No wealth equals a virtuous child; no joy equals victory over oneself. Nothing equals good conduct; no austerity equals wisdom.',
      meaning_hindi: 'कोई धन पुत्र के समान नहीं; कोई सुख आत्म-विजय के समान नहीं। कोई वस्तu शील के समान नहीं; कोई तप ज्ञान के समान नहीं।',
      explanation: 'Dhammapada on true values. The Buddha ranks inner virtue and wisdom above material gain — self-mastery is the highest victory.',
      theme: 'Character',
      author: 'Gautama Buddha',
      authorSlug: 'buddha',
    },
    {
      id: 362,
      hindi: 'सabbapapassa akaranam, kusalassa upasampada।\nSacittapariyodapanam, etam buddhanam sasanam।',
      english: 'To refrain from all evil, to cultivate good, and to purify the mind — this is the teaching of the Buddhas.',
      meaning_hindi: 'सब पाप से बचना, kusala का विकास करना, और मन की शुद्धि — यही buddhoं का उपदेश है।',
      explanation: 'Often called the essence of all Buddhist teaching in three lines. Ethics, cultivation, and mental purification form the complete path.',
      theme: 'Service',
      author: 'Gautama Buddha',
      authorSlug: 'buddha',
      featured: true,
    },
    {
      id: 363,
      hindi: 'अnupubbena medhavi, thokam thokam khanam khanam।\nKirayam vihahe kammam, niggayha varam acare।',
      english: 'The wise person, gradually, little by little, moment by moment, removes bad habits and cultivates good ones.',
      meaning_hindi: 'बुद्धिमान धीरे-धीरे, थोड़ा-थोड़ा, क्षण-क्षण, बुरी आदतों को हटाकर अच्छी आदतों का विकास करता है।',
      explanation: 'Dhammapada 239. Spiritual progress is incremental — patience and steady effort transform character more reliably than sudden extremes.',
      theme: 'Acceptance',
      author: 'Gautama Buddha',
      authorSlug: 'buddha',
    },
    {
      id: 364,
      hindi: 'यavassa anupassati, aniccato dukkhato ca।\nAttani attanam passati, khemam pappoti pandito।',
      english: 'One who reflects on impermanence and suffering in all things, and sees this in oneself, reaches the safe shore.',
      meaning_hindi: 'जो सब में अनित्यता और दुख देखता है, और अपने आप में भी — वह सुरक्षित तट पर पहुँचता है।',
      explanation: 'Contemplating impermanence is not pessimism — it frees the mind from grasping and reveals the peace that lies beyond attachment.',
      theme: 'Acceptance',
      author: 'Gautama Buddha',
      authorSlug: 'buddha',
    },
    {
      id: 365,
      hindi: 'अहिंसा परमो धर्मः — सर्वभूतानां जीवितं रक्षणीयम्।',
      english: 'Non-violence is the highest dharma; protect the life of all beings.',
      meaning_hindi: 'अहिंसा परमो धर्मः — सभी प्राणियों का जीवन रक्षा करो।',
      explanation: 'The Buddha extended compassion to all sentient beings. Ahimsa — non-harming in body, speech, and mind — is the foundation of Buddhist ethics.',
      theme: 'Service',
      author: 'Gautama Buddha',
      authorSlug: 'buddha',
    },
    {
      id: 366,
      hindi: 'अtthamhi jatamhi sukha, dhamme jatamhi sukham।\nSanghe jatamhi sukham, passati aniccam sada।',
      english: 'Joy arises in generosity, joy in the Dhamma, joy in the Sangha — the wise one always sees impermanence.',
      meaning_hindi: 'दान में सुख, धर्म में सukh, संघ में सुख — बुद्धिमान सदा अनित्यता देखता है।',
      explanation: 'True happiness comes from giving, practicing, and community — not from clinging to what must pass away.',
      theme: 'Wealth & Materialism',
      author: 'Gautama Buddha',
      authorSlug: 'buddha',
    },
    {
      id: 367,
      hindi: 'न मonena attho, na panadena attho।\nAppena bahukam kare, yam jivitam anapajjati।',
      english: 'Not by silence does one become wise; not by much talk either. Do what is necessary — enough to sustain life without harm.',
      meaning_hindi: 'मौन से बुद्धि नहीं, अधिक बोलने से भी नहीं। जो ज़रूरी है वही करो — जीवन भरने के लिए, बिना हिंसा के।',
      explanation: 'The Middle Way applies to speech and action alike. Neither excessive austerity nor indulgence leads to wisdom — balance is the Buddha\'s way.',
      theme: 'Wisdom',
      author: 'Gautama Buddha',
      authorSlug: 'buddha',
    },
    {
      id: 368,
      hindi: 'पाणातिपाता veramaṇī sikkhāpadaṃ samādiyāmi — sabba pāṇabhūtahitāya anukampāṃ paṭicca।',
      english: 'I undertake to abstain from killing; I cultivate compassion for all living beings.',
      meaning_hindi: 'मैं प्राण हिंसा से बचने का व्रत लेता हूँ; सब जीवित प्राणियों के प्रति करुणा का विकास करता हूँ।',
      explanation: 'The first precept of Buddhist lay ethics. Extending compassion beyond humans to all sentient life is central to the Buddha\'s moral vision.',
      theme: 'Character',
      author: 'Gautama Buddha',
      authorSlug: 'buddha',
    },
    {
      id: 369,
      hindi: 'अppamado amatapadam, pamado maccuno padam।\nAppamatta na miyanti, pamatta yatha mata mata।',
      english: 'Diligence is the path to the deathless; negligence is the path to death. The diligent do not die; the negligent are as if dead already.',
      meaning_hindi: 'सावधानी अमर पद है, प्रमाद मृत्यु का पद है। सावधान लोग नहीं मरते; प्रमादी पहले से ही मरे हुए हैं।',
      explanation: 'Dhammapada 21. Mindfulness and earnest effort on the spiritual path lead to liberation; spiritual laziness is a living death.',
      theme: 'Wisdom',
      author: 'Gautama Buddha',
      authorSlug: 'buddha',
    },
    {
      id: 370,
      hindi: 'Atta hi attano natho, atta hi attano gati।\nAttana hi suddhi asuddhi, attana visodhaye।',
      english: 'You yourself are your own master; you yourself are your own refuge. Purity and impurity depend on yourself — no one can purify another.',
      meaning_hindi: 'तुम स्वयं अपने स्वामी हो, स्वयं अपनी शरण हो। शुद्धि और अशुद्धि तुम पर निर्भर — कोई दूसरे को शुद्ध नहीं कर सकता।',
      explanation: 'Dhammapada 160–165. The Buddha\'s final message of self-reliance — be lamps unto yourselves. Liberation is an inner achievement, not a gift from outside.',
      theme: 'Love & Relationships',
      author: 'Gautama Buddha',
      authorSlug: 'buddha',
    },
  ],
}
