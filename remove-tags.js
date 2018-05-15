const reStripHtml = /<.+?>/g
const reNewLine = /\r?\n|\r/g

export function removeHtmlTags (data) {
  return data.replace(reStripHtml, '').replace(reNewLine, '')
}