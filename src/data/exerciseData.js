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
        type: "input_text",
        //options: ["اللَّهُ سُبْحَانَهُ وَتَعَالَى", "الطَّبِيعَةُ", "الإِنْسَانُ", "المَلَائِكَةُ"],
        target: "الله سبحانه و تعالى"
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
    informatique: [
  {
    id: 1,
    title: "1. Puzzle de l'imprimante (6 pièces)",
    description: "Glisse et assemble les 6 morceaux pour reconstituer l'image de l'imprimante !",
    type: "puzzle_6",
    imageUrl: "/printer.webp" 
  },
  {
    id: 2,
    title: "2. Grille de mots cachés (Périphériques)",
    description: "Retrouve et entoure les mots cachés dans la grille (CLAVIER, SOURIS, MODEM, ECRAN, WEBCAM...).",
    type: "word_search",
    grid: [
      ["A", "W", "E", "B", "C", "A", "M"],
      ["I", "V", "C", "T", "B", "J", "K"],
      ["D", "S", "R", "Q", "H", "X", "L"],
      ["C", "L", "A", "V", "I", "E", "R"],
      ["Z", "G", "N", "F", "Y", "P", "M"],
      ["D", "A", "M", "O", "D", "E", "M"],
      ["X", "S", "O", "U", "R", "I", "S"]
    ],
    wordsToFind: ["CLAVIER", "SOURIS", "MODEM", "WEBCAM"]
  },
  {
    id: 3,
    title: "3. Copier un texte (Traitement de texte)",
    description: "Recopie le texte ci-dessous exactement sans faire de fautes dans le cadre de saisie.",
    type: "text_copy",
    targetText: "L'ordinateur est une machine électronique utile pour apprendre et travailler."
  },
  {
    id: 4,
    title: "4. Le Bureau et le Menu Démarrer",
    description: "Clique sur l'élément qui permet d'ouvrir le menu principal de l'ordinateur.",
    type: "click_target",
    targetWord: "Menu Démarrer",
    items: ["Icône Corbeille", "Menu Démarrer", "Câble réseau", "Prise secteur"]
  },
  {
    id: 5,
    title: "5. Périphérique Interne ou Externe ?",
    description: "Classe ces éléments en choisissant s'ils sont à l'intérieur ou à l'extérieur de l'unité centrale.",
    type: "categorization",
    items: [
      { name: "Le disque dur (interne)", category: "Interne" },
      { name: "La souris", category: "Externe" },
      { name: "Le processeur", category: "Interne" },
      { name: "L'écran", category: "Externe" }
    ]
  }
], 
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
        title: "3. طفولة الرسول ",
        question: "مَا اسْمُ مُرْضِعَةِ الرَّسُولِ  ؟",
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
        question: "كَمْ عَدَدُ مَقَاطِعِ كَلِمَةِ ( حَدِيقَةٌ )؟ ",
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
        options: ["Un", "Le", "L'", "Des"],
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
        title: "1. طفولة الرسول ",
        question: "مَا اسْمُ مُرْضِعَةِ الرَّسُولِ  ؟",
        type: "multiple_choice",
        options: ["آمِنَةُ بِنْتُ وَهْبٍ", "حَلِيمَةُ السَّعْدِيَّةُ", "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ", "عَائِشَةُ رَضِيَ اللَّهُ عَنْهَا"],
        correct: 1
      },
      {
        id: 2,
        section: "تربية إسلامية",
        title: "2. نسب الرسول ",
        question: "مَا اسْمُ وَالِدِ الرَّسُولِ  ؟",
        type: "multiple_choice",
        options: ["أَبُو طَالِبٍ", "عَبْدُ المُطَّلِبِ", "عَبْدُ اللَّهِ", "حَمْزَةُ"],
        correct: 2
      },
      {
        id: 3,
        section: "تربية إسلامية",
        title: "3. الكتب السماوية",
        question: "مَا هُوَ كِتَابُ المُسْلِمِينَ؟",
        type: "input_text",
        //options: ["التَّوْرَاةُ", "الإِنْجِيلُ", "القُرْآنُ الكَرِيمُ", "الزَّبُورُ"],
        target: "القران الكريم"
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
        section: "Grammaire",
        lang: "fr",
        title: "1. Nom et adjectif",
        question: "Dans la phrase « Le lion est fort », quels sont le nom et l'adjectif ?",
        type: "multiple_choice",
        options: [
          "Nom : lion / Adjectif : fort",
          "Nom : fort / Adjectif : lion",
          "Nom : est / Adjectif : lion",
          "Nom : lion / Adjectif : est"
        ],
        correct: 0
      },
      {
        id: 2,
        section: "Grammaire",
        lang: "fr",
        title: "2. Les articles",
        question: "Complète avec le bon article : « ... éléphant est grand. »",
        type: "multiple_choice",
        options: ["L'", "La", "Les", "Une"],
        correct: 0
      },
      {
        id: 3,
        section: "Grammaire",
        lang: "fr",
        title: "3. La forme négative",
        question: "Mets la phrase « Le lion dort. » à la forme négative :",
        type: "input_text",
        target: "Le lion ne dort pas"
      },
      {
        id: 4,
        section: "Grammaire",
        lang: "fr",
        title: "4. Le sujet",
        question: "Dans la phrase « Les oiseaux chantent. », quel est le sujet ?",
        type: "multiple_choice",
        options: ["Les oiseaux", "chantent", "Les", "oiseaux chantent"],
        correct: 0
      },
      {
        id: 5,
        section: "Conjugaison",
        lang: "fr",
        title: "1. Présent de l'indicatif",
        question: "Conjugue au présent : « Le chat (manger) du poisson. »",
        type: "input_text",
        target: "mange"
      },
      {
        id: 6,
        section: "Conjugaison",
        lang: "fr",
        title: "2. Trouver le verbe",
        question: "Quel est le verbe dans la phrase « Le singe mange une banane. » ?",
        type: "multiple_choice",
        options: ["Le singe", "mange", "une banane", "singe"],
        correct: 1
      },
      {
        id: 7,
        section: "Conjugaison",
        lang: "fr",
        title: "3. Conjuguer un verbe du 2e groupe",
        question: "Conjugue au présent : « Le lion (rugir) très fort. »",
        type: "input_text",
        target: "rugit"
      },
      {
        id: 8,
        section: "Orthographe",
        lang: "fr",
        title: "1. Homophones (a / à)",
        question: "Complète avec a ou à : « Le chien va ... la maison. »",
        type: "multiple_choice",
        options: ["à", "a"],
        correct: 0
      },
      {
        id: 9,
        section: "Orthographe",
        lang: "fr",
        title: "2. Homophones (et / est)",
        question: "Complète avec et / est : « Le lion ... fort ... courageux. »",
        type: "multiple_choice",
        options: [
          "est / et",
          "et / est",
          "est / est",
          "et / et"
        ],
        correct: 0
      },
      {
        id: 10,
        section: "Orthographe",
        lang: "fr",
        title: "3. Homophones (son / sont)",
        question: "Complète avec son ou sont : « Les animaux ... dans la savane. »",
        type: "multiple_choice",
        options: ["sont", "son"],
        correct: 0
      },
      {
        id: 11,
        section: "Orthographe",
        lang: "fr",
        title: "4. Accord au pluriel",
        question: "Mets la phrase au pluriel : « Le chat mange. »",
        type: "input_text",
        target: "Les chats mangent"
      },
      {
        id: 12,
        section: "Lexique",
        lang: "fr",
        title: "1. Vocabulaire des animaux",
        question: "« C'est le roi des animaux, c'est ... ? »",
        type: "multiple_choice",
        options: ["Le lion", "Le chat", "Le singe", "L'oiseau"],
        correct: 0
      },
      {
        id: 13,
        section: "Lexique",
        lang: "fr",
        title: "2. Les contraires",
        question: "Donne le contraire de « grand » :",
        type: "input_text",
        target: "petit"
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
    informatique: [
      {
        id: 1,
        section: "Volet 1 : Découvrir l'ordinateur",
        title: "1. Périphérique d'entrée ou de sortie ?",
        description: "Classe chaque matériel selon son rôle : Entrée (envoyer des infos) ou Sortie (afficher/produire).",
        type: "categorization",
        items: [
          { name: "Clavier", category: "Entrée" },
          { name: "Écran", category: "Sortie" },
          { name: "Souris", category: "Entrée" },
          { name: "Imprimante", category: "Sortie" }
        ]
      },
      {
        id: 2,
        section: "Volet 2 : Comment utiliser mon ordinateur ?",
        title: "2. Fichiers, dossiers et logiciels",
        description: "Clique sur l'élément qui sert à ranger plusieurs fichiers ensemble.",
        type: "click_target",
        targetWord: "Un dossier",
        items: ["Un dossier", "Un moteur de recherche", "Une police d'écriture", "Un clic droit"]
      },
      {
        id: 3,
        section: "Volet 3 : Le traitement de texte",
        title: "3. Insérer un objet dans un document",
        description: "Recopie exactement cette phrase sur l'insertion d'un objet dans un texte :",
        type: "text_copy",
        targetText: "J'insère une image dans mon document pour illustrer mon texte."
      },
      {
        id: 4,
        section: "Volet 4 : S'informer et communiquer",
        title: "4. Bien utiliser un moteur de recherche",
        description: "Clique sur les bons mots-clés pour chercher un exposé sur les planètes du système solaire.",
        type: "click_target",
        targetWord: "planètes système solaire",
        items: ["planètes système solaire", "azertyuiop", "mot de passe wifi", "corbeille windows"]
      },
      {
        id: 5,
        section: "Volet 5 : Programmer avec l'ordinateur",
        title: "5. Défi Logo : tracer un carré",
        description: "Choisis la suite d'instructions qui permet de répéter 4 fois un mouvement et un quart de tour (90°).",
        type: "click_target",
        targetWord: "RÉPÈTE 4 [ AVANCE 50 DROITE 90 ]",
        items: [
          "RÉPÈTE 4 [ AVANCE 50 DROITE 90 ]",
          "RÉPÈTE 2 [ RECULE 10 ]",
          "EFFACE TOUT",
          "SAUVEGARDER FICHIER"
        ]
      }
    ],
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
        question: "أَيْنَ وُلِدَ الرَّسُولُ  ؟",
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
        title: "5. نسب الرسول ",
        question: "مَنْ هِيَ أُمُّ الرَّسُولِ  ؟",
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
  },
  cm2: {
    informatique: [], // Exclus comme demandé
    arabe: [
      {
        id: 1,
        section: "تربية إسلامية",
        lang: "ar",
        title: "1. العقيدة",
        question: "مَا مَعْنَى الإِيمَانِ بِالكُتُبِ السَّمَاوِيَّةِ؟",
        type: "multiple_choice",
        options: [
          "قِرَاءَتُهَا فَقَطْ دُونَ العَمَلِ بِهَا",
          "التَّصْدِيقُ الجَازِمُ بِأَنَّ اللَّهَ أَنْزَلَهَا عَلَى رُسُلِهِ وَأَنَّ القُرْآنَ خَاتَمُهَا وَمُهَيْمِنٌ عَلَيْهَا",
          "حِفْظُ بَعْضِ آيَاتِهَا فَقَطْ",
          "مَعْرِفَةُ أَسْمَائِهَا دُونَ إِيمَانٍ"
        ],
        correct: 1
      },
      {
        id: 2,
        section: "تربية إسلامية",
        lang: "ar",
        title: "2. العبادات",
        question: "مَا حُكْمُ الزَّكَاةِ فِي الإِسْلَامِ؟",
        type: "multiple_choice",
        options: [
          "سُنَّةٌ مُؤَكَّدَةٌ",
          "فَرْضٌ وَرُكْنٌ مِنْ أَرْكَانِ الإِسْلَامِ عَلَى مَنْ مَلَكَ النِّصَابَ وَحَالَ عَلَيْهِ الحَوْلُ",
          "مُسْتَحَبَّةٌ",
          "مُبَاحَةٌ"
        ],
        correct: 1
      },
      {
        id: 3,
        section: "تربية إسلامية",
        lang: "ar",
        title: "3. السيرة النبوية",
        question: "مَا اسْمُ المَدِينَةِ الَّتِي هَاجَرَ إِلَيْهَا الرَّسُولُ  ؟",
        type: "multiple_choice",
        options: [
          "مَكَّةَ المُكَرَّمَةِ",
          "يَثْرِبَ (المَدِينَةَ المُنَوَّرَةَ)",
          "الطَّائِفِ",
          "بَيْتِ المَقْدِسِ"
        ],
        correct: 1
      },
      {
        id: 4,
        section: "تربية إسلامية",
        lang: "ar",
        title: "4. القرآن الكريم",
        question: "مَا أَعْظَمُ آيَةٍ فِي القُرْآنِ الكَرِيمِ؟",
        type: "multiple_choice",
        options: [
          "آيَةُ الدَّيْنِ",
          "آيَةُ الكُرْسِيِّ",
          "آيَةُ النُّورِ",
          "آيَةُ التَّطْهِيرِ"
        ],
        correct: 1
      },
      {
        id: 5,
        section: "تربية إسلامية",
        lang: "ar",
        title: "5. القيم والأخلاق",
        question: "مَا ضِدُّ صِفَةِ ( الأَمَانَةِ )؟",
        type: "input_text",
        target: "الخيانة"
      },

      {
        id: 6,
        section: "اللغة العربية",
        lang: "ar",
        title: "1. النحو والإعراب",
        question: "مَا إِعْرَابُ ( الكِتَابُ ) فِي جُمْلَةِ : ( الكِتَابُ مُفِيدٌ )؟",
        type: "multiple_choice",
        options: [
          "فَاعِلٌ مَرْفُوعٌ",
          "مُبْتَدَأٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ الظَّاهِرَةُ",
          "مَفْعُولٌ بِهِ مَنْصُوبٌ",
          "اسْمٌ مَجْرُورٌ"
        ],
        correct: 1
      },
      {
        id: 7,
        section: "اللغة العربية",
        lang: "ar",
        title: "2. النواسخ الفعلية",
        question: "مَا عَمَلُ ( كَانَ ) وَأَخَوَاتِهَا؟",
        type: "multiple_choice",
        options: [
          "تَرْفَعُ المُبْتَدَأَ وَتَنْصِبُ الخَبَرَ",
          "تَنْصِبُ المُبْتَدَأَ وَتَرْفَعُ الخَبَرَ",
          "تَجْزِمُ الفِعْلَ المُضَارِعَ",
          "تَجُرُّ الِاسْمَ"
        ],
        correct: 0
      },
      {
        id: 8,
        section: "اللغة العربية",
        lang: "ar",
        title: "3. الصرف والتحويل",
        question: "مَا جَمْعُ التَّكْسِيرِ لِكَلِمَةِ ( تِلْمِيذٌ )؟",
        type: "input_text",
        target: "تلاميذ"
      },
      {
        id: 9,
        section: "اللغة العربية",
        lang: "ar",
        title: "4. الإملاء والهمزات",
        question: "لِمَاذَا كُتِبَتِ الهَمْزَةُ عَلَى الأَلِفِ فِي كَلِمَةِ ( سَأَلَ )؟",
        type: "multiple_choice",
        options: [
          "لِأَنَّهَا مَفْتُوحَةٌ وَمَا قَبْلَهَا مَفْتُوحٌ",
          "لِأَنَّهَا سَاكِنَةٌ",
          "لِأَنَّهَا مَكْسُورَةٌ",
          "لِأَنَّ مَا قَبْلَهَا مَضْمُومٌ"
        ],
        correct: 0
      },
      {
        id: 10,
        section: "اللغة العربية",
        lang: "ar",
        title: "5. التعبير والأساليب",
        question: "حَوِّلِ الجُمْلَةَ إِلَى المُضَارِعِ : ( كَتَبَ التِّلْمِيذُ الدَّرْسَ )",
        type: "multiple_choice",
        options: [
          "يَكْتُبُ التِّلْمِيذُ الدَّرْسَ",
          "اُكْتُبِ الدَّرْسَ",
          "التِّلْمِيذُ كَاتِبٌ",
          "لَمْ يَكْتُبِ التِّلْمِيذُ"
        ],
        correct: 0
      }
    ],
    francaise: [
      {
        id: 1,
        lang: "fr",
        title: "1. Les propositions et la phrase complexe",
        question: "Dans 'Je révise mes leçons parce que j'ai un contrôle.', comment s'appelle la proposition 'parce que j'ai un contrôle' ?",
        type: "multiple_choice",
        options: [
          "Proposition subordonnée relative",
          "Proposition subordonnée conjonctive circonstancielle de cause",
          "Proposition indépendante coordonnée",
          "Complément d'objet indirect"
        ],
        correct: 1
      },
      {
        id: 2,
        lang: "fr",
        title: "2. Conjugaison au passé composé",
        question: "Conjugue le verbe 'aller' au passé composé à la 1re personne du pluriel : 'Nous ... au collège.'",
        type: "input_text",
        target: "sommes allés"
      },
      {
        id: 3,
        lang: "fr",
        title: "3. L'accord du participe passé",
        question: "Quelle est la bonne orthographe : 'Les lettres que j'ai ... sont prêtes.' ?",
        type: "multiple_choice",
        options: ["écrit", "écrits", "écrite", "écrites"],
        correct: 3
      },
      {
        id: 4,
        lang: "fr",
        title: "4. Homophones grammaticaux (leur / leurs)",
        question: "Devant un nom au pluriel comme 'leurs cahiers', 'leurs' s'écrit avec un 's'.",
        type: "true_false",
        answer: true
      },
      {
        id: 5,
        lang: "fr",
        title: "5. Vocabulaire : Les suffixes",
        question: "Quel suffixe permet de former un nom d'action à partir du verbe 'organiser' ?",
        type: "multiple_choice",
        options: ["-able", "-ation", "-eux", "-ette"],
        correct: 1
      }
    ],
    mathematique: [
      {
        id: 1,
        section: "النشاط العلمي",
        lang: "ar",
        title: "1. الجهاز العصبي والحواس",
        question: "مَا دَوْرُ الدِّمَاغِ فِي الجِهَازِ العَصَبِيِّ؟",
        type: "multiple_choice",
        options: [
          "ضَخُّ الدَّمِ إِلَى الأَعْضَاءِ",
          "مُعَالَجَةُ المَعْلُومَاتِ الحِسِّيَّةِ وَإِصْدَارُ الأَوَامِرِ الحَرَكِيَّةِ",
          "هَضْمُ الأَغْذِيَةِ",
          "تَبَادُلُ الغَازَاتِ"
        ],
        correct: 1
      },
      {
        id: 2,
        section: "النشاط العلمي",
        lang: "ar",
        title: "2. الدارة الكهربائية البسيطة",
        question: "مَا هِيَ العَنَاصِرُ الأَسَاسِيَّةُ لِدَارَةٍ كَهْرَبَائِيَّةٍ بَسِيطَةٍ؟",
        type: "multiple_choice",
        options: [
          "عَمُودٌ كَهْرَبَائِيٌّ، مِصْبَاحٌ، أَسْلَاكُ تَوْصِيلٍ، وَقَاطِعُ التَّيَّارِ",
          "مِصْبَاحٌ فَقَطْ",
          "مِغْنَاطِيسٌ وَمَاءٌ",
          "بُوصَلَةٌ وَمِرْآةٌ"
        ],
        correct: 0
      },
      {
        id: 3,
        section: "النشاط العلمي",
        lang: "ar",
        title: "3. المواد الموصلة والعازلة",
        question: "أَيُّ المَوَادِّ التَّالِيَةِ يُعَدُّ مُوَصِّلًا جَيِّدًا لِلكَهْرَبَاءِ؟",
        type: "multiple_choice",
        options: [
          "البْلَاسْتِيكُ",
          "الخَشَبُ الجَافُّ",
          "النُّحَاسُ",
          "الزُّجَاجُ"
        ],
        correct: 2
      },
      {
        id: 4,
        section: "النشاط العلمي",
        lang: "ar",
        title: "4. الأرض والمجموعة الشمسية",
        question: "مَا الظَّاهِرَةُ النَّاتِجَةُ عَنْ دَوَرَانِ الأَرْضِ حَوْلَ نَفْسِهَا؟",
        type: "multiple_choice",
        options: [
          "تَعَاقُبُ الفُصُولِ الأَرْبَعَةِ",
          "تَعَاقُبُ اللَّيْلِ وَالنَّهَارِ",
          "خُسُوفُ القَمَرِ فَقَطْ",
          "تَغَيُّرُ الجَاذِبِيَّةِ"
        ],
        correct: 1
      },
      {
        id: 5,
        section: "النشاط العلمي",
        lang: "ar",
        title: "5. التغذية والهضم",
        question: "أَيْنَ تَتِمُّ عَمَلِيَّةُ الهَضْمِ بِشَكْلٍ رَئِيسِيٍّ وَيُمْتَصُّ القُوتُ إِلَى الدَّمِ؟",
        type: "multiple_choice",
        options: [
          "فِي المِعَى الدَّقِيقِ",
          "فِي المَرِيءِ",
          "فِي القَلْبِ",
          "فِي الرِّئَةِ"
        ],
        correct: 0
      },

      {
        id: 6,
        section: "Mathématiques",
        lang: "fr",
        title: "1. Fractions et nombres décimaux",
        question: "Quelle est l'écriture décimale de la fraction 3 / 4 ?",
        type: "multiple_choice",
        options: ["0,25", "0,5", "0,75", "1,25"],
        correct: 2
      },
      {
        id: 7,
        section: "Mathématiques",
        lang: "fr",
        title: "2. Géométrie : Aire du rectangle",
        question: "Calcule l'aire (en cm²) d'un rectangle de longueur 8 cm et de largeur 5 cm.",
        type: "input_text",
        target: "40"
      },
      {
        id: 8,
        section: "Mathématiques",
        lang: "fr",
        title: "3. Proportionnalité",
        question: "Si 3 cahiers coûtent 24 dirhams, combien coûtent 6 cahiers au même prix ?",
        type: "input_text",
        target: "48"
      },
      {
        id: 9,
        section: "Mathématiques",
        lang: "fr",
        title: "4. Conversion d'unités",
        question: "Combien vaut 2,5 mètres en centimètres ?",
        type: "input_text",
        target: "250"
      },
      {
        id: 10,
        section: "Mathématiques",
        lang: "fr",
        title: "5. Angles géométriques",
        question: "Quel type d'angle mesure exactement 90° ?",
        type: "multiple_choice",
        options: [
          "Un angle aigu",
          "Un angle obtus",
          "Un angle droit",
          "Un angle plat"
        ],
        correct: 2
      }
    ]
  },
  sixieme: {
    informatique: [],
    arabe: [
      {
        id: 1,
        section: "تربية إسلامية",
        lang: "ar",
        title: "1. العقيدة",
        question: "مَا أَثَرُ الإِيمَانِ بِالقَدَرِ خَيْرِهِ وَشَرِّهِ عَلَى سُلُوكِ المُسْلِمِ؟",
        type: "multiple_choice",
        options: [
          "الاسْتِسْلَامُ لِلكَسَلِ وَتَرْكُ الأَخْذِ بِالأَسْبَابِ",
          "طُمَأْنِينَةُ القَلْبِ، الصِّبْرُ عِنْدَ الشَّدَائِدِ، وَالحِرْصُ عَلَى العَمَلِ الجَادِّ",
          "التَّوَاكُلُ وَإِلْقَاءُ اللَّوْمِ عَلَى الآخَرِينَ",
          "اليَأْسُ عِنْدَ التَّعَثُّرِ"
        ],
        correct: 1
      },
      {
        id: 2,
        section: "تربية إسلامية",
        lang: "ar",
        title: "2. العبادات",
        question: "مَا الفَرْقُ بَيْنَ الصَّلَاةِ المَفْرُوضَةِ وَصَلَاةِ التَّطَوُّعِ؟",
        type: "multiple_choice",
        options: [
          "الفَرْضُ وَاجِبٌ يَأْثَمُ تَارِكُهُ، وَالتَّطَوُّعُ نَافِلَةٌ تَزِيدُ الأَجْرَ وَتُكَمِّلُ النَّقْصَ",
          "التَّطَوُّعُ أَوْجَبُ مِنَ الفَرْضِ",
          "لَا فَرْقَ بَيْنَهُمَا فِي الحُكْمِ",
          "التَّطَوُّعُ يُسْقِطُ الفَرْضَ"
        ],
        correct: 0
      },
      {
        id: 3,
        section: "تربية إسلامية",
        lang: "ar",
        title: "3. السيرة النبوية",
        question: "مَا أَهَمِّيَّةُ صُلْحِ الحُدَيْبِيَةِ فِي تَارِيخِ الدَّعْوَةِ الإِسْلَامِيَّةِ؟",
        type: "multiple_choice",
        options: [
          "إِنْهَاءُ الدَّعْوَةِ فِي مَكَّةَ",
          "تَرْسِيخُ السِّلْمِ وَفَتْحُ مَجَالِ التَّوَاصُلِ وَانْتِشَارِ الإِسْلَامِ بِصُورَةٍ أَوْسَعَ",
          "إِلْغَاءُ الحَجِّ إِلَى الأَبَدِ",
          "تَأْجِيلُ الهِجْرَةِ الأُولَى"
        ],
        correct: 1
      },
      {
        id: 4,
        section: "تربية إسلامية",
        lang: "ar",
        title: "4. القرآن الكريم",
        question: "مَا مَعْنَى كَلِمَةِ ( التَّقْوَى ) فِي القُرْآنِ الكَرِيمِ؟",
        type: "multiple_choice",
        options: [
          "مُرَاقَبَةُ اللَّهِ فِي السِّرِّ وَالعَلَنِ وَامْتِثَالُ أَوَامِرِهِ وَاجْتِنَابُ نَوَاهِيهِ",
          "كَثْرَةُ الكَلَامِ فَقَطْ",
          "الاعْتِزَالُ التَّامُّ عَنِ النَّاسِ",
          "إِهْمَالُ حُقُوقِ الغَيْرِ"
        ],
        correct: 0
      },
      {
        id: 5,
        section: "تربية إسلامية",
        lang: "ar",
        title: "5. القيم المدنية والبيئية",
        question: "مَا ضِدُّ كَلِمَةِ ( التَّسَامُحِ )؟",
        type: "input_text",
        target: "التعصب"
      },

      {
        id: 6,
        section: "اللغة العربية",
        lang: "ar",
        title: "1. النحو والإعراب",
        question: "مَا إِعْرَابُ ( المُجْتَهِدُونَ ) فِي جُمْلَةِ : ( نَجَحَ المُجْتَهِدُونَ )؟",
        type: "multiple_choice",
        options: [
          "مُبْتَدَأٌ مَرْفُوعٌ بِالضَّمَّةِ",
          "فَاعِلٌ مَرْفُوعٌ وَعَلَامَةُ رَفْعِهِ الوَاوُ لِأَنَّهُ جَمْعُ مُذَكَّرٍ سَالِمٌ",
          "مَفْعُولٌ بِهِ مَنْصُوبٌ بِاليَاءِ",
          "نَعْتٌ مَجْرُورٌ"
        ],
        correct: 1
      },
      {
        id: 7,
        section: "اللغة العربية",
        lang: "ar",
        title: "2. الأفعال الخمسة ونصب المضارع",
        question: "مَا عَلَامَةُ جَزْمِ الفِعْلِ المُضَارِعِ إِذَا كَانَ مِنَ الأَفْعَالِ الخَمْسَةِ؟",
        type: "multiple_choice",
        options: [
          "السُّكُونُ الظَّاهِرُ",
          "حَذْفُ النُّونِ",
          "حَذْفُ حَرْفِ العِلَّةِ",
          "الفَتْحَةُ"
        ],
        correct: 1
      },
      {
        id: 8,
        section: "اللغة العربية",
        lang: "ar",
        title: "3. الصرف والتحويل",
        question: "مَا اسْمُ الفَاعِلِ مِنَ الفِعْلِ الثُّلَاثِيِّ ( كَتَبَ )؟",
        type: "input_text",
        target: "كاتب"
      },
      {
        id: 9,
        section: "اللغة العربية",
        lang: "ar",
        title: "4. الإملاء والهمزات",
        question: "لِمَاذَا كُتِبَتِ الهَمْزَةُ عَلَى اليَاءِ فِي كَلِمَةِ ( بِئْرٌ )؟",
        type: "multiple_choice",
        options: [
          "لِأَنَّهَا سَاكِنَةٌ وَمَا قَبْلَهَا مَكْسُورٌ (وَالكَسْرَةُ أَقْوَى مِنَ السُّكُونِ)",
          "لِأَنَّهَا مَفْتُوحَةٌ وَمَا قَبْلَهَا مَضْمُومٌ",
          "لِأَنَّهَا مَضْمُومَةٌ وَمَا قَبْلَهَا مَفْتُوحٌ",
          "لِأَنَّهَا مُتَطَرِّفَةٌ بَعْدَ مَدٍّ"
        ],
        correct: 0
      },
      {
        id: 10,
        section: "اللغة العربية",
        lang: "ar",
        title: "5. التراكيب والأساليب",
        question: "حَوِّلِ الجُمْلَةَ إِلَى مَبْنِيٍّ لِلمَجْهُولِ : ( شَرَحَ الأُسْتَاذُ الدَّرْسَ )",
        type: "multiple_choice",
        options: [
          "شُرِحَ الدَّرْسُ",
          "يَشْرَحُ الأُسْتَاذُ الدَّرْسَ",
          "الدَّرْسُ مَشْرُوحٌ",
          "لَمْ يُشْرَحِ الدَّرْسُ"
        ],
        correct: 0
      }
    ],
    francaise: [
      {
        id: 1,
        lang: "fr",
        title: "1. La voix active et la voix passive",
        question: "Dans la phrase 'La lettre a été écrite par l'élève.', à quelle voix est conjugué le verbe ?",
        type: "multiple_choice",
        options: [
          "À la voix active",
          "À la voix passive",
          "À la forme pronominale",
          "À la forme impersonnelle"
        ],
        correct: 1
      },
      {
        id: 2,
        lang: "fr",
        title: "2. Conjugaison à l'imparfait ou futur",
        question: "Conjugue le verbe 'prendre' au futur simple à la 1re personne du pluriel : 'Demain, nous ... le train.'",
        type: "input_text",
        target: "prendrons"
      },
      {
        id: 3,
        lang: "fr",
        title: "3. L'expansion du groupe nominal",
        question: "Dans 'La maison que nous avons visitée est grande.', quelle est la nature de 'que nous avons visitée' ?",
        type: "multiple_choice",
        options: [
          "Un complément circonstanciel de lieu",
          "Une proposition subordonnée relative",
          "Un attribut du sujet",
          "Un complément d'agent"
        ],
        correct: 1
      },
      {
        id: 4,
        lang: "fr",
        title: "4. Homophones grammaticaux (ce / se)",
        question: "Dans 'Il se lève tôt tous les matins', 'se' est un pronom réfléchi lié à un verbe pronominal.",
        type: "true_false",
        answer: true
      },
      {
        id: 5,
        lang: "fr",
        title: "5. Figures de style et vocabulaire",
        question: "Quel mot désigne le sens contraire (antonyme) de 'généreux' ?",
        type: "multiple_choice",
        options: ["Égoïste", "Courtois", "Sincère", "Courageux"],
        correct: 0
      }
    ],
    mathematique: [
      {
        id: 1,
        section: "النشاط العلمي",
        lang: "ar",
        title: "1. الدورة الدموية والقلب",
        question: "مَا وَظِيفَةُ الشَّرَايِينِ بِشَكْلٍ عَامٍّ فِي جِسْمِ الإِنْسَانِ؟",
        type: "multiple_choice",
        options: [
          "نَقْلُ الدَّمِ مِنَ القَلْبِ نَحْوَ أَعْضَاءِ الجِسْمِ",
          "إِنْتَاجُ كُرَيَّاتِ الدَّمِ فِي المَعِدَةِ",
          "تَصْفِيَةُ الهَوَاءِ فِي الأُنْفِ",
          "إِفْرَازُ العَرَقِ"
        ],
        correct: 0
      },
      {
        id: 2,
        section: "النشاط العلمي",
        lang: "ar",
        title: "2. الطاقة وتحولاتها",
        question: "مَا التَّحَوُّلُ الطَّاقِيُّ الرَّئِيسِيُّ فِي المِصْبَاحِ الكَهْرَبَائِيِّ؟",
        type: "multiple_choice",
        options: [
          "مِنَ الطَّاقَةِ الحَرَارِيَّةِ إِلَى النَّوَوِيَّةِ",
          "مِنَ الطَّاقَةِ الكَهْرَبَائِيَّةِ إِلَى طَاقَةٍ ضَوْئِيَّةٍ (وَحَرَارِيَّةٍ)",
          "مِنَ الطَّاقَةِ الحَرَكِيَّةِ إِلَى الكِيمِيَائِيَّةِ",
          "لَا يَحْدُثُ أَيُّ تَحَوُّلٍ لِلطَّاقَةِ"
        ],
        correct: 1
      },
      {
        id: 3,
        section: "النشاط العلمي",
        lang: "ar",
        title: "3. التكاثر عند النباتات",
        question: "أَيْنَ تَتَوَاجَدُ الأَعْضَاءُ التَّكَاثُرِيَّةُ عِنْدَ النَّبَاتَاتِ الزَّهْرِيَّةِ؟",
        type: "multiple_choice",
        options: [
          "دَاخِلَ الزَّهْرَةِ",
          "فِي الجُذُورِ فَقَطْ",
          "فِي الخَشَبِ المَيِّتِ",
          "فِي التُّرْبَةِ"
        ],
        correct: 0
      },
      {
        id: 4,
        section: "النشاط العلمي",
        lang: "ar",
        title: "4. الفصول والظواهر الفلكية",
        question: "مَا السَّبَبُ الرَّئِيسِيُّ لِتَعَاقُبِ الفُصُولِ الأَرْبَعَةِ؟",
        type: "multiple_choice",
        options: [
          "دَوَرَانُ الأَرْضِ حَوْلَ الشَّمْسِ مَعَ مَيْلِ مِحْوَرِهَا",
          "دَوَرَانُ القَمَرِ حَوْلَ الأَرْضِ فَقَطْ",
          "تَوَقُّفُ الأَرْضِ عَنِ الدَّوَرَانِ",
          "تَغَيُّرُ لَوْنِ الشَّمْسِ"
        ],
        correct: 0
      },
      {
        id: 5,
        section: "النشاط العلمي",
        lang: "ar",
        title: "5. حالات المادة وتحولاتها",
        question: "مَا اسْمُ تَحَوُّلِ المَاءِ مِنَ الحَالَةِ السَّائِلَةِ إِلَى الحَالَةِ الغَازِيَّةِ؟",
        type: "multiple_choice",
        options: [
          "التَّجَمُّدُ",
          "التَّبَخُّرُ",
          "الِانْصِهَارُ",
          "التَّكَاثُفُ"
        ],
        correct: 1
      },

      {
        id: 6,
        section: "Mathématiques",
        lang: "fr",
        title: "1. Opérations sur les fractions",
        question: "Calcule : 1/4 + 2/4.",
        type: "multiple_choice",
        options: ["3/8", "3/4", "1/2", "2/8"],
        correct: 1
      },
      {
        id: 7,
        section: "Mathématiques",
        lang: "fr",
        title: "2. Géométrie : Aire du triangle",
        question: "Calcule l'aire (en cm²) d'un triangle de base 6 cm et de hauteur 4 cm. (Formule : (base × hauteur) / 2)",
        type: "input_text",
        target: "12"
      },
      {
        id: 8,
        section: "Mathématiques",
        lang: "fr",
        title: "3. Pourcentages",
        question: "Quel est 50 % de 80 ?",
        type: "input_text",
        target: "40"
      },
      {
        id: 9,
        section: "Mathématiques",
        lang: "fr",
        title: "4. Volumes et contenances",
        question: "Combien y a-t-il de millilitres (mL) dans 1 litre (L) ?",
        type: "input_text",
        target: "1000"
      },
      {
        id: 10,
        section: "Mathématiques",
        lang: "fr",
        title: "5. Proportionnalité et vitesse",
        question: "Une voiture roule à une vitesse constante de 60 km/h. Quelle distance parcourt-elle en 2 heures (en km) ?",
        type: "input_text",
        target: "120"
      }
    ]
  }
  
};
