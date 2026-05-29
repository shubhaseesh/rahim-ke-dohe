// This file contains Devanagari script — ensure UTF-8 encoding
import type { Writer } from '../types'

export const vedVyasaWriter: Writer = {
  slug: 'ved-vyasa',
  name_english: 'Ved Vyasa',
  name_hindi: 'वेद व्यास',
  era: 'Ancient (Mahabharata era, traditionally c. 1500 BCE)',
  language: 'Sanskrit / Hindi',
  genre: 'Epic poetry, Puranic literature, spiritual wisdom',
  short_bio_english:
    'The legendary compiler of the Vedas and author of the Mahabharata, Vyasa is called the guru of gurus — his epic and the Gita within it remain India\'s greatest moral compass.',
  short_bio_hindi:
    'वेदों के संकलनकर्ता और महाभारत के रचयिता पौराणिक व्यास को गुरुओं का गुरु कहा जाता है — उनका महाकाव्य और उसमें भगवद्गीता आज भी भारत का सर्वश्रेष्ठ नैतिक दिशासूचक हैं।',
  biography: {
    introduction_english:
      'Krishna Dvaipayana, known as Ved Vyasa (Vyasa of the Vedas), is among the most towering sages of Hindu tradition. Born on an island in the Yamuna to Satyavati and the sage Parashara, he is credited with dividing the primordial Veda into four — Rig, Yajur, Sama, and Atharva — so that humanity could study them. He composed the Mahabharata, the world\'s longest epic, embedding within it the Bhagavad Gita, the wisdom of Bhishma, Vidura Niti, and countless moral tales. Vyasa also compiled the eighteen Puranas and is considered a partial incarnation of Vishnu. His life intersects with nearly every major figure of the epic age — as father of Pandu and Dhritarashtra, guide to the Pandavas, and chronicler of dharma\'s trials.',

    introduction_hindi:
      'कृष्ण द्वैपायन, जिन्हें वेद व्यास कहा जाता है, हिंदू परंपरा के सबसे महान ऋषियों में हैं। यमुना के द्वीप पर सत्यवती और ऋषि पराशर से जन्मे व्यास ने एक वेद को चार भागों — ऋग, यजुस, साम और अथर्व — में विभाजित किया। उन्होंने महाभारत रचा, जिसमें भगवद्गीता, भीष्म-विदुर की नीति और अनगिनत नैतिक कथाएँ समाहित हैं। व्यास ने अठारह पुराणों का संकलन भी किया और विष्णु के अंशावतार माने जाते हैं। पांडु-धृतराष्ट्र के पिता, पांडवों के मार्गदर्शक और धर्म की कथा के वर्णनकर्ता — उनका जीवन महाकाव्य युग के लगभग हर प्रमुख पात्र से जुड़ा है।',

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
          'व्यास ने एक लाख श्लोक का महाभारत रचा — जो यहाँ नहीं, वह कहीं नहीं — गणेश लिखते रहे और व्यास बोलते रहे। इसमें युद्ध, दर्शन, नीति और भक्ति सब समाहित हैं; भगवद्गीता इसका आध्यात्मिक हृदय है।',
      },
      {
        year: 'Kurukshetra era (tradition)',
        title_english: 'Guide to the Pandavas',
        title_hindi: 'पांडवों के मार्गदर्शक',
        content_english:
          'As grandfather and spiritual guide, Vyasa counselled the Pandavas through exile and war. He revealed divine truths, arranged for celestial weapons and teachings, and witnessed the great destruction at Kurukshetra with the sorrow of a sage who sees fate unfold.',
        content_hindi:
          'पितामह और आध्यात्मिक गुरु के रूप में व्यास ने पांडवों को वनवास और युद्ध में मार्गदर्शन दिया। उन्होंने दिव्य सत्य प्रकट किए, शिक्षा और अस्त्र की व्यवस्था की और कुरुक्षेत्र के महाविनाश को विधाता का दर्शन करते हुए ऋषि की दृष्टि से देखा।',
      },
      {
        year: 'Legacy',
        title_english: 'Guru of Gurus and Living Scripture',
        title_hindi: 'गुरुओं के गुरु और जीवित शास्त्र',
        content_english:
          'Vyasa\'s Puranas, Brahma Sutras (attributed), and the Mahabharata shaped Hindu philosophy, law, and storytelling for millennia. Guru Purnima is celebrated in his honour. He remains the symbolic father of Indian literary and spiritual civilization.',
        content_hindi:
          'व्यास के पुराण, ब्रह्म सूत्र (श्रेय) और महाभारत ने सहस्त्राब्दियों तक हिंदू दर्शन, विधि और कथा-परंपरा को आकार दिया। गुरु पूर्णिमा उनके सम्मान में मनाई जाती है। वे भारतीय साहित्यिक और आध्यात्मिक सभ्यता के प्रतीक पिता हैं।',
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
      hindi: 'यतो धर्मस्ततो जयः।\nधर्म एव हतो हन्ति, धर्मो रक्षति रक्षितः।।',
      english: 'Where there is dharma, there is victory. Dharma destroyed destroys; dharma protected protects.',
      meaning_hindi: 'जहाँ धर्म है, वहीं विजय है। धर्म का अनादर करने वाला नष्ट होता है; धर्म की रक्षा करने वाले की धर्म रक्षा करता है।',
      explanation: 'Core Mahabharata ethics attributed to Vyasa\'s vision. The epic\'s entire narrative demonstrates that ultimate victory belongs to righteousness, not mere force.',
      theme: 'Wisdom',
      author: 'Ved Vyasa',
      authorSlug: 'ved-vyasa',
      featured: true,
    },
    {
      id: 252,
      hindi: 'उद्यमेन हि सिध्यन्ति कार्याणि, न मनोरथैः।\nन हि सुप्तस्य सिंहस्य, प्रविशन्ति मुखे मृगाः।।',
      english: 'Tasks succeed through effort, not wishful thinking — deer do not walk into the mouth of a sleeping lion.',
      meaning_hindi: 'कार्य परिश्रम से सिद्ध होते हैं, केवल इच्छा से नहीं — सोते शेर के मुँह में हिरण स्वयं नहीं आते।',
      explanation: 'A classic subhashita preserved in the Mahabharata tradition. Vyasa\'s world insists on disciplined action over empty desire.',
      theme: 'Character',
      author: 'Ved Vyasa',
      authorSlug: 'ved-vyasa',
    },
    {
      id: 253,
      hindi: 'मा कुरु धनजनयौवनगर्वम्, हरति निमेषात् कालः सर्वम्।\nमायामयमिदम् अखिलम् हित्वा, ब्रह्मपदं त्वं प्रविश विदित्वा।।',
      english: 'Do not pride yourself in wealth, kin, or youth — time steals all in a blink. Knowing this world as illusion, enter the realm of Brahman.',
      meaning_hindi: 'धन, परिवार और यौवन पर अहंकार मत करो — काल एक पल में सब हर लेता है। इस माया को जानकर ब्रह्म को पहचानो।',
      explanation: 'From the Bhishma Parva spirit of the Mahabharata. Vyasa\'s epic repeatedly turns the warrior\'s gaze from transient gain toward eternal truth.',
      theme: 'Acceptance',
      author: 'Ved Vyasa',
      authorSlug: 'ved-vyasa',
    },
    {
      id: 254,
      hindi: 'श्रेयान् स्वधर्मो विगुणः, परधर्मात् स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः, परधर्मो भयावहः।।',
      english: 'Better one\'s own dharma, though imperfect, than another\'s well performed. Death in one\'s own duty is better; another\'s path brings fear.',
      meaning_hindi: 'दूसरे का धर्म अच्छा हो, पर अपना धर्म — चाहे अपूर्ण — श्रेष्ठ है। अपने धर्म में मरना भी अच्छा; पर-धर्म भय देता है।',
      explanation: 'Among the most quoted Gita verses embedded in Vyasa\'s Mahabharata. Authenticity of calling outweighs imitation of others\' roles.',
      theme: 'Character',
      author: 'Ved Vyasa',
      authorSlug: 'ved-vyasa',
      featured: true,
    },
    {
      id: 255,
      hindi: 'अहिंसा सत्यमस्तेयं, शौचमिन्द्रियनिग्रहः।\nएतं सामासिकं धर्मं, चातुर्वर्ण्ये अब्रवीन्मनुः।।',
      english: 'Non-violence, truth, non-stealing, purity, and sense-control — this universal dharma Manu proclaimed for all.',
      meaning_hindi: 'अहिंसा, सत्य, चोरी से बच, शुद्धता और इंद्रिय निग्रह — यह सरल धर्म मनु ने सबके लिए बताया।',
      explanation: 'Vyasa\'s epic codifies ethical basics that transcend caste and station. Dharma begins in restraint and truth, not in ritual alone.',
      theme: 'Service',
      author: 'Ved Vyasa',
      authorSlug: 'ved-vyasa',
    },
    {
      id: 256,
      hindi: 'न जातु कामः कामानाम्, उपभोगेन शाम्यति।\nहविषा कृष्णवर्त्मेव, भूय एवाभिवर्धते।।',
      english: 'Desire is never satisfied by indulgence — like feeding ghee to fire, it blazes higher.',
      meaning_hindi: 'कामना भोग से शांत नहीं होती — जैसे अग्नि में घी डालो, वह और भड़क उठती है।',
      explanation: 'From the Mahabharata\'s psychological wisdom. Vyasa understood that unchecked craving grows through feeding, not fulfillment.',
      theme: 'Wealth & Materialism',
      author: 'Ved Vyasa',
      authorSlug: 'ved-vyasa',
    },
    {
      id: 257,
      hindi: 'मा निषाद प्रतिष्ठां त्वम्, अगमः शाश्वतीः समाः।\nयत् क्रौञ्चमिथुनादेकम्, अवधीः काममोहितम्।।',
      english: 'O hunter, endless rest shall not be yours — for you killed one of a loving Krauncha pair.',
      meaning_hindi: 'हे निषाद, तुझे शाश्वत विश्राम न मिले — तुने प्रेमी क्रौंच-युगल के एक को मारा।',
      explanation: 'Vyasa opens the epic tradition with Valmiki\'s primal shloka — compassion violated becomes the seed of all sacred literature.',
      theme: 'Love & Relationships',
      author: 'Ved Vyasa',
      authorSlug: 'ved-vyasa',
    },
    {
      id: 258,
      hindi: 'यथा च स्वस्ति भवेद्, भूतानां तथा चर।\nन च स्वस्ति भवेद्, यथा न चरेद् भवान्।।',
      english: 'Act so that beings may prosper — and act not so that they suffer because of you.',
      meaning_hindi: 'ऐसा करो कि प्राणियों का कल्याण हो — और ऐसा मत करो जिससे उन्हें हानि हो।',
      explanation: 'Vidura Niti and broader Mahabharata ethics echo Vyasa\'s concern for collective welfare. The ruler and householder alike must weigh consequences for all life.',
      theme: 'Service',
      author: 'Ved Vyasa',
      authorSlug: 'ved-vyasa',
    },
    {
      id: 259,
      hindi: 'कालः पचति भूतानि, कालः संहरते जगत्।\nकालः सृजति भूतानि, कालः सर्वं व्यपोहति।।',
      english: 'Time ripens beings, time destroys the world. Time creates beings — time sweeps away all.',
      meaning_hindi: 'काल सबको पकाता है, काल संसार का संहार करता है। काल सृज्जत है और काल ही सब हटा देता है।',
      explanation: 'Vyasa\'s epic is haunted by the power of Kala (Time). Kings, armies, and sorrows all dissolve — wisdom lies in recognizing impermanence.',
      theme: 'Acceptance',
      author: 'Ved Vyasa',
      authorSlug: 'ved-vyasa',
    },
    {
      id: 260,
      hindi: 'संगः शक्तिकरो जन्तोः, संगो दुर्बलकारणम्।\nसंगात् सर्वं भवेद्, युक्तं संगात् सर्वं भवेद्, अयुक्तम्।।',
      english: 'Company makes one strong or weak — through good company all becomes fitting; through bad, all unfitting.',
      meaning_hindi: 'संगति शक्ति देती या कमज़ोर करती — सत्संग से सब शुभ, कुसंग से सब अशुभ।',
      explanation: 'The Mahabharata\'s constant warning: Duryodhana\'s fate was sealed by Shakuni\'s counsel. Vyasa teaches that character is shaped by companionship.',
      theme: 'Friendship',
      author: 'Ved Vyasa',
      authorSlug: 'ved-vyasa',
    },
    {
      id: 261,
      hindi: 'अमानित्वम् अदम्भित्वम्, अहिंसा क्षान्तिरार्जवम्।\nआचार्योपासनं शौचम्, स्थैर्यम् आत्मविनिग्रहः।।',
      english: 'Humility, sincerity, non-violence, patience, honesty, service to the teacher, purity, steadfastness, self-control.',
      meaning_hindi: 'अमानित्व, अभिमान नहीं, अहिंसा, धैर्य, सरलता, गुरु-सेवा, शुद्धता, स्थैर्यता और आत्म-निग्रह — ये ज्ञान के दान हैं।',
      explanation: 'Qualities of the wise enumerated in the Gita section of Vyasa\'s epic. Knowledge without these virtues corrupts rather than liberates.',
      theme: 'Character',
      author: 'Ved Vyasa',
      authorSlug: 'ved-vyasa',
    },
    {
      id: 262,
      hindi: 'यदा यदा हि धर्मस्य, ग्लानिर् भवति भारत।\nअभ्युत्थानम् अधर्मस्य, तदात्मानं सृजाम्यहम्।।',
      english: 'Whenever dharma declines and adharma rises, O Bharata — then I manifest Myself.',
      meaning_hindi: 'जब-जब धर्म की हानि और अधर्म बढ़ता है, तब-तब मैं अवतार लेता हूँ।',
      explanation: 'Vyasa records Krishna\'s promise in the Gita — divine intervention when moral order collapses. The epic itself is testimony to this cosmic principle.',
      theme: 'Wisdom',
      author: 'Ved Vyasa',
      authorSlug: 'ved-vyasa',
      featured: true,
    },
    {
      id: 263,
      hindi: 'अनागतं च, यद् भावि, वर्तमानम् अतः परं।\nभविष्यन्ति च, भूतानि, न त्वं विचेष्टसे क्वचित्।।',
      english: 'Future and present arise from past karma — beings will continue to be born; you cannot escape action entirely.',
      meaning_hindi: 'भूत और वर्तमान भविष्य से जुड़ते हैं — प्राणी जन्मेंगे, कर्म से बच नहीं सकते।',
      explanation: 'Vyasa\'s philosophy of karma pervades the Mahabharata. Even renunciation requires understanding the chain of cause and effect.',
      theme: 'Wisdom',
      author: 'Ved Vyasa',
      authorSlug: 'ved-vyasa',
    },
    {
      id: 264,
      hindi: 'दानेन तपसा चैव, धर्मेण च समाचर।\nसर्वं तद् भवति प्रीत्या, यत् कुर्वन्ति जनाः सदा।।',
      english: 'Live through charity, austerity, and dharma — what people do with love becomes all that matters.',
      meaning_hindi: 'दान, तप और धर्म से जीयो — प्रेम से किया कर्म ही सर्वोपरि है।',
      explanation: 'Vyasa elevates selfless action performed with devotion. The Mahabharata honours Yudhishthira and Vidura for righteous conduct under pressure.',
      theme: 'Service',
      author: 'Ved Vyasa',
      authorSlug: 'ved-vyasa',
    },
    {
      id: 265,
      hindi: 'इह चेद् अवेदीत्, अथ सत्यम् अस्ति।\nन चेद् इह अवेदीत्, महती विनष्टिः।\nभूतेषु भूतेषु विचित्य धीराः, प्रेत्य अस्माल् लोकाद् अमृता भवन्ति।।',
      english: 'If one knows the Self here, truth is won; if not here, great loss. The wise, discerning among beings, become immortal after leaving this world.',
      meaning_hindi: 'यदि इस जन्म में आत्मा को जान लो तो सत्य प्राप्त; न जानो तो बड़ा हानि। धीर पुरुष सब प्राणियों में विचार कर, इस लोक से गए बाद अमर होते हैं।',
      explanation: 'Upanishadic wisdom woven into Vyasa\'s epic closing vision. Self-knowledge is the ultimate fruit of the Mahabharata\'s long instruction.',
      theme: 'Acceptance',
      author: 'Ved Vyasa',
      authorSlug: 'ved-vyasa',
    },
  ],
}
