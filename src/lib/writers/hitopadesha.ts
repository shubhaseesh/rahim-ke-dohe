// This file contains Devanagari script — ensure UTF-8 encoding
import type { Writer } from '../types'

export const hitopadeshaWriter: Writer = {
  slug: 'hitopadesha',
  name_english: 'Hitopadesha',
  name_hindi: 'हितोपदेश',
  era: 'c. 12th century CE',
  language: 'Sanskrit',
  genre: 'Fable collection, niti shastra',
  short_bio_english:
    'Narayana\'s Sanskrit collection of beast fables — a concise mirror of the Panchatantra teaching policy, prudence, and virtue through witty animal tales.',
  short_bio_hindi:
    'नारायण की संस्कृत पशु-नीतिकथाएँ — पंचतंत्र का संक्षिप्त दर्पण, चतुर पशु-कथाओं से नीति, विवेक और सद्गुण की शिक्षा।',
  biography: {
    introduction_english:
      'The Hitopadesha ("Beneficial Instruction") is a Sanskrit collection of fables composed by Narayana around the 12th century CE, likely in Bengal. Written as a gift for a patron named Dhawalchandra, it draws heavily on the Panchatantra while adding fresh stories and sharper poetic polish. Like its predecessor, the Hitopadesha uses animals — lions, jackals, cats, and mice — to dramatise lessons on friendship, enmity, statecraft, and moral conduct. Its four books (Mitrabheda, Mitralabha, Vigraha, and Labdhapranasha) are shorter and more accessible than the Panchatantra, making it a favourite text for teaching Sanskrit and worldly wisdom together. The work spread across India and influenced later Bengali and Hindi literary traditions.',

    introduction_hindi:
      'हितोपदेश ("हित की शिक्षा") नारायण की बारहवीं शताब्दी की संस्कृत नीतिकथा-संग्रह है, संभवतः बंगाल में रची गई। धवलचंद्र नामक संरक्षक को उपहार स्वरूप लिखी गई, यह पंचतंत्र पर अत्यधिक आधारित है पर नई कथाएँ और क sharper काव्य शैली जोड़ती है। शेर, सियार, बिल्ली और चूहे — पशु-पात्रों से मित्रता, शत्रुता, राजनीति और नैतिक आचरण के पाठ दिए जाते हैं। चार खंड — मित्रभेद, मित्रलाभ, विग्रह और लब्धप्रणाश — पंचतंत्र से छोटे और सरल हैं, संस्कृत और सांसारिक बुद्धिमत्ता दोनों सिखाने के लिए प्रिय।',

    timeline: [
      {
        year: 'c. 12th century CE',
        title_english: 'Narayana Composes the Hitopadesha',
        title_hindi: 'नारायण का हितोपदेश',
        content_english:
          'Narayana, a Bengali scholar-poet, composed the Hitopadesha as an offering to his patron Dhawalchandra. He acknowledges borrowing from the Panchatantra while refining the language for clarity and elegance.',
        content_hindi:
          'बंगाल के विद्वान-कवि नारायण ने अपने संरक्षक धवलचंद्र को समर्पित हितोपदेश रचा। उन्होंने पंचतंत्र से उधार लेने को स्वीकार किया, पर भाषा को स्पष्ट और सुंदर बनाया।',
      },
      {
        year: 'Four Books',
        title_english: 'Structure and Purpose',
        title_hindi: 'संरचना और उद्देश्य',
        content_english:
          'The four books teach how friendships break, how they are won, how conflict arises, and how gains are lost. Each chapter opens with a Sanskrit verse and unfolds into nested animal narratives with moral conclusions.',
        content_hindi:
          'चार खंड सिखाते हैं — मित्रता कैसे टूटती, कैसे बनती, संघर्ष कैसे उठता, और लाभ कैसे खो जाता है। प्रत्येक अध्याय संस्कृत श्लोक से शुरू होकर पशु-कथाओं में विस्तृत होता है।',
      },
      {
        year: 'c. 14th century CE',
        title_english: 'Spread across North India',
        title_hindi: 'उत्तर भारत में प्रसार',
        content_english:
          'Manuscripts of the Hitopadesha circulated widely in Bengal, Bihar, and the Gangetic plain. It became a standard text in pathshalas for teaching Sanskrit grammar alongside practical ethics.',
        content_hindi:
          'हितोपदेश की प्रतिलिपियाँ बंगाल, बिहार और गंगा के मैदान में व्यापक रूप से फैलीं। पाठशालाओं में संस्कृत व्याकरण के साथ व्यावहारिक नैतिकता सिखाने का मानक ग्रंथ बना।',
      },
      {
        year: 'c. 18th century CE',
        title_english: 'Colonial-Era Translations',
        title_hindi: 'औपनिवेशिक काल के अनुवाद',
        content_english:
          'British Orientalists including Max Müller studied and translated the Hitopadesha, introducing it to European readers as a window into Indian political wisdom and storytelling tradition.',
        content_hindi:
          'मैक्स मुलर सहित ब्रिटिश orientalists ने हितोपदेश का अध्ययन और अनुवाद किया, इसे भारतीय राजनीतिक बुद्धिमत्ता और कथा-परंपरा की खिड़की के रूप में यूरोप में पेश किया।',
      },
      {
        year: 'Legacy',
        title_english: 'Enduring Classroom Classic',
        title_hindi: 'स्थायी शिक्षण-ग्रंथ',
        content_english:
          'The Hitopadesha remains one of the most read Sanskrit texts in Indian schools. Its compact fables — the Brahmin and the goat, the cat who feigned holiness — continue to teach caution, compassion, and cleverness in equal measure.',
        content_hindi:
          'हितोपदेश भारतीय विद्यालयों में सबसे अधिक पढ़े जाने वाले संस्कृत ग्रंथों में है। इसकी संक्षिप्त कथाएँ — ब्राह्मण और बकरी, पवित्रता का ढोंग रचने वाली बिल्ली — सावधानी, करुणा और चतुराई सिखाती रहती हैं।',
      },
    ],

    facts: {
      born: 'c. 12th century CE — Bengal (tradition)',
      died: 'N/A — literary work',
      full_name_english: 'Hitopadesha (by Narayana)',
      full_name_hindi: 'हितोपदेश (नारायण की रचना)',
      court: 'Composed for patron Dhawalchandra',
      works: [
        'Hitopadesha — four books of Sanskrit fables',
        'Mitrabheda, Mitralabha, Vigraha, Labdhapranasha',
        'Adapted from Panchatantra with original additions',
        'Standard text in Sanskrit education across India',
      ],
    },
  },

  dohe: [
    {
      id: 326,
      hindi: 'अजरामरavat प्राणाः, लोकाः सप्त चैव hi।\nकथासु कथिताः, सर्वाः ताः श्रutव्या विचक्षणaiḥ।।',
      english: 'Deathless beings and the seven worlds — all these are told in stories. The wise should listen to them all.',
      meaning_hindi: 'अजर-अमर प्राणी और सात लोक — ये सब कथाओं में कहे गए हैं। विद्वान को ये सब सुनने चाहिए।',
      explanation: 'Opening verse of the Hitopadesha. Narayana declares that stories are vessels of immortal wisdom — the wise learn through narrative, not dry precept alone.',
      theme: 'Wisdom',
      author: 'Hitopadesha',
      authorSlug: 'hitopadesha',
      featured: true,
    },
    {
      id: 327,
      hindi: 'सर्वत्र गुणदोषज्ञः, सुखी भवति नित्यशः।\nयो न जानाति गुणदोषौ, स दुःखी सदा भवet।',
      english: 'One who knows merit and fault in all things lives ever in happiness. One who cannot distinguish them remains always in sorrow.',
      meaning_hindi: 'जो हर बात में गुण-दोष जानता है, सदा सुखी रहता है। जो पहचान नहीं पाता, सदा दुखी रहता है।',
      explanation: 'Discernment is the Hitopadesha\'s central virtue. Without the ability to judge character and circumstance, no amount of learning protects one from harm.',
      theme: 'Character',
      author: 'Hitopadesha',
      authorSlug: 'hitopadesha',
    },
    {
      id: 328,
      hindi: 'न कश्चित् कस्यचित् मित्रं, न कश्चित् कस्यचित् रिपुः।\nव्यवहार एव मित्रं, व्यवहार एव शत्रुः।।',
      english: 'No one is born another\'s friend; no one is born another\'s enemy. Conduct alone creates friendship; conduct alone creates enmity.',
      meaning_hindi: 'कोई जन्मजात मित्र नहीं, कोई जन्मजात शत्रु नहीं। व्यवहार ही मित्र बनाता है, व्यवहार ही शत्रु।',
      explanation: 'A recurring Hitopadesha maxim. Relationships are forged through action and tested in crisis — never assume loyalty without proof.',
      theme: 'Friendship',
      author: 'Hitopadesha',
      authorSlug: 'hitopadesha',
    },
    {
      id: 329,
      hindi: 'अर्थेन हि वियुक्तस्य, पुरुषस्याल्पमेधसः।\nभ्रश्यन्ते सर्वकर्माणि, गतं तिष्ठति न क्वचit।',
      english: 'When wealth leaves a person of little wit, all his works collapse — what has gone does not remain anywhere.',
      meaning_hindi: 'अल्प बुद्धि व्यक्ति से धन जाते ही सब प्रयास ध्वस्त हो जाते हैं — गया हुआ कहीं नहीं ठहरता।',
      explanation: 'From the Labdhapranasha section. Wealth without wisdom slips away — and regret cannot recover what heedlessness has lost.',
      theme: 'Wealth & Materialism',
      author: 'Hitopadesha',
      authorSlug: 'hitopadesha',
    },
    {
      id: 330,
      hindi: 'उत्पत्तिर्हि न सा विद्या, या न धर्माय वर्तate।\nविद्या धनं सर्वधनप्रधानं, यस्यास्ति न स दुःखitः।',
      english: 'That is not learning which does not serve dharma. Knowledge is the supreme wealth — one who has it need not grieve.',
      meaning_hindi: 'वह विद्या नहीं जो धर्म की ओर न ले जाए। विद्या सर्वोच्च धन है — जिसके पास है, वह दुखी नहीं होता।',
      explanation: 'Narayana insists that education must serve righteous living. Cleverness without moral grounding is the hallmark of the villains in his fables.',
      theme: 'Wisdom',
      author: 'Hitopadesha',
      authorSlug: 'hitopadesha',
      featured: true,
    },
    {
      id: 331,
      hindi: 'सेवकः स्वामिनं दृष्ट्वा, यो नमस्कुरute सदा।\nस स्वामी चिरं तिष्ठati, सेवकः सुखi भavet।',
      english: 'The servant who always honours his master — that master rules long, and that servant lives in happiness.',
      meaning_hindi: 'जो सेवक सदा स्वामी का सम्मान करता है — वह स्वामी दीर्घकाल शासन करता है, सेवक सुखी होता है।',
      explanation: 'Mutual respect between servant and master creates stability. The Hitopadesha values rightful hierarchy when it serves the welfare of both.',
      theme: 'Service',
      author: 'Hitopadesha',
      authorSlug: 'hitopadesha',
    },
    {
      id: 332,
      hindi: 'यो धूर्तं मन्यते मूर्खं, यो मूर्खं धूर्तमेव च।\nस धूर्तं धूर्ततां यातi, मूर्खं मूर्खतां तथा।।',
      english: 'One who takes a rogue for a fool and a fool for a rogue — the rogue grows more cunning, the fool more foolish.',
      meaning_hindi: 'जो धूर्त को मूर्ख समझे और मूर्ख को धूर्त — धूर्त और धूर्त, मूर्ख और मूर्ख बनेगा।',
      explanation: 'Misreading character is fatal in the Hitopadesha world. The jackal Damanaka succeeds precisely because others underestimate his cunning.',
      theme: 'Character',
      author: 'Hitopadesha',
      authorSlug: 'hitopadesha',
    },
    {
      id: 333,
      hindi: 'अकाले बुद्धिर्यस्य, स किं करिष्यati।\nयथा मूर्खो वृद्धः, काले न बुद्धimān।',
      english: 'What can one do whose wisdom arrives too late? Like an old fool, he is not wise when the hour demands it.',
      meaning_hindi: 'जिसकी बुद्धि देर से आए, वह क्या करेगा? जैसे बूढ़ा मूर्ख, समय पर बुद्धिमान नहीं होता।',
      explanation: 'Timely wisdom is everything. The Hitopadesha\'s rash actors — the Brahmin who trusted the jackal, the birds who ignored counsel — act when it is already too late.',
      theme: 'Wisdom',
      author: 'Hitopadesha',
      authorSlug: 'hitopadesha',
    },
    {
      id: 334,
      hindi: 'मित्रं प्राप्य न विस्मर्तव्यो, विस्मृतो हि न जीवati।\nयथा काकः क्षुधार्तोऽपi, मित्रं चक्रवाकमिच्छati।',
      english: 'Having gained a friend, do not forget him — one who forgets a friend does not truly live. Even a hungry crow remembers its friend the sheldrake.',
      meaning_hindi: 'मित्र पाकर उसे न भूलो — मित्र को भुलाने वाला सच में जीवित नहीं। भूखा कौआ भी मित्र चक्रवाक को याद रखता है।',
      explanation: 'Friendship requires active remembrance and loyalty. The Hitopadesha\'s Mitralabha book celebrates alliances that endure through hardship.',
      theme: 'Friendship',
      author: 'Hitopadesha',
      authorSlug: 'hitopadesha',
    },
    {
      id: 335,
      hindi: 'अति सर्वत्र वर्जयet।\nअतिदानात् दरिद्रता, अतिगर्वात् पतनम्।',
      english: 'Avoid excess in all things. Excessive giving leads to poverty; excessive pride leads to a fall.',
      meaning_hindi: 'हर जगह अति से बचो। अति दान से दरिद्रता, अति गर्व से पतन होता है।',
      explanation: 'Moderation is the Hitopadesha\'s practical ethic. Whether in charity, speech, or ambition, the middle path preserves fortune and reputation.',
      theme: 'Acceptance',
      author: 'Hitopadesha',
      authorSlug: 'hitopadesha',
    },
    {
      id: 336,
      hindi: 'न सुस्वपiti मूर्खेण, यः पार्श्वे धूर्तो वर्तate।\nयथा सिंहेन सह सoyam, मृगराजो वने वसन्।',
      english: 'One who keeps a rogue beside him cannot sleep in peace — like the king of beasts dwelling with a jackal in the forest.',
      meaning_hindi: 'जिसके पास धूर्त हो, वह चैन से नहीं सो सकता — जैसे वन में सिंह के पास सियार रहे।',
      explanation: 'Bad company destroys peace and power alike. The Mitrabheda stories show kingdoms ruined by trusting the wrong advisor.',
      theme: 'Friendship',
      author: 'Hitopadesha',
      authorSlug: 'hitopadesha',
      featured: true,
    },
    {
      id: 337,
      hindi: 'वाच्यं च वक्तव्यं, न च वक्तव्यमेव च।\nयो वक्ता स वक्ता, यो न वक्ता स न वक्ता।।',
      english: 'Some things should be spoken, some should not. One who knows the difference is truly eloquent; one who does not, is not.',
      meaning_hindi: 'कुछ कहना चाहिए, कुछ नहीं। जो भेद जानता है वही वक्ता है, जो नहीं जानता वह नहीं।',
      explanation: 'Restraint in speech saves lives in the Hitopadesha. The cat who feigned asceticism, the crane who spoke too soon — silence often outwits eloquence.',
      theme: 'Wisdom',
      author: 'Hitopadesha',
      authorSlug: 'hitopadesha',
    },
    {
      id: 338,
      hindi: 'संग्रहेणैव वर्धन्तe, शुकादीनां पक्षिणाम्।\nसंग्रहेणैव नश्यanti, संग्रहेणैव सिद्धयः।',
      english: 'Birds like parrots thrive through gathering; empires rise and fall through what they gather and how.',
      meaning_hindi: 'तोते और पक्षी संग्रह से बढ़ते हैं; साम्राज्य भी संग्रह से उठते और गिरते हैं।',
      explanation: 'Wealth and alliance must be gathered wisely. Hoarding without judgment, or sharing with the unworthy, both lead to ruin in Narayana\'s tales.',
      theme: 'Wealth & Materialism',
      author: 'Hitopadesha',
      authorSlug: 'hitopadesha',
    },
    {
      id: 339,
      hindi: 'यथा हि काकः क्षुधार्तः, स्वामिनं परिभावayet।\nतथा मूर्खो नरः, स्वार्थं कुर्वन् परिभूयate।',
      english: 'As a hungry crow deceives its master, so a fool pursuing self-interest brings dishonour upon himself.',
      meaning_hindi: 'जैसे भूखा कौआ स्वामी को धोखा देता है, वैसे मूर्ख अपने स्वार्थ में अपमान पाता है।',
      explanation: 'Selfishness without foresight leads to disgrace. The Hitopadesha shows that short-term gain often conceals long-term catastrophe.',
      theme: 'Character',
      author: 'Hitopadesha',
      authorSlug: 'hitopadesha',
    },
    {
      id: 340,
      hindi: 'दानं भोगः नाशस्तis, तis तis तis पुनः पुनः।\nदानेन वर्धते धarmo, भोगena तis तis kshayah।',
      english: 'Giving, enjoyment, and destruction — these cycle again and again. Through giving, merit grows; through indulgence alone, it perishes.',
      meaning_hindi: 'दान, भोग और नाश — ये बार-बार चक्र में आते हैं। दान से पुण्य बढ़ता है, केवल भोग से नष्ट होता है।',
      explanation: 'The Hitopadesha balances enjoyment with generosity. Wealth serves dharma when shared; hoarded or squandered, it brings only loss.',
      theme: 'Service',
      author: 'Hitopadesha',
      authorSlug: 'hitopadesha',
    },
  ],
}
