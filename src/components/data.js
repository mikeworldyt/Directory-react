// data.js
const levelsData = {
  alldata: [
    { id: '100' , level: 1, label: '100.Personal', data: [
      { id: '110' , level: 2, label: 'Documentation' }
    ] },

    { id: '200' , level: 1, label: '200.Work', data: [
      { id: '210' , level: 2, label: 'Photography', data:[
        { id: '211' , level: 3, label: 'Travel Photography', data:[
          { id: '211_01' , level: 4, label: 'Japan'},
        ] },
        { id: '212' , level: 3, label: 'Nature Photography', data: [
          { id: '212_01' , level: 4, label: 'Taiwan'},
        ] },
      ] },
      { id: '220' , level: 2, label: 'Frontend', data:[
        { id: '221' , level: 3, label: 'React' },
      ]
    },
    ] },

    { id: '300' , level: 1, label: '300.Projects' , data: [

    ] },

    { id: '400' , level: 1, label: '400.Academic', data: [
      { id: '410' , level: 2, label: '01.Lenguage', data: [
        {id: '411' , level: 3, label: 'Grammar'},
      ] },

      { id: '420' , level: 2, label: '02.ForeignLenguage', data: [
        {id: '421' , level: 3, label: 'Spanish', data: [
          { id: '421_01' , level: 4, label: 'Gramatica'},
        ] },
      ] },
      { id: '430' , level: 2, label: '03.Graphic Design', data: [
        { id : '431' , level: 3, label: '01.Foundations' },
        { id : '433' , level: 3, label: '02.Concept' },
        { id : '432' , level: 3, label: '03.Branding' },
        { id : '434' , level: 3, label: '04.Graphic Editors' },
        { id : '435' , level: 3, label: '05.User Experience' },
        { id : '436' , level: 3, label: '06.Final Project' },
        { id : '437' , level: 3, label: '90.Resources' },
        { id : '438' , level: 3, label: '98.Review' },

      ] },
      { id: '440' , level: 2, label: '04.Development', data: [
        {id: '441' , level: 3, label: 'Frontend'},
        {id: '442' , level: 3, label: 'Backend'},
        {id: '443' , level: 3, label: 'Data Science'},
        {id: '444' , level: 3, label: 'Machine Learning'},
        {id: '445' , level: 3, label: 'Mobile Development'},
      ] },
      { id: '450' , level: 2, label: '90.Resources', data: [ 
        { id: '451' , level: 3, label: 'RSR_8Grd_schoolSchedule.pdf'},
      ] },
      { id: '460' , level: 2, label: '97.Undefined' },
      { id: '470' , level: 2, label: '98.Review', data: [ 
        { id: '471' , level: 3, label: 'GBH3-ipWEAA5lsf.jpg'},
        { id: '462' , level: 3, label: 'IMG-20220217-WA0006.jpg'},
        { id: '463' , level: 3, label: 'IMG-20220217-WA0007.jpg'},
        { id: '464' , level: 3, label: 'IMG-20220217-WA0008.jpg'},
        { id: '465' , level: 3, label: 'math-presentation.pdf'},
        { id: '466' , level: 3, label: 'MrSmith-test.zip'},
      ] },
    ] },

    { id: '500' , level: 1, label: '500.Hobbies', data: [
      { id: '510' , level: 2, label: '01.Games'},
      { id: '520' , level: 2, label: '02.Art'},
      { id: '530' , level: 2, label: '03.Podcast'},
      { id: '540' , level: 2, label: '04.Music'},
      { id: '550' , level: 2, label: '05.Recipes'},
      { id: '560' , level: 2, label: '90.Resources'},
    ] },

    { id: '600' , level: 1, label: '900.Resources', data: [
      { id: '610' , level: 2, label: 'test'}, 
    ] },

    { id: '700' , level: 1, label: '998.Review', data: [
      { id: '710' , level: 2, label: 'test'}, 
    ] },

    { id: '800' , level: 1, label: '999.Settings', data: [
      { id: '810' , level: 2, label: 'test'}, 
    ] }
  ]
};

export default levelsData;