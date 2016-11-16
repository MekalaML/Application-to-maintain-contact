var app = angular.module("mekalaapp", []);

app.value("AppDatasrvc", "Contact List View App");

app.service("Appconfig", AppConfig);
function AppConfig(AppDatasrvc) {
        //var this = {};
        this.name = AppDatasrvc;
        this.author = "Creator of app";
        this.builtdate = new Date().toDateString;
        //return this;
    }

app.service("contactdatasrv",function($http){
        
        this.getcontacts = function(){
            var promise1 = $http.get('http://localhost:3000/contacts');
            var promise2 = promise1.then(function(response){
                                 return response.data;
                               });
            return promise2;
        }

        this.saveuser = function(userData){
            return $http.put('http://localhost:3000/contacts/' + userData.id, userData).then(function(response) {
                                console.log(response);
            });
        }

        this.addnewuser = function(userData) {
            return $http.post('http://localhost:3000/contacts', userData).then(function(response) {
                                console.log(response);
            });
        }
});


app.controller("contactCtrl", contactCtrl);

    function contactCtrl(contactdatasrv) {
        var self = this;

        this.editmode = false;
        self.addmode = false;
        
        contactdatasrv.getcontacts().then(function(data){
            self.contacts = data;
        });
        

            this.selectone = function(index){
                this.selected = this.contacts[index];
                self.successMessage = undefined;
                self.errorMessage = undefined;
                }
            
            this.editmodeon = function(){
                this.editmode = !this.editmode;
            }

            this.updatecontact = function(){
                this.editmodeon();
                var userData = this.selected;
                if (self.addmode){
                    contactdatasrv.addnewuser(userData)
                                    .then(function(){
                                        self.successMessage = "Profile has been added successfully";
                                        console.log(self.successMessage);
                                    },
                                    function(){
                                        self.errorMessage = "There was en error. Try again";
                                    });
                    self.addmode = false;
                } else {
                    contactdatasrv.saveuser(userData)
                        .then(function () {
                            self.successMessage = "Profile has been updated";
                            console.log(self.successMessage);
                        },
                        function () {
                            self.errorMessage = "There was en error. Try again";
                        });
                }
            }
            
            this.adduser = function() {
                this.editmodeon();
                self.addmode = true;
                self.selected = {
                    "id": new Date().toDateString
                };

            }
    }