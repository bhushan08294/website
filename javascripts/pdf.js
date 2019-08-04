/**
 * PSPDFKit.load() accepts a configuration object with the following required values:
 *
 * container {string | HTMLElement} — Selector or element where PSPDFKit will be mounted.
 * documentId {string}  — Document ID to load.
 * authPayload {Object} — JSON Web Token in the format `{ jwt: 'xxx.xxx.xxx' }`.
 * instant {boolean}    — The trial release gives you the option to try PSPDFKit Instant —
 *                        our real-time, cross-platform, sync engine — by setting `instant: true`.
 */
PSPDFKit.load({
  container: "#pspdfkit",
  documentId: documentId,
  authPayload: authPayload,
  instant: true
})
  .then(function(instance) {
    instance.totalPageCount; // => 10

    const viewState = instance.viewState;
    viewState.currentPageIndex; // => 0
    instance.setViewState(viewState.set("currentPageIndex", 1));
  })
  .catch(function(error) {
    console.error(error.message);
  });
