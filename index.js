const DATA = [
  {
    name: 'RS 2020 Q1 (JavaScript)',
    certificateLink: './assets/certificates/01a7kz09.pdf',
    imgLink: './assets/img/01a7kz09.png',
    completedDate: '2020-07-31',
    skillsCovered: ['JavaScript', 'Cascading Style Sheets (CSS)'],
  },
  {
    name: 'NODEJS 2020 Q3 (JAVASCRIPT)',
    certificateLink: './assets/certificates/aepcuakc.pdf',
    imgLink: './assets/img/aepcuakc.png',
    completedDate: '2020-11-14',
    skillsCovered: ['Express.js', 'JavaScript', 'Node.js'],
  },
  {
    name: 'Building RESTful APIs with Node.js and Express',
    certificateLink:
      './assets/certificates/CertificateOfCompletion_Building RESTful APIs with Node.js and Express.pdf',
    imgLink:
      './assets/img/CertificateOfCompletion_Building RESTful APIs with Node.js and Express.png',
    completedDate: '2021-03-14',
    skillsCovered: ['Express.js', 'REST APIs', 'RESTful WebServices', 'Node.js'],
  },
  {
    name: 'Node.js: Microservices',
    certificateLink: './assets/certificates/CertificateOfCompletion_Node.js Microservices.pdf',
    imgLink: './assets/img/CertificateOfCompletion_Node.js Microservices.png',
    completedDate: '2021-03-08',
    skillsCovered: ['Microservices', 'Node.js', 'Back-End Web Development'],
  },
  {
    name: 'Advanced Express',
    certificateLink: './assets/certificates/CertificateOfCompletion_Advanced Express.pdf',
    imgLink: './assets/img/CertificateOfCompletion_Advanced Express.png',
    completedDate: '2021-02-21',
    skillsCovered: ['Express.js', 'Front-end Development', 'Node.js', 'Back-End Web Development'],
  },
  {
    name: 'Building a Website with Node.js and Express.js',
    certificateLink:
      './assets/certificates/CertificateOfCompletion_Building a Website with Node.js and Express.js.pdf',
    imgLink:
      './assets/img/CertificateOfCompletion_Building a Website with Node.js and Express.js.png',
    completedDate: '2021-01-27',
    skillsCovered: ['Express.js', 'Web Development', 'Node.js'],
  },
  {
    name: 'Computer Science Principles Lab: JavaScript',
    certificateLink:
      './assets/certificates/CertificateOfCompletion_Computer Science Principles Lab JavaScript.pdf',
    imgLink: './assets/img/CertificateOfCompletion_Computer Science Principles Lab JavaScript.png',
    completedDate: '2021-02-04',
    skillsCovered: ['Computer Science', 'JavaScript'],
  },
  {
    name: 'CSS: Advanced Layouts with Grid',
    certificateLink:
      './assets/certificates/CertificateOfCompletion_CSS Advanced Layouts with Grid.pdf',
    imgLink: './assets/img/CertificateOfCompletion_CSS Advanced Layouts with Grid.png',
    completedDate: '2021-01-18',
    skillsCovered: ['CSS Grid Layout', 'Front-end Development', 'Cascading Style Sheets (CSS)'],
  },
  {
    name: 'Getting Started with CSS for React Developers',
    certificateLink:
      './assets/certificates/CertificateOfCompletion_Getting Started with CSS for React Developers.pdf',
    imgLink:
      './assets/img/CertificateOfCompletion_Getting Started with CSS for React Developers.png',
    completedDate: '2020-10-31',
    skillsCovered: [
      'Front-end Development',
      'Cascading Style Sheets (CSS)',
      'JavaScript',
      'React.js',
    ],
  },
  {
    // eslint-disable-next-line no-script-url
    name: 'JavaScript: Patterns',
    certificateLink: './assets/certificates/CertificateOfCompletion_JavaScript Patterns.pdf',
    imgLink: './assets/img/CertificateOfCompletion_JavaScript Patterns.png',
    completedDate: '2020-12-17',
    skillsCovered: ['Software Design Patterns', 'JavaScript'],
  },
  {
    name: 'Learning TypeScript',
    certificateLink: './assets/certificates/CertificateOfCompletion_Learning TypeScript.pdf',
    imgLink: './assets/img/CertificateOfCompletion_Learning TypeScript.png',
    completedDate: '2020-10-17',
    skillsCovered: ['Front-end Development', 'TypeScript'],
  },
  {
    name: 'React Hooks',
    certificateLink: './assets/certificates/CertificateOfCompletion_React Hooks.pdf',
    imgLink: './assets/img/CertificateOfCompletion_React Hooks.png',
    completedDate: '2021-01-02',
    skillsCovered: ['API Development', 'React Hooks'],
  },
  {
    name: 'React: React Router',
    certificateLink: './assets/certificates/CertificateOfCompletion_React React Router.pdf',
    imgLink: './assets/img/CertificateOfCompletion_React React Router.png',
    completedDate: '2021-01-09',
    skillsCovered: ['React.js'],
  },
  {
    name: 'React: Using TypeScript',
    certificateLink: './assets/certificates/CertificateOfCompletion_React Using TypeScript.pdf',
    imgLink: './assets/img/CertificateOfCompletion_React Using TypeScript.png',
    completedDate: '2020-11-27',
    skillsCovered: ['JavaScript', 'React.js', 'TypeScript'],
  },
  {
    name: 'Visual Studio Tips for Web Developers',
    certificateLink:
      './assets/certificates/CertificateOfCompletion_Visual Studio Tips for Web Developers.pdf',
    imgLink: './assets/img/CertificateOfCompletion_Visual Studio Tips for Web Developers.png',
    completedDate: '2021-02-10',
    skillsCovered: ['Visual Studio'],
  },
  {
    name: 'CSS: Display',
    certificateLink: './assets/certificates/CertificateOfCompletion_CSS Display.pdf',
    imgLink: './assets/img/CertificateOfCompletion_CSS Display.png',
    completedDate: '2021-02-24',
    skillsCovered: ['Markup Languages', 'Cascading Style Sheets (CSS)', 'Web Design'],
  },
];

const SKILLS = [...new Set(DATA.flatMap((cert) => cert.skillsCovered))];

const createLink = (el) => {
  const link = document.createElement('a');
  link.href = el.certificateLink;
  link.className = 'link';
  link.target = '_blank';
  const img = document.createElement('img');
  img.src = el.imgLink;
  img.alt = el.name;
  link.append(img);
  return link;
};

const render = () => {
  const links = DATA.map((el) => createLink(el));
  document.body.append(...links);
};

render();
