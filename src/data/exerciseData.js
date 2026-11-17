export const exerciseData = {
  cp: {
    informatique: [
      {
        id: 1,
        title: "Découverte de l'ordinateur ",
        description: "Apprends à cliquer sur les bons éléments  !",
        type: "click_target",
        targetWord: "Ordinateur",
        items: ["Clavier", "Souris", "Pomme", "Écran", "Ballon", "livre"]
      },
      {
        id: 2,
        title: "Écris le mot SOURIS",
        description: "Regarde l'image et tape ou compose le nom de ce périphérique.",
        type: "keyboard_typing",
        imageUrl: "/mouse.avif",
        targetWord: "SOURIS",
        letters: ["S", "O", "U", "R", "I", "S"]
      },
      {
        id: 3,
        title: "Mon nom et prénom",
        description: "Écris ton nom et ton prénom pour te présenter.",
        type: "name_input"
      },
      {
        id: 4,
        title: "Puzzle du clavier",
        description: "Glisse les 4 morceaux du clavier dans le cadre pour reconstituer l'image !",
        type: "puzzle_4",
        imageUrl: "/keyboard.avif"
      },
      {
        id: 5,
        title: "Le jeu des couleurs de l'écran",
        description: "Clique sur la couleur demandée par l'ordinateur !",
        type: "color_picker",
        targetColor: "Rouge",
        colors: [
          { name: "Rouge", class: "bg-red-500" },
          { name: "Bleu", class: "bg-blue-500" },
          { name: "Vert", class: "bg-green-500" },
          { name: "Jaune", class: "bg-yellow-400" }
        ]
      }
    ],
    arabe: [
      
      {
        id: 1,
        section: "تربية إسلامية",
        title: "1. العقيدة",
        question: "مَنْ خَلَقَ الإِنْسَانَ؟",
        type: "multiple_choice",
        options: ["اللَّهُ سُبْحَانَهُ وَتَعَالَى", "الطَّبِيعَةُ", "الإِنْسَانُ", "المَلَائِكَةُ"],
        correct: 0
      },
      {
        id: 2,
        section: "تربية إسلامية",
        title: "2. السيرة النبوية",
        question: "مَنْ هُوَ نَبِيُّنَا؟",
        type: "multiple_choice",
        options: ["مُوسَى عَلَيْهِ السَّلَامُ", "مُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ", "عِيسَى عَلَيْهِ السَّلَامُ", "إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ"],
        correct: 1
      },
      {
        id: 3,
        section: "تربية إسلامية",
        title: "3. أركان الإسلام",
        question: "كَمْ عَدَدُ أَرْكَانِ الإِسْلَامِ؟",
        type: "multiple_choice",
        options: ["ثَلَاثَةُ أَرْكَانٍ", "أَرْبَعَةُ أَرْكَانٍ", "خَمْسَةُ أَرْكَانٍ", "سِتَّةُ أَرْكَانٍ"],
        correct: 2
      },
      {
        id: 4,
        section: "تربية إسلامية",
        title: "4. الآداب الإسلامية",
        question: "مَاذَا نَقُولُ قَبْلَ الأَكْلِ؟",
        type: "multiple_choice",
        options: ["الحَمْدُ لِلَّهِ", "بِسْمِ اللَّهِ", "سُبْحَانَ اللَّهِ", "أَسْتَغْفِرُ اللَّهَ"],
        correct: 1
      },
      {
        id: 5,
        section: "تربية إسلامية",
        title: "5. الصيام",
        question: "مَا اسْمُ الشَّهْرِ الَّذِي نَصُومُ فِيهِ؟",
        type: "multiple_choice",
        options: ["شَهْرُ شَعْبَانَ", "شَهْرُ رَجَبٍ", "شَهْرُ رَمَضَانَ", "شَهْرُ مُحَرَّمٍ"],
        correct: 2
      },

      {
        id: 6,
        section: "اللغة العربية",
        title: "1. الحرف الناقص",
        question: "مَا هُوَ الحَرْفُ النَّاقِصُ : ( مَـ ... ـرَسَةٌ ) ؟",
        type: "multiple_choice",
        options: ["ب", "د", "ل", "س"],
        correct: 1
      },
      {
        id: 7,
        section: "اللغة العربية",
        title: "2. ترتيب الحروف",
        question: "رَتِّبِ الحُرُوفَ لِتَكْوِينِ كَلِمَةٍ : ( ش - م - س ) ؟",
        type: "input_text",
        target: "شمس"
      },
      {
        id: 8,
        section: "اللغة العربية",
        title: "3. المفردات والحيوانات",
        question: "مَا اسْمُ صَغِيرِ الدَّجَاجَةِ؟",
        type: "multiple_choice",
        options: ["الحَمَلُ", "الكَتْكُوتُ", "الجَرْوُ", "العِجْلُ"],
        correct: 1
      },
      {
        id: 9,
        section: "اللغة العربية",
        title: "4. ألغاز الفواكه",
        question: "مَا اسْمُ الفَاكِهَةِ الَّتِي لَوْنُهَا أَصْفَرُ وَتُشْبِهُ الهِلَالَ؟",
        type: "multiple_choice",
        options: ["التُّفَّاحُ", "المَوْزُ", "البُرْتُقَالُ", "الفَرَاوِلَةُ"],
        correct: 1
      },
      {
        id: 10,
        section: "اللغة العربية",
        title: "5. أصوات الحيوانات",
        question: "مَا اسْمُ الحَيَوَانِ الَّذِي يَقُولُ مُوَاءً؟",
        type: "multiple_choice",
        options: ["الكَلْبُ", "القِطُّ", "الخَرُوفُ", "الحِصَانُ"],
        correct: 1
      }
    ],
    francaise: [
      {
        id: 1,
        title: "1. Reconnaissance des voyelles",
        question: "Quelle est la voyelle dans le mot 'CHAT' ?",
        type: "multiple_choice",
        options: ["C", "A", "H", "T"],
        correct: 1
      },
      {
        id: 2,
        title: "2. L'alphabet",
        question: "Quelle lettre vient après la lettre 'A' ?",
        type: "multiple_choice",
        options: ["B", "C", "D", "E"],
        correct: 0
      },
      {
        id: 3,
        title: "3. Compléter le mot",
        question: "Complète le mot 'M...ISON' avec la bonne lettre :",
        type: "input_text",
        target: "A"
      },
      {
        id: 4,
        title: "4. Vrai ou Faux",
        question: "Le mot 'École' commence par la lettre E.",
        type: "true_false",
        answer: true
      },
      {
        id: 5,
        title: "5. Les couleurs",
        question: "Comment dit-on 'أزرق' en français ?",
        type: "multiple_choice",
        options: ["Rouge", "Bleu", "Vert", "Jaune"],
        correct: 1
      }
    ],
    mathematique: [
      {
        id: 1,
        title: "1. Compter les objets",
        question: "Combien font 2 + 3 ?",
        type: "multiple_choice",
        options: ["4", "5", "6", "3"],
        correct: 1
      },
      {
        id: 2,
        title: "2. La suite logique",
        question: "Quel nombre vient après 7 ? (6, 7, ...)",
        type: "multiple_choice",
        options: ["8", "9", "5", "10"],
        correct: 0
      },
      {
        id: 3,
        title: "3. Soustraction simple",
        question: "Combien font 5 - 2 ?",
        type: "multiple_choice",
        options: ["2", "4", "3", "1"],
        correct: 2
      },
      {
        id: 4,
        title: "4. Vrai ou Faux",
        question: "Le nombre 10 est plus grand que le nombre 5.",
        type: "true_false",
        answer: true
      },
      {
        id: 5,
        title: "5. Formes géométriques",
        question: "Combien de côtés a un triangle ?",
        type: "multiple_choice",
        options: ["4", "3", "5", "2"],
        correct: 1
      }
    ]
  },
  

  ce1: {
    informatique: [], // En attente de tes exercices
   arabe: [
      
      {
        id: 1,
        section: "تربية إسلامية",
        title: "1. الصلوات المفروضة",
        question: "كَمْ عَدَدُ الصَّلَوَاتِ فِي اليَوْمِ؟",
        type: "multiple_choice",
        options: ["3 صَلَوَاتٍ", "4 صَلَوَاتٍ", "5 صَلَوَاتٍ", "6 صَلَوَاتٍ"],
        correct: 2
      },
      {
        id: 2,
        section: "تربية إسلامية",
        title: "2. السيرة النبوية",
        question: "مَنْ هُوَ خَاتَمُ الأَنْبِيَاءِ؟",
        type: "multiple_choice",
        options: ["إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ", "مُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ", "مُوسَى عَلَيْهِ السَّلَامُ", "نُوحٌ عَلَيْهِ السَّلَامُ"],
        correct: 1
      },
      {
        id: 3,
        section: "تربية إسلامية",
        title: "3. طفولة الرسول ﷺ",
        question: "مَا اسْمُ مُرْضِعَةِ الرَّسُولِ ﷺ؟",
        type: "multiple_choice",
        options: ["آمِنَةُ بِنْتُ وَهْبٍ", "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ", "حَلِيمَةُ السَّعْدِيَّةُ", "فَاطِمَةُ الزَّهْرَاءُ"],
        correct: 2
      },
      {
        id: 4,
        section: "تربية إسلامية",
        title: "4. القرآن الكريم",
        question: "مَا أَوَّلُ سُورَةٍ فِي القُرْآنِ الكَرِيمِ؟",
        type: "multiple_choice",
        options: ["سُورَةُ النَّاسِ", "سُورَةُ الفَاتِحَةِ", "سُورَةُ الإِخْلَاصِ", "سُورَةُ البَقَرَةِ"],
        correct: 1
      },
      {
        id: 5,
        section: "تربية إسلامية",
        title: "5. الطهارة والصلاة",
        question: "مَاذَا نَفْعَلُ قَبْلَ الصَّلَاةِ؟",
        type: "multiple_choice",
        options: ["نَأْكُلُ", "نَتَوَضَّأُ", "نَلْعَبُ", "نَنَامُ"],
        correct: 1
      },
      {
        id: 6,
        section: "تربية إسلامية",
        title: "6. الأعياد الإسلامية",
        question: "مَا عِيدُ المُسْلِمِينَ الَّذِي يَأْتِي بَعْدَ شَهْرِ رَمَضَانَ؟",
        type: "multiple_choice",
        options: ["عِيدُ الأَضْحَى", "عِيدُ الفِطْرِ", "عَاشُورَاءُ", "المَوْلِدُ النَّبَوِيُّ"],
        correct: 1
      },
      {
        id: 7,
        section: "تربية إسلامية",
        title: "7. الآداب الإسلامية",
        question: "مَا التَّحِيَّةُ الَّتِي نَسْتَعْمِلُهَا بَيْنَ المُسْلِمِينَ؟",
        type: "multiple_choice",
        options: ["صَبَاحُ الخَيْرِ", "السَّلَامُ عَلَيْكُمْ", "مَرْحَبًا", "إِلَى اللِّقَاءِ"],
        correct: 1
      },

    
      {
        id: 8,
        section: "اللغة العربية",
        title: "1. المفرد والجمع",
        question: "مَا مُفْرَدُ كَلِمَةِ ( أَقْلَامٌ )؟",
        type: "input_text",
        target: "قلم"
      },
      {
        id: 9,
        section: "اللغة العربية",
        title: "2. المفرد والجمع",
        question: "مَا جَمْعُ كَلِمَةِ ( كِتَابٌ )؟",
        type: "input_text",
        target: "كتب"
      },
      {
        id: 10,
        section: "اللغة العربية",
        title: "3. إتمام الجملة",
        question: "أَكْمِلِ الجُمْلَةَ : الشَّمْسُ تُشْرِقُ فِي ...",
        type: "multiple_choice",
        options: ["اللَّيْلِ", "الصَّبَاحِ", "المَسَاءِ", "الظَّلَامِ"],
        correct: 1
      },
      {
        id: 11,
        section: "اللغة العربية",
        title: "4. علامات الترقيم",
        question: "مَا عَلَامَةُ التَّرْقِيمِ الَّتِي نَضَعُهَا فِي نِهَايَةِ السُّؤَالِ؟",
        type: "multiple_choice",
        options: ["النُّقْطَةُ ( . )", "الفَاصِلَةُ ( ، )", "عَلَامَةُ الِاسْتِفْهَامِ ( ؟ )", "عَلَامَةُ التَّعَجُّبِ ( ! )"],
        correct: 2
      },
      {
        id: 12,
        section: "اللغة العربية",
        title: "5. التقطيع المقطعي",
        question: "كَمْ عَدَدُ مَقَاطِعِ كَلِمَةِ ( حَدِيقَةٌ )؟ [ حَـ / دِيـ / قَـ / ـةٌ ]",
        type: "multiple_choice",
        options: ["مَقْطَعَانِ (2)", "3 مَقَاطِعَ", "4 مَقَاطِعَ", "5 مَقَاطِعَ"],
        correct: 2
      },
      {
        id: 13,
        section: "اللغة العربية",
        title: "6. الأضداد",
        question: "مَا ضِدُّ كَلِمَةِ ( قَرِيبٌ )؟",
        type: "multiple_choice",
        options: ["صَغِيرٌ", "بَعِيدٌ", "طَوِيلٌ", "سَرِيعٌ"],
        correct: 1
      },
      {
        id: 14,
        section: "اللغة العربية",
        title: "7. التحويل للمؤنث",
        question: "حَوِّلْ لِلْمُؤَنَّثِ : ( هَذَا وَلَدٌ مُجْتَهِدٌ )",
        type: "multiple_choice",
        options: ["هَذِهِ بِنْتٌ مُجْتَهِدٌ", "هَذِهِ بِنْتٌ مُجْتَهِدَةٌ", "هَذَا بِنْتٌ مُجْتَهِدَةٌ", "هَؤُلَاءِ بِنْتٌ مُجْتَهِدَةٌ"],
        correct: 1
      }
    ],
    francaise: [
      {
        id: 1,
        title: "1. Le verbe dans la phrase",
        question: "Quel est le verbe dans la phrase : 'Le chat mange une souris.' ?",
        type: "multiple_choice",
        options: ["Le chat", "mange", "une", "souris"],
        correct: 1
      },
      {
        id: 2,
        title: "2. Masculin ou Féminin",
        question: "Quel article met-on devant le mot '... école' ?",
        type: "multiple_choice",
        options: ["Un", "Le", "Une", "Des"],
        correct: 2
      },
      {
        id: 3,
        title: "3. Conjugaison au présent",
        question: "Complète avec le verbe être : 'Nous ... en classe de CE1.'",
        type: "input_text",
        target: "sommes"
      },
      {
        id: 4,
        title: "4. La phrase",
        question: "Une phrase commence toujours par une majuscule et se termine par un point.",
        type: "true_false",
        answer: true
      },
      {
        id: 5,
        title: "5. Le pluriel des noms",
        question: "Comment écrit-on 'un cheval' au pluriel ?",
        type: "multiple_choice",
        options: ["Des chevals", "Des chevaux", "Des chevales", "Des chevaus"],
        correct: 1
      }
    ],
    mathematique: [
      {
        id: 1,
        title: "1. Addition avec retenue",
        question: "Combien font 28 + 15 ?",
        type: "multiple_choice",
        options: ["33", "43", "42", "53"],
        correct: 1
      },
      {
        id: 2,
        title: "2. Centaines, dizaines, unités",
        question: "Dans le nombre 147, quel est le chiffre des dizaines ?",
        type: "multiple_choice",
        options: ["1", "7", "4", "14"],
        correct: 2
      },
      {
        id: 3,
        title: "3. Multiplication (Table de 2)",
        question: "Calcule : 2 × 7 = ...",
        type: "input_text",
        target: "14"
      },
      {
        id: 4,
        title: "4. Comparaison des nombres",
        question: "Le nombre 120 est plus petit que 102.",
        type: "true_false",
        answer: false
      },
      {
        id: 5,
        title: "5. Géométrie",
        question: "Combien de côtés égaux possède un carré ?",
        type: "multiple_choice",
        options: ["2 côtés", "3 côtés", "4 côtés", "5 côtés"],
        correct: 2
      }
    ]
  },
  ce2: {
    informatique: [], // En attente de tes exercices
    arabe: [
     
      {
        id: 1,
        section: "تربية إسلامية",
        title: "1. طفولة الرسول ﷺ",
        question: "مَا اسْمُ مُرْضِعَةِ الرَّسُولِ ﷺ؟",
        type: "multiple_choice",
        options: ["آمِنَةُ بِنْتُ وَهْبٍ", "حَلِيمَةُ السَّعْدِيَّةُ", "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ", "عَائِشَةُ رَضِيَ اللَّهُ عَنْهَا"],
        correct: 1
      },
      {
        id: 2,
        section: "تربية إسلامية",
        title: "2. نسب الرسول ﷺ",
        question: "مَا اسْمُ وَالِدِ الرَّسُولِ ﷺ؟",
        type: "multiple_choice",
        options: ["أَبُو طَالِبٍ", "عَبْدُ المُطَّلِبِ", "عَبْدُ اللَّهِ", "حَمْزَةُ"],
        correct: 2
      },
      {
        id: 3,
        section: "تربية إسلامية",
        title: "3. الكتب السماوية",
        question: "مَا هُوَ كِتَابُ المُسْلِمِينَ؟",
        type: "multiple_choice",
        options: ["التَّوْرَاةُ", "الإِنْجِيلُ", "القُرْآنُ الكَرِيمُ", "الزَّبُورُ"],
        correct: 2
      },
      {
        id: 4,
        section: "تربية إسلامية",
        title: "4. القبلة",
        question: "مَا هِيَ قِبْلَةُ المُسْلِمِينَ؟",
        type: "multiple_choice",
        options: ["المَسْجِدُ النَّبَوِيُّ", "الكَعْبَةُ المُشَرَّفَةُ", "المَسْجِدُ الأَقْصَى", "جَبَلُ النُّورِ"],
        correct: 1
      },
      {
        id: 5,
        section: "تربية إسلامية",
        title: "5. سور القرآن الكريم",
        question: "مَا أَطْوَلُ سُورَةٍ فِي القُرْآنِ الكَرِيمِ؟",
        type: "multiple_choice",
        options: ["سُورَةُ الفَاتِحَةِ", "سُورَةُ آلِ عِمْرَانَ", "سُورَةُ البَقَرَةِ", "سُورَةُ النِّسَاءِ"],
        correct: 2
      },

     
      {
        id: 6,
        section: "اللغة العربية",
        title: "1. القيم الإنسانية",
        question: "مَا مَعْنَى الصَّدَاقَةِ؟",
        type: "multiple_choice",
        options: ["الخِصَامُ وَالغَضَبُ", "المَحَبَّةُ وَالتَّعَاوُنُ وَالوَفَاءُ", "اللَّعِبُ فَقَطْ", "الأَنَانِيَّةُ"],
        correct: 1
      },
      {
        id: 7,
        section: "اللغة العربية",
        title: "2. الأضداد",
        question: "مَا ضِدُّ كَلِمَةِ ( طَوِيلٌ )؟",
        type: "input_text",
        target: "قصير"
      },
      {
        id: 8,
        section: "اللغة العربية",
        title: "3. أقسام الكلمة",
        question: "مَا أَقْسَامُ الكَلِمَةِ فِي اللُّغَةِ العَرَبِيَّةِ؟",
        type: "multiple_choice",
        options: ["مَاضٍ - مُضَارِعٌ - أَمْرٌ", "اِسْمٌ - فِعْلٌ - حَرْفٌ", "مُفْرَدٌ - مُثَنًّى - جَمْعٌ", "فَتْحَةٌ - ضَمَّةٌ - كَسْرَةٌ"],
        correct: 1
      },
      {
        id: 9,
        section: "اللغة العربية",
        title: "4. أنواع الفعل",
        question: "مَا أَنْوَاعُ الفِعْلِ؟",
        type: "multiple_choice",
        options: ["اِسْمٌ - فِعْلٌ - حَرْفٌ", "مَاضٍ - مُضَارِعٌ - أَمْرٌ", "مُذَكَّرٌ - مُؤَنَّثٌ", "شَمْسِيَّةٌ - قَمَرِيَّةٌ"],
        correct: 1
      },
      {
        id: 10,
        section: "اللغة العربية",
        title: "5. الثقافة العامة",
        question: "كَمْ عَدَدُ فُصُولِ السَّنَةِ؟",
        type: "multiple_choice",
        options: ["فَصْلَانِ (2)", "3 فُصُولٍ", "4 فُصُولٍ", "5 فُصُولٍ"],
        correct: 2
      }
    ],
    francaise: [
      {
        id: 1,
        title: "1. Les types de phrases",
        question: "Quel type de phrase est : 'Quelle belle journée !' ?",
        type: "multiple_choice",
        options: ["Déclarative", "Interrogative", "Exclamative", "Impérative"],
        correct: 2
      },
      {
        id: 2,
        title: "2. Conjugaison au futur",
        question: "Complète au futur simple : 'Demain, tu ... tes devoirs.' (faire)",
        type: "input_text",
        target: "feras"
      },
      {
        id: 3,
        title: "3. Le groupe nominal",
        question: "Dans 'Le petit chien noir', quel est le nom noyau ?",
        type: "multiple_choice",
        options: ["petit", "chien", "noir", "Le"],
        correct: 1
      },
      {
        id: 4,
        title: "4. Orthographe (a / à)",
        question: "Dans la phrase 'Il va à l'école', 'à' est une préposition avec accent.",
        type: "true_false",
        answer: true
      },
      {
        id: 5,
        title: "5. Les synonymes",
        question: "Quel est le synonyme du mot 'joyeux' ?",
        type: "multiple_choice",
        options: ["Triste", "Heureux", "Fatigué", "Fâché"],
        correct: 1
      }
    ],
    mathematique: [
     
      {
        id: 1,
        section: "النشاط العلمي",
        lang: "ar",
        title: "1. الجهاز التنفسي",
        question: "مِمَّاذَا يَتَكَوَّنُ الجِهَازُ التَّنَفُّسِيُّ؟",
        type: "multiple_choice",
        options: [
          "الفَمُ وَالمَعِدَةُ وَالأَمْعَاءُ",
          "الأَنْفُ وَالحَنْجَرَةُ وَالرُّغَامَى وَالقَصَبَتَانِ الهَوَائِيَّتَانِ وَالرِّئَتَانِ",
          "القَلْبُ وَالشَّرَايِينُ وَالأَوْرِدَةُ",
          "الدِّمَاغُ وَالأَعْصَابُ"
        ],
        correct: 1
      },
      {
        id: 2,
        section: "النشاط العلمي",
        lang: "ar",
        title: "2. التغذية والطاقة",
        question: "كَيْفَ يَحْصُلُ جِسْمِي عَلَى الطَّاقَةِ؟",
        type: "multiple_choice",
        options: [
          "مِنَ النَّوْمِ فَقَطْ",
          "مِنَ الأَغْذِيَةِ الطَّاقِيَّةِ مِثْلَ السُّكَّرِيَّاتِ وَالدُّهْنِيَّاتِ",
          "مِنْ شُرْبِ المَاءِ فَقَطْ",
          "مِنْ مُشَاهَدَةِ التِّلْفَازِ"
        ],
        correct: 1
      },
      {
        id: 3,
        section: "النشاط العلمي",
        lang: "ar",
        title: "3. الصحة والتغذية",
        question: "مَا الأَغْذِيَةُ الَّتِي يُمْكِنُ أَنْ تَضُرَّ بِصِحَّتِي؟",
        type: "multiple_choice",
        options: [
          "الخُضَرُ وَالفَوَاكِهُ الطَّازَجَةُ",
          "الأَغْذِيَةُ المَقْلِيَّةُ وَالمَشْرُوبَاتُ الغَازِيَّةُ وَالحَلَوِيَّاتُ بِكَثْرَةٍ",
          "الحَلِيبُ وَمُشْتَقَّاتُهُ",
          "الحُبُوبُ وَالبُقُولِيَّاتُ"
        ],
        correct: 1
      },
      {
        id: 4,
        section: "النشاط العلمي",
        lang: "ar",
        title: "4. المحافظة على الجهاز التنفسي",
        question: "مَا تَأْثِيرُ التَّلَوُّثِ عَلَى جِهَازِي التَّنَفُّسِيِّ؟",
        type: "multiple_choice",
        options: [
          "يُقَوِّي الرِّئَتَيْنِ وَيُنَشِّطُهُمَا",
          "يُسَبِّبُ صُعُوبَةً فِي التَّنَفُّسِ وَأَمْرَاضًا مِثْلَ الرَّبْوِ وَالحَسَاسِيَّةِ",
          "يُسَاعِدُ عَلَى الهَضْمِ",
          "لَا يُؤَثِّرُ عَلَى الجِسْمِ أَبَدًا"
        ],
        correct: 1
      },
      {
        id: 5,
        section: "النشاط العلمي",
        lang: "ar",
        title: "5. الهواء وخاصياته",
        question: "اذْكُرْ بَعْضَ خَاصِّيَاتِ الهَوَاءِ؟",
        type: "multiple_choice",
        options: [
          "لَهُ لَوْنٌ أَزْرَقُ وَشَكْلٌ ثَابِتٌ",
          "غَيْرُ مَرْئِيٍّ، لَيْسَ لَهُ شَكْلٌ خَاصٌّ، قَابِلٌ لِلِانْضِغَاطِ وَالتَّوَسُّعِ",
          "ثَقِيلٌ جِدًّا وَلَا يَتَحَرَّكُ",
          "صَلْبٌ وَيُمْكِنُ مَسْكُهُ بِاليَدِ"
        ],
        correct: 1
      },

    
      {
        id: 6,
        section: "Mathématiques",
        lang: "fr",
        title: "1. Géométrie : Le rectangle",
        question: "Combien de côtés et combien d'angles possède un rectangle ?",
        type: "multiple_choice",
        options: [
          "3 côtés et 3 angles",
          "4 côtés et 4 angles",
          "5 côtés et 5 angles",
          "4 côtés et 2 angles"
        ],
        correct: 1
      },
      {
        id: 7,
        section: "Mathématiques",
        lang: "fr",
        title: "2. Mesures de longueur",
        question: "Combien vaut 1 mètre en centimètres (cm) ?",
        type: "input_text",
        target: "100"
      },
      {
        id: 8,
        section: "Mathématiques",
        lang: "fr",
        title: "3. Numération",
        question: "Quel est le nombre qui vient juste après 199 ?",
        type: "input_text",
        target: "200"
      },
      {
        id: 9,
        section: "Mathématiques",
        lang: "fr",
        title: "4. Les figures géométriques",
        question: "Quelle figure géométrique possède 3 côtés et 3 sommets ?",
        type: "multiple_choice",
        options: [
          "Le carré",
          "Le cercle",
          "Le triangle",
          "Le rectangle"
        ],
        correct: 2
      },
      {
        id: 10,
        section: "Mathématiques",
        lang: "fr",
        title: "5. Calcul mental : La moitié",
        question: "Quelle est la moitié du nombre 20 ?",
        type: "input_text",
        target: "10"
      }
    ]
  },
  cm1: {
    informatique: [], // En attente de tes exercices
    arabe: [
     
      {
        id: 1,
        section: "تربية إسلامية",
        lang: "ar",
        title: "1. أركان الإسلام",
        question: "مَا هِيَ أَرْكَانُ الإِسْلَامِ الخَمْسَةُ؟",
        type: "multiple_choice",
        options: [
          "الإِيمَانُ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَاليَوْمِ الآخِرِ",
          "الشَّهَادَتَانِ، إِقَامُ الصَّلَاةِ، إِيتَاءُ الزَّكَاةِ، صَوْمُ رَمَضَانَ، حَجُّ البَيْتِ",
          "الضُّحَى، الوِتْرُ، التَّرَاوِيحُ، الاسْتِسْقَاءُ، الكُسُوفُ",
          "الطَّهَارَةُ، الوُضُوءُ، التَّيَمُّمُ، الغُسْلُ، السِّوَاكُ"
        ],
        correct: 1
      },
      {
        id: 2,
        section: "تربية إسلامية",
        lang: "ar",
        title: "2. الوحي والقرآن",
        question: "مَنْ هُوَ المَلَكُ الَّذِي نَزَلَ بِالوَحْيِ عَلَى الرَّسُولِ ﷺ؟",
        type: "multiple_choice",
        options: [
          "مِيكَائِيلُ عَلَيْهِ السَّلَامُ",
          "إِسْرَافِيلُ عَلَيْهِ السَّلَامُ",
          "جِبْرِيلُ عَلَيْهِ السَّلَامُ",
          "مَالِكٌ عَلَيْهِ السَّلَامُ"
        ],
        correct: 2
      },
      {
        id: 3,
        section: "تربية إسلامية",
        lang: "ar",
        title: "3. الصلوات المفروضة",
        question: "كَمْ عَدَدُ الصَّلَوَاتِ المَفْرُوضَةِ فِي اليَوْمِ وَاللَّيْلَةِ؟",
        type: "multiple_choice",
        options: [
          "ثَلَاثُ صَلَوَاتٍ",
          "أَرْبَعُ صَلَوَاتٍ",
          "خَمْسُ صَلَوَاتٍ",
          "سَبْعُ صَلَوَاتٍ"
        ],
        correct: 2
      },
      {
        id: 4,
        section: "تربية إسلامية",
        lang: "ar",
        title: "4. السيرة النبوية",
        question: "أَيْنَ وُلِدَ الرَّسُولُ ﷺ؟",
        type: "multiple_choice",
        options: [
          "فِي المَدِينَةِ المُنَوَّرَةِ",
          "فِي مَكَّةَ المُكَرَّمَةِ",
          "فِي الطَّائِفِ",
          "فِي القُدْسِ الشَّرِيفِ"
        ],
        correct: 1
      },
      {
        id: 5,
        section: "تربية إسلامية",
        lang: "ar",
        title: "5. نسب الرسول ﷺ",
        question: "مَنْ هِيَ أُمُّ الرَّسُولِ ﷺ؟",
        type: "multiple_choice",
        options: [
          "حَلِيمَةُ السَّعْدِيَّةُ",
          "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ",
          "آمِنَةُ بِنْتُ وَهْبٍ",
          "فَاطِمَةُ بِنْتُ أَسَدٍ"
        ],
        correct: 2
      },

     
      {
        id: 6,
        section: "اللغة العربية",
        lang: "ar",
        title: "1. أقسام الكلمة",
        question: "مَا هِيَ أَقْسَامُ الكَلِمَةِ؟",
        type: "multiple_choice",
        options: [
          "مُبْتَدَأٌ - خَبَرٌ - فَاعِلٌ",
          "فِعْلٌ - حَرْفٌ - اِسْمٌ",
          "مَاضٍ - مُضَارِعٌ - أَمْرٌ",
          "مُفْرَدٌ - مُثَنًّى - جَمْعٌ"
        ],
        correct: 1
      },
      {
        id: 7,
        section: "اللغة العربية",
        lang: "ar",
        title: "2. الجملة الفعلية",
        question: "مَا هِيَ عَنَاصِرُ الجُمْلَةِ الفِعْلِيَّةِ؟",
        type: "multiple_choice",
        options: [
          "المُبْتَدَأُ وَالخَبَرُ",
          "الفِعْلُ - الفَاعِلُ - المَفْعُولُ بِهِ",
          "الجَارُّ وَالمَجْرُورُ",
          "الصفَةُ وَالمَوْصُوفُ"
        ],
        correct: 1
      },
      {
        id: 8,
        section: "اللغة العربية",
        lang: "ar",
        title: "3. الصرف والتحويل",
        question: "كَمْ عَدَدُ الحَرَكَاتِ فِي اللُّغَةِ العَرَبِيَّةِ؟",
        type: "multiple_choice",
        options: [
          "حَرَكَتَانِ (2)",
          "ثَلَاثُ حَرَكَاتٍ (الفَتْحَةُ، الضَّمَّةُ، الكَسْرَةُ)",
          "أَرْبَعُ حَرَكَاتٍ",
          "خَمْسُ حَرَكَاتٍ"
        ],
        correct: 1
      },
      {
        id: 9,
        section: "اللغة العربية",
        lang: "ar",
        title: "4. الإملاء والترقيم",
        question: "مَا هِيَ عَلَامَاتُ التَّرْقِيمِ؟",
        type: "multiple_choice",
        options: [
          "الأَلِفُ وَالبَاءُ وَالتَّاءُ",
          "النُّقْطَةُ - الفَاصِلَةُ - عَلَامَةُ التَّعَجُّبِ - عَلَامَةُ الِاسْتِفْهَامِ - النُّقْطَتَانِ",
          "الفَتْحَةُ وَالضَّمَّةُ وَالكَسْرَةُ",
          "الشَّدَّةُ وَالسُّكُونُ"
        ],
        correct: 1
      },
      {
        id: 10,
        section: "اللغة العربية",
        lang: "ar",
        title: "5. الجملة الاسمية",
        question: "مَا هِيَ عَنَاصِرُ الجُمْلَةِ الاسْمِيَّةِ؟",
        type: "multiple_choice",
        options: [
          "الفِعْلُ وَالفَاعِلُ",
          "المُبْتَدَأُ وَالخَبَرُ",
          "الحَرْفُ وَالاسْمُ",
          "الفِعْلُ وَالمَفْعُولُ بِهِ"
        ],
        correct: 1
      }
    ],
    francaise: [
      {
        id: 1,
        lang: "fr",
        title: "1. Les compléments du verbe",
        question: "Dans la phrase 'Les élèves lisent un livre.', quelle est la fonction de 'un livre' ?",
        type: "multiple_choice",
        options: ["Sujet", "Complément d'objet direct (COD)", "Complément circonstanciel", "Adjectif"],
        correct: 1
      },
      {
        id: 2,
        lang: "fr",
        title: "2. Conjugaison à l'imparfait",
        question: "Conjugue le verbe 'finir' à l'imparfait : 'Autrefois, nous ... nos devoirs tôt.'",
        type: "input_text",
        target: "finissions"
      },
      {
        id: 3,
        lang: "fr",
        title: "3. L'accord de l'adjectif",
        question: "Quelle est la bonne orthographe : 'Des fleurs ...' ?",
        type: "multiple_choice",
        options: ["blanches", "blanche", "blancs", "blanc"],
        correct: 0
      },
      {
        id: 4,
        lang: "fr",
        title: "4. Homophones grammaticaux (on / ont)",
        question: "Dans 'Les enfants ont fini de jouer', 'ont' est le verbe avoir conjugué.",
        type: "true_false",
        answer: true
      },
      {
        id: 5,
        lang: "fr",
        title: "5. Les familles de mots",
        question: "Quel mot n'appartient pas à la famille de 'terre' ?",
        type: "multiple_choice",
        options: ["Terrestre", "Enterrer", "Terrible", "Terrain"],
        correct: 2
      }
    ],
    mathematique: [
     
      {
        id: 1,
        section: "النشاط العلمي",
        lang: "ar",
        title: "1. الوقاية والصحة",
        question: "كَيْفَ يَنْتَقِلُ فَيْرُوسُ كُورُونَا المُسْتَجَدُّ؟",
        type: "multiple_choice",
        options: [
          "عَبْرَ الرَّذَاذِ التَّنَفُّسِيِّ (السُّعَالِ وَالعُطَاسِ) وَمُلَامَسَةِ الأَسْطُحِ المُلَوَّثَةِ",
          "عَبْرَ شُرْبِ المَاءِ النَّظِيفِ",
          "عَبْرَ أَشِعَّةِ الشَّمْسِ",
          "عَبْرَ القِرَاءَةِ وَالكِتَابَةِ"
        ],
        correct: 0
      },
      {
        id: 2,
        section: "النشاط العلمي",
        lang: "ar",
        title: "2. سبل الوقاية",
        question: "مَا هِيَ طُرُقُ الوِقَايَةِ مِنْ كُوفِيد-19؟",
        type: "multiple_choice",
        options: [
          "تَرْكُ النَّظَافَةِ وَمُصَافَحَةُ الجَمِيعِ",
          "غَسْلُ اليَدَيْنِ بِالصَّابُونِ، ارْتِدَاءُ الكِمَامَةِ، وَالتَّبَاعُدُ الجَسَدِيُّ",
          "البَقَاءُ فِي الأَمَاكِنِ المُزْدَحِمَةِ دُونَ كِمَامَةٍ",
          "عَدَمُ تَهْوِئَةِ المَنْزِلِ"
        ],
        correct: 1
      },
      {
        id: 3,
        section: "النشاط العلمي",
        lang: "ar",
        title: "3. الإنسان والبيئة",
        question: "كَيْفَ يُؤَثِّرُ الإِنْسَانُ عَلَى البِيئَةِ إِيجَابِيًّا؟",
        type: "multiple_choice",
        options: [
          "بِقَطْعِ الأَشْجَارِ وَتَلْوِيثِ الأَنْهَارِ",
          "بِغَرْسِ الأَشْجَارِ، إِعَادَةِ التَّدْوِيرِ، وَالمُحَافَظَةِ عَلَى المَاءِ وَالطَّاقَةِ",
          "بِرَمْيِ النُّفَايَاتِ فِي الغَابَاتِ",
          "بِحَرْقِ البْلَاسْتِيكِ"
        ],
        correct: 1
      },
      {
        id: 4,
        section: "النشاط العلمي",
        lang: "ar",
        title: "4. النظافة والتعقيم",
        question: "مَا هِيَ مُكَوِّنَاتُ مُعَقِّمِ اليَدَيْنِ؟",
        type: "multiple_choice",
        options: [
          "السُّكَّرُ وَالمِلْحُ وَالدَّقِيقُ",
          "الكُحُولُ الإِيثِيلِيُّ، المَاءُ المُقَطَّرُ، وَالجْلِيسِرِينُ",
          "الزَّيْتُ وَالخَلُّ",
          "الرَّمْلُ وَالطِّينُ"
        ],
        correct: 1
      },
      {
        id: 5,
        section: "النشاط العلمي",
        lang: "ar",
        title: "5. عالم النباتات",
        question: "مَا هِيَ أَجْزَاءُ النَّبْتَةِ الرَّئِيسِيَّةُ؟",
        type: "multiple_choice",
        options: [
          "الرَّأْسُ وَالجِذْعُ وَالأَطْرَافُ",
          "الجُذُورُ، السَّاقُ، الأَوْرَاقُ، وَالأَزْهَارُ",
          "الأَجْنِحَةُ وَالمِنْقَارُ",
          "الحَرَاشِفُ وَالزَّعَانِفُ"
        ],
        correct: 1
      },

      
      {
        id: 6,
        section: "Mathématiques",
        lang: "fr",
        title: "1. Périmètre d'une figure",
        question: "Quelle est la formule pour calculer le périmètre d'un carré ?",
        type: "multiple_choice",
        options: [
          "Côté + Côté",
          "Côté × 4",
          "Côté × Côté",
          "(Longueur + largeur) × 2"
        ],
        correct: 1
      },
      {
        id: 7,
        section: "Mathématiques",
        lang: "fr",
        title: "2. Mesures de masse",
        question: "Combien vaut 1 kilogramme (kg) en grammes (g) ?",
        type: "input_text",
        target: "1000"
      },
      {
        id: 8,
        section: "Mathématiques",
        lang: "fr",
        title: "3. Les quadrilatères",
        question: "Quelle figure géométrique possède 4 côtés égaux mais n'a pas d'angle droit ?",
        type: "multiple_choice",
        options: [
          "Le carré",
          "Le rectangle",
          "Le losange",
          "Le triangle"
        ],
        correct: 2
      },
      {
        id: 9,
        section: "Mathématiques",
        lang: "fr",
        title: "4. Mesures de durée",
        question: "Combien y a-t-il de minutes dans 2 heures ?",
        type: "input_text",
        target: "120"
      },
      {
        id: 10,
        section: "Mathématiques",
        lang: "fr",
        title: "5. Problème : La monnaie",
        question: "Karim a 5 billets de 20 dirhams. Combien de dirhams a-t-il au total ?",
        type: "input_text",
        target: "100"
      }
    ]
  }
  
};
