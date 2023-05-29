sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Core",
	"sap/ui/layout/HorizontalLayout",
	"sap/ui/layout/VerticalLayout",
	"sap/m/Dialog",
	"sap/m/Button",
	"sap/m/Label",
	"sap/m/library",
	"sap/m/MessageToast",
	"sap/m/Text",
	"sap/m/TextArea",

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    // @ts-ignore

    // @ts-ignore
    function (Controller, Core, HorizontalLayout, VerticalLayout, Dialog, Button, Label, mobileLibrary, MessageToast, Text, TextArea) {
        "use strict";

    // shortcut for sap.m.ButtonType
	// @ts-ignore
	var ButtonType = mobileLibrary.ButtonType;

	// shortcut for sap.m.DialogType
	// @ts-ignore
	var DialogType = mobileLibrary.DialogType;
    var propertyValue;

        return Controller.extend("devicerecognition.controller.Vorrat_Loschen", {
            onInit: function () {
                // @ts-ignore
                var that = this;
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.getRoute("propertyDelete").attachMatched(this._onRouteMatched, this);
                //this._onRouteMatched(oEvent);
                // @ts-ignore
                //var oModel = this.getOwnerComponent().getModel();
                 // @ts-ignore
            //    var propNum = this.getView().byId("propertyTextId").getText();
            //      // @ts-ignore
            //     //var a = this.getView().byId("myInput").getValue();
            //     // @ts-ignore
            //     var propertyNumber1 = "0002626";
            //     var propertyNumber = propNum;
            //     // @ts-ignore
            //     //console.log(propertyId);
            //     MessageToast.show(propertyValue);
            //     // @ts-ignore
            //     console.log("propertyValue: " +propertyValue);

            },
            // @ts-ignore
            _onRouteMatched: function(oEvent) {
                var oArgs, oView;
    
                oArgs = oEvent.getParameter("arguments");
                oView = this.getView();
                console.log(oArgs.propertyId);
                // oView.bindElement({
                //     path: "/lgSet('" + oArgs.propertyId + "')",
                //     events: {
                //         //change: this._onBindingChange.bind(this),
                //         // @ts-ignore
                //         // @ts-ignore
                //         dataRequested: function(oEvent) {
                //             oView.setBusy(true);
                //         },
                //         // @ts-ignore
                //         // @ts-ignore
                //         dataReceived: function(oEvent) {
                //             oView.setBusy(false);
                //         }
                //     }
                // });
                // // @ts-ignore
                propertyValue = oArgs.propertyId;
                console.log(propertyValue);
                // @ts-ignore
                this.getView().byId("propertyTextId").setText(oArgs.propertyId);
                console.log("propertyValue: " +propertyValue);
            },
            changeRegion: function(event) {
                var selectedIndexValue = event.getParameter("selectedIndex");

                if(selectedIndexValue)
                {
                // @ts-ignore
                this.getView().byId("clearStockId1").setVisible(false);
                // @ts-ignore
                this.getView().byId("forwardId1").setVisible(true);
                }
                else
                {
                // @ts-ignore
                this.getView().byId("forwardId1").setVisible(false);
                // @ts-ignore
                this.getView().byId("clearStockId1").setVisible(true);

                }
                console.log(event.getParameter("selectedIndex"));
              },
              onQueueClearance: function () {
                var that = this;
                // @ts-ignore
                if (!this.oApproveDialog) {
				// @ts-ignore
				this.oApproveDialog = new Dialog({
					type: "Message",
					title: "Confirmation",
					content: new Text({ text: 'Are you sure you want to delete entire stock?'}),
					beginButton: new Button({
						text: "Yes",
						press: function () {
                            // @ts-ignore
                            that.deleteAllData();
							MessageToast.show("Successfully deleted the  entire Stock!");
							this.oApproveDialog.close();
						}.bind(this)
					}),
					endButton: new Button({
						text: "Cancel",
						press: function () {
							this.oApproveDialog.close();
						}.bind(this)
					})
				});
			}

			// @ts-ignore
			this.oApproveDialog.open();
        },
        // @ts-ignore
        deleteAllData: function(oEvent) {
            var oModel = this.getView().getModel(); // Replace with your OData model
            var propertyNumber = "0002626";
            var obj = {};
                //suggestions,messages,pictures,bewqueue"
                obj.suggestions = [];
                obj.pictures = [];
               // obj.bewtype = [];
                obj.messages = [
                    {
                    type: "",
                    id: "",
                    number: "000",
                    message: "",
                    messagev1: "",
                    messagev2: "",
                    messagev3: "",
                    messagev4: ""
                }
            ];
                obj.bewqueue=[];
                obj.tplnr=propertyNumber;
                // @ts-ignore
                oModel.create("/lgSet", obj, {
                    // @ts-ignore
                    // @ts-ignore
                    success: function (data, response) {
                        MessageToast.show("All stocks were deleted successfully");
                    },
                    // @ts-ignore
                    // @ts-ignore
                    error: function (error) {
                        MessageToast.show("Error Occured when deleting the data");
                    }
                });
            },
        onContinue: function () {
            // @ts-ignore
            var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
            loRouter.navTo("propertiesDelete", {
                propertyId: propertyValue
            });
            console.log("Hey " + propertyValue);

        },
        onPress: function(){
            
              },
        onBack: function () {
                // @ts-ignore
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("HomePropertySelectionView", {
                    propertyId: propertyValue
                });

            }
        });
    // @ts-ignore
    });
