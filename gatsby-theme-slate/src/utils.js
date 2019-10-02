const mergeCodeBlocks = (codeBlocks) => {
  const codeGrouped = []
  codeBlocks.forEach((c, index) => {
    if (fetchChildType(c) === "language-shell") {
      const getCodeWithLanguage = getCodeFromCodeBlock(code_blocks, index)

      const code = {
        shell: c,
        javascript: getCodeWithLanguage("language-javascript--nodejs"),
        python: getCodeWithLanguage("language-python"),
        ruby: getCodeWithLanguage("language-ruby"),
        java: getCodeWithLanguage("language-java"),
      }

      codeGrouped.push(code)
    }
  });
  return codeGrouped
}

const getCodeFromCodeBlock = (codeBlocks, index) => (language) => {
  if (fetchChildType(codeBlocks[index + 1]) === language) {
    return codeBlocks[index + 1]
  }
  return false
}

const fetchChildType = (code_block) => {
  if (code_block.children[0].properties.className === undefined)
    return false
  return code_block.children[0].properties.className[0]
}
