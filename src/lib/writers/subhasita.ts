// This file contains Devanagari script — ensure UTF-8 encoding
import type { Writer } from '../types'

export const subhasitaWriter: Writer = {
  slug: 'subhasita',
  name_english: 'Subhasita (Classical Wisdom)',
  name_hindi: 'सुभाषित (शास्त्रीय ज्ञान)',
  era: 'Ancient to medieval (Sanskrit tradition)',
  language: 'Sanskrit / Hindi',
  genre: 'Subhashita — classical wise sayings',
  short_bio_english:
    'Subhashitas are concise Sanskrit gems of ethics and insight — drawn from Chanakya, Bhartrihari, Hitopadesha, and the epics — teaching character, friendship, and the art of living.',
  short_bio_hindi:
    'सुभाषित संस्कृत की संक्षिप्त नीति-रत्न हैं — चाणक्य, भर्तृहरि, हितोपदेश और महाकाव्यों से — चरित्र, मित्रता और जीवन-कला सिखाती हैं।',
  biography: {
    introduction_english:
      'Subhashita (literally "well said") denotes the vast tradition of Sanskrit epigrams on conduct, statecraft, love, and liberation. Composed by poets, kings, and sages from the Upanishadic age through medieval courts, these verses were memorised in gurukulas and quoted in daily counsel. Unlike a single author, this collection gathers timeless lines in the spirit of Chanakya\'s political realism, Bhartrihari\'s worldly detachment, and the Panchatantra\'s animal fables turned moral mirrors. Each couplet stands alone — a lamp for friendship, wealth, service, or acceptance when life grows dark.',

    introduction_hindi:
      'सुभाषित — अर्थात् "अच्छा कहा गया" — आचरण, राजनीति, प्रेम और मोक्ष पर संस्कृत सूक्तियों की विशाल परंपरा है। उपनिषद् युग से मध्यकालीन दरबारों तक कवि, राजा और ऋषियों ने ये पद रचे; गुरुकुल में याद किए जाते थे और दैनिक उपदेश में उद्धृत होते थे। यह संग्रह किसी एक रचयिता का नहीं — चाणक्य की राजनीतिक दृष्टि, भर्तृहरि का वैराग्य और पंचतंत्र की नैतिक दर्पण-कथाओं की भावना में संकलित शाश्वत पंक्तियाँ हैं। हर दोहा अपने आप में दीपक है — मित्रता, धन, सेवा या स्वीकृति के लिए।',

    timeline: [
      {
        year: 'Vedic age',
        title_english: 'Roots in Shruti and Smriti',
        title_hindi: 'श्रुति और स्मृति में जड़ें',
        content_english:
          'The earliest moral distichs appear in Vedic hymns and Upanishadic dialogues — brief, memorable lines on dharma and the self that later subhashita poets would imitate and expand.',
        content_hindi:
          'प्रारंभिक नैतिक दोहे वैदिक स्तोत्रों और उपनिषदों के संवादों में मिलते हैं — धर्म और आत्मा पर संक्षिप्त, स्मरणीय पंक्तियाँ जिन्हें बाद के सुभाषितकारों ने आगे बढ़ाया।',
      },
      {
        year: 'c. 4th century BCE',
        title_english: 'Chanakya and Statecraft',
        title_hindi: 'चाणक्य और राजनीति',
        content_english:
          'Chanakya\'s Arthashastra and Niti collections crystallised practical wisdom on friendship, enemies, wealth, and discipline — subhashitas that rulers and commoners still quote.',
        content_hindi:
          'चाणक्य के अर्थशास्त्र और नीति-संग्रहों ने मित्रता, शत्रु, धन और अनुशासन पर व्यावहारिक बुद्धिमत्ता को सूक्ति-रूप में बाँधा — जो आज भी राजा और जन उद्धृत करते हैं।',
      },
      {
        year: 'c. 5th century CE',
        title_english: 'Bhartrihari and Niti Shataka',
        title_hindi: 'भर्तृहरि और नीति शतक',
        content_english:
          'King-poet Bhartrihari\'s three shatakas — Niti, Shringara, and Vairagya — blended worldly counsel with renunciation in some of Sanskrit\'s most polished subhashitas.',
        content_hindi:
          'राजा-कवि भर्तृहरि के नीति, शृंगार और वैराग्य शतक — संसार की सलाह और वैराग्य का संगम — संस्कृत के सबसे परिष्कृत सुभाषितों में हैं।',
      },
      {
        year: 'c. 12th century',
        title_english: 'Hitopadesha and Panchatantra',
        title_hindi: 'हितोपदेश और पंचतंत्र',
        content_english:
          'These story-collections embedded subhashitas in fables — animals and kings alike teaching friendship, caution, and the limits of greed through memorable verses.',
        content_hindi:
          'इन कथा-संग्रहों ने सुभाषितों को रूपक में बाँधा — पशु और राजा दोनों मित्रता, सावधानी और लोभ की सीमा सिखाते हैं।',
      },
      {
        year: 'Living tradition',
        title_english: 'Quoted Across India Today',
        title_hindi: 'आज भी भारत भर में उद्धृत',
        content_english:
          'Subhashitas remain on school walls, in wedding speeches, and in political discourse. Their brevity and universality keep classical Sanskrit wisdom alive in modern Hindi life.',
        content_hindi:
          'सुभाषित आज भी विद्यालयों की दीवारों, विवाह भाषणों और सार्वजनिक उपदेश में जीवित हैं। संक्षिप्तता और सार्वभौमिकता शास्त्रीय संस्कृत ज्ञान को आधुनिक हिंदी जीवन में बनाए रखती है।',
      },
    ],

    facts: {
      born: 'Tradition — no single birth; collective Sanskrit heritage',
      died: 'N/A — oral and literary continuity',
      full_name_english: 'Subhashita Sangraha (Classical Aphorisms)',
      full_name_hindi: 'सुभाषित संग्रह (शास्त्रीय सूक्तियाँ)',
      court: 'Pan-Indian tradition; courts, monasteries, and gurukulas',
      works: [
        'Chanakya Niti — political and moral maxims',
        'Bhartrihari Shataka — Niti, Shringara, Vairagya',
        'Hitopadesha — fables with subhashitas',
        'Panchatantra — animal tales and wisdom verses',
        'Subhashita Ratna Bhandagara — major anthology',
      ],
    },
  },

  dohe: [
    {
      id: 281,
      hindi: 'विद्या ददाति विनयम्, विनयाद् याति पात्रताम्।\nपात्रत्वात् धनम् आप्नोति, धनात् धर्मं ततः सुखम्।।',
      english: 'Knowledge gives humility; from humility comes worthiness. From worthiness comes wealth, from wealth dharma, and from dharma happiness.',
      meaning_hindi: 'विद्या विनम्रता देती है, विनम्रता से योग्यता आती है। योग्यता से धन, धन से धर्म और धर्म से सुख मिलता है।',
      explanation: 'A classic ladder of subhashita ethics. True prosperity begins not in coins but in learning that softens pride and opens the path to righteous joy.',
      theme: 'Wisdom',
      author: 'Subhasita (Classical Wisdom)',
      authorSlug: 'subhasita',
      featured: true,
    },
    {
      id: 282,
      hindi: 'न चोर हार्यं न च राज हार्यं, न भ्राता भाज्यं न च भार्या भार्या।\nअपुत्रस्य गोष्ठी दानं, सत्यानृतं न वचनम्।।',
      english: 'Stolen knowledge cannot be stolen; nor wealth hidden from kings in the mind. Truth and falsehood must not share one tongue — give freely when you have no heir to hoard for.',
      meaning_hindi: 'विद्या चुराई नहीं जा सकती, मन की संपत्ति राजा भी छीन नहीं सकता। सत्य और झूठ एक जीभ पर नहीं — जब वारिस न हो, दान करो।',
      explanation: 'From Chanakya-style niti. Inner wealth — learning and integrity — outlasts external seizure; generosity completes a life without heirs.',
      theme: 'Wealth & Materialism',
      author: 'Subhasita (Classical Wisdom)',
      authorSlug: 'subhasita',
    },
    {
      id: 283,
      hindi: 'परोपकाराय फलन्ति वृक्षाः, परोपकाराय वहन्ति नद्यः।\nपरोपकाराय दुह्यन्ति गावः, परोपकारार्थमिदं शरीरम्।।',
      english: 'Trees bear fruit for others; rivers flow for others. Cows give milk for others — this body too exists for the benefit of others.',
      meaning_hindi: 'वृक्ष दूसरों के लिए फल देते हैं, नदियाँ दूसरों के लिए बहती हैं। गाय दूसरों के लिए दूध देती है — यह शरीर भी दूसरों के हित के लिए है।',
      explanation: 'One of the most beloved subhashitas on selfless service. Nature itself teaches that life finds meaning in giving, not hoarding.',
      theme: 'Service',
      author: 'Subhasita (Classical Wisdom)',
      authorSlug: 'subhasita',
      featured: true,
    },
    {
      id: 284,
      hindi: 'आपत्काले न साहाय्यं, करोति सुहृदो जनः।\nसुहृदाम् अपि न साहाय्यं, आपत्काले भविष्यति।।',
      english: 'In calamity, people do not help even friends — and friends too may fail to help in calamity.',
      meaning_hindi: 'विपत्ति में मित्र भी सहायता नहीं करते — और मित्रों की सहायता भी आपदा में कम पड़ती है।',
      explanation: 'Bhartrihari\'s sober realism. Knowing friendship\'s limits in crisis prevents false expectations and urges self-reliance with compassion.',
      theme: 'Acceptance',
      author: 'Subhasita (Classical Wisdom)',
      authorSlug: 'subhasita',
    },
    {
      id: 285,
      hindi: 'त्यजेद् एकं कुलस्यार्थे, ग्रामस्यार्थे कुलं त्यजेत्।\nग्रामं जनपदस्यार्थे, आत्मार्थे पृथिवीम् त्यजेत्।।',
      english: 'Sacrifice one for the family, the family for the village, the village for the nation — and the world itself for the sake of the soul.',
      meaning_hindi: 'कुल के लिए एक त्यागो, गाँव के लिए कुल, राष्ट्र के लिए गाँव — और आत्मा के लिए सारा संसार त्यागो।',
      explanation: 'A famous hierarchy of duty from the Mahabharata tradition. Higher loyalties transcend narrower circles — culminating in spiritual liberation.',
      theme: 'Service',
      author: 'Subhasita (Classical Wisdom)',
      authorSlug: 'subhasita',
    },
    {
      id: 286,
      hindi: 'अतिथिर् यस्य भग्नाशो, गृहात् प्रतिनिवर्तते।\nस तस्य रक्तं पिबति, मांसं चापि न संशयः।।',
      english: 'The host whose guest leaves with hunger unrelieved — that host drinks his guest\'s blood and eats his flesh, without doubt.',
      meaning_hindi: 'जिस घर का अतिथि भूखा लौटे, वह स्वामी निश्चित रूप से उसका रक्त पीता और मांस खाता है।',
      explanation: 'Hitopadesha severity on hospitality. To neglect a guest\'s need is moral violence — service to the stranger is sacred duty.',
      theme: 'Service',
      author: 'Subhasita (Classical Wisdom)',
      authorSlug: 'subhasita',
    },
    {
      id: 287,
      hindi: 'सत्यं ब्रूयात् प्रियं ब्रूयात्, न ब्रूयात् सत्यम् अप्रियम्।\nप्रियं च न अनृतं ब्रूयात्, एष धर्मः सनातनः।।',
      english: 'Speak truth, speak pleasantly — do not speak truth that is unpleasant. Do not speak pleasant falsehood; this is eternal dharma.',
      meaning_hindi: 'सत्य बोलो, प्रिय बोलो — अप्रिय सत्य मत बोलो। प्रिय असत्य भी मत बोलो; यही सनातन धर्म है।',
      explanation: 'Manu-smriti counsel on speech. Character requires both honesty and kindness — harsh truth and sweet lies both violate dharma.',
      theme: 'Character',
      author: 'Subhasita (Classical Wisdom)',
      authorSlug: 'subhasita',
    },
    {
      id: 288,
      hindi: 'न किञ्चिद् अपि कान्तेन, त्याज्यम् अस्ति कदाचन।\nत्यजेद् दुःखम् अपि प्राणान्, कान्तायाः प्रियम् आगते।।',
      english: 'Nothing should ever be abandoned for the beloved — yet one may even sacrifice life\'s comfort when the beloved\'s joy arrives.',
      meaning_hindi: 'प्रिय के लिए कुछ भी त्यागने योग्य नहीं — पर प्रिय की खुशी आए तो दुःख भी सह लो, प्राण भी दे दो।',
      explanation: 'Classical shringara subhashita. Love tests character — true devotion gives without calculation when the beloved\'s happiness demands it.',
      theme: 'Love & Relationships',
      author: 'Subhasita (Classical Wisdom)',
      authorSlug: 'subhasita',
    },
    {
      id: 289,
      hindi: 'अर्थानाम् अधिकारः स्यात्, न च धर्मस्य कस्यचित्।\nधर्मो हि सर्वकारणम्, सर्वश्रेष्ठो धर्मः स्मृतः।।',
      english: 'Wealth may have many claimants, but dharma belongs to none alone — dharma is the cause of all, and dharma alone is remembered as supreme.',
      meaning_hindi: 'धन पर अनेक का अधिकार हो सकता है, पर धर्म किसी एक का नहीं — धर्म ही सबका कारण और सर्वश्रेष्ठ है।',
      explanation: 'Wealth divides; righteousness unifies. Subhashita tradition insists that moral law outranks material dispute in every assembly.',
      theme: 'Wealth & Materialism',
      author: 'Subhasita (Classical Wisdom)',
      authorSlug: 'subhasita',
    },
    {
      id: 290,
      hindi: 'मूर्खः परप्रत्ययेन, बुद्धिमान् आत्मप्रत्ययेन।\nअतः परप्रत्ययेन, न कर्तव्यः प्रयत्नः क्वचित्।।',
      english: 'The fool trusts others\' judgment; the wise trust their own. Therefore never strive relying solely on another\'s opinion.',
      meaning_hindi: 'मूर्ख दूसरों पर भरोसा करता है, बुद्धिमान अपने विवेक पर। इसलिए केवल पराई राय पर कभी प्रयास मत करो।',
      explanation: 'From Chanakya niti spirit. Wisdom begins in self-examination — borrowed counsel without inner discernment leads fools to ruin.',
      theme: 'Wisdom',
      author: 'Subhasita (Classical Wisdom)',
      authorSlug: 'subhasita',
    },
    {
      id: 291,
      hindi: 'संगः शक्तिकरो जन्तोः, संगो दुर्बलकारणम्।\nसंगात् सर्वं भवेद्, युक्तं संगात् सर्वं भवेद्, अयुक्तम्।।',
      english: 'Company makes one strong or weak — through good company all becomes fitting; through bad, all unfitting.',
      meaning_hindi: 'संगति शक्ति देती या कमज़ोर बनाती — सत्संग से सब शुभ, कुसंग से सब अशुभ हो जाता है।',
      explanation: 'A Mahabharata subhashita on friendship\'s power. Character is rarely solitary — choose companions as one chooses food for the soul.',
      theme: 'Friendship',
      author: 'Subhasita (Classical Wisdom)',
      authorSlug: 'subhasita',
    },
    {
      id: 292,
      hindi: 'उद्यमेन हि सिध्यन्ति कार्याणि, न मनोरथैः।\nन हि सुप्तस्य सिंहस्य, प्रविशन्ति मुखे मृगाः।।',
      english: 'Tasks succeed through effort, not wishful thinking — deer do not walk into the mouth of a sleeping lion.',
      meaning_hindi: 'कार्य परिश्रम से सिद्ध होते हैं, केवल इच्छा से नहीं — सोते शेर के मुँह में हिरण स्वयं नहीं आते।',
      explanation: 'Among the most quoted subhashitas. Desire without disciplined action is fantasy — fortune favours the awake and striving.',
      theme: 'Character',
      author: 'Subhasita (Classical Wisdom)',
      authorSlug: 'subhasita',
      featured: true,
    },
    {
      id: 293,
      hindi: 'यथा च स्वस्ति भवेद्, भूतानां तथा चर।\nन च स्वस्ति भवेद्, यथा न चरेद् भवान्।।',
      english: 'Act so that beings may prosper — and act not so that they suffer because of you.',
      meaning_hindi: 'ऐसा करो कि प्राणियों का कल्याण हो — और ऐसा मत करो जिससे उन्हें तुम्हारे कारण हानि हो।',
      explanation: 'Vidura niti and epic ethics compressed. The measure of conduct is collective welfare — harm to any life returns as moral debt.',
      theme: 'Service',
      author: 'Subhasita (Classical Wisdom)',
      authorSlug: 'subhasita',
    },
    {
      id: 294,
      hindi: 'न जातु कामः कामानाम्, उपभोगेन शाम्यति।\nहविषा कृष्णवर्त्मेव, भूय एवाभिवर्धते।।',
      english: 'Desire is never satisfied by indulgence — like feeding ghee to fire, it blazes higher.',
      meaning_hindi: 'कामना भोग से शांत नहीं होती — जैसे अग्नि में घी डालो, वह और भड़क उठती है।',
      explanation: 'Mahabharata psychology in two lines. Acceptance of desire\'s nature prevents the chase that wealth and pleasure multiply endlessly.',
      theme: 'Acceptance',
      author: 'Subhasita (Classical Wisdom)',
      authorSlug: 'subhasita',
    },
    {
      id: 295,
      hindi: 'काकः कृष्णः पिकः कृष्णः, को भेदः पिककाकयोः।\nवसन्तसमये प्राप्ते, काकः काकः पिकः पिकः।।',
      english: 'The crow is black, the cuckoo black — what difference between cuckoo and crow? When spring arrives, the crow is crow and cuckoo cuckoo.',
      meaning_hindi: 'कौआ काला, कोयल काली — भेद क्या? वसंत आते ही कौआ कौआ, कोयल कोयल — बोली से पहचान होती है।',
      explanation: 'Rahim echoed this theme in Hindi; the Sanskrit original teaches that appearance deceives — season and speech reveal true character.',
      theme: 'Character',
      author: 'Subhasita (Classical Wisdom)',
      authorSlug: 'subhasita',
    },
  ],
}
