sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";

        return Controller.extend("devicerecognition.controller.propertySelection", {
            onInit: function () {
            },
            onPressNavigationForward: function(oEvent)
            {
                //this.onInputCheck();
                // @ts-ignore
                var inputValue = this.getView().byId("myInput").getValue();
                console.log(inputValue);
                // var oItem, oContext;
                // oItem = oEvent.getSource();
                // oContext = oItem.getBindingContext();
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("propertyDelete", {
                    propertyId: inputValue
                });
                // loRouter.navTo("propertyDelete", {
                //     propertyId: oContext.getProperty("tplnr")
                // });
                
                // // @ts-ignore
                // var oRouter = this.getOwnerComponent().getRouter();
                // oRouter.navTo("propertyDelete");
            },
            onInputCheck: function(){
                // @ts-ignore
                var inputValue = this.getView().byId("myInput").getValue();
                // @ts-ignore
                console.log(inputValue);
            }
        });
    });
