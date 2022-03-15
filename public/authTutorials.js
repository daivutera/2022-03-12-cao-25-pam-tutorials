const URL = 'http://localhost:3000';
const myTutBtnEl = document.querySelector('#my-tutorials');

async function getTutorialsforWeb() {
  const token = localStorage.getItem('token24');
  const resp = await fetch(`${URL}/tutorials`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const dataInJs = await resp.json();
  console.log('dataInJs===', dataInJs);
  const buttonEl = document.querySelector('button');

  const content = document.querySelector('.content');
  dataInJs.data.forEach((tutorial) => {
    const divOfTutorial = document.createElement('div');
    divOfTutorial.classList.add('tutorial-div');
    const h3Title = document.createElement('h3');
    h3Title.innerText = tutorial.title;
    const pContent = document.createElement('p');
    pContent.innerText = tutorial.content;
    divOfTutorial.append(h3Title, pContent);
    content.append(divOfTutorial);
  });
}
getTutorialsforWeb();

myTutBtnEl.addEventListener('click', getTutorialsforWeb);
