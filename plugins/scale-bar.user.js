// ==UserScript==
// @id             iitc-plugin-scale-bar-2@breunigs2
// @name           IITC plugin: scale bar 2
// @category       Controls
// @version        0.1.0.@@DATETIMEVERSION@@
// @namespace      https://github.com/jonatkins/ingress-intel-total-conversion
// @updateURL      @@UPDATEURL@@
// @downloadURL    @@DOWNLOADURL@@
// @description    [@@BUILDNAME@@-@@BUILDDATE@@] Show scale bar on the map.
// @include        https://*.ingress.com/intel*
// @include        http://*.ingress.com/intel*
// @match          https://*.ingress.com/intel*
// @match          http://*.ingress.com/intel*
// @include        https://*.ingress.com/mission/*
// @include        http://*.ingress.com/mission/*
// @match          https://*.ingress.com/mission/*
// @match          http://*.ingress.com/mission/*
// @grant          none
// ==/UserScript==

@@PLUGINSTART@@

// PLUGIN START ////////////////////////////////////////////////////////


// use own namespace for plugin
window.plugin.scaleBar2 = function() {};

window.plugin.scaleBar2.setup  = function() {
  // Before you ask: yes, I explicitely turned off imperial units. Imperial units
  // are worse than Internet Explorer 6 whirring fans combined. Upgrade to the metric
  // system already.
  if (window.isSmartphone()) {
      $('head').append('<style>.leaflet-control-scale { position: absolute; bottom: 15px; right: 0px; margin-bottom: 20px !important; } </style>');
      window.map.addControl(new L.Control.Scale({position: 'bottomright', imperial: false, maxWidth: 100}));
  } else {
      $('head').append('<style>.leaflet-control-scale { position: absolute; top: 20px; left: 40px; } </style>');
      window.map.addControl(new L.Control.Scale({position: 'topleft', imperial: false, maxWidth: 200}));
  }
};

var setup =  window.plugin.scaleBar2  .setup;

// PLUGIN END //////////////////////////////////////////////////////////

@@PLUGINEND@@
