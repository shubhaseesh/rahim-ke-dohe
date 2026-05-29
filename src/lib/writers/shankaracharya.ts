// This file contains Devanagari and Sanskrit script — ensure UTF-8 encoding
import type { Writer } from '../types'

export const shankaracharyaWriter: Writer = {
  slug: 'shankaracharya',
  name_english: 'Adi Shankaracharya',
  name_hindi: 'आदि शंकराचार्य',
  era: '8th century CE (c. 788–820)',
  language: 'Sanskrit',
  genre: 'Advaita Vedanta, stotras, philosophical hymns',
  short_bio_english:
    'The master of Advaita who proclaimed "Brahman alone is real" — Shankaracharya unified India\'s spiritual landscape through commentaries, mathas, and immortal Sanskrit hymns.',
  short_bio_hindi:
    'अद्वैत के आचार्य जिन्होंने घोषणा की — "ब्रह्म ही सत्य है" — शंकराचार्य ने भाष्य, मठ और अमर संस्कृत स्तोत्रों से भारत के आध्यात्मिक संगम को एक किया।',
  biography: {
    introduction_english:
      'Adi Shankaracharya (c. 788–820 CE) is among the greatest philosophers and spiritual teachers in Indian history. Born in Kaladi, Kerala, to Shivaguru and Aryamba, he displayed prodigious intellect from childhood and took sannyasa at a young age. Traveling across the Indian subcontinent on foot, he debated scholars of diverse schools — Buddhist, Jain, Mimamsa, and others — and established the primacy of Advaita Vedanta: the non-dual truth that Brahman (the Absolute) alone is real, the world is appearance (maya), and the individual self (Atman) is identical with Brahman. He wrote masterful commentaries (bhashyas) on the Upanishads, Bhagavad Gita, and Brahma Sutras — the foundational texts of Vedanta. He composed devotional hymns such as Bhaja Govindam, Soundarya Lahari, and Shiva Panchakshara Stotra that remain daily recitation across India. Shankaracharya founded four mathas (monasteries) at Sringeri, Puri, Dwaraka, and Badrinath — anchoring spiritual teaching in all four directions of the land. Though he lived only thirty-two years, his influence reshaped Hindu philosophy for over twelve centuries.',

    introduction_hindi:
      'आदि शंकराचार्य (लगभग 788–820 ई.) भारतीय इतिहास के महानतम दार्शनिकों और आध्यात्मिक गुरुओं में से एक हैं। केरल के कालडी में शिवगुरु और आर्याम्बा के घर जन्मे, उन्होंने बचपन से ही अद्भुत बुद्धि दिखाई और युवावस्था में संन्यास लिया। पैरों पर सम्पूर्ण भारत की यात्रा कर, उन्होंne बौद्ध, जain, मीमांसा आदि विद्वानों से शास्त्रार्थ किया और अद्वait वेदांत की प्रधानता स्थापित की — ब्रह्म (परम सत्य) ही एकमात्र वास्तविक है, जगत माया है, और व्यक्तिगत आत्मा ब्रह्म के साथ एक है। उन्होंne उपनिषद, भगवद गीता और ब्रह्म सूत्र — वेदांत के आधार ग्रंथ — पर महान भाष्य लिखे। भज गोविन्दम्, सौन्दarya लहari और शिव पञcaक्षर स्तोत्र जaisi भक्तi रचnाएँ आज भी भारत भर में प्रतिदिन गाई जाती हैं। शंकराचार्य ने शrungeri, puri, दwaraka और badrinath में चार मठ स्थापित किए — देश के चारों दिशाओं में आध्यात्मिक शiksha को स्थir किया। केवl बत्तीस वर्ष के जीवन में उन्होंne बारह सदियों से अधिक हिंदू दर्शन को आकार दिया।',

    timeline: [
      {
        year: 'c. 788',
        title_english: 'Birth in Kaladi',
        title_hindi: 'कालडी में जन्म',
        content_english:
          'Shankara was born in Kaladi on the banks of the Poorna river in Kerala to the Nambudiri Brahmin couple Shivaguru and Aryamba. Scriptures say he was an incarnation of Shiva, destined to restore Vedic wisdom.',
        content_hindi:
          'शंकर का जन्म केरल की पूर्णा नदी के तट पर कालडी में नंबूदिरि ब्राह्मण दंपति शिवगुरु और आर्याम्बा के घर हुआ। शास्त्र कहते हैं कि वे शिव के अवतार थे, वेद ज्ञान को पुनः स्थापित करने के लिए अवतीर्ण।',
      },
      {
        year: 'c. 800',
        title_english: 'Sannyasa and Guru Govindapada',
        title_hindi: 'संन्यास और गुरु गोविन्दपाद',
        content_english:
          'Shankara took renunciation as a boy and traveled north to the Narmada, where he met his guru Govindapada, disciple of Gaudapada. Under Govindapada he mastered Advaita and received the command to write commentaries on Vedanta.',
        content_hindi:
          'शंकर ने बाल्य में संन्यास लिया और नर्मदा तक उत्तर की यात्रा की, जहाँ उन्हें अपne गुरu गोविन्दपाद मिले, जो गaudapada के शिष्य थे। गोविन्दपाद के अधीन उन्होंne अद्वait में nipuNataa prapt ki aur vedanta par bhashya likhne ka aadesh mila.',
      },
      {
        year: 'c. 810',
        title_english: 'Digvijaya — Conquest of the Directions',
        title_hindi: 'दिगvijaya — दिशाओं की विजय',
        content_english:
          'Shankara journeyed across India, debating at Kashi, Badrinath, and other centers. His debate with Mandana Mishra (Bharati, Mishra\'s wife, serving as judge) is legendary. He established Advaita as the crown of Vedic interpretation.',
        content_hindi:
          'शंकर ने सम्पूर्ण भारत की yatra ki, kashi, badrinath aur anya kendro par shastrartha kiya. mandana mishra ke saath unka shastrartha (nirnayika mishra ki patni bharati) prasiddh hai. unhone advaita ko vedic vyakhya ka shirsh sthan diya.',
      },
      {
        year: 'c. 815–820',
        title_english: 'Commentaries and Hymns',
        title_hindi: 'भाष्य और स्तोत्र',
        content_english:
          'Shankara composed bhashyas on ten principal Upanishads, the Bhagavad Gita, and Brahma Sutras. He wrote Bhaja Govindam warning seekers against worldly attachment, Soundarya Lahari praising the Goddess, and dozens of stotras on Shiva, Vishnu, and Devi.',
        content_hindi:
          'शंकर ने दस pradhan upanishado, bhagavad gita aur brahma sutra par bhashya likhe. unhone bhaja govindam (sansarik moh ki chhaya), soundarya lahari (devi ki stuti) aur shiv, vishnu, devi par dozens stotra likhe.',
      },
      {
        year: 'c. 820',
        title_english: 'Four Mathas and Eternal Legacy',
        title_hindi: 'चार मठ और शाश्वत विरासत',
        content_english:
          'Shankara established mathas at Sringeri (south), Puri (east), Dwaraka (west), and Badrinath/Joshimath (north), organizing monastic lineages that continue today. He attained mahasamadhi at Kedarnath (tradition) at age thirty-two, leaving a philosophical revolution that defines Hindu thought.',
        content_hindi:
          'शंकर ने शrungeri (दक्षिण), puri (पूर्व), dwaraka (पश्चim), badrinath/joshimath (उत्तर) में मठ sthapit kiye, jo aaj tak jivit hain. kedarnath (parmpara) mein battis varsh ki ayu mein mahasamadhi li, ek aise darshanik kranti chhod gaye jo hindu chintan ko paribhashit karti hai.',
      },
    ],

    facts: {
      born: 'c. 788 — Kaladi, Kerala',
      died: 'c. 820 — Kedarnath, Himalayas (traditional; aged 32)',
      full_name_english: 'Adi Shankaracharya (Shankara Bhagavatpada)',
      full_name_hindi: 'आदि शंकराचार्य (शंकर भगवत्पada)',
      court: 'Independent sannyasi-philosopher; founder of Dashanami Sampradaya',
      works: [
        'Brahma Sutra Bhashya — commentary on Vedanta foundations',
        'Upanishad Bhashyas — on Isha, Kena, Katha, and seven others',
        'Bhagavad Gita Bhashya — Advaita interpretation of the Gita',
        'Bhaja Govindam — hymn on detachment from worldly life',
        'Soundarya Lahari — 100 verses on the Goddess',
        'Vivekachudamani — crest-jewel of discrimination',
        'Atma Bodha — self-knowledge primer',
      ],
    },
  },

  dohe: [
    {
      id: 566,
      hindi: 'ब्रह्म सत्यं जगन्मिथ्या,\nजीवो ब्रह्मैव नापरः।',
      english: 'Brahman alone is real; the world is illusory. The individual soul is nothing but Brahman — not other.',
      meaning_hindi: 'ब्रह्म ही सत्य है, जगत् मिथ्या है; जीव ब्रह्म ही है — कोई भेद नहीं।',
      explanation: 'The mahavakya of Advaita Vedanta, central to Shankaracharya\'s teaching. Liberation comes from recognizing the identity of Atman and Brahman, not from ritual or merit alone.',
      theme: 'Wisdom',
      author: 'Adi Shankaracharya',
      authorSlug: 'shankaracharya',
      featured: true,
    },
    {
      id: 567,
      hindi: 'भज गोविन्दं भज गोविन्दं,\nगोविन्दं भज मूढमते।\nसंप्राप्ते सन्निहिते काले,\nनहि नहि रक्षति डुकृञ्करणे।',
      english: 'Worship Govinda, worship Govinda, worship Govinda, O fool! When the end draws near, grammar rules will not save you.',
      meaning_hindi: 'गोविन्द की भक्ति करो, मूर्ख! मृत्यु के समय व्याकरण के नियम काम नहीं आएँगे।',
      explanation: 'Opening of Bhaja Govindam, composed when Shankara saw an old scholar memorizing Panini\'s grammar instead of preparing for death. Worldly learning without devotion is futile.',
      theme: 'Acceptance',
      author: 'Adi Shankaracharya',
      authorSlug: 'shankaracharya',
      featured: true,
    },
    {
      id: 568,
      hindi: 'चित्तं जित्वा शान्तिं लभते,\nनान्येन कथंचन।',
      english: 'By conquering the mind one attains peace — not by any other means whatsoever.',
      meaning_hindi: 'मन पर विजय से ही शान्ति मिलती है — किसी और उपाय से नहीं।',
      explanation: 'Shankaracharya taught that the restless mind projecting duality is the root of suffering. Self-inquiry (vichara) and meditation still the mind and reveal non-dual Brahman.',
      theme: 'Wisdom',
      author: 'Adi Shankaracharya',
      authorSlug: 'shankaracharya',
    },
    {
      id: 569,
      hindi: 'आत्मानं विद्धि, कामं\nमोहं त्यक्त्वा।',
      english: 'Know the Self; abandon desire and delusion.',
      meaning_hindi: 'आत्मा को जानो; काम और मोह का त्याग करो।',
      explanation: 'From Atma Bodha. Shankaracharya\'s practical instruction — philosophical truth must become lived experience through dropping attachment to body, pleasure, and false identity.',
      theme: 'Character',
      author: 'Adi Shankaracharya',
      authorSlug: 'shankaracharya',
    },
    {
      id: 570,
      hindi: 'ज्ञाता ज्ञानं ज्ञेयं च,\nएkaat्मा तत्त्वमुचyate।',
      english: 'The knower, knowledge, and known are declared to be one in essence.',
      meaning_hindi: 'ज्ञाता, ज्ञान और ज्ञेय — तीनों एक तत्त्व में हैं।',
      explanation: 'Advaita dissolves the subject-object split. In deep knowledge, the one who knows, the act of knowing, and what is known merge in non-dual consciousness.',
      theme: 'Wisdom',
      author: 'Adi Shankaracharya',
      authorSlug: 'shankaracharya',
      featured: true,
    },
    {
      id: 571,
      hindi: 'शivo\'ham शivo\'ham,\nचिदानन्दरूपः शivo\'ham।',
      english: 'I am Shiva, I am Shiva — of the nature of pure consciousness and bliss, I am Shiva.',
      meaning_hindi: 'मैं शिव हूँ, शिव ही हूँ — चिन्मय आनन्द स्वरूप शिव ही मैं हूँ।',
      explanation: 'From Nirvana Shatakam (Atma Shatakam). Shankaracharya composed this as a boy, declaring identity with pure consciousness beyond body, mind, and attributes.',
      theme: 'Acceptance',
      author: 'Adi Shankaracharya',
      authorSlug: 'shankaracharya',
    },
    {
      id: 572,
      hindi: 'विवेकवैराग्याभ्यां\nशुद्धसत्त्वाभ्यां च।',
      english: 'Through discrimination and detachment, with a purified mind, one beholds the Self.',
      meaning_hindi: 'विवेक और वैराग्य से, शuddh सattva से आत्मा का दर्शन होता है।',
      explanation: 'From Vivekachudamani. Shankara prescribed viveka (discerning real from unreal) and vairagya (dispassion) as prerequisites for self-knowledge — not blind faith.',
      theme: 'Wisdom',
      author: 'Adi Shankaracharya',
      authorSlug: 'shankaracharya',
    },
    {
      id: 573,
      hindi: 'गुरुर्ब्रह्मा गुरुर्विष्णुः,\nगुरुर्देवो महेश्वरः।\nगुरुः साक्षात् परं ब्रह्म,\nतस्मै श्री गुरवे नमः।',
      english: 'The guru is Brahma, Vishnu, and Shiva; the guru is the supreme Brahman itself — salutations to that guru.',
      meaning_hindi: 'गुरु ब्रह्मा, विष्णु, शिव हैं; गुरु ही परम ब्रह्म हैं — उन्हें नमस्कार।',
      explanation: 'The Guru Stotra attributed to Shankaracharya. The guru who reveals non-dual truth is honored as the visible form of the Absolute — not as a personality but as a doorway to Brahman.',
      theme: 'Love & Relationships',
      author: 'Adi Shankaracharya',
      authorSlug: 'shankaracharya',
    },
    {
      id: 574,
      hindi: 'मoho एव हि कारणं\nबन्धस्य इति निश्चितम्।',
      english: 'Delusion alone is certainly the cause of bondage.',
      meaning_hindi: 'मोह ही बंधन का कारण है — यह निश्चित है।',
      explanation: 'Bondage is not physical but cognitive — mistaking the impermanent body-mind for the eternal Self. Shankara\'s liberation is freedom from this fundamental error.',
      theme: 'Acceptance',
      author: 'Adi Shankaracharya',
      authorSlug: 'shankaracharya',
    },
    {
      id: 575,
      hindi: 'सत्यं ज्ञानमनन्तं ब्रह्म,\nयो वेद निहितं गुहायाम्।',
      english: 'Brahman is truth, knowledge, and infinite — hidden in the cave of the heart.',
      meaning_hindi: 'ब्रह्म सत्य, ज्ञान और अनन्त है — हृदय-गुहा में निहित।',
      explanation: 'Shankaracharya\'s commentaries illuminate this Taittiriya Upanishad definition. Brahman is not a distant god but the very nature of reality — existence-consciousness-bliss (sat-chit-ananda).',
      theme: 'Wisdom',
      author: 'Adi Shankaracharya',
      authorSlug: 'shankaracharya',
    },
    {
      id: 576,
      hindi: 'देहोऽस्मिन् यथा देहकृतं\nकर्म फलati।',
      english: 'As the body acts, so karma bears fruit — but upon leaving the body, karma ceases for the knower of Brahman.',
      meaning_hindi: 'शरीर के अनुसार कर्म फल देता है — पर ब्रह्मज्ञानी के लिए बंधन समाप्त।',
      explanation: 'Shankara reconciled karma with Advaita: the enlightened one acts without attachment, and the cycle of bondage ends because the false "doer" is seen through.',
      theme: 'Character',
      author: 'Adi Shankaracharya',
      authorSlug: 'shankaracharya',
    },
    {
      id: 577,
      hindi: 'न हि कश्चit क्षणमapi\nजातु tiṣṭhaty akarmakṛt।',
      english: 'No one can remain even for a moment without performing action — act, but without attachment.',
      meaning_hindi: 'कोई भी एक क्षण बिना कर्म के नहीं रह सकता — कर्म करो, पर आसक्ति से रहit।',
      explanation: 'Drawing on the Gita, Shankara taught that action is inevitable; the sage performs duty without ego, seeing action as movement in maya while resting in changeless Brahman.',
      theme: 'Service',
      author: 'Adi Shankaracharya',
      authorSlug: 'shankaracharya',
    },
    {
      id: 578,
      hindi: 'यad dṛśyam tan naśyam,\ndṛśyam hi naśyati।',
      english: 'Whatever is seen is perishable — the seen perishes; the seer alone is eternal.',
      meaning_hindi: 'जो दृश्य है सो नashvar है — द्रष्टा ही अmar है।',
      explanation: 'Core Advaita discrimination (viveka): the world of objects changes and dies; consciousness that witnesses all change is the unchanging Self.',
      theme: 'Acceptance',
      author: 'Adi Shankaracharya',
      authorSlug: 'shankaracharya',
    },
    {
      id: 579,
      hindi: 'सर्वं खlidam ब्रहma,\ntajjalaniti शान्त उपासितव्यम्।',
      english: 'All this is indeed Brahman — born from It, dissolved in It, and living in It — to be meditated upon in peace.',
      meaning_hindi: 'यeh sab brahman hi hai — jisase utpann, jisme liin, jisme jivit — shanti se iska dhyan karo.',
      explanation: 'From the Chandogya Upanishad, interpreted by Shankara. The world is not separate from Brahman but appears through maya — like a rope mistaken for a snake in dim light.',
      theme: 'Wisdom',
      author: 'Adi Shankaracharya',
      authorSlug: 'shankaracharya',
    },
    {
      id: 580,
      hindi: 'त्यज durgaam asamsaaram,\nbhaja govindam mudha mate।',
      english: 'Abandon the harsh cycle of rebirth — worship Govinda, O deluded mind.',
      meaning_hindi: 'दुःkhdai samsara chhod kar govind ki bhakti karo, murkhe.',
      explanation: 'Closing refrain of Bhaja Govindam. Shankara balanced jnana (knowledge) with bhakti (devotion) — intellectual understanding must ripen into surrender to the Lord.',
      theme: 'Love & Relationships',
      author: 'Adi Shankaracharya',
      authorSlug: 'shankaracharya',
    },
  ],
}
