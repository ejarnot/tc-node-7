export function urlSafe(term) {
  return term.replace(/ /g, "-");
}

export function stripTopic(pathname) {
  return pathname.slice(1).split("/")[0];
}
