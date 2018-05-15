const reStripHtml = /<.+?>/g
const reRemoveNewLine = /\r?\n|\r/g

export function removeHtmlTags (data) {
  return data.replace(reStripHtml, '').replace(reRemoveNewLine, '')
}
