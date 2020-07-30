browser.menus.create({
  id: "save-as-pdf",
  title: "Save as PDF...",
  contexts: ["all"],
  onclick: (() => browser.tabs.saveAsPDF({}))
})
