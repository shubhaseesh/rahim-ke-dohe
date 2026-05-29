// This file contains Devanagari script — ensure UTF-8 encoding
import type { Writer } from '../types'

export const surdasWriter: Writer = {
  slug: 'surdas',
  name_english: 'Surdas',
  name_hindi: 'सूरदास',
  era: '16th century (c. 1478–1581)',
  language: 'Hindi / Braj Bhasha',
  genre: 'Bhakti pad, Krishna poetry',
  short_bio_english:
    'A blind poet of Braj, Surdas sang Krishna\'s childhood and divine love in padas that became the soul of North Indian devotional music.',
  short_bio_hindi:
    'ब्रज के अंध कवि सूरदास ने कृष्ण की बाल-लीला और दिव्य प्रेम को पदों में गाया, जो उत्तर भारतीय भक्ति-संगीत की आत्मा बने।',
  biography: {
    introduction_english:
      'Surdas (c. 1478–1581) was a saint-poet of the Krishna bhakti tradition who composed in Braj Bhasha. Born blind according to tradition, he is said to have been raised in humility and later guided by the sage Vallabhacharya of the Pushti Marg. His Sur Sagar and related collections describe Krishna\'s childhood exploits, his play with the gopis, and the longing of the devotee for the divine beloved. Surdas\'s padas are among the most sung verses in North India, set to classical and folk ragas. Though primarily a pad poet, his dohas and couplets carry the same tender wisdom about love, surrender, and devotion.',

    introduction_hindi:
      'सूरदास (लगभग 1478–1581) कृष्ण भक्ति परंपरा के संत-कवि थे, जिन्होंने ब्रज भाषा में रचना की। परंपरा के अनुसार जन्मजात अंधे सूरदास को विनम्रता में पाला गया और बाद में पुष्टि मार्ग के वल्लभाचार्य से मार्गदर्शन मिला। उनके सूर सागर और संबंधित संग्रह कृष्ण की बाल-लीला, गोपियों के संग खेल और भक्त की दिव्य प्रीत की तड़प का वर्णन करते हैं। सूरदास के पद उत्तर भारत में सबसे अधिक गाए जाने वाले भक्ति गीतों में हैं। मुख्य रूप से पद-कवि होने के बावजूद उनके दोहे भी प्रेम, समर्पण और भक्ति की वही कोमल बुद्धिमत्ता रखते हैं।',

    timeline: [
      {
        year: 'c. 1478',
        title_english: 'Birth in a Humble Family',
        title_hindi: 'साधारण परिवार में जन्म',
        content_english:
          'Surdas is traditionally said to have been born blind in a village near Mathura in Braj. Rejected or neglected in childhood, he found solace in singing about Krishna from an early age, turning physical blindness into spiritual vision.',
        content_hindi:
          'परंपरा के अनुसार सूरदास अंधे जन्मे और ब्रज के मथुरा निकट एक गाँव में पले। बचपन में उपेक्षित रहे, पर कृष्ण के गीत गाकर शांति पाई — शारीरिक अंधापन आध्यात्मिक दृष्टि बन गया।',
      },
      {
        year: 'c. 1500s',
        title_english: 'Discipleship under Vallabhacharya',
        title_hindi: 'वल्लभाचार्य की शिष्यता',
        content_english:
          'Surdas became associated with Vallabhacharya, founder of the Pushti Marg sect, who recognised his poetic genius. Under this guidance Surdas composed hundreds of padas celebrating Krishna as the supreme beloved.',
        content_hindi:
          'सूरदास पुष्टि मार्ग के संस्थापक वल्लभाचार्य से जुड़े, जिन्होंने उनकी काव्य प्रतिभा को पहचाना। इस मार्गदर्शन में उन्होंने सैकड़ों पद रचे जिनमें कृष्ण सर्वोच्च प्रीतम हैं।',
      },
      {
        year: 'c. 1540s',
        title_english: 'Sur Sagar and Braj Singing',
        title_hindi: 'सूर सागर और ब्रज गायन',
        content_english:
          'Surdas\'s compositions spread across Braj and beyond through oral performance. The Sur Sagar — Ocean of Sur — gathers his padas on Krishna\'s birth, childhood mischief, and divine romance with Radha and the gopis.',
        content_hindi:
          'सूरदास की रचनाएँ ब्रज और उससे आगे मौखिक गायन से फैलीं। सूर सागर में कृष्ण के जन्म, बाल-चटकारे और राधा-गोपियों के साथ दिव्य प्रेम के पद संकलित हैं।',
      },
      {
        year: 'c. 1570s',
        title_english: 'Patronage and Fame',
        title_hindi: 'संरक्षण और ख्याति',
        content_english:
          'Surdas enjoyed the patronage of Raja Man Singh of Amber and other nobles who valued devotional art. His blindness did not hinder his fame — listeners said his inner sight surpassed ordinary vision.',
        content_hindi:
          'सूरदास को आमेर के राजा मान सिंह और अन्य रईसों का संरक्षण मिला, जो भक्ति कला को सम्मान देते थे। अंधापन उनकी ख्याति में बाधा नहीं बना — श्रोता कहते थे उनकी अंतर दृष्टि सामान्य देखने से बढ़कर है।',
      },
      {
        year: 'c. 1581',
        title_english: 'Legacy of Song',
        title_hindi: 'गीत की विरासत',
        content_english:
          'Surdas died in Braj around 1581. His padas entered the core repertoire of Hindustani classical and bhajan tradition. Poets from Tulsidas to modern singers have acknowledged his influence on devotional Hindi poetry.',
        content_hindi:
          'सूरदास का लगभग 1581 में ब्रज में देहांत हुआ। उनके पद हिंदुस्तानी शास्त्रीय और भजन परंपरा का मूल भंडार बने। तुलसीदास से आधुनिक गायकों तक ने भक्ति हिंदी काव्य पर उनके प्रभाव को स्वीकार किया।',
      },
    ],

    facts: {
      born: 'c. 1478 — Sihi village, Braj (Mathura region)',
      died: 'c. 1581 — Braj, Uttar Pradesh',
      full_name_english: 'Surdas',
      full_name_hindi: 'सूरदास',
      court: 'Pushti Marg tradition; patronage of Raja Man Singh of Amber',
      works: [
        'Sur Sagar — major collection of Krishna padas',
        'Sahitya Lahiri — devotional lyrics',
        'Sur Saravali — additional padas',
        'Sur Padavali — selected songs of Sur',
        'Dohavali and sakhis attributed to Surdas',
      ],
    },
  },

  dohe: [
    {
      id: 56,
      hindi: 'प्रेम ते बीजै प्रेम, प्रेम ते फल होय।\nप्रेम बिनु फल कहाँ है, सूरदास कह सोय।।',
      english: 'From love the seed is sown, from love the fruit appears. Without love there is no fruit at all — so says Surdas.',
      meaning_hindi: 'प्रेम से बीज बोता है, प्रेम से फल लगता है। प्रेम के बिना फल कहाँ? सूरदास यही कहते हैं।',
      explanation: 'Surdas teaches that devotion must permeate every stage of spiritual life. Love is both the origin and the harvest of the path.',
      theme: 'Love & Relationships',
      author: 'Surdas',
      authorSlug: 'surdas',
      featured: true,
    },
    {
      id: 57,
      hindi: 'हौं दीन दयाल रखिहौ, जानि जिह्वा हरि नाम।\nसूरदास प्रभु शरण गहे, सुनहु मोहि राम।।',
      english: 'The Lord of the humble will keep me — so says my tongue repeating Hari\'s name. Surdas has taken refuge in the Lord — listen, O Rama.',
      meaning_hindi: 'दीनों पर दया करने वाले रखेंगे — यह जिह्वा हरि नाम कहती है। सूरदास प्रभु की शरण में हैं — सुनो, हे राम।',
      explanation: 'A plea of complete surrender. Surdas trusts that repeating the divine name while taking refuge ensures protection.',
      theme: 'Acceptance',
      author: 'Surdas',
      authorSlug: 'surdas',
    },
    {
      id: 58,
      hindi: 'जो नर दुख में सुमिरन करै, दुख काहू को नाहि।\nसूरदास कहै सो नर, सुख सदा सिराहि।।',
      english: 'One who remembers the Lord in sorrow finds sorrow nowhere. Surdas says such a person wears happiness always on his head.',
      meaning_hindi: 'जो दु:ख में सुमिरन करता है, उसे दु:ख नहीं मिलता। सूरदास कहते हैं — ऐसा व्यक्ति सदा सुख पाता है।',
      explanation: 'Remembrance of God in difficult times transforms suffering. Devotional practice turns affliction into lasting peace.',
      theme: 'Wisdom',
      author: 'Surdas',
      authorSlug: 'surdas',
    },
    {
      id: 59,
      hindi: 'मुख प्रसन्न चित निर्मल जाको, देखत सब सुहाव।\nसूरदास कहै सो नर, जग माहि सिरताज।।',
      english: 'Whose face is cheerful and mind is pure — all find him pleasing to behold. Surdas says such a person is the crown jewel of the world.',
      meaning_hindi: 'जिसका मुख प्रसन्न और चित निर्मल है, सब उसे देखकर सुख पाते हैं। सूरदास कहते हैं — वह संसार का सिरताज है।',
      explanation: 'Inner purity and outward cheerfulness mark the true devotee. Such character naturally attracts and uplifts others.',
      theme: 'Character',
      author: 'Surdas',
      authorSlug: 'surdas',
    },
    {
      id: 60,
      hindi: 'जो जन हरि हरि नाम सुनाव, ताको सदा सहाय।\nसूरदास कहै सो नर, मिटै सब संताप।।',
      english: 'One who causes others to hear Hari\'s name receives constant help. Surdas says all affliction vanishes for such a person.',
      meaning_hindi: 'जो दूसरों से हरि नाम सुनाता है, उसे सदा सहायता मिलती है। सूरदास कहते हैं — उसके सब संताप मिट जाते हैं।',
      explanation: 'Sharing the divine name is the highest service. Surdas rewards those who spread devotion with relief from their own troubles.',
      theme: 'Service',
      author: 'Surdas',
      authorSlug: 'surdas',
    },
    {
      id: 61,
      hindi: 'मित्र सुजान सो जानिए, जो विपदा पर आव।\nसूरदास कहै सो मीत, सच्चा सब गुन गाव।।',
      english: 'Know the wise friend as one who comes in adversity. Surdas says that friend is true — sing all his virtues.',
      meaning_hindi: 'सुजान मित्र वही है जो विपत्ति में आए। सूरदास कहते हैं — वही सच्चा मित्र है, उसके गुण गाओ।',
      explanation: 'True friendship is tested in hardship. Surdas celebrates companions who stand by the devotee when times grow dark.',
      theme: 'Friendship',
      author: 'Surdas',
      authorSlug: 'surdas',
    },
    {
      id: 62,
      hindi: 'धन बिनु जग जीवन हि, कोऊ न पूज्य होय।\nसूरदास कहै सो नर, हरि सेवा सुखदोय।।',
      english: 'In this world without wealth none is honoured. Surdas says — one who serves Hari finds double joy.',
      meaning_hindi: 'धन के बिना संसार में कोई पूज्य नहीं होता। सूरदास कहते हैं — जो हरि की सेवा करता है, उसे दोहरा सुख मिलता है।',
      explanation: 'Worldly honour follows riches, but spiritual service brings deeper satisfaction that society cannot grant or withhold.',
      theme: 'Wealth & Materialism',
      author: 'Surdas',
      authorSlug: 'surdas',
    },
    {
      id: 63,
      hindi: 'जो प्रेम बिनु गावै गीत, सो गीत न होय।\nसूरदास कहै सो कंठ, बाजै बिनु प्रेम।।',
      english: 'A song sung without love is no song at all. Surdas says that throat plays in vain without love.',
      meaning_hindi: 'जो प्रेम के बिना गीत गाए, वह गीत नहीं है। सूरदास कहते हैं — बिना प्रेम के कंठ व्यर्थ बजता है।',
      explanation: 'Technical skill without devotion is empty. Surdas insists that every verse must arise from genuine love for Krishna.',
      theme: 'Love & Relationships',
      author: 'Surdas',
      authorSlug: 'surdas',
      featured: true,
    },
    {
      id: 64,
      hindi: 'जाको राखै राम, ताको को नहीं मार।\nसूरदास कहै सो नर, सदा सुख संसार।।',
      english: 'One whom Rama protects — none can destroy. Surdas says such a person finds happiness always in this world.',
      meaning_hindi: 'जिसे राम रखें, उसे कोई नहीं मार सकता। सूरदास कहते हैं — ऐसा व्यक्ति संसार में सदा सुखी रहता है।',
      explanation: 'Divine protection surpasses all worldly threat. Surrender to Rama brings security that no enemy can break.',
      theme: 'Acceptance',
      author: 'Surdas',
      authorSlug: 'surdas',
    },
    {
      id: 65,
      hindi: 'जो जन मानस माहि हरि, ताहि जानिअ निज दास।\nसूरदास कहै सो नर, पावै सब अभिलास।।',
      english: 'One in whose mind Hari dwells — know him as His own servant. Surdas says such a person obtains every true desire.',
      meaning_hindi: 'जिसके मन में हरि बसे, उसे अपना दास जानो। सूरदास कहते हैं — वह सब वास्तविक इच्छाएँ पा लेता है।',
      explanation: 'When God occupies the mind, worldly cravings resolve into fulfilment. Inner devotion satisfies what outer striving cannot.',
      theme: 'Character',
      author: 'Surdas',
      authorSlug: 'surdas',
    },
    {
      id: 66,
      hindi: 'जो सुमिरन करै निरंतर, सो नर पावै पार।\nसूरदास कहै सो नर, उतरै भव सागर।।',
      english: 'One who remembers the Lord constantly crosses to the other shore. Surdas says such a person swims across the ocean of existence.',
      meaning_hindi: 'जो निरंतर सुमिरन करता है, वह पार जाता है। सूरदास कहते हैं — वह भव सागर से उतर जाता है।',
      explanation: 'Continuous remembrance is the boat across samsara. Surdas offers a simple, repeated practice as the path to liberation.',
      theme: 'Wisdom',
      author: 'Surdas',
      authorSlug: 'surdas',
    },
    {
      id: 67,
      hindi: 'जो दैया धरै जग माहि, सो नर पावै धाम।\nसूरदास कहै सो नर, हरि कृपा अभिराम।।',
      english: 'One who shows compassion in this world reaches the divine abode. Surdas says Hari\'s grace rests lovingly on such a person.',
      meaning_hindi: 'जो संसार में दया करता है, वह धाम पाता है। सूरदास कहते हैं — उस पर हरि की कृपा अभिराम रहती है।',
      explanation: 'Compassion in daily life opens the door to grace. Surdas links mercy toward others with acceptance by the divine.',
      theme: 'Service',
      author: 'Surdas',
      authorSlug: 'surdas',
    },
    {
      id: 68,
      hindi: 'जो संत सेवा करै, सो नर पावै ज्ञान।\nसूरदास कहै सो नर, मिटै सब अज्ञान।।',
      english: 'One who serves the saints obtains wisdom. Surdas says all ignorance is erased for such a person.',
      meaning_hindi: 'जो संतों की सेवा करता है, उसे ज्ञान मिलता है। सूरदास कहते हैं — उसका सारा अज्ञान मिट जाता है।',
      explanation: 'Service to enlightened souls is a path to knowledge. Association with saints dispels the darkness of unknowing.',
      theme: 'Friendship',
      author: 'Surdas',
      authorSlug: 'surdas',
    },
    {
      id: 69,
      hindi: 'मोह मिटै जब हरि भजै, तब मन होत शीतल।\nसूरदास कहै सो नर, पावै सब फल मीतल।।',
      english: 'When attachment fades through worship of Hari, the mind grows cool and calm. Surdas says such a person obtains every sweet fruit.',
      meaning_hindi: 'जब हरि भजन से मोह मिटता है, मन शीतल हो जाता है। सूरदास कहते हैं — ऐसा व्यक्ति सब मीठे फल पाता है।',
      explanation: 'Worldly attachment heats the mind with craving. Devotion cools it and yields the fruits of peace and contentment.',
      theme: 'Wealth & Materialism',
      author: 'Surdas',
      authorSlug: 'surdas',
    },
    {
      id: 70,
      hindi: 'जो प्रेम रस पीवै, सो नर होत अमोल।\nसूरदास कहै सो नर, पावै अंतर अपोल।।',
      english: 'One who drinks the nectar of love becomes priceless. Surdas says such a person finds immeasurable inner treasure.',
      meaning_hindi: 'जो प्रेम-रस पीता है, वह अमूल्य हो जाता है। सूरदास कहते हैं — उसे अंतर का अपार खजाना मिलता है।',
      explanation: 'The rasa of divine love transforms the devotee\'s worth. Inner bliss surpasses every measure of worldly wealth.',
      theme: 'Wisdom',
      author: 'Surdas',
      authorSlug: 'surdas',
      featured: true,
    },
  ],
}
