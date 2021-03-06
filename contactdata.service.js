(function(){
    var app = angular.module("mekalaapp");
    app.service=("contactdataSrvc", contactdata);
    
    function contactdata()
    {
            this.contacts = [
                {
                    "gender": "female",
                    "name":
                    {
                        "title": "mrs",
                        "first": "martha",
                        "last": "cook"
                    },
                    "location":
                    {
                        "street": "2158 school lane",
                        "city": "stoke-on-trent",
                        "state": "avon",
                        "postcode": "FR57 3JS"
                    },
                    "email": "martha.cook@example.com",
                    "login":
                    {
                        "username": "tinymouse684",
                        "password": "mercedes",
                        "salt": "1RUH4Dau",
                        "md5": "4679e27bba373358616764714f19a54b",
                        "sha1": "6750cef7b1b1e0c19f7ce7b9fce1fe1674e9f184",
                        "sha256": "b1c97a0e9930e6d16cafe7c791472a6d82477ab4dd741290eaf0dfb4a93b5c64"
                    },
                    "dob": "1972-05-09 13:57:02",
                    "registered": "2006-01-02 18:58:48",
                    "phone": "017684 42814",
                    "cell": "0736-265-223",
                    "id":
                    {
                        "name": "NINO",
                        "value": "JL 94 53 43 O"
                    },
                    "picture":
                    {
                        "large": "https://randomuser.me/api/portraits/women/33.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/33.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/33.jpg"
                    },
                    "nat": "GB"
                },
                {
                    "gender": "male", 
                    "name": 
                        { "title": "mr", 
                        "first": "alexander", 
                        "last": "vicente" 
                        }, 
                    "location": 
                        { "street": "4355 calle del barquillo", 
                        "city": "santiago de compostela", 
                        "state": "la rioja", 
                        "postcode": 49226 
                        }, 
                    "email": "alexander.vicente@example.com", 
                    "login": 
                        { "username": "heavymeercat371", 
                        "password": "blue12", 
                        "salt": "BaUh3dj1", 
                        "md5": "99667c2e198b18dfb54f8563a68090d2", 
                        "sha1": "9eb8f685f3411b79ed656c284a9317a02057f8b1", 
                        "sha256": "5add1b049eeffa6f6fc82d59365403fe75050872e6a53261cda784ea3b6166f2" 
                        }, 
                    "dob": "1974-10-02 04:50:54", 
                    "registered": "2013-06-09 03:54:39", 
                    "phone": "904-808-486", 
                    "cell": "659-426-904", 
                    "id": 
                        { "name": "DNI", 
                        "value": "21378646-H" 
                        }, 
                    "picture": 
                        { "large": "https://randomuser.me/api/portraits/men/13.jpg", 
                        "medium": "https://randomuser.me/api/portraits/med/men/13.jpg", 
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/13.jpg" 
                        }, 
                    "nat": "ES" 
                },
                {
                    "gender":"female",
                    "name":
                        {"title":"mrs",
                        "first":"amelia",
                        "last":"hanson"
                        },
                    "location":
                        {"street":"5035 washington ave",
                        "city":"toowoomba",
                        "state":"new south wales",
                        "postcode":4592
                        },
                    "email":"amelia.hanson@example.com",
                    "login":
                        {"username":"bluefish462",
                        "password":"hayden",
                        "salt":"KQ5ASh53",
                        "md5":"2344d8e80f11030da64adbd959d1130e",
                        "sha1":"4e6dabae2629390a275f5ed903c40f7b9f7f1390","sha256":"5955722c06074e245c98a39f6c54dd52ba73a8550a8d27bc08b50f876d8319d0"
                        },
                    "dob":"1970-12-18 04:34:44",
                    "registered":"2012-02-22 23:39:18",
                    "phone":"09-5245-8026",
                    "cell":"0455-295-532",
                    "id":
                        {"name":"TFN",
                        "value":"263798656"
                        },
                    "picture":
                        {"large":"https://randomuser.me/api/portraits/women/20.jpg","medium":"https://randomuser.me/api/portraits/med/women/20.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/20.jpg"
                        },
                    "nat":"AU"
                },
                {
                    "gender":"male",
                    "name":
                        {"title":"mr",
                        "first":"jesse",
                        "last":"hamilton"
                        },
                    "location":
                        {"street":"3473 timber wolf trail",
                        "city":"mesa",
                        "state":"new mexico",
                        "postcode":84860
                        },
                    "email":"jesse.hamilton@example.com",
                    "login":
                        {"username":"silverpanda758",
                        "password":"lakers",
                        "salt":"5WWBgSOX",
                        "md5":"72ee02edd6c2821e9c425074482acd90",
                        "sha1":"948288c108d72596377746999123242a67efb316","sha256":"17489db33f54b1016397c2bbd763dc7b2adac4a4b22ecb90fb38b88887228def"
                        },
                    "dob":"1955-05-14 17:21:32",
                    "registered":"2006-02-10 01:41:55",
                    "phone":"(996)-588-8131",
                    "cell":"(632)-066-4200",
                    "id":
                        {"name":"SSN",
                        "value":"923-03-4171"
                        },
                    "picture":{"large":"https://randomuser.me/api/portraits/men/36.jpg","medium":"https://randomuser.me/api/portraits/med/men/36.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/36.jpg"},
                    "nat":"US"
                }];
    }
})();