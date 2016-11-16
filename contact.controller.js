(function(){ 
    var app = angular.module("mekalaapp");
    app.controller("contactCtrl", contactCtrl);

    function contactCtrl(contactdataSrvc) {
        this.contacts = contactdataSrvc.contacts;

            this.selectone = function(index){
                this.selected = this.contacts[index];
            }
    }
})();