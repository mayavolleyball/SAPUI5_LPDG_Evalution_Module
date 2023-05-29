/*global QUnit*/

sap.ui.define([
	"device-recognition/controller/propertySelection.controller"
], function (Controller) {
	"use strict";

	QUnit.module("propertySelection Controller");

	QUnit.test("I should test the propertySelection controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
