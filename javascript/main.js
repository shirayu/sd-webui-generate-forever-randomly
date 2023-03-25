gradioApp().addEventListener("click", function (ev) {
  let target;
  if (!ev.composed) {
    target = event.target;
  } else {
    target = event.composedPath()[0];
  }

  if (
    target.tagName.toLowerCase() != "a" ||
    target.innerText != "Generate forever"
  ) {
    return;
  }

  function get_active_tab() {
    for (const name of ["img2img", "txt2img"]) {
      const tab = gradioApp().getElementById(`tab_${name}`);
      if (tab && tab.style.display !== "none") {
        return name;
      }
    }
    return null;
  }

  const active_tab = get_active_tab();
  if (active_tab === null) {
    return;
  }

  const seed_input = gradioApp()
    .getElementById(`${active_tab}_seed`)
    .querySelector("input");
  seed_input.value = -1;
  updateInput(seed_input);
});
