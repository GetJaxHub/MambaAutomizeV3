export function scrollToSection(sectionId: string) {
  // Remove the leading # if present
  const id = sectionId.startsWith("#") ? sectionId.substring(1) : sectionId

  // Find the element
  const element = document.getElementById(id)

  // If element exists, scroll to it
  if (element) {
    // Get the header height to offset the scroll position
    const headerHeight = 80 // Approximate header height in pixels
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })

    // Update URL without reloading the page
    history.pushState(null, "", `#${id}`)
    return true
  }

  return false
}
