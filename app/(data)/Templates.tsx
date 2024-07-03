export default [
  {
    name: "Blog Title Generator",
    desc: "An AI Tool that generates blog titles based on your blog information.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2593/2593510.png",
    aiPrompt:
      "Provide me with five blog topic ideas in bullet points only based on the given niche and outline. Give me result in Rich Text Editor format.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        fieldType: "input",
        name: "niche",
        required: true,
      },
      {
        label: 'Enter blog outline',
        fieldType: 'textarea',
        name: 'outline',
      }
    ],
  },
  {
    name: "Hashtag Generator",
    desc: "An AI Tool that generates relevant hashtags based on your provided keywords.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/1628/1628649.png",
    aiPrompt:
      "Generate a list of 10 relevant hashtags based on the provided keywords. Give me result in Rich Text Editor format.",
    slug: "generate-hashtags",
    form: [
      {
        label: "Enter your keywords",
        fieldType: "input",
        name: "keywords",
        required: true,
      }
    ],
  },
  {
    name: "Instagram Caption Suggestor",
    desc: "An AI Tool that suggests Instagram captions based on the provided image description.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/15565/15565944.png",
    aiPrompt:
      "Provide three Instagram caption suggestions based on the given image description. Give me result in Rich Text Editor format.",
    slug: "suggest-instagram-caption",
    form: [
      {
        label: "Enter image description",
        fieldType: "textarea",
        name: "imageDescription",
        required: true,
      }
    ],
  },
  {
    name: "SEO Keywords Generator",
    desc: "An AI Tool that generates SEO keywords based on your provided content description.",
    category: "SEO",
    icon: "https://cdn-icons-png.flaticon.com/128/2977/2977742.png",
    aiPrompt:
      "Generate a list of 10 SEO keywords based on the provided content description. Give me result in Rich Text Editor format.",
    slug: "generate-seo-keywords",
    form: [
      {
        label: "Enter content description",
        fieldType: "textarea",
        name: "contentDescription",
        required: true,
      }
    ],
  },
  {
    name: "Email Subject Line Generator",
    desc: "An AI Tool that generates catchy email subject lines based on the provided email content.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/95/95663.png",
    aiPrompt:
      "Generate three catchy email subject lines based on the provided email content. Give me result in Rich Text Editor format.",
    slug: "generate-email-subject-lines",
    form: [
      {
        label: "Enter email content",
        fieldType: "textarea",
        name: "emailContent",
        required: true,
      }
    ],
  },
  {
    name: "AI Mock Interviewer",
    desc: "An AI Tool that helps you prepare for your interview by conducting mock interviews.",
    category: "Interview",
    icon: "https://cdn-icons-png.flaticon.com/128/16743/16743271.png",
    slug: "ai-mock-interview",
  },
  {
    name: "Product Description Generator",
    desc: "An AI Tool that generates engaging product descriptions based on the provided product details.",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/7033/7033287.png",
    aiPrompt:
      "Generate an engaging product description based on the provided product details. Give me result in Rich Text Editor format.",
    slug: "generate-product-description",
    form: [
      {
        label: "Enter product details",
        fieldType: "textarea",
        name: "productDetails",
        required: true,
      }
    ],
  },
];
