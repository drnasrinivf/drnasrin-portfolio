// Clean caseStudiesData module
export interface CaseStudy {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  //image: string;
  content: Array<{
    type: 'heading' | 'paragraph' | 'list' | 'quote';
    text?: string;
    items?: string[];
  }>;
}

export const caseStudiesDetails: CaseStudy[] = [
  {
    id: 1,
    title: 'When Faith Fought Science and Won!',
    excerpt: 'PCOS, Irregular Cycles, Male Factor (Motility Issues)',
    category: 'fertility',
    readTime: '4 min read',
    date: 'June 12, 2023',
    author: 'Dr. Nasrin Hasan',
    //image: 'couple-with-baby',
    content: [
      { type: 'paragraph', text: "A young couple from Bangladesh, aged 25 and 29, came to us after years of disappointment and heartbreak. " },
      { type: 'paragraph', text: "They had been trying to conceive for several years and had already undergone multiple IVF cycles in different centers, none of which resulted in embryo formation. Their main challenge was low ovarian reserve and poor egg quality, with an AMH level of 0.6 ng/ml." },
      { type: 'paragraph', text: "At every clinic they visited, the advice remained the same, to proceed with IVF using donor eggs. Medically, it seemed like the only possible route. But emotionally and spiritually, it wasn’t an option they could accept. " },
      { type: 'paragraph', text: "Due to their religious beliefs, they were determined to try only with their own gametes, no matter how hard the path might be. They came to us with one clear request: to explore every possible medical approach to conceive with self eggs." },

      { type: 'heading', text: 'Rebuilding Possibility through Science' },
      { type: 'paragraph', text: 'When we assessed her ovarian reserve, it was evident that her chances were low. Yet, what she lacked in egg count, she made up for in courage. We designed an individualized treatment plan with a focus on improving egg quality and supporting ovarian function.' },
      { type: 'paragraph', text: 'The process began with carefully chosen medications and nutritional support to enhance egg health and optimize cellular energy. Simultaneously, we carried out detailed genetic work including karyotyping to rule out hidden chromosomal issues.' },
      { type: 'paragraph', text: 'To take it further, we introduced advanced regenerative medicine. Two sittings of bone marrow aspiration were performed, and mesenchymal stem cells were isolated and injected into the ovaries through a laparoscopic approach. Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },
      { type: 'paragraph', text: 'Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },

      // { type: 'heading', text: 'A Carefully Planned IVF Journey' },
      // { type: 'list', items: ['Lifestyle counselling and structured diet with adequate protein and fibre', 'Supervised strength training', "Husband's break from night shifts to normalise sleep patterns", 'Antioxidant supplements for male partner', 'Ovulation induction with IUI'] },
     
      { type: 'heading', text: 'A Carefully Planned IVF Journey' },
      { type: 'paragraph', text: 'After the ovarian rejuvenation phase, the patient underwent individualized ovarian stimulation. We customized the protocol to her specific response, aiming to obtain even a few mature eggs. Rather than relying on a single cycle, we adopted an embryo pooling strategy, collecting and freezing embryos from multiple stimulations to increase success rates.' },
      { type: 'paragraph', text: 'Each embryo created was genetically tested through preimplantation genetic testing (PGT) to ensure only chromosomally normal (euploid) embryos were selected for transfer. Once the right embryo was identified, it was transferred into a carefully prepared uterine environment.' },

      { type: 'heading', text: 'The Moment Hope Became Life' },
      { type: 'paragraph', text: 'The pregnancy test came back positive. What began as a journey of uncertainty turned into one of joy. Months later, she delivered a healthy baby conceived entirely with her own eggs. It was a moment that blended faith, science, and determination into one remarkable success story.' },
     
      { type: 'heading', text: 'The Message Behind This Journey' },
      { type: 'paragraph', text: 'This story is more than a medical achievement. It is a message to every woman who has been told that low AMH means the end of motherhood. It proves that with the right approach, the right technology, and unwavering persistence, even the most difficult cases can lead to new beginnings.' },
      { type: 'paragraph', text: 'Low AMH does not mean no hope. Sometimes, it simply means the journey will need more patience, more care, and more belief. For this couple, science made it possible, but faith kept them going until the very end.' },
      
      
      //{ type: 'quote', text: 'Simple lifestyle changes, consistent medical guidance, and the right fertility plan helped us achieve what we had been waiting for.' }
    ]
  },


  {
    id: 2,
    title: 'When Faith Fought Science and Won!',
    excerpt: 'PCOS, Irregular Cycles, Male Factor (Motility Issues)',
    category: 'fertility',
    readTime: '4 min read',
    date: 'June 12, 2023',
    author: 'Dr. Nasrin Hasan',
    image: 'couple-with-baby',
    content: [
      { type: 'paragraph', text: "A young couple from Bangladesh, aged 25 and 29, came to us after years of disappointment and heartbreak. " },
      { type: 'paragraph', text: "They had been trying to conceive for several years and had already undergone multiple IVF cycles in different centers, none of which resulted in embryo formation. Their main challenge was low ovarian reserve and poor egg quality, with an AMH level of 0.6 ng/ml." },
      { type: 'paragraph', text: "At every clinic they visited, the advice remained the same, to proceed with IVF using donor eggs. Medically, it seemed like the only possible route. But emotionally and spiritually, it wasn’t an option they could accept. " },
      { type: 'paragraph', text: "Due to their religious beliefs, they were determined to try only with their own gametes, no matter how hard the path might be. They came to us with one clear request: to explore every possible medical approach to conceive with self eggs." },

      { type: 'heading', text: 'Rebuilding Possibility through Science' },
      { type: 'paragraph', text: 'When we assessed her ovarian reserve, it was evident that her chances were low. Yet, what she lacked in egg count, she made up for in courage. We designed an individualized treatment plan with a focus on improving egg quality and supporting ovarian function.' },
      { type: 'paragraph', text: 'The process began with carefully chosen medications and nutritional support to enhance egg health and optimize cellular energy. Simultaneously, we carried out detailed genetic work including karyotyping to rule out hidden chromosomal issues.' },
      { type: 'paragraph', text: 'To take it further, we introduced advanced regenerative medicine. Two sittings of bone marrow aspiration were performed, and mesenchymal stem cells were isolated and injected into the ovaries through a laparoscopic approach. Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },
      { type: 'paragraph', text: 'Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },

      // { type: 'heading', text: 'A Carefully Planned IVF Journey' },
      // { type: 'list', items: ['Lifestyle counselling and structured diet with adequate protein and fibre', 'Supervised strength training', "Husband's break from night shifts to normalise sleep patterns", 'Antioxidant supplements for male partner', 'Ovulation induction with IUI'] },
     
      { type: 'heading', text: 'A Carefully Planned IVF Journey' },
      { type: 'paragraph', text: 'After the ovarian rejuvenation phase, the patient underwent individualized ovarian stimulation. We customized the protocol to her specific response, aiming to obtain even a few mature eggs. Rather than relying on a single cycle, we adopted an embryo pooling strategy, collecting and freezing embryos from multiple stimulations to increase success rates.' },
      { type: 'paragraph', text: 'Each embryo created was genetically tested through preimplantation genetic testing (PGT) to ensure only chromosomally normal (euploid) embryos were selected for transfer. Once the right embryo was identified, it was transferred into a carefully prepared uterine environment.' },

      { type: 'heading', text: 'The Moment Hope Became Life' },
      { type: 'paragraph', text: 'The pregnancy test came back positive. What began as a journey of uncertainty turned into one of joy. Months later, she delivered a healthy baby conceived entirely with her own eggs. It was a moment that blended faith, science, and determination into one remarkable success story.' },
     
      { type: 'heading', text: 'The Message Behind This Journey' },
      { type: 'paragraph', text: 'This story is more than a medical achievement. It is a message to every woman who has been told that low AMH means the end of motherhood. It proves that with the right approach, the right technology, and unwavering persistence, even the most difficult cases can lead to new beginnings.' },
      { type: 'paragraph', text: 'Low AMH does not mean no hope. Sometimes, it simply means the journey will need more patience, more care, and more belief. For this couple, science made it possible, but faith kept them going until the very end.' },
      { type: 'quote', text: 'After repeated failures and the fear of losing hope, we finally experienced the joy of parenthood with our own gametes.' }
    ]
  },


  {
    id: 3,
    title: 'When Faith Fought Science and Won!',
    excerpt: 'PCOS, Irregular Cycles, Male Factor (Motility Issues)',
    category: 'fertility',
    readTime: '4 min read',
    date: 'June 12, 2023',
    author: 'Dr. Nasrin Hasan',
    image: 'couple-with-baby',
    content: [
      { type: 'paragraph', text: "A young couple from Bangladesh, aged 25 and 29, came to us after years of disappointment and heartbreak. " },
      { type: 'paragraph', text: "They had been trying to conceive for several years and had already undergone multiple IVF cycles in different centers, none of which resulted in embryo formation. Their main challenge was low ovarian reserve and poor egg quality, with an AMH level of 0.6 ng/ml." },
      { type: 'paragraph', text: "At every clinic they visited, the advice remained the same, to proceed with IVF using donor eggs. Medically, it seemed like the only possible route. But emotionally and spiritually, it wasn’t an option they could accept. " },
      { type: 'paragraph', text: "Due to their religious beliefs, they were determined to try only with their own gametes, no matter how hard the path might be. They came to us with one clear request: to explore every possible medical approach to conceive with self eggs." },

      { type: 'heading', text: 'Rebuilding Possibility through Science' },
      { type: 'paragraph', text: 'When we assessed her ovarian reserve, it was evident that her chances were low. Yet, what she lacked in egg count, she made up for in courage. We designed an individualized treatment plan with a focus on improving egg quality and supporting ovarian function.' },
      { type: 'paragraph', text: 'The process began with carefully chosen medications and nutritional support to enhance egg health and optimize cellular energy. Simultaneously, we carried out detailed genetic work including karyotyping to rule out hidden chromosomal issues.' },
      { type: 'paragraph', text: 'To take it further, we introduced advanced regenerative medicine. Two sittings of bone marrow aspiration were performed, and mesenchymal stem cells were isolated and injected into the ovaries through a laparoscopic approach. Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },
      { type: 'paragraph', text: 'Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },

      // { type: 'heading', text: 'A Carefully Planned IVF Journey' },
      // { type: 'list', items: ['Lifestyle counselling and structured diet with adequate protein and fibre', 'Supervised strength training', "Husband's break from night shifts to normalise sleep patterns", 'Antioxidant supplements for male partner', 'Ovulation induction with IUI'] },
     
      { type: 'heading', text: 'A Carefully Planned IVF Journey' },
      { type: 'paragraph', text: 'After the ovarian rejuvenation phase, the patient underwent individualized ovarian stimulation. We customized the protocol to her specific response, aiming to obtain even a few mature eggs. Rather than relying on a single cycle, we adopted an embryo pooling strategy, collecting and freezing embryos from multiple stimulations to increase success rates.' },
      { type: 'paragraph', text: 'Each embryo created was genetically tested through preimplantation genetic testing (PGT) to ensure only chromosomally normal (euploid) embryos were selected for transfer. Once the right embryo was identified, it was transferred into a carefully prepared uterine environment.' },

      { type: 'heading', text: 'The Moment Hope Became Life' },
      { type: 'paragraph', text: 'The pregnancy test came back positive. What began as a journey of uncertainty turned into one of joy. Months later, she delivered a healthy baby conceived entirely with her own eggs. It was a moment that blended faith, science, and determination into one remarkable success story.' },
     
      { type: 'heading', text: 'The Message Behind This Journey' },
      { type: 'paragraph', text: 'This story is more than a medical achievement. It is a message to every woman who has been told that low AMH means the end of motherhood. It proves that with the right approach, the right technology, and unwavering persistence, even the most difficult cases can lead to new beginnings.' },
      { type: 'paragraph', text: 'Low AMH does not mean no hope. Sometimes, it simply means the journey will need more patience, more care, and more belief. For this couple, science made it possible, but faith kept them going until the very end.' },
      { type: 'quote', text: 'From being told we had no chance to holding our twins, this journey has been a life-changing miracle.' }
    ]
  },


  {
    id: 4,
    title: 'When Faith Fought Science and Won!',
    excerpt: 'PCOS, Irregular Cycles, Male Factor (Motility Issues)',
    category: 'fertility',
    readTime: '4 min read',
    date: 'June 12, 2023',
    author: 'Dr. Nasrin Hasan',
    image: 'couple-with-baby',
    content: [
      { type: 'paragraph', text: "A young couple from Bangladesh, aged 25 and 29, came to us after years of disappointment and heartbreak. " },
      { type: 'paragraph', text: "They had been trying to conceive for several years and had already undergone multiple IVF cycles in different centers, none of which resulted in embryo formation. Their main challenge was low ovarian reserve and poor egg quality, with an AMH level of 0.6 ng/ml." },
      { type: 'paragraph', text: "At every clinic they visited, the advice remained the same, to proceed with IVF using donor eggs. Medically, it seemed like the only possible route. But emotionally and spiritually, it wasn’t an option they could accept. " },
      { type: 'paragraph', text: "Due to their religious beliefs, they were determined to try only with their own gametes, no matter how hard the path might be. They came to us with one clear request: to explore every possible medical approach to conceive with self eggs." },

      { type: 'heading', text: 'Rebuilding Possibility through Science' },
      { type: 'paragraph', text: 'When we assessed her ovarian reserve, it was evident that her chances were low. Yet, what she lacked in egg count, she made up for in courage. We designed an individualized treatment plan with a focus on improving egg quality and supporting ovarian function.' },
      { type: 'paragraph', text: 'The process began with carefully chosen medications and nutritional support to enhance egg health and optimize cellular energy. Simultaneously, we carried out detailed genetic work including karyotyping to rule out hidden chromosomal issues.' },
      { type: 'paragraph', text: 'To take it further, we introduced advanced regenerative medicine. Two sittings of bone marrow aspiration were performed, and mesenchymal stem cells were isolated and injected into the ovaries through a laparoscopic approach. Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },
      { type: 'paragraph', text: 'Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },

      // { type: 'heading', text: 'A Carefully Planned IVF Journey' },
      // { type: 'list', items: ['Lifestyle counselling and structured diet with adequate protein and fibre', 'Supervised strength training', "Husband's break from night shifts to normalise sleep patterns", 'Antioxidant supplements for male partner', 'Ovulation induction with IUI'] },
     
      { type: 'heading', text: 'A Carefully Planned IVF Journey' },
      { type: 'paragraph', text: 'After the ovarian rejuvenation phase, the patient underwent individualized ovarian stimulation. We customized the protocol to her specific response, aiming to obtain even a few mature eggs. Rather than relying on a single cycle, we adopted an embryo pooling strategy, collecting and freezing embryos from multiple stimulations to increase success rates.' },
      { type: 'paragraph', text: 'Each embryo created was genetically tested through preimplantation genetic testing (PGT) to ensure only chromosomally normal (euploid) embryos were selected for transfer. Once the right embryo was identified, it was transferred into a carefully prepared uterine environment.' },

      { type: 'heading', text: 'The Moment Hope Became Life' },
      { type: 'paragraph', text: 'The pregnancy test came back positive. What began as a journey of uncertainty turned into one of joy. Months later, she delivered a healthy baby conceived entirely with her own eggs. It was a moment that blended faith, science, and determination into one remarkable success story.' },
     
      { type: 'heading', text: 'The Message Behind This Journey' },
      { type: 'paragraph', text: 'This story is more than a medical achievement. It is a message to every woman who has been told that low AMH means the end of motherhood. It proves that with the right approach, the right technology, and unwavering persistence, even the most difficult cases can lead to new beginnings.' },
      { type: 'paragraph', text: 'Low AMH does not mean no hope. Sometimes, it simply means the journey will need more patience, more care, and more belief. For this couple, science made it possible, but faith kept them going until the very end.' },
      { type: 'quote', text: 'After years of waiting and failed attempts at adoption, surrogacy gave us hope and joy we never imagined possible.' }
    ]
  },


  {
    id: 5,
    title: 'When Faith Fought Science and Won!',
    excerpt: 'PCOS, Irregular Cycles, Male Factor (Motility Issues)',
    category: 'fertility',
    readTime: '4 min read',
    date: 'June 12, 2023',
    author: 'Dr. Nasrin Hasan',
    image: 'couple-with-baby',
    content: [
      { type: 'paragraph', text: "A young couple from Bangladesh, aged 25 and 29, came to us after years of disappointment and heartbreak. " },
      { type: 'paragraph', text: "They had been trying to conceive for several years and had already undergone multiple IVF cycles in different centers, none of which resulted in embryo formation. Their main challenge was low ovarian reserve and poor egg quality, with an AMH level of 0.6 ng/ml." },
      { type: 'paragraph', text: "At every clinic they visited, the advice remained the same, to proceed with IVF using donor eggs. Medically, it seemed like the only possible route. But emotionally and spiritually, it wasn’t an option they could accept. " },
      { type: 'paragraph', text: "Due to their religious beliefs, they were determined to try only with their own gametes, no matter how hard the path might be. They came to us with one clear request: to explore every possible medical approach to conceive with self eggs." },

      { type: 'heading', text: 'Rebuilding Possibility through Science' },
      { type: 'paragraph', text: 'When we assessed her ovarian reserve, it was evident that her chances were low. Yet, what she lacked in egg count, she made up for in courage. We designed an individualized treatment plan with a focus on improving egg quality and supporting ovarian function.' },
      { type: 'paragraph', text: 'The process began with carefully chosen medications and nutritional support to enhance egg health and optimize cellular energy. Simultaneously, we carried out detailed genetic work including karyotyping to rule out hidden chromosomal issues.' },
      { type: 'paragraph', text: 'To take it further, we introduced advanced regenerative medicine. Two sittings of bone marrow aspiration were performed, and mesenchymal stem cells were isolated and injected into the ovaries through a laparoscopic approach. Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },
      { type: 'paragraph', text: 'Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },

      // { type: 'heading', text: 'A Carefully Planned IVF Journey' },
      // { type: 'list', items: ['Lifestyle counselling and structured diet with adequate protein and fibre', 'Supervised strength training', "Husband's break from night shifts to normalise sleep patterns", 'Antioxidant supplements for male partner', 'Ovulation induction with IUI'] },
     
      { type: 'heading', text: 'A Carefully Planned IVF Journey' },
      { type: 'paragraph', text: 'After the ovarian rejuvenation phase, the patient underwent individualized ovarian stimulation. We customized the protocol to her specific response, aiming to obtain even a few mature eggs. Rather than relying on a single cycle, we adopted an embryo pooling strategy, collecting and freezing embryos from multiple stimulations to increase success rates.' },
      { type: 'paragraph', text: 'Each embryo created was genetically tested through preimplantation genetic testing (PGT) to ensure only chromosomally normal (euploid) embryos were selected for transfer. Once the right embryo was identified, it was transferred into a carefully prepared uterine environment.' },

      { type: 'heading', text: 'The Moment Hope Became Life' },
      { type: 'paragraph', text: 'The pregnancy test came back positive. What began as a journey of uncertainty turned into one of joy. Months later, she delivered a healthy baby conceived entirely with her own eggs. It was a moment that blended faith, science, and determination into one remarkable success story.' },
     
      { type: 'heading', text: 'The Message Behind This Journey' },
      { type: 'paragraph', text: 'This story is more than a medical achievement. It is a message to every woman who has been told that low AMH means the end of motherhood. It proves that with the right approach, the right technology, and unwavering persistence, even the most difficult cases can lead to new beginnings.' },
      { type: 'paragraph', text: 'Low AMH does not mean no hope. Sometimes, it simply means the journey will need more patience, more care, and more belief. For this couple, science made it possible, but faith kept them going until the very end.' },
      
      { type: 'quote', text: 'After repeated heartbreaks, we finally found the right treatment path. Today, we hold our baby in our arms.' }
    ]
  },


  {
    id: 6,
    title: 'When Faith Fought Science and Won!',
    excerpt: 'PCOS, Irregular Cycles, Male Factor (Motility Issues)',
    category: 'fertility',
    readTime: '4 min read',
    date: 'June 12, 2023',
    author: 'Dr. Nasrin Hasan',
    image: 'couple-with-baby',
    content: [
      { type: 'paragraph', text: "A young couple from Bangladesh, aged 25 and 29, came to us after years of disappointment and heartbreak. " },
      { type: 'paragraph', text: "They had been trying to conceive for several years and had already undergone multiple IVF cycles in different centers, none of which resulted in embryo formation. Their main challenge was low ovarian reserve and poor egg quality, with an AMH level of 0.6 ng/ml." },
      { type: 'paragraph', text: "At every clinic they visited, the advice remained the same, to proceed with IVF using donor eggs. Medically, it seemed like the only possible route. But emotionally and spiritually, it wasn’t an option they could accept. " },
      { type: 'paragraph', text: "Due to their religious beliefs, they were determined to try only with their own gametes, no matter how hard the path might be. They came to us with one clear request: to explore every possible medical approach to conceive with self eggs." },

      { type: 'heading', text: 'Rebuilding Possibility through Science' },
      { type: 'paragraph', text: 'When we assessed her ovarian reserve, it was evident that her chances were low. Yet, what she lacked in egg count, she made up for in courage. We designed an individualized treatment plan with a focus on improving egg quality and supporting ovarian function.' },
      { type: 'paragraph', text: 'The process began with carefully chosen medications and nutritional support to enhance egg health and optimize cellular energy. Simultaneously, we carried out detailed genetic work including karyotyping to rule out hidden chromosomal issues.' },
      { type: 'paragraph', text: 'To take it further, we introduced advanced regenerative medicine. Two sittings of bone marrow aspiration were performed, and mesenchymal stem cells were isolated and injected into the ovaries through a laparoscopic approach. Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },
      { type: 'paragraph', text: 'Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },

      // { type: 'heading', text: 'A Carefully Planned IVF Journey' },
      // { type: 'list', items: ['Lifestyle counselling and structured diet with adequate protein and fibre', 'Supervised strength training', "Husband's break from night shifts to normalise sleep patterns", 'Antioxidant supplements for male partner', 'Ovulation induction with IUI'] },
     
      { type: 'heading', text: 'A Carefully Planned IVF Journey' },
      { type: 'paragraph', text: 'After the ovarian rejuvenation phase, the patient underwent individualized ovarian stimulation. We customized the protocol to her specific response, aiming to obtain even a few mature eggs. Rather than relying on a single cycle, we adopted an embryo pooling strategy, collecting and freezing embryos from multiple stimulations to increase success rates.' },
      { type: 'paragraph', text: 'Each embryo created was genetically tested through preimplantation genetic testing (PGT) to ensure only chromosomally normal (euploid) embryos were selected for transfer. Once the right embryo was identified, it was transferred into a carefully prepared uterine environment.' },

      { type: 'heading', text: 'The Moment Hope Became Life' },
      { type: 'paragraph', text: 'The pregnancy test came back positive. What began as a journey of uncertainty turned into one of joy. Months later, she delivered a healthy baby conceived entirely with her own eggs. It was a moment that blended faith, science, and determination into one remarkable success story.' },
     
      { type: 'heading', text: 'The Message Behind This Journey' },
      { type: 'paragraph', text: 'This story is more than a medical achievement. It is a message to every woman who has been told that low AMH means the end of motherhood. It proves that with the right approach, the right technology, and unwavering persistence, even the most difficult cases can lead to new beginnings.' },
      { type: 'paragraph', text: 'Low AMH does not mean no hope. Sometimes, it simply means the journey will need more patience, more care, and more belief. For this couple, science made it possible, but faith kept them going until the very end.' },
      
      { type: 'quote', text: "We were told our chances were very low, but advanced techniques gave us twins!" }
    ]
  }
];
