// This file contains Devanagari and Kannada-derived script — ensure UTF-8 encoding
import type { Writer } from '../types'

export const basavannaWriter: Writer = {
  slug: 'basavanna',
  name_english: 'Basavanna',
  name_hindi: 'बसवन्ना',
  era: '12th century (c. 1105–1167)',
  language: 'Kannada / Vachana literature',
  genre: 'Bhakti vachanas, social reform poetry',
  short_bio_english:
    'Poet-saint of the Lingayat tradition who led the Sharana movement in Kalyana — Basavanna\'s vachanas preached dignity of labor, equality, and direct devotion to Shiva.',
  short_bio_hindi:
    'लिंगायत परंपरा के कवि-संत जिन्होंने कल्याण में शरण आंदोलन का नेतृत्व किया — बसवन्ना के वचन श्रम की गरिमा, समानता और शिव की साक्षात भक्ति का उपदेश देते हैं।',
  biography: {
    introduction_english:
      'Basavanna (c. 1105–1167), also reverently called Basaveshwara or Basavanna, was a philosopher, social reformer, and poet who transformed medieval Karnataka. Born in Bagewadi to Madaras and Madalambike, he rejected caste hierarchy and empty ritual, founding the Lingayat (Veerashaiva) tradition that worships Shiva as the universal Lord (Ishtalinga). As chief minister under King Bijjala II at Kalyana (Basavakalyan), he convened the Anubhava Mantapa — a democratic assembly where men and women, saints and cobblers, shared spiritual wisdom as equals. His vachanas (free-verse poems in Kannada) number over a thousand; they speak with startling directness about God in the body, the holiness of honest work, and the sin of treating any human as untouchable. The movement he led — the Sharanas — included Akka Mahadevi, Allama Prabhu, and Channabasava. Though political conflict ended his life tragically, his vachanas remain among the most powerful voices in Indian bhakti literature.',

    introduction_hindi:
      'बसवन्ना (लगभग 1105–1167), जिन्हें बसवेश्वर भी कहा जाता है, दार्शनिक, समाज सुधारक और कवि थे जिन्होंने मध्यकालीन Karnataka को रूपांतरित किया। बागेवाड़ी में मादारस और मादलम्बike के घर जन्मे, उन्होंने जात-पात और खोखले कर्मकांड को अस्वीकार किया और लिंगायत (वीरशैव) परंपरा की स्थापना की, जो शिव को सार्वभौमिक स्वामी (इष्टलिंग) के रूप में पूजती है। राजा बिज्जala II के मुख्यमंत्री के रूप में कल्याण (बसवकल्याण) में उन्होंने अनुभव मंtpapा — एक लोकतांत्रिक सभा — बुलाई, जहाँ पुरुष-स्त्री, संत और चमार समान रूप से आध्यात्मिक ज्ञान साझा करते थे। उनके एक हज़ार से अधिक वचन (कन्नड़ में मुkt छंद) सीधे और प्रखर हैं — शरीर में ईश्वर, ईमानदार कर्म की पवitrता, और किसी मनुष्य को अछूत मानने का पाप। उनके नेतृत्व वाले शरण समुदाय में अक्का महादेवी, अल्लama प्रभु और चन्नabasava शामिल थे। राजनीतिक संघर्ष ने उनका जीवन दुखद अंत दिया, पर वचन आज भी भारतीय भक्ति साहित्य की सबसे शक्तिशाली आवाज़ों में हैं।',

    timeline: [
      {
        year: 'c. 1105',
        title_english: 'Birth in Bagewadi',
        title_hindi: 'बागेवाड़ी में जन्म',
        content_english:
          'Basavanna was born in Bagewadi near Bijapur (present-day Karnataka) into a Brahmin family devoted to Shiva. From childhood he questioned caste distinctions and showed deep compassion for working people.',
        content_hindi:
          'बसवन्ना का जन्म बीजapur (वर्तमान Karnataka) के निकट बागेवाड़ी में शिव भक्त ब्राह्मण परिवार में हुआ। बचपन से ही उन्होंने जात-भेद पर सवाल उठाए और श्रमिकों के प्रति गहरी करुणा दिखाई।',
      },
      {
        year: 'c. 1130s',
        title_english: 'Education at Kudalasangama',
        title_hindi: 'कूडलसंगam में शिक्षा',
        content_english:
          'Basavanna studied at Kudalasangama, the sacred confluence of Krishna and Malaprabha rivers, under the sage Ishanyaguru. Here he deepened his understanding of Shiva bhakti and the dignity of all who work with their hands.',
        content_hindi:
          'बसवन्ना ने कृष्णा और मालaprabha नदियों के पवित्र संगम कूडलसंगam में ऋषि ईशanyaguru से शिक्षा ली। यहाँ उन्होंने शिव भक्ति और हाथ से काम करने वालों की गरिमा की गहरी समझ प्राप्त की।',
      },
      {
        year: 'c. 1150s',
        title_english: 'Minister at Kalyana and Anubhava Mantapa',
        title_hindi: 'कल्याण में मंत्री और अनुभव मंtpapा',
        content_english:
          'Appointed treasurer and later prime minister at the court of Bijjala II in Kalyana, Basavanna used his position to promote social equality. He founded the Anubhava Mantapa where Sharanas — saint-poets from all castes — debated spirituality and ethics openly.',
        content_hindi:
          'कल्याण में बिज्जala II के दरबार में कोषाध्यक्ष और बाद में प्रधानमंत्री नियुkt, बसवन्ना ने अपने पद से सामाजिक समानता को बढ़ावा दिया। उन्होंने अनुभव मंtpapा की स्थापना की, जहाँ सभी जातियों के शरण-कवि आध्यात्म और नैतिकता पर खुलकर चर्चा करते थे।',
      },
      {
        year: 'c. 1160s',
        title_english: 'Vachanas and the Sharana Movement',
        title_hindi: 'वचन और शरण आंदोलन',
        content_english:
          'Basavanna composed hundreds of vachanas in simple Kannada, rejecting Sanskrit exclusivity. He preached Kayaka (dignified work) and Dasoha (community sharing). The movement drew cobblers, potters, women saints, and Brahmins into a single fellowship of Shiva devotion.',
        content_hindi:
          'बसवन्ना ने सरल कन्नड़ में सैकड़ों वचन रचे, संस्कृत के एकाधिकार को अस्वीकार करते हुए। उन्होंने कायaka (गरिमापूर्ण श्रम) और दasoह (सामुदायिक भोज) का उपदेश दिया। आंदोलन ने चमार, कुम्हार, स्त्री संत और ब्राह्मण — सभी को शिव भक्ति के एक समuday में जोड़ा।',
      },
      {
        year: 'c. 1167',
        title_english: 'Legacy of Lingayat Tradition',
        title_hindi: 'लिंगायत परंपरा की विरासत',
        content_english:
          'After political upheaval at Kalyana, Basavanna left the world, but his vachanas were preserved in the Sunya Sampadane and other collections. The Lingayat community he founded remains a major tradition in Karnataka; his statue stands at the Parliament of India as a symbol of social justice.',
        content_hindi:
          'कल्याण में राजनीतिक उथल-पuthal के बाद बसवन्ना ने संसार त्यागा, पर उनके वचन शून्य संपादane आदि संग्रहों में संरक्षित रहे। उनकी स्थापित लिंगायत समuday Karnataka की प्रमुख परंपरा बनी हुई है; भारत की संसद में उनकी प्रतिमा सामाजिक न्याय के प्रतीक के रूप में खड़ी है।',
      },
    ],

    facts: {
      born: 'c. 1105 — Bagewadi, near Bijapur, Karnataka',
      died: 'c. 1167 — Kudalasangama, Karnataka (traditional)',
      full_name_english: 'Basavanna (Basaveshwara)',
      full_name_hindi: 'बसवन्ना (बसवेश्वर)',
      court: 'Prime minister under King Bijjala II of Kalyana (Basavakalyan)',
      works: [
        'Vachanas — over 1,400 devotional poems in Kannada',
        'Anubhava Mantapa — democratic spiritual assembly at Kalyana',
        'Kayaka and Dasoha — philosophy of dignified labor and sharing',
        'Ishtalinga worship — direct personal devotion to Shiva',
        'Sunya Sampadane — collected Sharana vachanas (includes Basavanna)',
      ],
    },
  },

  dohe: [
    {
      id: 551,
      hindi: 'शूद्रादि कुल में जन्म,\nईश्वर वहीं बसे।',
      english: 'Born in any caste — low or high — God dwells equally within.',
      meaning_hindi: 'शूद्र या किसी भी कुल में जन्म — ईश्वर सब में समान रूप से विराजमान है।',
      explanation: 'Basavanna rejected birth-based hierarchy. The divine Ishtalinga wears no caste mark — Shiva lives in the body of every honest person regardless of social label.',
      theme: 'Acceptance',
      author: 'Basavanna',
      authorSlug: 'basavanna',
      featured: true,
    },
    {
      id: 552,
      hindi: 'कायक कelsondu,\nकूडलसंगम देव।\nश्रम ही पूजा है,\nकाम में भगवान।',
      english: 'Work itself is worship — the Lord of Kudalasangama is in honest labor.',
      meaning_hindi: 'श्रम ही उपासना है — कूडलसंगम के देव शuddha कर्म में विराजते हैं।',
      explanation: 'Kayaka — sacred work — is central to Basavanna\'s teaching. A cobbler stitching shoes and a scholar reading scriptures both worship Shiva when they work with integrity.',
      theme: 'Service',
      author: 'Basavanna',
      authorSlug: 'basavanna',
      featured: true,
    },
    {
      id: 553,
      hindi: 'अंतरंग शिव,\nबाहर मंदिर नहीं।',
      english: 'Shiva is within — not in external temples alone.',
      meaning_hindi: 'शिव अंतर में है — केवल बाहरी मंदिर में नहीं।',
      explanation: 'Basavanna taught Ishtalinga — wearing Shiva on one\'s body as a personal emblem of the inner Lord. External pilgrimage without inner purity is empty ritual.',
      theme: 'Wisdom',
      author: 'Basavanna',
      authorSlug: 'basavanna',
    },
    {
      id: 554,
      hindi: 'दasoha करो, भोजन\nसबको बाँटो प्रेम से।',
      english: 'Practice Dasoha — share food with love among all.',
      meaning_hindi: 'दasoह करो — भोजन सबके साथ प्रेम से बाँटो।',
      explanation: 'Dasoha — community kitchen and sharing — was Basavanna\'s practical ethics. No one should hunger while others feast; spiritual equality begins at the shared meal.',
      theme: 'Service',
      author: 'Basavanna',
      authorSlug: 'basavanna',
      featured: true,
    },
    {
      id: 555,
      hindi: 'जो ज्ञानी, वही शरण,\nजाति-पाँत से परे।',
      english: 'The wise one is a Sharana — beyond caste and creed.',
      meaning_hindi: 'जो ज्ञानी है वही शरण है — जाति-पाँत से परे।',
      explanation: 'Sharana means one who has surrendered ego to Shiva. In the Anubhava Mantapa, a cobbler like Madara Chennaiah could teach a king because wisdom, not birth, conferred authority.',
      theme: 'Character',
      author: 'Basavanna',
      authorSlug: 'basavanna',
    },
    {
      id: 556,
      hindi: 'स्त्री-पुरुष समान,\nईश्वर की दृष्टि में।',
      english: 'Man and woman are equal in the eyes of God.',
      meaning_hindi: 'ईश्वर की दृष्टि में स्त्री और पुरुष समान हैं।',
      explanation: 'Basavanna welcomed women Sharanas like Akka Mahadevi as spiritual equals. Gender, like caste, is a social construct that vanishes before the inner Lord.',
      theme: 'Love & Relationships',
      author: 'Basavanna',
      authorSlug: 'basavanna',
    },
    {
      id: 557,
      hindi: 'मूर्ति पूजा खोखली,\nजब हृदय अशुद्ध हो।',
      english: 'Idol worship is hollow when the heart remains impure.',
      meaning_hindi: 'हृदय अशुद्ध हो तो मूर्ति पूजा खोखली है।',
      explanation: 'Basavanna did not reject devotion but insisted it begin within. Treating others as untouchable while bowing before a stone image is hypocrisy he condemned fiercely.',
      theme: 'Character',
      author: 'Basavanna',
      authorSlug: 'basavanna',
    },
    {
      id: 558,
      hindi: 'सच्चा भक्त वही,\nजो सच्चा कर्म करे।',
      english: 'The true devotee is one who performs true action.',
      meaning_hindi: 'सच्चा भक्त वही है जो सच्चा, ईमानदार कर्म करता है।',
      explanation: 'Bhakti for Basavanna was not separate from daily life. Honest craft, fair dealing, and compassion in the marketplace are as sacred as temple prayer.',
      theme: 'Service',
      author: 'Basavanna',
      authorSlug: 'basavanna',
    },
    {
      id: 559,
      hindi: 'अहंकार छोड़,\nलिंग को पहचान।',
      english: 'Drop ego and recognize the Linga — the Lord within.',
      meaning_hindi: 'अहंकार छोड़कर लिंग — अंतर के स्वामी — को पहचानो।',
      explanation: 'The Ishtalinga worn on the body symbolizes constant awareness of Shiva. Ego — the "I am superior" feeling — is the only true impurity Basavanna sought to destroy.',
      theme: 'Wisdom',
      author: 'Basavanna',
      authorSlug: 'basavanna',
    },
    {
      id: 560,
      hindi: 'धन से नहीं, दया से\nमिलता ईश्वर।',
      english: 'God is found not through wealth but through compassion.',
      meaning_hindi: 'धन से नहीं, करुणा से ईश्वर मिलता है।',
      explanation: 'Basavanna criticized merchants and priests who hoarded wealth while the poor suffered. Generosity and Dasoha open the heart to the indwelling Shiva.',
      theme: 'Wealth & Materialism',
      author: 'Basavanna',
      authorSlug: 'basavanna',
    },
    {
      id: 561,
      hindi: 'वचन सच्चे बोलो,\nजिह्वा पर शिव।',
      english: 'Speak true words — Shiva dwells on the tongue of the honest.',
      meaning_hindi: 'सच्चे वचन बोलो — ईमानदार की जिह्वा पर शिव विराजते हैं।',
      explanation: 'Basavanna\'s vachanas themselves exemplify direct truthful speech. Lying, flattery, and cruelty in speech are sins against the Lord who lives in every voice.',
      theme: 'Character',
      author: 'Basavanna',
      authorSlug: 'basavanna',
    },
    {
      id: 562,
      hindi: 'गuru के बिना अंधकार,\nगुरु से प्रकाश।',
      english: 'Without the guru there is darkness; through the guru comes light.',
      meaning_hindi: 'गुरु के बिना अंधकार है; गुरु से प्रकाश मिलता है।',
      explanation: 'Basavanna honored the guru who reveals the inner Linga, but insisted that true gurus can come from any caste. Spiritual authority flows from realization, not birth.',
      theme: 'Wisdom',
      author: 'Basavanna',
      authorSlug: 'basavanna',
    },
    {
      id: 563,
      hindi: 'मृत्यु से न डर,\nशिव तुम्हारे साथ।',
      english: 'Do not fear death — Shiva walks beside you.',
      meaning_hindi: 'मृत्यु से मत डरो — शिव तुम्हारे साथ चलते हैं।',
      explanation: 'Basavanna faced exile and political violence without flinching. Faith in the indwelling Lord gives courage that outlasts any worldly threat.',
      theme: 'Acceptance',
      author: 'Basavanna',
      authorSlug: 'basavanna',
    },
    {
      id: 564,
      hindi: 'जो अलग करे मनुष्य,\nवह ईश्वर का विरोधी।',
      english: 'Whoever divides humanity opposes God.',
      meaning_hindi: 'जो मनुष्यता को बाँटता है, वह ईश्वर का विरोधी है।',
      explanation: 'Untouchability, caste pride, and religious hatred were Basavanna\'s primary enemies. Unity of all Sharanas in Shiva devotion was his vision of social revolution.',
      theme: 'Friendship',
      author: 'Basavanna',
      authorSlug: 'basavanna',
    },
    {
      id: 565,
      hindi: 'कूडलसंगम देव,\nसबके हृदय में।',
      english: 'The Lord of Kudalasangama dwells in every heart.',
      meaning_hindi: 'कूडलसंगम के देव सबके हृदय में विराजमान हैं।',
      explanation: 'Basavanna\'s signature phrase "Kudala Sangama Deva" invokes Shiva at the sacred confluence — but ultimately points to the Lord present in every person he met.',
      theme: 'Love & Relationships',
      author: 'Basavanna',
      authorSlug: 'basavanna',
    },
  ],
}
