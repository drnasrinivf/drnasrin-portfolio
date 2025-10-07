export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
  content: Array<{
    type: 'heading' | 'paragraph' | 'list' | 'quote';
    text?: string;
    items?: string[];
  }>;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding IVF: A Comprehensive Guide for International Patients",
    excerpt: "Everything you need to know about IVF treatment, from preparation to success rates, with special considerations for international patients.",
    category: "treatments",
    readTime: "8 min read",
    date: "March 15, 2024",
    author: "Dr. Sarah Johnson",
    image: "ivf-guide",
    featured: true,
    content: [
      {
        type: 'paragraph',
        text: "In vitro fertilization (IVF) has revolutionized reproductive medicine, offering hope to millions of couples worldwide. As an international patient, understanding the IVF process and what to expect is crucial for your journey to parenthood."
      },
      {
        type: 'heading',
        text: "What is IVF?"
      },
      {
        type: 'paragraph',
        text: "IVF is a complex series of procedures used to help with fertility or prevent genetic problems and assist with the conception of a child. During IVF, mature eggs are collected from ovaries and fertilized by sperm in a laboratory. Then the fertilized egg (embryo) or eggs are transferred to a uterus."
      },
      {
        type: 'heading',
        text: "The IVF Process: Step by Step"
      },
      {
        type: 'list',
        items: [
          "Ovarian Stimulation: Medications are used to stimulate your ovaries to produce multiple eggs",
          "Egg Retrieval: A minor surgical procedure to collect eggs from your ovaries",
          "Fertilization: Eggs are combined with sperm in a laboratory",
          "Embryo Culture: Fertilized eggs are monitored as they develop into embryos",
          "Embryo Transfer: One or more embryos are placed in your uterus"
        ]
      },
      {
        type: 'heading',
        text: "Success Rates and Factors"
      },
      {
        type: 'paragraph',
        text: "IVF success rates vary depending on several factors including age, cause of infertility, and the quality of the eggs and sperm. Women under 35 typically have the highest success rates, with approximately 40-45% per cycle. However, advances in technology continue to improve outcomes for all age groups."
      },
      {
        type: 'quote',
        text: "The journey to parenthood through IVF requires patience, persistence, and the right medical support. Every case is unique, and personalized care makes all the difference."
      },
      {
        type: 'heading',
        text: "Special Considerations for International Patients"
      },
      {
        type: 'paragraph',
        text: "As an international patient, you'll need to consider additional factors such as travel logistics, accommodation, and coordinating treatment schedules. Our clinic provides comprehensive support including visa assistance, accommodation recommendations, and flexible scheduling to accommodate your travel needs."
      },
      {
        type: 'list',
        items: [
          "Pre-treatment consultations can be conducted via video call",
          "We coordinate with your local doctor for preliminary testing",
          "Flexible appointment scheduling to minimize your stay",
          "Post-treatment follow-up can be done remotely",
          "24/7 support line for any concerns during your treatment"
        ]
      },
      {
        type: 'heading',
        text: "Preparing for Your IVF Journey"
      },
      {
        type: 'paragraph',
        text: "Preparation is key to IVF success. This includes maintaining a healthy lifestyle, managing stress, taking prescribed supplements, and following all medical advice. Mental and emotional preparation is equally important, and we offer counseling services to support you throughout your journey."
      }
    ]
  },
  {
    id: 2,
    title: "Fertility Nutrition: Foods That Support Your Journey to Parenthood",
    excerpt: "Discover the science-backed nutritional strategies that can enhance fertility and support your reproductive health naturally.",
    category: "wellness",
    readTime: "6 min read",
    date: "March 12, 2024",
    author: "Dr. Sarah Johnson",
    image: "nutrition",
    content: [
      {
        type: 'paragraph',
        text: "Nutrition plays a crucial role in reproductive health for both men and women. The foods you eat can significantly impact hormone balance, egg quality, sperm health, and overall fertility. Understanding which nutrients support fertility can help you make informed dietary choices."
      },
      {
        type: 'heading',
        text: "Key Nutrients for Fertility"
      },
      {
        type: 'paragraph',
        text: "Certain nutrients have been scientifically proven to support reproductive health. Focus on incorporating these essential vitamins and minerals into your daily diet."
      },
      {
        type: 'list',
        items: [
          "Folic Acid: Critical for preventing neural tube defects and supporting cell division",
          "Omega-3 Fatty Acids: Support hormone production and reduce inflammation",
          "Antioxidants: Protect eggs and sperm from oxidative stress",
          "Vitamin D: Essential for hormone regulation and embryo implantation",
          "Iron: Prevents anemia and supports healthy ovulation",
          "Zinc: Crucial for hormone balance and egg development"
        ]
      },
      {
        type: 'heading',
        text: "Fertility-Boosting Foods"
      },
      {
        type: 'paragraph',
        text: "Incorporate these nutrient-dense foods into your fertility diet:"
      },
      {
        type: 'list',
        items: [
          "Leafy greens like spinach and kale for folate and iron",
          "Fatty fish such as salmon and sardines for omega-3s",
          "Berries and citrus fruits for antioxidants",
          "Whole grains for sustained energy and B vitamins",
          "Legumes for plant-based protein and fiber",
          "Nuts and seeds for healthy fats and vitamin E",
          "Avocados for folate and healthy monounsaturated fats"
        ]
      },
      {
        type: 'quote',
        text: "Your fertility journey begins on your plate. Every meal is an opportunity to nourish your body and support your reproductive health."
      },
      {
        type: 'heading',
        text: "Foods to Limit or Avoid"
      },
      {
        type: 'paragraph',
        text: "While focusing on nutrient-rich foods, it's equally important to limit certain foods that may negatively impact fertility:"
      },
      {
        type: 'list',
        items: [
          "Trans fats found in processed foods",
          "High-mercury fish like swordfish and king mackerel",
          "Excessive caffeine (limit to 200mg per day)",
          "Alcohol, which can interfere with hormone balance",
          "High-glycemic foods that cause blood sugar spikes",
          "Processed meats and excessive red meat"
        ]
      },
      {
        type: 'heading',
        text: "Creating Your Fertility Meal Plan"
      },
      {
        type: 'paragraph',
        text: "Building a fertility-friendly diet doesn't have to be complicated. Aim for a colorful plate filled with a variety of whole foods, plenty of vegetables, lean proteins, and healthy fats. Stay hydrated and consider working with a nutritionist who specializes in fertility to create a personalized plan that meets your specific needs."
      }
    ]
  },
  {
    id: 3,
    title: "PCOS and Fertility: Managing Symptoms for Better Outcomes",
    excerpt: "A comprehensive approach to understanding and managing PCOS to improve fertility outcomes and overall well-being.",
    category: "fertility",
    readTime: "7 min read",
    date: "March 10, 2024",
    author: "Dr. Sarah Johnson",
    image: "pcos",
    content: [
      {
        type: 'paragraph',
        text: "Polycystic Ovary Syndrome (PCOS) affects approximately 1 in 10 women of childbearing age and is one of the most common causes of female infertility. However, with proper management and treatment, many women with PCOS can conceive and have healthy pregnancies."
      },
      {
        type: 'heading',
        text: "Understanding PCOS"
      },
      {
        type: 'paragraph',
        text: "PCOS is a hormonal disorder characterized by irregular periods, elevated androgen levels, and polycystic ovaries. The condition affects ovulation, making it more difficult to conceive naturally. However, PCOS is manageable, and understanding your body is the first step toward improving your fertility."
      },
      {
        type: 'heading',
        text: "Common PCOS Symptoms"
      },
      {
        type: 'list',
        items: [
          "Irregular or absent menstrual periods",
          "Difficulty conceiving due to irregular ovulation",
          "Excessive hair growth on face and body",
          "Weight gain or difficulty losing weight",
          "Acne and oily skin",
          "Thinning hair on the scalp",
          "Dark patches of skin"
        ]
      },
      {
        type: 'heading',
        text: "Lifestyle Management Strategies"
      },
      {
        type: 'paragraph',
        text: "Lifestyle modifications can significantly improve PCOS symptoms and fertility outcomes:"
      },
      {
        type: 'list',
        items: [
          "Maintain a healthy weight through balanced nutrition and regular exercise",
          "Follow a low-glycemic diet to manage insulin resistance",
          "Engage in regular physical activity (at least 150 minutes per week)",
          "Manage stress through yoga, meditation, or counseling",
          "Get adequate sleep (7-9 hours per night)",
          "Limit processed foods and refined sugars"
        ]
      },
      {
        type: 'quote',
        text: "PCOS doesn't define your fertility journey. With the right treatment and lifestyle changes, many women with PCOS achieve successful pregnancies."
      },
      {
        type: 'heading',
        text: "Medical Treatment Options"
      },
      {
        type: 'paragraph',
        text: "Various medical treatments can help manage PCOS and improve fertility:"
      },
      {
        type: 'list',
        items: [
          "Ovulation induction medications like Clomid or Letrozole",
          "Metformin to improve insulin sensitivity",
          "IVF for cases where other treatments haven't been successful",
          "Laparoscopic ovarian drilling in specific cases",
          "Hormone therapy to regulate menstrual cycles"
        ]
      },
      {
        type: 'heading',
        text: "Working with Your Healthcare Team"
      },
      {
        type: 'paragraph',
        text: "Managing PCOS requires a comprehensive approach involving your fertility specialist, nutritionist, and potentially other healthcare providers. Regular monitoring, personalized treatment plans, and ongoing support are essential for optimizing your fertility outcomes. Don't hesitate to ask questions and advocate for your health throughout your journey."
      }
    ]
  },
  {
    id: 4,
    title: "International Fertility Treatment: What to Expect",
    excerpt: "A guide for international patients considering fertility treatment abroad, including logistics, preparation, and what to expect.",
    category: "international",
    readTime: "10 min read",
    date: "March 8, 2024",
    author: "Dr. Sarah Johnson",
    image: "international",
    content: [
      {
        type: 'paragraph',
        text: "Seeking fertility treatment abroad can offer access to world-class care, advanced technologies, and sometimes more affordable options. As an international patient, understanding what to expect and how to prepare can help ensure a smooth and successful treatment experience."
      },
      {
        type: 'heading',
        text: "Why Choose International Fertility Treatment?"
      },
      {
        type: 'paragraph',
        text: "Many patients choose international fertility treatment for various reasons, including access to specialists, advanced treatment options, shorter waiting times, and cost considerations. Our clinic welcomes international patients and provides comprehensive support throughout your journey."
      },
      {
        type: 'heading',
        text: "Planning Your Treatment Journey"
      },
      {
        type: 'list',
        items: [
          "Initial consultation via video call to discuss your medical history",
          "Coordination with your local doctor for preliminary tests",
          "Treatment plan development based on your specific needs",
          "Scheduling flexibility to accommodate your travel",
          "Visa assistance and documentation support",
          "Accommodation recommendations near the clinic"
        ]
      },
      {
        type: 'heading',
        text: "What to Bring"
      },
      {
        type: 'paragraph',
        text: "To ensure a smooth treatment process, bring the following documents and items:"
      },
      {
        type: 'list',
        items: [
          "Complete medical records and previous fertility test results",
          "Valid passport and necessary visa documentation",
          "Travel insurance that covers medical treatments",
          "List of current medications and supplements",
          "Contact information for your local healthcare provider",
          "Comfortable clothing for procedures and recovery"
        ]
      },
      {
        type: 'quote',
        text: "Distance should never be a barrier to accessing quality fertility care. We're here to support you every step of the way, no matter where you're from."
      },
      {
        type: 'heading',
        text: "During Your Stay"
      },
      {
        type: 'paragraph',
        text: "Your treatment timeline will depend on your specific protocol. Generally, expect to stay for 10-15 days for IVF treatment. This includes initial assessments, stimulation monitoring, egg retrieval, and embryo transfer. We provide daily support and are available 24/7 for any concerns."
      },
      {
        type: 'heading',
        text: "After Treatment"
      },
      {
        type: 'paragraph',
        text: "Following your embryo transfer, you'll typically wait 10-14 days before taking a pregnancy test. We coordinate with your local healthcare provider for ongoing monitoring and provide remote follow-up care. Our support doesn't end when you leave - we remain available for consultations and guidance throughout your pregnancy journey."
      },
      {
        type: 'heading',
        text: "Success Stories"
      },
      {
        type: 'paragraph',
        text: "We've helped patients from over 50 countries achieve their dream of parenthood. Our international patient coordinators speak multiple languages and understand the unique needs of traveling for treatment. Many of our patients maintain contact with us years after their successful pregnancies, sharing their joy and gratitude."
      }
    ]
  },
  {
    id: 5,
    title: "Male Factor Infertility: Breaking the Silence",
    excerpt: "Understanding male fertility issues, available treatments, and how couples can navigate this journey together.",
    category: "fertility",
    readTime: "5 min read",
    date: "March 5, 2024",
    author: "Dr. Sarah Johnson",
    image: "male-fertility",
    content: [
      {
        type: 'paragraph',
        text: "Male factor infertility accounts for approximately 40-50% of all infertility cases, yet it remains a topic often surrounded by silence and stigma. Understanding male fertility issues and available treatments is crucial for couples on their path to parenthood."
      },
      {
        type: 'heading',
        text: "Common Causes of Male Infertility"
      },
      {
        type: 'paragraph',
        text: "Male infertility can result from various factors affecting sperm production, function, or delivery:"
      },
      {
        type: 'list',
        items: [
          "Low sperm count (oligospermia) or absence of sperm (azoospermia)",
          "Poor sperm motility or abnormal sperm shape",
          "Varicocele (enlarged veins in the scrotum)",
          "Hormonal imbalances affecting testosterone production",
          "Genetic factors or chromosomal abnormalities",
          "Lifestyle factors including smoking, alcohol, and stress",
          "Environmental exposures to toxins or excessive heat"
        ]
      },
      {
        type: 'heading',
        text: "Diagnostic Testing"
      },
      {
        type: 'paragraph',
        text: "A comprehensive male fertility evaluation typically includes a semen analysis, which examines sperm count, motility, and morphology. Additional tests may include hormone testing, genetic screening, and physical examination. Early testing is important, as it allows for timely intervention and treatment."
      },
      {
        type: 'quote',
        text: "Male fertility is an essential part of the conception equation. Addressing male factor infertility opens doors to effective treatments and brings couples closer to their goals."
      },
      {
        type: 'heading',
        text: "Treatment Options"
      },
      {
        type: 'paragraph',
        text: "Many male fertility issues can be successfully treated or managed:"
      },
      {
        type: 'list',
        items: [
          "Lifestyle modifications: improving diet, exercise, and reducing stress",
          "Medications to address hormonal imbalances",
          "Surgery to correct varicocele or blockages",
          "Assisted reproductive technologies like IUI or IVF",
          "ICSI (Intracytoplasmic Sperm Injection) for severe male factor issues",
          "Sperm retrieval techniques for azoospermia"
        ]
      },
      {
        type: 'heading',
        text: "Supporting Your Partner"
      },
      {
        type: 'paragraph',
        text: "Infertility is a journey that couples navigate together. Open communication, mutual support, and shared decision-making are essential. Men should feel empowered to discuss their concerns and seek help early. Partners can support each other by attending appointments together, educating themselves about the condition, and maintaining a positive outlook."
      },
      {
        type: 'heading',
        text: "Breaking the Stigma"
      },
      {
        type: 'paragraph',
        text: "It's time to break the silence around male infertility. Seeking help is a sign of strength, not weakness. Many men successfully overcome fertility challenges with proper diagnosis and treatment. Our clinic provides a supportive, judgment-free environment where both partners receive equal attention and care throughout the fertility journey."
      }
    ]
  },
  {
    id: 6,
    title: "Endometriosis and Fertility: Treatment Options That Work",
    excerpt: "Exploring the latest treatment approaches for endometriosis and their impact on fertility outcomes.",
    category: "treatments",
    readTime: "9 min read",
    date: "March 2, 2024",
    author: "Dr. Sarah Johnson",
    image: "endometriosis",
    content: [
      {
        type: 'paragraph',
        text: "Endometriosis affects approximately 1 in 10 women during their reproductive years and is a leading cause of infertility. This condition occurs when tissue similar to the uterine lining grows outside the uterus, causing pain, inflammation, and fertility challenges. However, with proper treatment, many women with endometriosis can conceive."
      },
      {
        type: 'heading',
        text: "Understanding Endometriosis"
      },
      {
        type: 'paragraph',
        text: "Endometriosis can affect fertility in several ways: by causing inflammation and scarring, distorting pelvic anatomy, affecting egg quality, and interfering with embryo implantation. The severity of symptoms doesn't always correlate with the impact on fertility, which is why proper diagnosis and treatment are essential."
      },
      {
        type: 'heading',
        text: "Common Symptoms"
      },
      {
        type: 'list',
        items: [
          "Painful periods (dysmenorrhea) that worsen over time",
          "Chronic pelvic pain and pain during intercourse",
          "Pain with bowel movements or urination during menstruation",
          "Heavy menstrual bleeding or bleeding between periods",
          "Fatigue and digestive issues",
          "Difficulty conceiving after 12 months of trying"
        ]
      },
      {
        type: 'heading',
        text: "Diagnosis Methods"
      },
      {
        type: 'paragraph',
        text: "Diagnosing endometriosis typically involves a combination of pelvic examination, ultrasound imaging, and in some cases, laparoscopy (a minimally invasive surgical procedure that allows direct visualization of endometrial tissue). Early diagnosis is crucial for preserving fertility and managing symptoms effectively."
      },
      {
        type: 'quote',
        text: "Endometriosis may be a challenge, but it's not an insurmountable barrier to motherhood. With the right treatment plan, pregnancy is possible."
      },
      {
        type: 'heading',
        text: "Treatment Approaches"
      },
      {
        type: 'paragraph',
        text: "Treatment plans are personalized based on the severity of endometriosis, symptoms, and fertility goals:"
      },
      {
        type: 'list',
        items: [
          "Pain management with NSAIDs and hormonal therapies",
          "Laparoscopic surgery to remove endometrial tissue and adhesions",
          "Ovulation induction with fertility medications",
          "Intrauterine insemination (IUI) for mild to moderate cases",
          "IVF with or without prior surgical treatment for severe cases",
          "Combined medical and surgical approaches for optimal outcomes"
        ]
      },
      {
        type: 'heading',
        text: "IVF and Endometriosis"
      },
      {
        type: 'paragraph',
        text: "For women with moderate to severe endometriosis, IVF often provides the best chance of conception. IVF bypasses many of the anatomical issues caused by endometriosis and can be highly successful, especially when combined with appropriate pre-treatment. Studies show that women with endometriosis can achieve pregnancy rates comparable to other IVF patients with proper management."
      },
      {
        type: 'heading',
        text: "Living with Endometriosis"
      },
      {
        type: 'paragraph',
        text: "Managing endometriosis is an ongoing process that extends beyond fertility treatment. Lifestyle modifications such as regular exercise, anti-inflammatory diet, stress management, and pain management strategies can significantly improve quality of life. Our multidisciplinary team provides comprehensive care addressing both fertility goals and overall well-being, ensuring you receive support throughout your journey to parenthood and beyond."
      }
    ]
  }
];
