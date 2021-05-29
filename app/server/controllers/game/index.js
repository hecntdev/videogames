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
      { key: 2000, text: 2000, value: 2000 }, { key: 2001, text: 2001, value: 2001 }, { key: 2002, text: 2002, value: 2002 }, { key: 2003, text: 2003, value: 2003 }, { key: 2004, text: 2004, value: 2004 }, { key: 2005, text: 2005, value: 2005 }, { key: 2006, text: 2006, value: 2006 }, { key: 2007, text: 2007, value: 2007 }, { key: 2008, text: 2008, value: 2008 }, { key: 2009, text: 2009, value: 2009 },
      { key: 2010, text: 2010, value: 2010 }, { key: 2011, text: 2011, value: 2011 }, { key: 2012, text: 2012, value: 2012 }, { key: 2012, text: 2012, value: 2012 }, { key: 2013, text: 2013, value: 2013 }, { key: 2014, text: 2014, value: 2014 }, { key: 2015, text: 2015, value: 2015 }, { key: 2016, text: 2016, value: 2016 }, { key: 2017, text: 2017, value: 2017 }, { key: 2018, text: 2018, value: 2018 },
      { key: 2019, text: 2019, value: 2019 }, { key: 2020, text: 2020, value: 2020 }, { key: 2021, text: 2021, value: 2021 }
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
