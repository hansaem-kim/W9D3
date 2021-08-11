const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js")
const APIUtil = require("./api_util.js")
window.APIUtil = APIUtil;

$(() => {
    $("button.follow-toggle").each(function(index, el){
        return new FollowToggle(el);
    })
    $("nav.users-search").each(function(index, el){
        return new UsersSearch(el);
    })
})