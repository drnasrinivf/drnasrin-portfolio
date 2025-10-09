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
    excerpt: 'Condition - PCOS, Irregular Cycles, Male Factor (Motility Issues)',
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
    title: 'How Lifestyle Changes and Medical Guidance Helped a Couple Overcome PCOS and Conceive Naturally',
    excerpt: 'Condition - Low Ovarian Reserve, Poor Egg Quality (AMH 0.6 ng/ml)',
    category: 'fertility',
    readTime: '4 min read',
    date: 'June 12, 2023',
    author: 'Dr. Nasrin Hasan',
    //image: 'couple-with-baby',
    content: [
      { type: 'paragraph', text: "A 33-year-old wife and her 35-year-old husband, both working in IT with frequent night shifts, approached us after struggling to conceive for five years. Over time, their erratic work schedules and lifestyle had begun affecting their health. The wife had experienced rapid weight gain and now weighed 85 kilograms. Her menstrual cycles had become irregular, and the couple was increasingly feeling the pressure of not being able to conceive." },
      //{ type: 'paragraph', text: "They had been trying to conceive for several years and had already undergone multiple IVF cycles in different centers, none of which resulted in embryo formation. Their main challenge was low ovarian reserve and poor egg quality, with an AMH level of 0.6 ng/ml." },
      //{ type: 'paragraph', text: "At every clinic they visited, the advice remained the same, to proceed with IVF using donor eggs. Medically, it seemed like the only possible route. But emotionally and spiritually, it wasn’t an option they could accept. " },
      //{ type: 'paragraph', text: "Due to their religious beliefs, they were determined to try only with their own gametes, no matter how hard the path might be. They came to us with one clear request: to explore every possible medical approach to conceive with self eggs." },

      { type: 'heading', text: 'Assessment and Diagnosis' },
      { type: 'paragraph', text: 'We began with a thorough evaluation. An ultrasound scan revealed that the uterus was normal, but both ovaries showed signs of severe polycystic ovary syndrome (PCOS). A simple saline sonohysterogram confirmed that the fallopian tubes were open. Semen analysis of the husband showed motility issues.' },
      { type: 'paragraph', text: 'While the couple’s fertility challenges were significant, there were clear actionable factors. Both partners were motivated to make lifestyle adjustments alongside medical treatment.' },
      //{ type: 'paragraph', text: 'To take it further, we introduced advanced regenerative medicine. Two sittings of bone marrow aspiration were performed, and mesenchymal stem cells were isolated and injected into the ovaries through a laparoscopic approach. Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },
      //{ type: 'paragraph', text: 'Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },

      // { type: 'heading', text: 'A Carefully Planned IVF Journey' },
      // { type: 'list', items: ['Lifestyle counselling and structured diet with adequate protein and fibre', 'Supervised strength training', "Husband's break from night shifts to normalise sleep patterns", 'Antioxidant supplements for male partner', 'Ovulation induction with IUI'] },
     
      { type: 'heading', text: 'Lifestyle Interventions' },
      { type: 'paragraph', text: 'We provided structured lifestyle counseling and a personalized diet plan emphasizing adequate proteins, fiber, and balanced nutrition. The wife was also guided through supervised strength training. The husband was advised to take a break from night shifts for three months to improve overall health and sperm quality. Antioxidant supplementation was given to support semen parameters and optimize fertility.' },
      //{ type: 'paragraph', text: 'Each embryo created was genetically tested through preimplantation genetic testing (PGT) to ensure only chromosomally normal (euploid) embryos were selected for transfer. Once the right embryo was identified, it was transferred into a carefully prepared uterine environment.' },

      { type: 'heading', text: 'Treatment Plan and Medical Intervention' },
      { type: 'paragraph', text: 'Given her PCOS diagnosis and ovarian response, the protocol chosen was ovulation induction combined with intrauterine insemination (IUI). The couple was closely monitored during the cycles to optimize timing and response.' },
     
      { type: 'heading', text: 'The Outcome' },
      { type: 'paragraph', text: 'The couple achieved a positive pregnancy on their second IUI attempt. Along the way, the wife had lost 7 kilograms, and her thyroid and prolactin levels normalized. The case demonstrates how positive lifestyle changes, combined with targeted medical intervention, can significantly improve fertility outcomes.' },
      //{ type: 'paragraph', text: 'Low AMH does not mean no hope. Sometimes, it simply means the journey will need more patience, more care, and more belief. For this couple, science made it possible, but faith kept them going until the very end.' },
      
      { type: 'heading', text: 'Key Takeaways' },
      { type: 'paragraph', text: 'Not all cases of PCOS require advanced IVF treatments. With correct lifestyle management, hormonal optimization, and simple fertility interventions, many couples can achieve pregnancy naturally or with minimally invasive procedures. However, if ovaries are resistant to induction agents, or if multiple factors are contributing to infertility, assisted reproductive technologies may be needed.' },
      { type: 'paragraph', text: 'This story underscores the importance of fertility awareness, early evaluation, and personalized guidance for couples. Small, consistent changes in lifestyle, combined with medical support, can make a life-changing difference on the path to parenthood.' },

      
      //{ type: 'quote', text: 'After repeated failures and the fear of losing hope, we finally experienced the joy of parenthood with our own gametes.' }
    ]
  },


  {
    id: 3,
    title: 'Overcoming Male Infertility! A Journey from Azoospermia to Parenthood',
    excerpt: 'Condition - PCOS, Irregular Cycles, Male Factor (Motility Issues)',
    category: 'fertility',
    readTime: '4 min read',
    date: 'June 12, 2023',
    author: 'Dr. Nasrin Hasan',
    //image: 'couple-with-baby',
    content: [
      { type: 'paragraph', text: "A couple, aged 32 and 36, had been trying to conceive for three years when they were confronted with devastating news. The husband was diagnosed with azoospermia, meaning no sperm were found in his semen analysis. They were advised to consider a donor sperm program, a suggestion that can be heartbreaking for anyone hoping for a genetic child." },
      { type: 'paragraph', text: "Over the years, they tried multiple treatments, including Ayurvedic, Unani, and hormonal therapies, but none yielded results. Their hope of having a child of their own seemed to be slipping away." },
      //{ type: 'paragraph', text: "At every clinic they visited, the advice remained the same, to proceed with IVF using donor eggs. Medically, it seemed like the only possible route. But emotionally and spiritually, it wasn’t an option they could accept. " },
      //{ type: 'paragraph', text: "Due to their religious beliefs, they were determined to try only with their own gametes, no matter how hard the path might be. They came to us with one clear request: to explore every possible medical approach to conceive with self eggs." },

      { type: 'heading', text: 'Resetting the Fertility Journey' },
      { type: 'paragraph', text: 'When they came to us, we decided to reset their fertility journey with a comprehensive and individualized plan. The husband, weighing 104 kilograms, was enrolled in an intensive weight loss program to improve overall health and sperm production. He also started on empirical recombinant hormone injections to stimulate spermatogenesis.' },
      { type: 'paragraph', text: 'For the wife, we planned an IVF stimulation protocol while preparing for micro-TESE (microdissection testicular sperm extraction) for the husband. These combined efforts allowed us to finally obtain viable sperm and create embryos.' },
      //{ type: 'paragraph', text: 'To take it further, we introduced advanced regenerative medicine. Two sittings of bone marrow aspiration were performed, and mesenchymal stem cells were isolated and injected into the ovaries through a laparoscopic approach. Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },
      //{ type: 'paragraph', text: 'Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },

      // { type: 'heading', text: 'A Carefully Planned IVF Journey' },
      // { type: 'list', items: ['Lifestyle counselling and structured diet with adequate protein and fibre', 'Supervised strength training', "Husband's break from night shifts to normalise sleep patterns", 'Antioxidant supplements for male partner', 'Ovulation induction with IUI'] },
     
      { type: 'heading', text: 'Optimizing the First Transfer' },
      { type: 'paragraph', text: 'The first embryo transfer did not result in pregnancy, but we did not lose hope. To improve implantation chances, we performed an Endometrial Receptivity Assay and planned a personalized embryo transfer based on her natural cycle.' },
      //{ type: 'paragraph', text: 'Each embryo created was genetically tested through preimplantation genetic testing (PGT) to ensure only chromosomally normal (euploid) embryos were selected for transfer. Once the right embryo was identified, it was transferred into a carefully prepared uterine environment.' },

      { type: 'heading', text: 'The Joyful Outcome' },
      { type: 'paragraph', text: 'The second transfer was successful. The couple conceived twins, and although they were delivered preterm, both a boy and a girl are now thriving and growing into lovely toddlers. This success highlights that male infertility can be addressed effectively with a combination of advanced interventions and lifestyle optimization.' },
     
      { type: 'heading', text: 'Key Insights' },
      { type: 'paragraph', text: 'Andrology, the field dedicated to male infertility, requires highly individualized care. Options such as testicular PRP, stem cell therapy, TESA, and micro-TESE, when combined with weight management, lifestyle changes, and medical optimization, can turn previously hopeless situations into joyful outcomes.' },
      { type: 'paragraph', text: 'This story emphasizes the importance of patience, tailored treatment, and hope. For couples struggling with male factor infertility, personalized approaches and persistence can truly make parenthood possible.' },
      
      { type: 'quote', text: ' “Dreaming of a genetic child? Start your personalized fertility journey today ' }
    ]
  },


  {
    id: 4,
    title: 'When Motherhood Feels Impossible: Surrogacy as a Path to Parenthood',
    excerpt: 'Condition - Infantile Uterus (Congenital Absence of Functional Uterus)',
    category: 'fertility',
    readTime: '4 min read',
    date: 'June 12, 2023',
    author: 'Dr. Nasrin Hasan',
    //image: 'couple-with-baby',
    content: [
      { type: 'paragraph', text: "Is a woman’s dream of motherhood closed if she is born without a uterus, has a very small uterus, or has had her uterus removed due to medical reasons? The answer is no. Modern reproductive medicine makes it possible for women to have their own genetic child using their own eggs and their partner’s sperm, with the embryo carried by a willing surrogate." },
      //{ type: 'paragraph', text: "They had been trying to conceive for several years and had already undergone multiple IVF cycles in different centers, none of which resulted in embryo formation. Their main challenge was low ovarian reserve and poor egg quality, with an AMH level of 0.6 ng/ml." },
      //{ type: 'paragraph', text: "At every clinic they visited, the advice remained the same, to proceed with IVF using donor eggs. Medically, it seemed like the only possible route. But emotionally and spiritually, it wasn’t an option they could accept. " },
      //{ type: 'paragraph', text: "Due to their religious beliefs, they were determined to try only with their own gametes, no matter how hard the path might be. They came to us with one clear request: to explore every possible medical approach to conceive with self eggs." },

      { type: 'heading', text: 'A Journey of Hope After 13 Years' },
      { type: 'paragraph', text: 'A couple, married for 13 years, faced this exact challenge. The wife was born with an infantile uterus, making natural pregnancy impossible. Despite having a loving and understanding husband, they had resigned themselves to life without children and had even explored adoption.' },
      { type: 'paragraph', text: 'However, adoption proved to be a distant possibility due to strict legal rules and long waiting periods. In their search for alternatives, they learned about surrogacy and approached our clinic.' },
      //{ type: 'paragraph', text: 'To take it further, we introduced advanced regenerative medicine. Two sittings of bone marrow aspiration were performed, and mesenchymal stem cells were isolated and injected into the ovaries through a laparoscopic approach. Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },
      //{ type: 'paragraph', text: 'Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },

      // { type: 'heading', text: 'A Carefully Planned IVF Journey' },
      // { type: 'list', items: ['Lifestyle counselling and structured diet with adequate protein and fibre', 'Supervised strength training', "Husband's break from night shifts to normalise sleep patterns", 'Antioxidant supplements for male partner', 'Ovulation induction with IUI'] },
     
      { type: 'heading', text: 'The Surrogacy Process' },
      { type: 'paragraph', text: 'We began with careful legal processing, thorough counselling, and informed consent for all parties involved. The couple’s eggs and sperm were used to create embryos, which were then implanted into a surrogate mother. With meticulous planning and monitoring, the procedure was successful, resulting in a healthy pregnancy.' },
      { type: 'paragraph', text: 'Surrogacy is fully legal in India, though the process requires time, patience, and careful adherence to legal and medical protocols.' },

      { type: 'heading', text: 'Possibilities Beyond Conventional Routes' },
      { type: 'paragraph', text: 'This couple’s story is just one example of how non-conventional routes to parenthood are transforming lives. Surrogacy offers solutions not only for women without a uterus but also for those facing severe health conditions, advanced age, or multiple IVF failures.' },
      { type: 'paragraph', text: 'By providing access to these options, couples who may have felt that their dreams of parenthood were impossible can now experience the joy of having their own children. Surrogacy is not just about biology; it is about hope, family, and in many cases, saving marriages and nurturing relationships that might otherwise have been strained by infertility.' },

      { type: 'heading', text: 'Key Takeaway' },
      { type: 'paragraph', text: 'Motherhood is possible even when nature presents extreme challenges. With legal, ethical, and medically guided surrogacy, couples can achieve parenthood, preserving their genetic lineage and fulfilling their dreams of a family. Fertility medicine continues to expand the possibilities, turning what once seemed impossible into reality.' },
      //{ type: 'paragraph', text: 'Low AMH does not mean no hope. Sometimes, it simply means the journey will need more patience, more care, and more belief. For this couple, science made it possible, but faith kept them going until the very end.' },
      { type: 'quote', text: 'Facing challenges with natural pregnancy? Explore surrogacy and other non-conventional paths to parenthood. ' }
    ]
  },


  {
    id: 5,
    title: 'Overcoming Recurrent Pregnancy Loss Through Advanced IVF and Immune Therapy',
    excerpt: 'Condition - Recurrent Pregnancy Loss (RPL)',
    category: 'fertility',
    readTime: '4 min read',
    date: 'June 12, 2023',
    author: 'Dr. Nasrin Hasan',
    //image: 'couple-with-baby',
    content: [
      { type: 'paragraph', text: "Experiencing pregnancy loss repeatedly can be emotionally devastating. A patient who had endured four consecutive pregnancy losses came to us feeling hopeless and unsure if she could ever carry a child to term. Despite her repeated losses, her initial fertility workup, including routine hormonal and anatomical evaluations, had shown normal results." },
      //{ type: 'paragraph', text: "At every clinic they visited, the advice remained the same, to proceed with IVF using donor eggs. Medically, it seemed like the only possible route. But emotionally and spiritually, it wasn’t an option they could accept. " },
      //{ type: 'paragraph', text: "Due to their religious beliefs, they were determined to try only with their own gametes, no matter how hard the path might be. They came to us with one clear request: to explore every possible medical approach to conceive with self eggs." },

      { type: 'heading', text: 'Uncovering the Hidden Cause' },
      { type: 'paragraph', text: 'To look deeper, we conducted genetic and immunological evaluations. Both parents had normal karyotypes, ruling out chromosomal abnormalities. However, the problem lay beyond the genes, in the body’s immune system. Specifically, there was evidence suggesting immune rejection of embryos, potentially related to the HLA system.' },
      { type: 'paragraph', text: 'Through genetic counselling, the couple was guided to understand the nature of the problem and the available advanced options.' },
      //{ type: 'paragraph', text: 'To take it further, we introduced advanced regenerative medicine. Two sittings of bone marrow aspiration were performed, and mesenchymal stem cells were isolated and injected into the ovaries through a laparoscopic approach. Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },
      //{ type: 'paragraph', text: 'Exosome therapy was also included to help stimulate follicular growth and rejuvenate ovarian tissue. The goal was to awaken the dormant follicles and create a healthier environment for egg development.' },

      // { type: 'heading', text: 'A Carefully Planned IVF Journey' },
      // { type: 'list', items: ['Lifestyle counselling and structured diet with adequate protein and fibre', 'Supervised strength training', "Husband's break from night shifts to normalise sleep patterns", 'Antioxidant supplements for male partner', 'Ovulation induction with IUI'] },
     
      { type: 'heading', text: 'Tailored Treatment and IVF Approach' },
      { type: 'paragraph', text: 'To overcome this hidden barrier, the patient underwent IVF with Preimplantation Genetic Testing (PGT). Alongside, lymphocyte immunization therapy (LIT) was carefully applied to modulate her immune response and reduce the risk of embryo rejection. This combination was specifically selected after meticulous evaluation, as immune-based therapies are reserved for carefully selected patients.' },
      //{ type: 'paragraph', text: 'Each embryo created was genetically tested through preimplantation genetic testing (PGT) to ensure only chromosomally normal (euploid) embryos were selected for transfer. Once the right embryo was identified, it was transferred into a carefully prepared uterine environment.' },

      { type: 'heading', text: 'A Successful Outcome' },
      { type: 'paragraph', text: 'The treatment strategy was successful. The patient conceived and carried the pregnancy to term, delivering a healthy baby boy. This case demonstrates how recurrent pregnancy loss and recurrent implantation failure can sometimes be linked to immune system factors rather than genetic or structural issues.' },
     
      { type: 'heading', text: 'Key Takeaways' },
      { type: 'paragraph', text: 'Recurrent pregnancy loss is not always due to genetic abnormalities or hormonal problems. In selected cases, immune system modulation combined with advanced IVF techniques such as PGT can significantly improve the chances of a successful pregnancy.' },
      { type: 'paragraph', text: 'Lymphocyte immunization therapy is a highly specialized intervention and should only be applied after careful patient selection and counseling. For couples struggling with repeated pregnancy loss, modern reproductive medicine offers hope beyond traditional treatments, turning despair into the possibility of parenthood.' },
      
      { type: 'quote', text: 'Struggling with recurrent pregnancy loss? Learn about advanced IVF and immune therapies. ' }
    ]
  }
];
