jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"salesorders/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"salesorders/test/integration/pages/App",
	"salesorders/test/integration/pages/Browser",
	"salesorders/test/integration/pages/Master",
	"salesorders/test/integration/pages/Detail",
	"salesorders/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "salesorders.view."
	});

	sap.ui.require([
		"salesorders/test/integration/NavigationJourneyPhone",
		"salesorders/test/integration/NotFoundJourneyPhone",
		"salesorders/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});