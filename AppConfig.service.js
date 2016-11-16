(function(){
    var app = angular.module("mekalaapp");

    function AppConfig(AppDatasrvc) {
        //var this = {};
        this.name = AppDatasrvc;
        this.author = "Creator of app";
        this.builtdate = new Date().toDateString;
        //return this;
    }

    app.service=("Appconfig", AppConfig);
})();