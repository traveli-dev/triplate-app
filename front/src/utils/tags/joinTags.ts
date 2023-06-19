export const joinTags = (tags: string[] | null | undefined) => {
  return tags ? `#${tags.join(' #')}` : ''
}
