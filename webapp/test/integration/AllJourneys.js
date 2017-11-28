jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SalesOrderHeaders in the list
// * All 3 SalesOrderHeaders have at least one Items

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
		"salesorders/test/integration/MasterJourney",
		"salesorders/test/integration/NavigationJourney",
		"salesorders/test/integration/NotFoundJourney",
		"salesorders/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});