const fs = require('fs');
const xlsx = require('xlsx');
const path = require('path')
const stringSimilarity = require('string-similarity');

const data = [];

const tasks = xlsx.readFile(path.join(__dirname, '/resources/Tasks.xlsx'));
const tasksRow = tasks.Sheets['Sheet1']['!ref'].match(/\d+$/)[0];
const getTasks = () => {
  const allTasks = {};
  for (let i = 2; i <= tasksRow; i += 1) {
    const status = tasks.Sheets['Sheet1'][`C${i}`].v;
    const task = tasks.Sheets['Sheet1'][`A${i}`].v;
    allTasks[task] = Object.assign({'status': status, 'score': null});
  }
  return allTasks;
}

const pairs = xlsx.readFile(path.join(__dirname, '/resources/Mentor-students pairs.xlsx'));
const pairRows = pairs.Sheets['pairs']['!ref'].match(/\d+$/)[0];
const getPairs = () => {
  const allTasks = getTasks();

  for (let i = 2; i <= pairRows; i += 1) { 
    const tasks = JSON.parse(JSON.stringify(allTasks))
    if (!pairs.Sheets['pairs'][`A${i}`]) {
      continue;
    }
    const pair = {
      'mentor': pairs.Sheets['pairs'][`A${i}`].v,
      'student': pairs.Sheets['pairs'][`B${i}`].v,
    }
    data.push(Object.assign(pair, tasks))
  }
}
getPairs();

const score = xlsx.readFile(path.join(__dirname, '/resources/Mentor score.xlsx'));

const scoreRows = score.Sheets['Form Responses 1']['!ref'].match(/\d+$/)[0];
const fieldMapping = {
  'task': 'D',
  'score': 'F',
  'student': 'C',
}

const getScore = () => {
  data.forEach(item => {

    for (let i = 2; i <= scoreRows; i++) {  
      const student = score.Sheets['Form Responses 1'][fieldMapping.student + i].v.toLowerCase()

      if (student.includes(item.student)) {
        const task = score.Sheets['Form Responses 1'][fieldMapping.task + i].v;
        let key = Object.keys(item).filter(item => stringSimilarity.compareTwoStrings(item, task) > 0.7);
        if(!key.length) {
          key = task;
          item[key] = score.Sheets['Form Responses 1'][fieldMapping.score + i].v;
        } else {
          item[key]['score'] = score.Sheets['Form Responses 1'][fieldMapping.score + i].v;
        }
      } 
    }
  })
} 

getScore()
const stringifiedData = JSON.stringify(data);
fs.writeFile('./public/data.json', stringifiedData, 'utf8', () => {
  console.log('done')
});
