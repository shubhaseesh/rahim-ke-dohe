// This file contains Devanagari and Malayalam-derived script — ensure UTF-8 encoding
import type { Writer } from '../types'

export const narayanaGuruWriter: Writer = {
  slug: 'narayana-guru',
  name_english: 'Narayana Guru',
  name_hindi: 'नारायण गुरु',
  era: '19th–20th century (1856–1928)',
  language: 'Malayalam / Sanskrit',
  genre: 'Spiritual poetry, social reform, Advaita teaching',
  short_bio_english:
    'Kerala\'s luminous reformer who declared "One caste, one religion, one God for mankind" — Narayana Guru uplifted the oppressed through education, temples, and verse.',
  short_bio_hindi:
    'केरल के प्रकाशमान समाज सुधारक जिन्होंने कहा — "मानवता के लिए एक जात, एक धर्म, एक ईश्वर" — नारायण गुरु ने शिक्षा, मंदिर और काव्य से दबे-कुचले को उठाया।',
  biography: {
    introduction_english:
      'Narayana Guru (1856–1928) was a philosopher, poet, and social reformer from Kerala who became one of the most transformative spiritual leaders of modern India. Born into the Ezhava community at a time when caste discrimination barred lower castes from temples and education, he studied Sanskrit and Vedanta under learned teachers and attained profound realization. Rather than merely protest injustice, he built institutions — schools, temples open to all, and ashrams — that embodied equality in practice. His famous declaration at the Shiva temple he consecrated at Aruvippuram in 1888 — "One caste, one religion, one God for mankind" — became the motto of Kerala\'s renaissance. Through Malayalam and Sanskrit poems collected in works such as Atmopadesa Satakam and Daiva Dasakam, he taught self-knowledge, compassion, and the unity of all beings. Gandhi, Tagore, and Radhakrishnan admired him; his legacy continues through the Sree Narayana Dharma Paripalana (SNDP) movement and the cultural life of Kerala.',

    introduction_hindi:
      'नारायण गुरु (1856–1928) केरल के दार्शनिक, कवि और समाज सुधारक थे, जो आधुनिक भारत के सबसे परिवर्तनकारी आध्यात्मिक नेताओं में से एक बने। जात-पात के कारण निचली जातियों को मंदिर और शिक्षा से वंचित रखे जाने के समय में एज़ावा समुदाय में जन्मे, उन्होंने संस्कृत और वेदांत का अध्ययन किया और गहन आत्म-साक्षात्कार प्राप्त किया। केवल अन्याय का विरोध न कर, उन्होंने ऐसे संस्थान बनाए — स्कूल, सभी के लिए खुले मंदिर, आश्रम — जो समानता को व्यवहार में उतारते थे। 1888 में अरुविपुरम में स्थापित शिव मंदिर पर उनकी प्रसिद्ध घोषणा — "मानवता के लिए एक जात, एक धर्म, एक ईश्वर" — केरल के पुनर्जागरण का मंत्र बनी। आत्मोपदेश शतक और दैव दशकम जैसी रचनाओं में उन्होंने आत्म-ज्ञान, करुणा और सभी प्राणियों की एकता सिखाई। गांधी, टैगोर और राधाकृष्णन ने उनकी प्रशंसा की; SNDP आंदोलन और केरल की सांस्कृतिक जीवन में उनकी विरासत जीवित है।',

    timeline: [
      {
        year: '1856',
        title_english: 'Birth in Chempazhanthy',
        title_hindi: 'चेम्पज़्हानthy में जन्म',
        content_english:
          'Narayana Guru was born on 20 August 1856 in Chempazhanthy near Thiruvananthapuram, Kerala, into the Ezhava family of Madan Asan and Kutti Amma. His birth name was Nanu (Nanu Asan). Even as a child he showed unusual sensitivity to suffering and a love of learning.',
        content_hindi:
          '20 अगस्त 1856 को केरल के तिरुवनंतपुरam के निकट चेम्पज़्हानthy में मदन आसन और कुट्टी अम्मा के एज़ावा परिवार में नारायण गुरु का जन्म हुआ। जन्म नाम ननु था। बचपन से ही दुख के प्रति असामान्य संवेदनशीलता और सीखने की ललक दिखाई।',
      },
      {
        year: '1870s',
        title_english: 'Study and Spiritual Quest',
        title_hindi: 'अध्ययन और आध्यात्मिक खोज',
        content_english:
          'Young Nanu studied under Raman Pillai Asan and later under the Sanskrit scholar Kummampilli Raman Pillai. He mastered Ayurveda, logic, and Vedanta. Periods of intense meditation in caves and forests deepened his inner life and prepared him for public teaching.',
        content_hindi:
          'युवा ननु ने रामन पिल्लai आसन और बाद में संस्कृत विद्वान कुम्मम्पिल्लi रामन पिल्लai से शिक्षा ली। उन्होंने आयुर्वेद, तर्क और वेदांत में दक्षता प्राप्त की। गुफाओं और वनों में गहन ध्यान के समय ने आंतरिक जीवन को गहरा किया और सार्वजनिक उपदेश के लिए तैयार किया।',
      },
      {
        year: '1888',
        title_english: 'Aruvippuram Temple Consecration',
        title_hindi: 'अरुविपुरम मंदिर प्रतिष्ठा',
        content_english:
          'On Shivaratri 1888, Narayana Guru consecrated a Shiva lingam at Aruvippuram, defying the ban on lower castes performing temple rituals. When challenged, he replied that he had consecrated not a Brahmin\'s Shiva but the universal Shiva — and inscribed his revolutionary motto on the temple wall.',
        content_hindi:
          '1888 की शिवरात्रि पर नारायण गुरु ने अरुविपुरम में शिवलिंग की प्रतिष्ठा की, निचली जातियों पर मंदिर-कर्म निषेध को चुनौती देते हुए। प्रश्न पर उन्होंने कहा — उन्होंने ब्राह्मण का शिव नहीं, सार्वभौमिक शिव की प्रतिष्ठा की — और मंदिर की दीवार पर क्रांतिकारी मंत्र अंकित किया।',
      },
      {
        year: '1904–1928',
        title_english: 'Institutions and Literary Works',
        title_hindi: 'संस्थाएँ और साहित्य',
        content_english:
          'Narayana Guru founded schools, the Advaita Ashram at Aluva, and temples at Kalavancode, Murikkumpuzha, and elsewhere. He composed Atmopadesa Satakam (100 verses of self-instruction), Daiva Dasakam (Ten Verses on God), and Jeevakarunya Panchakam. He mentored Dr. Palpu and Kumaran Asan, shaping Kerala\'s literary renaissance.',
        content_hindi:
          'नारायण गुरु ने स्कूल, अलुवा का अद्वैत आश्रम और कालवancode, मुरिक्कुम्पuzha आदि स्थानों पर मंदिर स्थापित किए। उन्होंने आत्मोपदेश शतक, दैव दशकम और जीवकरुण्य पंचकम रचे। डॉ. पाल्पu और कुमारan आसन का मार्गदर्शन कर केरल के साहित्यिक पुनर्जागरण को आकार दिया।',
      },
      {
        year: '1928',
        title_english: 'Mahasamadhi and Enduring Legacy',
        title_hindi: 'महासमाधि और स्थायी विरासत',
        content_english:
          'Narayana Guru passed away on 20 September 1928 at the Sivagiri Mutt he founded. His teachings on spiritual equality, education, and self-realization continue to guide social reform movements and remain central to Kerala\'s identity as a land of enlightenment and literacy.',
        content_hindi:
          '20 सितंबर 1928 को अपने स्थापित शिवगिरi मठ में नारायण गुरु का महाप्रयाण हुआ। आध्यात्मिक समानता, शिक्षा और आत्म-साक्षात्कार की उनकी शिक्षाएँ आज भी समाज सुधार को मार्गदर्शन देती हैं और केरल की ज्ञान-साक्षरता की पहचान का केंद्र बनी हुई हैं।',
      },
    ],

    facts: {
      born: '20 August 1856 — Chempazhanthy, Thiruvananthapuram, Kerala',
      died: '20 September 1928 — Sivagiri Mutt, Varkala, Kerala (aged 72)',
      full_name_english: 'Narayana Guru (born Nanu)',
      full_name_hindi: 'नारायण गुरु (जन्म नाम — ननु)',
      court: 'Independent spiritual teacher and social reformer; founder of Sivagiri Mutt',
      works: [
        'Atmopadesa Satakam — 100 verses of self-instruction',
        'Daiva Dasakam — Ten Verses on God',
        'Jeevakarunya Panchakam — Five verses on compassion to living beings',
        'Anukamba Dasakam — Ten verses on empathy',
        'Advaita Deepika — lamp of non-dual wisdom',
      ],
    },
  },

  dohe: [
    {
      id: 536,
      hindi: 'ओरु जाति, ओरु मतम्, ओरु दैवम् मानवानुक्कु।\nएक जात, एक धर्म, एक ईश्वर — मानवता के लिए।',
      english: 'One caste, one religion, one God for mankind.',
      meaning_hindi: 'मानव समाज के लिए एक ही जात, एक ही धर्म, एक ही ईश्वर — सभी में एकता है।',
      explanation: 'Narayana Guru\'s most famous declaration, inscribed at Aruvippuram in 1888. It rejects caste division and sectarian religion while affirming the spiritual unity of all humanity.',
      theme: 'Acceptance',
      author: 'Narayana Guru',
      authorSlug: 'narayana-guru',
      featured: true,
    },
    {
      id: 537,
      hindi: 'जो देखे अपने भीतर,\nवही देखे सब में प्रभु।',
      english: 'Whoever sees the Lord within themselves sees the same Lord in all beings.',
      meaning_hindi: 'जो अपने अंतरात्मा में ईश्वर देखता है, वही सब प्राणियों में उसी को पहचानता है।',
      explanation: 'From the Advaita teaching of Narayana Guru — self-knowledge and seeing the divine in others are one path. External worship without inner realization remains incomplete.',
      theme: 'Wisdom',
      author: 'Narayana Guru',
      authorSlug: 'narayana-guru',
      featured: true,
    },
    {
      id: 538,
      hindi: 'अज्ञान अंधकार है,\nज्ञान दीपक जलाओ।',
      english: 'Ignorance is darkness — light the lamp of knowledge.',
      meaning_hindi: 'अज्ञान अंधकार है; ज्ञान का दीपक जलाओ — शिक्षा से मुक्ति मिलती है।',
      explanation: 'Narayana Guru built schools alongside temples because he believed spiritual and social liberation both require education. Knowledge dispels the darkness of caste prejudice and superstition.',
      theme: 'Wisdom',
      author: 'Narayana Guru',
      authorSlug: 'narayana-guru',
    },
    {
      id: 539,
      hindi: 'दुखिया का दुख हरो,\nयही सच्चा धर्म है।',
      english: 'Relieving the suffering of the distressed — that alone is true dharma.',
      meaning_hindi: 'पीड़ित का दुख दूर करना — यही असली धर्म है, रीति-रिवाज नहीं।',
      explanation: 'Narayana Guru measured religion not by ritual but by compassionate action. Service to the oppressed Ezhava community and all who suffered injustice was his daily spiritual practice.',
      theme: 'Service',
      author: 'Narayana Guru',
      authorSlug: 'narayana-guru',
      featured: true,
    },
    {
      id: 540,
      hindi: 'मंदिर मन में बसे,\nतो बाहर भी मंदिर।',
      english: 'When the temple dwells within the heart, the whole world becomes a temple.',
      meaning_hindi: 'जब मंदिर हृदय में बस जाए, तो संपूर्ण संसार मंदिर बन जाता है।',
      explanation: 'While consecrating physical temples open to all castes, Narayana Guru always pointed seekers inward. The true shrine is consciousness purified of hatred and division.',
      theme: 'Acceptance',
      author: 'Narayana Guru',
      authorSlug: 'narayana-guru',
    },
    {
      id: 541,
      hindi: 'जाति-पát नहीं ईश्वर में,\nरक्त एक, आत्मा एक।',
      english: 'Caste and creed do not exist in God — one blood, one soul.',
      meaning_hindi: 'ईश्वर में न जाति है न पát; रक्त एक है, आत्मा एक है।',
      explanation: 'Drawing on Advaita Vedanta, Narayana Guru taught that the Atman in every person is identical — social hierarchies are human constructs, not divine ordination.',
      theme: 'Character',
      author: 'Narayana Guru',
      authorSlug: 'narayana-guru',
    },
    {
      id: 542,
      hindi: 'जीवों पर दया करो,\nयही उपासना है।',
      english: 'Show compassion to all living beings — that is true worship.',
      meaning_hindi: 'सभी जीवों पर करुणा करो — यही असली पूजा है।',
      explanation: 'From Jeevakarunya Panchakam. Narayana Guru extended ahimsa and compassion beyond humans to all sentient life — kindness as the highest offering to the divine.',
      theme: 'Service',
      author: 'Narayana Guru',
      authorSlug: 'narayana-guru',
    },
    {
      id: 543,
      hindi: 'स्वयं को जानो पहले,\nफिर संसार समझो।',
      english: 'Know yourself first — then you will understand the world.',
      meaning_hindi: 'पहले स्वयं को जानो, तभी संसार समझ में आएगा।',
      explanation: 'Atmopadesa Satakam opens with the call to self-inquiry. Without knowing one\'s own true nature, all external knowledge remains superficial.',
      theme: 'Wisdom',
      author: 'Narayana Guru',
      authorSlug: 'narayana-guru',
    },
    {
      id: 544,
      hindi: 'शिक्षा से जाति मिटे,\nअंधकार छँट जाए।',
      english: 'Through education caste prejudice fades and darkness lifts.',
      meaning_hindi: 'शिक्षा से जात-भेद मिटता है और अज्ञान का अंधकार छँट जाता है।',
      explanation: 'Narayana Guru established schools throughout Kerala when literacy was denied to lower castes. He saw education as the practical tool of spiritual equality.',
      theme: 'Service',
      author: 'Narayana Guru',
      authorSlug: 'narayana-guru',
    },
    {
      id: 545,
      hindi: 'मौन में बोलता है,\nजो हृदय शुद्ध है।',
      english: 'The pure heart speaks even in silence.',
      meaning_hindi: 'शुद्ध हृदय मौन में भी बोलता है — उसकी चुप्पी भी उपदेश है।',
      explanation: 'Narayana Guru lived simply and often taught through presence rather than argument. Inner purity communicates more powerfully than eloquent speech.',
      theme: 'Character',
      author: 'Narayana Guru',
      authorSlug: 'narayana-guru',
    },
    {
      id: 546,
      hindi: 'ईश्वर एक, मार्ग अनेक,\nलक्ष्य एक — प्रेम।',
      english: 'God is one, paths are many — the goal is one: love.',
      meaning_hindi: 'ईश्वर एक है, मार्ग अनेक हैं — लक्ष्य एक ही है: प्रेम।',
      explanation: 'Narayana Guru respected diverse traditions while insisting on the unity of the divine. Religious tolerance flows naturally from recognizing one God in all forms of worship.',
      theme: 'Love & Relationships',
      author: 'Narayana Guru',
      authorSlug: 'narayana-guru',
    },
    {
      id: 547,
      hindi: 'धन से नहीं, दया से\nमनुष्य महान बने।',
      english: 'Not through wealth but through compassion does a person become great.',
      meaning_hindi: 'धन से नहीं, करुणा से ही मनुष्य महान बनता है।',
      explanation: 'Narayana Guru rejected material ostentation in spiritual life. Greatness is measured by how one treats the weakest, not by possessions or status.',
      theme: 'Wealth & Materialism',
      author: 'Narayana Guru',
      authorSlug: 'narayana-guru',
    },
    {
      id: 548,
      hindi: 'अहंकार छोड़, प्रेम ले,\nतभी मिलेगा शांति।',
      english: 'Drop ego, take up love — only then will peace be found.',
      meaning_hindi: 'अहंकार छोड़ो, प्रेम अपनाओ — तभी शांति मिलेगी।',
      explanation: 'The ego that divides people into superior and inferior is the root of social evil. Narayana Guru\'s path dissolves ego through devotion and self-knowledge.',
      theme: 'Character',
      author: 'Narayana Guru',
      authorSlug: 'narayana-guru',
    },
    {
      id: 549,
      hindi: 'जो गरीब की सेवा करे,\nवही ईश्वर के निकट है।',
      english: 'Whoever serves the poor stands nearest to God.',
      meaning_hindi: 'जो गरीब-दुखी की सेवा करता है, वही ईश्वर के सबसे निकट है।',
      explanation: 'Narayana Guru\'s life was service to the Ezhava and all marginalized communities. He taught that God appears in the face of those society rejects.',
      theme: 'Service',
      author: 'Narayana Guru',
      authorSlug: 'narayana-guru',
    },
    {
      id: 550,
      hindi: 'आत्मा अमर, शरीर नश्वर,\nजान लो — मोह छोड़ो।',
      english: 'The soul is immortal, the body perishable — know this and release attachment.',
      meaning_hindi: 'आत्मा अमर है, शरीर नश्वर — यह जानकर मोह छोड़ो।',
      explanation: 'Closing theme of Atmopadesa Satakam. Recognizing the eternal Self beyond the perishable body frees one from fear, caste pride, and worldly clinging.',
      theme: 'Acceptance',
      author: 'Narayana Guru',
      authorSlug: 'narayana-guru',
    },
  ],
}
