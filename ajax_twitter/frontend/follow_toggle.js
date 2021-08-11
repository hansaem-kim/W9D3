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
        const that = this;

        this.$el.on('click', function (event) {
            event.preventDefault();
            if (that.followState === 'unfollowed') {
                APIUtil.followUser(that.userId);
                that.followState = 'followed'
            } else {
                APIUtil.unfollowUser(that.userId);
                that.followState = 'unfollowed'
            }

            that.render();

        })


    }


}



module.exports = FollowToggle;