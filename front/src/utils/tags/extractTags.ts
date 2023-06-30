export const extractTags = (str: string) => {
  const tags = str.match(/#[^\s#]+/g)
  if (!tags) {
    return []
  }
  return tags.map((tag) => tag.slice(1))
}
