chrome.extension.sendMessage({}, function(response) {
  setInterval(() => {
    if (document.readyState === "complete") {

      for (const a of document.getElementsByClassName('ak-renderer-document')) {
        const matchingElement = a.children[0]
        if (matchingElement.textContent.includes("customdiff")) {
          matchingElement.style.display = 'none'

          const [originalCode, refactoredCode] = a.querySelectorAll('code')
          originalCode.style.background = '#ffecec'
          refactoredCode.style.background = '#dbffdb'

          const originalCodeLines = originalCode.childNodes
          originalCodeLines.forEach(line => {
            if (!line.textContent.includes('-') && !!line.textContent && line.textContent !== '\n') {
              line.textContent = `- ${line.textContent}`
            }
          })

          const refactoredCodeLines = refactoredCode.childNodes
          refactoredCodeLines.forEach(line => {
            if (!line.textContent.includes('+') && !!line.textContent && line.textContent !== '\n') {
              line.textContent = `+ ${line.textContent}`
            }
          })

        }
      }
    }
  }, 500);
});
