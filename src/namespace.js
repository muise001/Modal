/**
 * Create global namespace, where other globals can be attached to. If there
 * is already a 'Flipbase' namepsace available (because of the recorder for
 * example), then use that namespace instance.
 *
 * @namespace Flipbase
 * @module
 */
var Flipbase = (window.Flipbase = window.Flipbase || {});

module.exports = Flipbase;
