// This file contains Devanagari script — ensure UTF-8 encoding
import type { Writer } from '../types'

export const chanakyaWriter: Writer = {
  slug: 'chanakya',
  name_english: 'Chanakya',
  name_hindi: 'चाणक्य',
  era: '4th century BCE (Mauryan period)',
  language: 'Sanskrit',
  genre: 'Niti shastra, political wisdom',
  short_bio_english:
    'Architect of the Mauryan empire and author of the Chanakya Niti, he distilled statecraft and moral discipline into timeless Sanskrit maxims.',
  short_bio_hindi:
    'मौर्य साम्राज्य के रचियता और चाणक्य नीति के रचयिता, उन्होंने राजनीति और नैतिक अनुशासन को शाश्वत संस्कृत सूक्तियों में बाँधा।',
  biography: {
    introduction_english:
      'Chanakya (c. 350–275 BCE), also known as Kautilya or Vishnugupta, was the brilliant strategist and philosopher who shaped one of India\'s greatest empires. Born in the Takshashila region, he served as minister to Chandragupta Maurya and is credited with unifying much of the Indian subcontinent after the fall of the Nanda dynasty. His Arthashastra remains a foundational text on governance, economics, and diplomacy. The Chanakya Niti — a collection of ethical and practical aphorisms — offers guidance on friendship, character, wealth, and wisdom that remains widely quoted today. Though a master of realpolitik, Chanakya consistently emphasised dharma, self-discipline, and discernment in human conduct.',

    introduction_hindi:
      'चाणक्य (लगभग 350–275 ई.पू.), जिन्हें कौटिल्य या विष्णुगुप्त भी कहा जाता है, वे महान रणनीतिकार और दार्शनिक थे जिन्होंने भारत के सबसे बड़े साम्राज्यों में से एक को आकार दिया। तक्षशिला क्षेत्र में जन्मे चाणक्य चंद्रगुप्त मौर्य के मंत्री बने और नंद वंश के पतन के बाद भारतीय उपमहाद्वीप के एकीकरण में महत्वपूर्ण भूमिका निभाई। उनका अर्थशास्त्र शासन, अर्थशास्त्र और कूटनीति पर आधारभूत ग्रंथ है। चाणक्य नीति — नैतिक और व्यावहारिक सूक्तियों का संग्रह — मित्रता, चरित्र, धन और बुद्धिमत्ता पर मार्गदर्शन देती है जो आज भी अक्सर उद्धृत होती है।',

    timeline: [
      {
        year: 'c. 350 BCE',
        title_english: 'Early Life and Scholarship',
        title_hindi: 'प्रारंभिक जीवन और विद्वत्ता',
        content_english:
          'Chanakya was born in the Takshashila (Taxila) region, in present-day Pakistan. He mastered the Vedas, economics, politics, and military strategy at the famous university of Takshashila, earning renown as a formidable scholar and teacher.',
        content_hindi:
          'चाणक्य का जन्म तक्षशिला क्षेत्र में हुआ। उन्होंने प्रसिद्ध तक्षशिला विश्वविद्यालय में वेद, अर्थशास्त्र, राजनीति और सैन्य रणनीति में निपुणता प्राप्त की और प्रख्यात विद्वान बने।',
      },
      {
        year: 'c. 326 BCE',
        title_english: 'Humiliation at the Nanda Court',
        title_hindi: 'नंद दरबार में अपमान',
        content_english:
          'Tradition records that Chanakya was insulted by King Dhana Nanda and vowed to destroy the Nanda dynasty. He removed his shikha — the Brahmin\'s topknot — and swore not to re-tie it until his vow was fulfilled.',
        content_hindi:
          'परंपरा कहती है कि राजा धनानंद ने चाणक्य का अपमान किया, तब उन्होंने नंद वंश को समाप्त करने की प्रतिज्ञा की। उन्होंने अपनी शिखा काटी और तब तक न बाँधी जब तक प्रतिज्ञा पूरी न हुई।',
      },
      {
        year: 'c. 321 BCE',
        title_english: 'Chandragupta and the Mauryan Empire',
        title_hindi: 'चंद्रगुप्त और मौर्य साम्राज्य',
        content_english:
          'Chanakya discovered the young Chandragupta Maurya and trained him as a ruler and military leader. Together they overthrew the Nandas and established the Mauryan Empire, one of the largest unified states in ancient Indian history.',
        content_hindi:
          'चाणक्य ने युवा चंद्रगुप्त मौर्य को खोजा और उन्हें शासक व सेनापति के रूप में तैयार किया। दोनों ने मिलकर नंदों को उखाड़ फेंका और प्राचीन भारत के सबसे बड़े एकीकृत साम्राज्यों में से एक — मौर्य साम्राज्य — की स्थापना की।',
      },
      {
        year: 'c. 300 BCE',
        title_english: 'The Arthashastra',
        title_hindi: 'अर्थशास्त्र',
        content_english:
          'Chanakya composed the Arthashastra, a comprehensive treatise on statecraft covering taxation, law, espionage, war, and welfare. It remains one of the earliest and most systematic works on political economy in world literature.',
        content_hindi:
          'चाणक्य ने अर्थशास्त्र रचा — राज्य-शास्त्र पर व्यापक ग्रंथ जिसमें कर, कानून, गुप्तचर, युद्ध और कल्याण शामिल हैं। यह विश्व साहित्य में राजनीतिक अर्थशास्त्र की सबसे प्राचीन व्यवस्थित कृतियों में से एक है।',
      },
      {
        year: 'c. 275 BCE',
        title_english: 'Chanakya Niti and Lasting Legacy',
        title_hindi: 'चाणक्य नीति और स्थायी विरासत',
        content_english:
          'The Chanakya Niti, a collection of shrewd moral maxims, circulated widely after his death. Chanakya is remembered both as the kingmaker of the Mauryan age and as a teacher whose aphorisms guide everyday conduct across India.',
        content_hindi:
          'चाणक्य नीति — तीक्ष्ण नैतिक सूक्तियों का संग्रह — उनके बाद व्यापक रूप से प्रचलित हुआ। चाणक्य मौर्य युग के राज-निर्माता और रोज़मर्रा के आचरण का मार्गदर्शन करने वाले गुरु दोनों रूप में याद किए जाते हैं।',
      },
    ],

    facts: {
      born: 'c. 350 BCE — Takshashila region',
      died: 'c. 275 BCE — Pataliputra (tradition)',
      full_name_english: 'Chanakya (Kautilya / Vishnugupta)',
      full_name_hindi: 'चाणक्य (कौटिल्य / विष्णुगुप्त)',
      court: 'Chief minister and advisor to Chandragupta Maurya',
      works: [
        'Arthashastra — treatise on statecraft and governance',
        'Chanakya Niti — collection of ethical and political maxims',
        'Neeti Shastra — principles of moral conduct',
        'Kautilya\'s teachings preserved in Puranic and Jain traditions',
      ],
    },
  },

  dohe: [
    {
      id: 71,
      hindi: 'विद्या मित्रं प्रवासे च, न च विद्या परत्र च।\nविद्या धनं सर्वधनप्रधानं, विद्यां लब्ध्वा सुखी भव।।',
      english: 'Knowledge is the friend in foreign lands, and knowledge alone accompanies one after death. Knowledge is the supreme wealth among all riches — obtain it and live in happiness.',
      meaning_hindi: 'विद्या विदेश में मित्र है और मृत्यु के बाद भी साथ जाती है। सब धनों में विद्या सर्वोच्च धन है — इसे प्राप्त करो और सुखी रहो।',
      explanation: 'From Chanakya Niti. Knowledge is the one asset that cannot be stolen, taxed, or left behind — it serves in life and beyond.',
      theme: 'Wisdom',
      author: 'Chanakya',
      authorSlug: 'chanakya',
      featured: true,
    },
    {
      id: 72,
      hindi: 'मातृवत् परदारेषु, परद्रव्येषु लोष्ठवत्।\nआत्मसंयमसम्पन्नः, सत्यधर्मः परमं तपः।।',
      english: 'Treat another\'s wife as your mother, another\'s wealth as worthless clay. One endowed with self-control and truthfulness practises the highest austerity.',
      meaning_hindi: 'परस्त्री को माता समान मानो, पराया धन मिट्टी जानो। संयम और सत्य से संपन्न व्यक्ति परम तप करता है।',
      explanation: 'Chanakya defines moral character through restraint and respect for others\' boundaries. Self-control and truth are the highest spiritual discipline.',
      theme: 'Character',
      author: 'Chanakya',
      authorSlug: 'chanakya',
    },
    {
      id: 73,
      hindi: 'अत्यंत दु:खितोऽपि न हि, मित्रं त्यजति साधवः।\nनदी शोषितोऽपि न हि, त्यजति क्लेशितं जलम्।।',
      english: 'Even in deepest sorrow, a good person does not abandon a friend. Even when a river runs dry, it does not abandon the water that once flowed.',
      meaning_hindi: 'अत्यधिक दु:ख में भी सज्जन मित्र नहीं छोड़ते। सूखी नदी भी अपने बहते जल को नहीं भूलती।',
      explanation: 'Loyalty in friendship is a mark of nobility. Chanakya uses the river metaphor to praise constancy even through hardship.',
      theme: 'Friendship',
      author: 'Chanakya',
      authorSlug: 'chanakya',
    },
    {
      id: 74,
      hindi: 'आयु: कर्मफलं चैव, गतयो नियतं स्वयम्।\nधीरो न शोचति, एतत् पूर्वजनै: कृतम्।।',
      english: 'Lifespan, the fruit of action, and the path after death are predetermined. The wise person does not grieve — knowing this was ordained by past deeds.',
      meaning_hindi: 'आयु, कर्म का फल और गति पहले से नियत हैं। बुद्धिमान व्यक्ति शोक नहीं करता — जानता है यह पूर्व कर्मों का परिणाम है।',
      explanation: 'Acceptance of karma and fate frees the mind from useless lament. Chanakya counsels equanimity before what cannot be changed.',
      theme: 'Acceptance',
      author: 'Chanakya',
      authorSlug: 'chanakya',
    },
    {
      id: 75,
      hindi: 'त्यजेदेकं कुलस्यार्थे, ग्रामं ग्रामस्यार्थे त्यजेत्।\nत्यजेत् जनपदं राज्यार्थे, आत्मार्थे पृथिवीम् अपि त्यजेत्।।',
      english: 'Sacrifice one person for the family, a village for the community, the realm for the kingdom — and the whole earth for the sake of the soul\'s liberation.',
      meaning_hindi: 'कुल के लिए एक को, गाँव के लिए गाँव को, राज्य के लिए जनपद को त्यागो — और आत्मा की मुक्ति के लिए सारी पृथ्वी भी।',
      explanation: 'A famous Chanakya maxim on hierarchy of duty. Higher purposes justify lesser sacrifices, culminating in renunciation for spiritual freedom.',
      theme: 'Service',
      author: 'Chanakya',
      authorSlug: 'chanakya',
    },
    {
      id: 76,
      hindi: 'अर्थम् अनर्थम् भावय, नित्यं नास्तिको भवेत्।\nनास्तिकम् उपदेशं च, न कुर्यात् कदाचन।।',
      english: 'Regard wealth as potential misfortune; never become a denier of truth. Never offer counsel that leads others toward disbelief or ruin.',
      meaning_hindi: 'धन को अनर्थ समझो, कभी नास्तिक मत अपनाओ। ऐसा उपदेश कभी न दो जो दूसरों को अविश्वास की ओर ले जाए।',
      explanation: 'Chanakya warns that unchecked pursuit of wealth breeds harm. The wise teacher must not spread cynicism or destructive advice.',
      theme: 'Wealth & Materialism',
      author: 'Chanakya',
      authorSlug: 'chanakya',
    },
    {
      id: 77,
      hindi: 'अति सर्वत्र वर्जयेत्, अति भाषा अति भोजनम्।\nअति स्नानम् अति दानम्, अति सर्वत्र न शोभते।।',
      english: 'Avoid excess in all things — excessive speech, excessive eating, excessive bathing, excessive charity. Excess never becomes anyone.',
      meaning_hindi: 'हर चीज़ में अति से बचो — अति बोली, अति भोजन, अति स्नान, अति दान। अति किसी पर भी शोभा नहीं देती।',
      explanation: 'Moderation is central to Chanakya\'s ethics. Even virtues like charity become faults when taken to extremes.',
      theme: 'Character',
      author: 'Chanakya',
      authorSlug: 'chanakya',
    },
    {
      id: 78,
      hindi: 'स एव बन्धुः स एव मित्रम्, य अर्थं दुःखे उपकुरुते।\nमनसापि न यस्मिन्, कृतं कृतेन नाश्यति।।',
      english: 'He alone is kin, he alone is friend, who helps in adversity. One whose good deed is never erased even from the mind — he is the true ally.',
      meaning_hindi: 'वही बंधु और मित्र है जो दु:ख में सहायता करे। जिसका कल्याण मन से भी न मिट सके — वही सच्चा मित्र है।',
      explanation: 'Friendship proven in crisis outweighs blood relation. Chanakya values helpers whose loyalty leaves a permanent mark on the heart.',
      theme: 'Friendship',
      author: 'Chanakya',
      authorSlug: 'chanakya',
    },
    {
      id: 79,
      hindi: 'प्रजासुखे सुखं राज्ञः, प्रजानां च हिते हितम्।\nन आत्मप्रियं हितं राज्ञा, प्रजाप्रियं हितं राज्ञः।।',
      english: 'The king finds happiness in his people\'s happiness, and their welfare in their welfare. The ruler\'s good lies not in personal pleasure but in the people\'s prosperity.',
      meaning_hindi: 'राजा का सुख प्रजा के सुख में है, उनका हित उनके हित में है। शासक का कल्याण निज सुख में नहीं, जन कल्याण में है।',
      explanation: 'From Kautilya\'s political philosophy. True leadership measures success by public welfare, not private indulgence — a lesson in service.',
      theme: 'Service',
      author: 'Chanakya',
      authorSlug: 'chanakya',
      featured: true,
    },
    {
      id: 80,
      hindi: 'माता यस्य गृहे नास्ति, भार्या चाप्रियवादिनी।\nअर्थं आगच्छतो नास्ति, स एव नरकः स्मृतः।।',
      english: 'One whose home has no mother, whose wife speaks only harshly, and to whom wealth does not come — he is considered to live in hell itself.',
      meaning_hindi: 'जिस घर में माता नहीं, पत्नी प्रियवादिनी नहीं, और धन नहीं आता — वह नरक में ही जी रहा है।',
      explanation: 'Chanakya describes inner misery through domestic absence of love, harmony, and sustenance. Emotional and material deprivation create their own hell.',
      theme: 'Love & Relationships',
      author: 'Chanakya',
      authorSlug: 'chanakya',
    },
    {
      id: 81,
      hindi: 'कामं क्रोधं लोभं च, त्यक्त्वा आत्मानम् एव पश्येत्।\nनास्ति बुद्धिबलेन यस्य, स एव पुरुषः श्रेष्ठः।।',
      english: 'Abandoning desire, anger, and greed, examine the self alone. One who possesses the strength of intellect — he is the finest among men.',
      meaning_hindi: 'काम, क्रोध और लोभ त्याग कर आत्मा को देखो। जिस में बुद्धि की शक्ति है, वही श्रेष्ठ पुरुष है।',
      explanation: 'Self-examination after shedding the three poisons leads to excellence. Chanakya ranks intellectual discipline above birth or status.',
      theme: 'Wisdom',
      author: 'Chanakya',
      authorSlug: 'chanakya',
    },
    {
      id: 82,
      hindi: 'धनमूलं इदं सर्वं, न धनेन विना सुखम्।\nधनमूला हि लोकस्य, सर्वाः प्रवृत्तयः स्मृताः।।',
      english: 'Wealth is the root of all this — without wealth there is no happiness. All human endeavours in the world are remembered as rooted in wealth.',
      meaning_hindi: 'धन सब का मूल है — बिना धन के सुख नहीं। संसार की सब क्रियाएँ धन पर आधारित मानी गई हैं।',
      explanation: 'Chanakya acknowledges material resources as foundation of worldly life without endorsing greed. Prudent wealth supports duty and wellbeing.',
      theme: 'Wealth & Materialism',
      author: 'Chanakya',
      authorSlug: 'chanakya',
    },
    {
      id: 83,
      hindi: 'उद्योगिनं पुरुषसिंहं उपैति लक्ष्मीः, दैवं हि धावति धावति।\nनीचं व्रजति व्रजति, शीघ्रं उपैति उपैति।।',
      english: 'Fortune approaches the lion-like man of effort; fate runs after him who runs. She descends swiftly upon the lowly who strive — again and again she comes.',
      meaning_hindi: 'उद्योगी पुरुष पर लक्ष्मी आती है; जो दौड़ता है उसे भाग्य पीछे भागता है। मेहनत करने वाले के पास जल्दी आती है।',
      explanation: 'Industry attracts prosperity — Chanakya rejects fatalism. Persistent effort draws opportunity rather than waiting passively for luck.',
      theme: 'Acceptance',
      author: 'Chanakya',
      authorSlug: 'chanakya',
    },
    {
      id: 84,
      hindi: 'परोपकारः पुण्यायां, पापाय पर पीडनम्।\nतेषु तेषु च यत्नः स्यात्, यथा स्वार्थेषु नित्यदा।।',
      english: 'Helping others brings merit; harming others brings sin. Apply the same effort to others\' welfare as you constantly apply to your own interests.',
      meaning_hindi: 'दूसरों की मदद पुण्य है, पीड़ा पाप है। अपने हित जितना प्रयास करते हो, उतना ही दूसरों के कल्याण में भी करो।',
      explanation: 'Ethical reciprocity defines Chanakya\'s social vision. Treat others\' benefit with the same seriousness as self-interest.',
      theme: 'Service',
      author: 'Chanakya',
      authorSlug: 'chanakya',
    },
    {
      id: 85,
      hindi: 'सत्यं ब्रूयात् प्रियं ब्रूयात्, न ब्रूयात् सत्यमाप्रियम्।\nप्रियं च नानृतं ब्रूयात्, एष धर्मः सनातनः।।',
      english: 'Speak the truth, speak what is pleasant — but do not speak truth that is unpleasant. Do not speak pleasant falsehood either. This is the eternal dharma.',
      meaning_hindi: 'सत्य बोलो, प्रिय बोलो — पर अप्रिय सत्य मत बोलो। प्रिय असत्य भी मत बोलो। यही सनातन धर्म है।',
      explanation: 'Among Chanakya\'s most quoted verses. Wise speech balances honesty with kindness — neither cruel truth nor sweet lies.',
      theme: 'Wisdom',
      author: 'Chanakya',
      authorSlug: 'chanakya',
      featured: true,
    },
  ],
}
