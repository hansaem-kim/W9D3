const APIUtil = require ('./api_util.js')

class FollowToggle {
    constructor (el) {
        this.$el = $(el);
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");
        this.render();
        this.handleClick();
        
    }


    render(){
        // $(".follow-toggle").html("unfollowed");

        // document.querySelector(".follow-toggle").innerText = "Follow!";

        if (this.followState === "unfollowed"){
            this.$el.text("Follow!")
        } else if (this.followState === "followed"){
            this.$el.text("Unfollow!")
        }
    }

    handleClick(){
        const clickHandler = function (event) {
            event.preventDefault();
            if (this.followState === 'unfollowed') {
                APIUtil.followUser(this.userId);
                this.followState = 'followed'
            } else {
                APIUtil.unfollowUser(this.userId);
                this.followState = 'unfollowed'
            }

            this.render();

        }

        this.$el.on('click', clickHandler.bind(this));


    }


}



module.exports = FollowToggle;