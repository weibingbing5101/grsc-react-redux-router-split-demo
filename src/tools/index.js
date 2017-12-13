// josn 转换为  ?key=value&key=value
export function convertParamToQuery(params: {}){
  return Object.keys(params).map((key) => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
  }).join('&');
};
