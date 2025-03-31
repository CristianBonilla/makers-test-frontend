export function getTransitionDuration($element?: HTMLElement, ms = false) {
  return $element ? (parseFloat(window.getComputedStyle($element).transitionDuration)) * (ms ? 1000 : 1) : 0;
}
