class FollowToggle {
    constructor (el) {
        this.$el = $(el);
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");
        this.render();
        // this.$button.on("click", callback);
        
    }


    render(){
        // $(".follow-toggle").text("unfollowed");

        this.$el.text("Follow!");

        // if (this.followState === "unfollowed"){
        //     this.$el.html("Follow!")
        // } else if (this.followState === "followed"){
        //     this.$el.html("Unfollow!")
        // }

    }


}



module.exports = FollowToggle;