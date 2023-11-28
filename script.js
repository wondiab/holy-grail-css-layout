function toggleClass() {
  const outerGrid =
    document.querySelector(".outer-grid"); /*selecting the outer-grid class */
  outerGrid.classList.toggle(
    "outer-grid-expanded"
  ); /*toggling it with outer-grid-expanded class */

  const nav = document.querySelector("nav"); /*selecting the nav element */
  nav.classList.toggle("hide-nav"); /*toggling it by hide-class element*/
}
