import Mock from "../mock";

const database = {
  information: {
    name: 'Adrian Callies',
    aboutContent: "I am a software engineer. I can provide clean code that is optimal but simple. I also build dynamic applications to serve people's needs in a world that is technologically changing...",
    age: 25,
    phone: '210-387-4999',
    nationality: 'African-American',
    language: 'English',
    email: 'acallies15@apu.edu',
    location: 'Los Angeles, CA, USA',
    freelanceStatus: 'Part-Time',
    enterprise: 'Full-Time',
    socialLinks: {
      facebook: 'https://www.facebook.com/amikecallies',
      linkedin: 'https://www.linkedin.com/in/adrian-callies-05287894',
      github: 'https://github.com/amikecallies'
    },
    brandImage: '/images/portfolio-profile-pic-2.jpg',
    aboutImage: '/images/portfolio-profile-pic-3.jpg',
    aboutImageLg: '/images/portfolio-profile-pic-3.jpg',
    resumefile: '/files/Resume_AdrianCallies.pdf'
  },
  services: [
    {
      title: "Front-End Development",
      icon: 'code',
      details: "Ability to create responsive web and mobile user interfaces cross-platorm for user experiences."
    },
    {
      title: "Back-End Development",
      icon: 'code',
      details: "Rising proficiency in developing REST API'S with a passion for building scalable Microservices for large distributed systems."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Adrian has a keen insight and knack for solving tricky problems. He is mindful of the entire system and not just an individual feature when building software. I would work with him any chance I could!",
      author: {
        name: 'Sean Patterson',
        designation: 'Software Development Director, Fresh Consulting'
      }
    },
    {
      id: 2,
      content: "Kristin's Review.",
      author: {
        name: 'Kristin Beardsley',
        designation: 'Sr. Recruiter, Apple'
      }
    },
    {
      id: 3,
      content: "Adrian is a great team player and a competent engineer!",
      author: {
        name: 'Nicholas Chera',
        designation: 'Software Engineer, Google'
      }
    },
    {
      id: 4,
      content: "Chuck's Review.",
      author: {
        name: 'Chuck Lohr',
        designation: 'Software Development Consultant, CalPortland Company'
      }
    }    
  ],
  skills: [
    {
      title: "HTML5",
      value: 75
    },
    {
      title: "CSS3",
      value: 75
    },
    {
      title: "Javascript",
      value: 75
    },
    {
      title: "C#",
      value: 70
    },
    {
      title: "ReactJS",
      value: 65
    },
    {
      title: "Java",
      value: 70
    },
    {
      title: "SQL",
      value: 70
    }, 
    {
      title: "NoSQL",
      value: 50
    }    
  ],
  portfolios: [
    {
      id: 1,
      title: "The New Home Realty App 2.0",
      subtitle: "A simple web application for a private Real Estate company (Still in beta)",
      imageUrl: "/images/warning-image.jpg",
      largeImageUrl: ["/images/warning-image.jpg"],
      url: 'https://inspiring-borg-b234a2.netlify.app' //http://newhomerealtytx.com
    }/*,
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 4,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 10,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 11,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 12,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 13,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 14,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 15,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 16,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 17,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 18,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 19,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 20,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 21,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 22,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 23,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    }*/
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2020 - Present",
        position: "Information Technology Associate",
        company: "Ingram Micro",
        details: ""
      },
      {
        id: 2,
        year: "2018 - 2020",
        position: "Associate Software Developer",
        company: "CalPortland",
        details: ""
      },
      {
        id: 3,
        year: "2018",
        position: "Software Developer Intern",
        company: "CalPortland",
        details: ""
      },
      {
        id: 4,
        year: "2017",
        position: "Software Developer Intern",
        company: "CalPortland",
        details: ""
      },
      {
        id: 5,
        year: "2016",
        position: "Software Developer Intern",
        company: "Power Settlements",
        details: ""
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - Present",
        graduation: "Master Arts of Pastoral Studies",
        university: "Azusa Pacific University",
        details: ""
      },
      {
        id: 2,
        year: "2015 - 2018",
        graduation: "Bachelor of Science: Computer Science",
        university: "Azusa Pacific University",
        details: ""
      },
      {
        id: 3,
        year: "2011 - 2014",
        graduation: "Higher School Diploma",
        university: "Kimball Union Academy",
        details: ""
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Coding for Christ!',
      featuredImage: '/images/typing-image.jpg',
      filesource: '../../blog/coding-4-christ.md',
      createDay: "25",
      createMonth: 'August',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Our "Code" is not our own',
      featuredImage: '/images/blue-matrix-code.jpg',
      filesource: '../../blog/our-work-not-ours.md',
      createDay: "27",
      createMonth: 'August',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'The Dev\'s excellence of Christ',
      featuredImage: '/images/follow-me-christ.jpg',
      filesource: '../../blog/excellence-christ-dev.md',
      createDay: "27",
      createMonth: 'August',
      createYear: "2020"
    }/*,
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }*/
  ],
  contactInfo: {
    phoneNumbers: ['+1 210-387-4999'],
    emailAddress: ['Please submit the form on this page to send Adrian an email.'],
    address: 'Los Angeles, CA, USA'
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});