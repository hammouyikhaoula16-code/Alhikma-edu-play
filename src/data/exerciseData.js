export const exerciseData = {
  cp: {
    informatique: [
      {
        id: 1,
        title: "Découverte de la souris",
        description: "Apprends à cliquer sur les bons éléments pour les nettoyer !",
        type: "click_target",
        targetWord: "Ordinateur",
        items: ["Clavier", "Souris", "Pomme", "Écran", "Ballon", "Tour"]
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
        title: "1. التعرف على الحروف",
        question: "ما الحرف الذي يأتي بعد حرف؟ (أ)",
        type: "multiple_choice",
        options: ["ب", "ل", "ف", "ن"],
        correct: 0
      },
      {
        id: 2,
        title: "2. الحركات القصيرة",
        question: "ما هو الصوت الناتج عن حرف الباء بالفتحة ؟",
        type: "multiple_choice",
        options: ["بِ", "بُ", "بَ", "بَا"],
        correct: 2
      },
      {
        id: 3,
        title: "3. إتمام الكلمة",
        question: "أتمم الكلمة لتصبح (بَيْت) : [ بَـ ... ـتْ ]",
        type: "input_text",
        target: "ي"
      },
      {
        id: 4,
        title: "4. صحيح أم خطأ",
        question: "اللغة العربية تُكتب من اليمين إلى اليسار.",
        type: "true_false",
        answer: true
      },
      {
        id: 5,
        title: "5. المدود والحركات الطويلة",
        question: "ما هو الحرف المناسب للمد بالالف في كلمة (بَاب)؟",
        type: "multiple_choice",
        options: ["و", "ا", "ي", "ب"],
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
  }
};