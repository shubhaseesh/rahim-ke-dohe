// This file contains Devanagari script — ensure UTF-8 encoding
import type { Writer } from '../types'

export const bhagavadGitaWriter: Writer = {
  slug: 'bhagavad-gita',
  name_english: 'Bhagavad Gita',
  name_hindi: 'भगवद्गीता',
  era: 'c. 2nd century BCE – 2nd century CE (Mahabharata tradition)',
  language: 'Sanskrit',
  genre: 'Spiritual scripture, philosophical dialogue',
  short_bio_english:
    'The sacred dialogue between Krishna and Arjuna on the battlefield of Kurukshetra — seven hundred verses on duty, devotion, and the path to liberation.',
  short_bio_hindi:
    'कुरुक्षेत्र के रणक्षेत्र पर कृष्ण और अर्जुन के बीच पवित्र संवाद — कर्तव्य, भक्ति और मोक्ष के सात सौ श्लोक।',
  biography: {
    introduction_english:
      'The Bhagavad Gita ("Song of the Lord") is a 700-verse Sanskrit scripture that forms part of the Mahabharata epic. Set on the eve of the great war at Kurukshetra, it records the conversation between Prince Arjuna, who is paralysed by moral doubt, and his charioteer Krishna, who is the divine incarnation of Vishnu. Over eighteen chapters, Krishna unfolds the paths of karma yoga (selfless action), bhakti yoga (devotion), jnana yoga (knowledge), and dhyana yoga (meditation). The Gita addresses the universal human dilemmas of duty versus desire, action versus renunciation, and the nature of the eternal Self. It has been translated into every major language and remains one of the most influential spiritual texts in world history.',

    introduction_hindi:
      'भगवद्गीता ("भगवान का गीत") महाभारत महाकाव्य का 700-श्लोक संस्कृत ग्रंथ है। कुरुक्षेत्र के महायुद्ध की पूर्व संध्या पर, नैतिक संदेह से विह्वल राजकुमार अर्जुन और उनके सारथि कृष्ण — विष्णु के दिव्य अवतार — के बीच संवाद दर्ज है। अठारह अध्यायों में कृष्ण कर्म योग, भक्ति योग, ज्ञान योग और ध्यान योग के मार्ग प्रकट करते हैं। गीता कर्तव्य बनाम इच्छा, कर्म बनाम त्याग और शाश्वत आत्मा की प्रकृति जैसे सार्वभौमिक मानवीय प्रश्नों का उत्तर देती है।',

    timeline: [
      {
        year: 'c. 400 BCE – 400 CE',
        title_english: 'Composition within the Mahabharata',
        title_hindi: 'महाभारत के भीतर रचना',
        content_english:
          'Scholars date the Gita\'s composition to between the 2nd century BCE and 2nd century CE, embedded within the Bhishma Parva of the Mahabharata. It synthesises Vedic, Upanishadic, and emerging devotional traditions into a unified spiritual teaching.',
        content_hindi:
          'विद्वान गीता की रचना को दूसरी शताब्दी ई.पू. से दूसरी शताब्दी ई. तक महाभारत के भीष्म पर्व में अंतर्निहित मानते हैं। यह वैदिक, उपनिषदिक और उभरती भक्ति परंपराओं का संश्लेषण करती है।',
      },
      {
        year: 'Kurukshetra',
        title_english: 'The Setting — Dharma on the Battlefield',
        title_hindi: 'पृष्ठभूमि — रणक्षेत्र पर धर्म',
        content_english:
          'Arjuna sees his teachers, cousins, and elders arrayed against him and refuses to fight. Krishna\'s counsel transforms a moment of personal crisis into a universal teaching on righteous action, equanimity, and the immortal soul.',
        content_hindi:
          'अर्जुन अपने गुरु, चचेरे भाई और बड़ों को सामने देखकर युद्ध से इनकार कर देता है। कृष्ण का उपदेश व्यक्तिगत संकट को धर्मपूर्ण कर्म, समत्व और अमर आत्मा पर सार्वभौमिक शिक्षा में बदल देता है।',
      },
      {
        year: '18 Chapters',
        title_english: 'The Yoga of the Gita',
        title_hindi: 'गीता का योग',
        content_english:
          'Each chapter addresses a facet of spiritual life — from the nature of the Self (Atman) and the Supreme (Brahman) to the qualities of sattva, rajas, and tamas. Krishna declares that all paths, when pursued sincerely, lead to the divine.',
        content_hindi:
          'प्रत्येक अध्याय आध्यात्मिक जीवन के एक पहलू को संबोधित करता है — आत्मा और ब्रह्म की प्रकृति से लेकर सत्त्व, रजस और तमो गुणों तक। कृष्ण कहते हैं कि सभी मार्ग, ईमानदारी से अपनाए जाएँ तो दिव्य तक पहुँचाते हैं।',
      },
      {
        year: 'c. 8th century CE',
        title_english: 'Shankaracharya\'s Commentary',
        title_hindi: 'शंकराचार्य की टीका',
        content_english:
          'Adi Shankaracharya wrote the first major Advaita Vedanta commentary on the Gita, establishing it as a foundational text of Hindu philosophy. Later commentators — Ramanuja, Madhva, and Abhinavagupta — offered distinct theological readings.',
        content_hindi:
          'आदि शंकराचार्य ने गीता पर पहली प्रमुख अद्वैत वेदांत टीका लिखी, इसे हिंदू दर्शन का आधारभूत ग्रंथ बनाया। बाद में रामानुज, मध्व और अभिनवगुप्त ने अलग-अलग दार्शनिक व्याख्याएँ दीं।',
      },
      {
        year: 'Modern Era',
        title_english: 'Global Influence',
        title_hindi: 'वैश्विक प्रभाव',
        content_english:
          'From Emerson and Thoreau to Gandhi, Tolstoy, and Oppenheimer, the Gita has shaped thinkers across cultures. Gandhi called it his "spiritual dictionary" and drew on its teaching of nishkama karma for India\'s freedom struggle.',
        content_hindi:
          'एमर्सन और थोरो से लेकर गांधी, तोलस्तoy और ओपेनहाइमर तक — गीता ने विभिन्न संस्कृतियों के विचारकों को आकार दिया। गांधी ने इसे अपनी "आध्यात्मिक शब्दकोश" कहा और निष्काम कर्म की शिक्षा भारत की स्वतंत्रता संग्राम में अपनाई।',
      },
    ],

    facts: {
      born: 'Tradition: spoken at Kurukshetra before the Mahabharata war',
      died: 'N/A — living scripture',
      full_name_english: 'Shrimad Bhagavad Gita',
      full_name_hindi: 'श्रीमद् भगवद्गीता',
      court: 'Part of the Mahabharata epic; dialogue between Krishna and Arjuna',
      works: [
        'Bhagavad Gita — 700 verses in 18 chapters',
        'Commentaries by Shankaracharya, Ramanuja, Madhva, and others',
        'Translations in over 100 languages worldwide',
        'Integral to Hindu, Yoga, and Vedanta traditions',
      ],
    },
  },

  dohe: [
    {
      id: 296,
      hindi: 'कर्मण्येवाधिकारस्ते, मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।।',
      english: 'You have a right to action alone, never to its fruits. Do not let the fruits of action be your motive, nor let your attachment be to inaction.',
      meaning_hindi: 'तुम्हारा अधिकार केवल कर्म पर है, फल पर कभी नहीं। कर्म के फल के कारण मत बनो, और अकर्म में आसक्ति भी मत रखो।',
      explanation: 'Perhaps the Gita\'s most quoted verse (2.47). Krishna teaches Arjuna to perform duty without clinging to results — the foundation of karma yoga and selfless action.',
      theme: 'Wisdom',
      author: 'Bhagavad Gita',
      authorSlug: 'bhagavad-gita',
      featured: true,
    },
    {
      id: 297,
      hindi: 'योगः कर्मसु कौशलम्।',
      english: 'Yoga is skill in action.',
      meaning_hindi: 'योग कर्म में कुशलता है — जो कर्म समर्पण और समत्व से करे, वही योगी है।',
      explanation: 'From Gita 2.50. True yoga is not withdrawal from the world but excellence in performing one\'s duty with equanimity and inner poise.',
      theme: 'Service',
      author: 'Bhagavad Gita',
      authorSlug: 'bhagavad-gita',
    },
    {
      id: 298,
      hindi: 'नैनं छिन्दन्ति शस्त्राणि, नैनं दहति पावकः।\nन चैनं क्लेदयन्त्यापो, न शोषयति मारुतः।।',
      english: 'Weapons cannot cut the soul, fire cannot burn it, water cannot wet it, and wind cannot dry it.',
      meaning_hindi: 'आत्मा को शस्त्र काट नहीं सकते, अग्नि जला नहीं सकती, जल गीला नहीं कर सकता, वायु सुखा नहीं सकती।',
      explanation: 'Gita 2.23. Krishna reassures Arjuna that the eternal Self is indestructible — death is merely a change of garment for the soul.',
      theme: 'Acceptance',
      author: 'Bhagavad Gita',
      authorSlug: 'bhagavad-gita',
    },
    {
      id: 299,
      hindi: 'वासांसि जीर्णानि यथा विहाय, नवानि गृह्णाति नरोऽपराणि।\nतथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही।।',
      english: 'As a person casts off worn-out garments and puts on new ones, so the embodied soul casts off worn-out bodies and enters new ones.',
      meaning_hindi: 'जैसे मनुष्य पुराने वस्त्र त्यागकर नए पहनता है, वैसे ही आत्मा पुराने शरीर छोड़कर नए में प्रवेश करती है।',
      explanation: 'Gita 2.22. The metaphor of changing clothes explains reincarnation and removes the fear of bodily death.',
      theme: 'Acceptance',
      author: 'Bhagavad Gita',
      authorSlug: 'bhagavad-gita',
    },
    {
      id: 300,
      hindi: 'यदा यदा हि धर्मस्य, ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य, तदात्मानं सृजाम्यहम्।।',
      english: 'Whenever dharma declines and adharma rises, O Bharata, then I manifest Myself.',
      meaning_hindi: 'हे भारत, जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं अपने आप को प्रकट करता हूँ।',
      explanation: 'Gita 4.7. Krishna declares the divine purpose of avatars — to restore righteousness whenever the world loses its moral balance.',
      theme: 'Service',
      author: 'Bhagavad Gita',
      authorSlug: 'bhagavad-gita',
      featured: true,
    },
    {
      id: 301,
      hindi: 'समो हि सर्वभूतेषु, समं पश्यति यो अर्जुन।\nस सर्वभूतेषु योक्त्वा, न हन्यते न हन्यते।।',
      english: 'One who sees all beings equally and treats all alike — truly seeing the same Self in every creature — is not slain nor does he slay.',
      meaning_hindi: 'जो सब प्राणियों में समान देखता है, वही सच में देखता है — ऐसा योगी न मारा जाता है, न मारता है।',
      explanation: 'Gita 13.28 (variant). Equanimity toward all beings arises from seeing the one divine presence in every form of life.',
      theme: 'Character',
      author: 'Bhagavad Gita',
      authorSlug: 'bhagavad-gita',
    },
    {
      id: 302,
      hindi: 'क्रोधाद्भवति सम्मोहः, सम्मोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद् बुद्धिनाशो, बुद्धिनाशात् प्रणश्यति।।',
      english: 'From anger comes delusion; from delusion, loss of memory; from loss of memory, destruction of intellect; and from destruction of intellect, one perishes.',
      meaning_hindi: 'क्रोध से मोह, मोह से स्मृति भ्रष्ट, स्मृति भ्रष्ट से बुद्धि नाश, और बुद्धि नाश से मनुष्य नष्ट हो जाता है।',
      explanation: 'Gita 2.63. Krishna maps the chain reaction from a single flash of anger to complete spiritual ruin — a warning to guard the mind.',
      theme: 'Character',
      author: 'Bhagavad Gita',
      authorSlug: 'bhagavad-gita',
    },
    {
      id: 303,
      hindi: 'श्रेयान्स्वधर्मो विगुणः, परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः, परधर्मो भयावहः।।',
      english: 'Better is one\'s own dharma, though imperfect, than the well-performed dharma of another. Death in one\'s own dharma is better; another\'s dharma is fraught with fear.',
      meaning_hindi: 'अपना धर्म, भले ही दोषपूर्ण हो, दूसरे के अच्छे धर्म से श्रेष्ठ है। अपने धर्म में मरना भी अच्छा, परधर्म भयदायक है।',
      explanation: 'Gita 3.35. Each person must follow their own innate calling rather than imitating another\'s path, however admirable it may seem.',
      theme: 'Wisdom',
      author: 'Bhagavad Gita',
      authorSlug: 'bhagavad-gita',
    },
    {
      id: 304,
      hindi: 'योगस्थः कुरु कर्माणि, सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा, समत्वं योग उच्यते।।',
      english: 'Perform action, O Dhananjaya, established in yoga, abandoning attachment, remaining the same in success and failure. Such equanimity is called yoga.',
      meaning_hindi: 'हे धनंजय, योग में स्थित होकर, आसक्ति त्यागकर, सफलता और असफलता में समान रहकर कर्म करो — यही समत्व योग कहलाता है।',
      explanation: 'Gita 2.48. Equanimity in success and failure is the hallmark of the true yogi who acts without ego.',
      theme: 'Acceptance',
      author: 'Bhagavad Gita',
      authorSlug: 'bhagavad-gita',
    },
    {
      id: 305,
      hindi: 'मन्मना भव मद्भक्तो, मद्याजी मां नमस्कुरु।\nमामेवैष्यसि सत्यं ते, प्रतिजाने प्रियोऽसि मे।।',
      english: 'Fix your mind on Me, be devoted to Me, worship Me, bow to Me. Thus you shall come to Me alone — I promise you this, for you are dear to Me.',
      meaning_hindi: 'मुझ में मन लगाओ, मेरे भक्त बनो, मेरी पूजा करो, मुझे नमस्कार करो — इस प्रकार तुम मेरे पास आओगे, यह मेरा वचन है, तुम मुझे प्रिय हो।',
      explanation: 'Gita 18.65. Krishna\'s culminating call to bhakti — total surrender of mind and heart to the divine as the surest path to liberation.',
      theme: 'Love & Relationships',
      author: 'Bhagavad Gita',
      authorSlug: 'bhagavad-gita',
      featured: true,
    },
    {
      id: 306,
      hindi: 'अहिंसा समता तुष्टिस्तपो, दानं यशोऽयशः।\nभवन्ति भावा भूतानां, मत्त एव पृथग्विधाः।।',
      english: 'Non-violence, equanimity, contentment, austerity, charity, fame, and infamy — all these dispositions of beings arise from Me alone.',
      meaning_hindi: 'अहिंसा, समता, संतोष, तप, दान, यश और अपयश — ये सब प्राणियों के भाव मुझसे ही उत्पन्न होते हैं।',
      explanation: 'Gita 10.5. Krishna reveals that all moral qualities and their opposites have their source in the divine — nothing exists apart from the Supreme.',
      theme: 'Character',
      author: 'Bhagavad Gita',
      authorSlug: 'bhagavad-gita',
    },
    {
      id: 307,
      hindi: 'दुःखेष्वनुद्विग्नमनाः, सुखेषु विगतस्पृहः।\nवीतरागभयक्रोधः, स्थितधीर्मुनिरुच्यते।।',
      english: 'One whose mind is undisturbed in sorrow, who is free from longing in pleasure, and who is free from attachment, fear, and anger — such a sage is called steadfast in wisdom.',
      meaning_hindi: 'जिसका मन दुःख में विचलित न हो, सुख में लालसा रहित हो, और राग, भय, क्रोध से मुक्त हो — वही स्थिरबुद्धि मुनि कहलाता है।',
      explanation: 'Gita 2.56. The sthitaprajna — person of steady wisdom — remains unmoved by the pairs of opposites that agitate ordinary minds.',
      theme: 'Wisdom',
      author: 'Bhagavad Gita',
      authorSlug: 'bhagavad-gita',
    },
    {
      id: 308,
      hindi: 'यः सर्वत्रानभिस्नेहस्तत्तत्प्राप्य शुभाशुभम्।\nनाभिनन्दति न द्वेष्टि, तस्य प्रज्ञा प्रतिष्ठिता।।',
      english: 'One who is without attachment everywhere, who neither rejoices nor hates on receiving good or evil — his wisdom is established.',
      meaning_hindi: 'जो सर्वत्र आसक्ति रहित है, शुभ या अशुभ पाकर न हर्षित होता न द्वेष करता — उसकी प्रज्ञा स्थिर है।',
      explanation: 'Gita 2.57. True wisdom means neither grasping at pleasure nor recoiling from pain — a balanced mind that accepts all outcomes equally.',
      theme: 'Acceptance',
      author: 'Bhagavad Gita',
      authorSlug: 'bhagavad-gita',
    },
    {
      id: 309,
      hindi: 'अनन्याश्चिन्तयन्तो मां, ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां, योगक्षेमं वहाम्यहम्।।',
      english: 'For those who worship Me with exclusive devotion, thinking of none else — for those ever-united with Me, I carry what they lack and preserve what they have.',
      meaning_hindi: 'जो लोग अनन्य भाव से मेरा चिंतन करते हैं, उनकी योगक्षेम की — जो कमी है वह पूर्ति और जो है उसकी रक्षा — मैं स्वयं करता हूँ।',
      explanation: 'Gita 9.22. Krishna\'s promise of divine care to the wholehearted devotee — the Lord Himself attends to both spiritual progress and worldly welfare.',
      theme: 'Love & Relationships',
      author: 'Bhagavad Gita',
      authorSlug: 'bhagavad-gita',
    },
    {
      id: 310,
      hindi: 'सर्वधर्मान्परित्यज्य, मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो, मोक्षयिष्यामि मा शुचः।।',
      english: 'Abandon all varieties of dharma and take refuge in Me alone. I shall liberate you from all sins — do not grieve.',
      meaning_hindi: 'सब धर्मों को छोड़कर केवल मेरी शरण में आओ। मैं तुम्हें सब पापों से मुक्त कर दूँगा — शोक मत करो।',
      explanation: 'Gita 18.66 — the charama shloka, the Gita\'s final teaching. Complete surrender to the divine is the ultimate refuge from all suffering and guilt.',
      theme: 'Service',
      author: 'Bhagavad Gita',
      authorSlug: 'bhagavad-gita',
    },
  ],
}
