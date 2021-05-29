const model = require('../../models/game')

const findById = async (d) => {
  return new Promise(async (resolve, reject) => {
    let res = await model.findById(d)
    resolve(res)
  });
}

const insertOne = async (d) => {
  return new Promise(async (resolve, reject) => {
    let res = await model.insertOne(d)
    resolve(res)
  });
}

const getConsoles = async (d) => {
  return new Promise(async (resolve, reject) => {
    let res = await model.getConsoles(d)
    res = toOptions(res)
    resolve(res)
  });
}

const getYears = async (d) => {
  return new Promise(async (resolve, reject) => {
    const res = [
      { key: 'k00', text: 2000, value: 2000 }, { key: 'k01', text: 2001, value: 2001 }, { key: 'k02', text: 2002, value: 2002 }, { key: 'k03', text: 2003, value: 2003 }, { key: 'k04', text: 2004, value: 2004 }, { key: 'k05', text: 2005, value: 2005 }, { key: 'k06', text: 2006, value: 2006 }, { key: 'k07', text: 2007, value: 2007 }, { key: 'k08', text: 2008, value: 2008 }, { key: 'k09', text: 2009, value: 2009 },
      { key: 'k10', text: 2010, value: 2010 }, { key: 'k11', text: 2011, value: 2011 }, { key: 'k12', text: 2012, value: 2012 }, { key: 'k13', text: 2013, value: 2013 }, { key: 'k14', text: 2014, value: 2014 }, { key: 'k15', text: 2015, value: 2015 }, { key: 'k16', text: 2016, value: 2016 }, { key: 'k17', text: 2017, value: 2017 }, { key: 'k18', text: 2018, value: 2018 },
      { key: 'k19', text: 2019, value: 2019 }, { key: 'k20', text: 2020, value: 2020 }, { key: 'k21', text: 2021, value: 2021 }
    ]
    resolve(res)
  });
}

const getDeveloper = async (d) => {
  return new Promise(async (resolve, reject) => {
    let res = await model.getDeveloper(d)
    res = toOptions(res)
    resolve(res)
  });
}

const toOptions = async (d) => {
  return new Promise(function(resolve, reject) {
    const arr = []
    d.forEach((item, i) => {
      arr.push({ key: item._id, text: item.name, value: item.name })
    });
    resolve(arr)
  });
}

module.exports.findById = findById;
module.exports.insertOne = insertOne;
module.exports.getConsoles = getConsoles;
module.exports.getYears = getYears;
module.exports.getDeveloper = getDeveloper;
