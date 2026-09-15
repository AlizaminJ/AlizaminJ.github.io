(() => {
  const textElement = document.querySelector("#typing-text");

  if (!textElement || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const phrases = [
    "Architecting Modern Data & AI Platforms",
    "Turning Data into Products",
    "Building Trusted, Scalable Data Systems",
    "From Data Strategy to Production",
    "Cloud-Native Data & AI Solutions",
    "Data Products, AI Agents, and Intelligent Automation",
    "Secure, Governed, Self-Service Data Platforms"
  ];
  const typingSpeed = 65;
  const deletingSpeed = 35;
  const readingPause = 2200;
  const transitionPause = 500;
  let phraseIndex = 0;
  let characterIndex = phrases[phraseIndex].length;
  let isDeleting = true;

  const typeNextCharacter = () => {
    const phrase = phrases[phraseIndex];
    textElement.textContent = phrase.slice(0, characterIndex);

    if (isDeleting && characterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      characterIndex = 0;
      window.setTimeout(typeNextCharacter, transitionPause);
      return;
    }

    if (!isDeleting && characterIndex === phrase.length) {
      isDeleting = true;
      window.setTimeout(typeNextCharacter, readingPause);
      return;
    }

    characterIndex += isDeleting ? -1 : 1;
    window.setTimeout(typeNextCharacter, isDeleting ? deletingSpeed : typingSpeed);
  };

  window.setTimeout(typeNextCharacter, readingPause);
})();