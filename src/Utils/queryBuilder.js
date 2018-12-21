export function queryBuilder(showMore, queries, lastVidId){
  let str = ""
  Object.keys(queries).forEach((prop, i) => {
    if (queries[prop].value){
      name = queries[prop].fields ? `fields[${prop}]` : prop;
      const query = `${name}=${queries[prop].value}`
      str += str.length === 0 ? `?${query}` : `&${query}`
      console.log(str);
    }
  })
  str += !showMore ? "" : (str = str.length === 0 ? `?before=${lastVidId}` : `&before=${lastVidId}`)
  return str;
}
