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

        document.querySelector(".follow-toggle").innerText = "Follow!";

        // if (this.followState === "unfollowed"){
        //     this.$el.html("Follow!")
        // } else if (this.followState === "followed"){
        //     this.$el.html("Unfollow!")
        // }
    }

    handleClick(){

    }


}



module.exports = FollowToggle;