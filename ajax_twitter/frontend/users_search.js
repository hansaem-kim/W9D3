//create event listener for key press
//Need to use .includes method

const APIUtil = require("./api_util");

class UsersSearch {
    constructor(el){
        this.$el = $(el);
        this.$ul = this.$el.find("ul.users");
        this.$input = this.$el.find("input");
    }

    handleInput(){
        this.$input.on("keypress", function(){
            APIUtil.searchUsers(this.$input.value);
            this.$ul.text()
        })
        
    }

}