export const downloadResumeAsPDF = () => {
  const link = document.createElement("a")
  link.href = "/SH_132_Resume.pdf" // Serving from the public folder
  link.download = "SH_132_Resume.pdf"
  link.target = "_blank"

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
