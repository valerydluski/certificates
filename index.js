const DATA = [
  {
    name: 'RS 2020 Q1 (JavaScript)',
    certificateLink: './assets/certificates/01a7kz09.pdf',
    imgLink: './assets/img/01a7kz09.png',
  },
  {
    name: 'NODEJS 2020 Q3 (JAVASCRIPT)',
    certificateLink: './assets/certificates/aepcuakc.pdf',
    imgLink: './assets/img/aepcuakc.png',
  },
  {
    name: 'Advanced Express',
    certificateLink: './assets/certificates/CertificateOfCompletion_Advanced Express.pdf',
    imgLink: './assets/img/CertificateOfCompletion_Advanced Express.png',
  },
  {
    name: 'Building a Website with Node.js and Express.js',
    certificateLink:
      './assets/certificates/CertificateOfCompletion_Building a Website with Node.js and Express.js.pdf',
    imgLink:
      './assets/img/CertificateOfCompletion_Building a Website with Node.js and Express.js.png',
  },
  {
    name: 'CertificateOfCompletion_Computer Science Principles Lab JavaScript',
    certificateLink:
      './assets/certificates/CertificateOfCompletion_Computer Science Principles Lab JavaScript.pdf',
    imgLink: './assets/img/CertificateOfCompletion_Computer Science Principles Lab JavaScript.png',
  },
  {
    name: 'CSS: Advanced Layouts with Grid',
    certificateLink:
      './assets/certificates/CertificateOfCompletion_CSS Advanced Layouts with Grid.pdf',
    imgLink: './assets/img/CertificateOfCompletion_CSS Advanced Layouts with Grid.png',
  },
  {
    name: 'Getting Started with CSS for React Developers',
    certificateLink:
      './assets/certificates/CertificateOfCompletion_Getting Started with CSS for React Developers.pdf',
    imgLink:
      './assets/img/CertificateOfCompletion_Getting Started with CSS for React Developers.png',
  },
  {
    name: 'JavaScript: Patterns',
    certificateLink: './assets/certificates/CertificateOfCompletion_JavaScript Patterns.pdf',
    imgLink: './assets/img/CertificateOfCompletion_JavaScript Patterns.png',
  },
  {
    name: 'Learning TypeScript',
    certificateLink: './assets/certificates/CertificateOfCompletion_Learning TypeScript.pdf',
    imgLink: './assets/img/CertificateOfCompletion_Learning TypeScript.png',
  },
  {
    name: 'React Hooks',
    certificateLink: './assets/certificates/CertificateOfCompletion_React Hooks.pdf',
    imgLink: './assets/img/CertificateOfCompletion_React Hooks.png',
  },
  {
    name: 'React React Router',
    certificateLink: './assets/certificates/CertificateOfCompletion_React React Router.pdf',
    imgLink: './assets/img/CertificateOfCompletion_React React Router.png',
  },
  {
    name: 'React Using TypeScript',
    certificateLink: './assets/certificates/CertificateOfCompletion_React Using TypeScript.pdf',
    imgLink: './assets/img/CertificateOfCompletion_React Using TypeScript.png',
  },
  {
    name: 'Visual Studio Tips for Web Developers',
    certificateLink:
      './assets/certificates/CertificateOfCompletion_Visual Studio Tips for Web Developers.pdf',
    imgLink: './assets/img/CertificateOfCompletion_Visual Studio Tips for Web Developers.png',
  },
  {
    name: 'CSS Display',
    certificateLink: './assets/certificates/CertificateOfCompletion_CSS Display.pdf',
    imgLink: './assets/img/CertificateOfCompletion_CSS Display.png',
  },
];

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
