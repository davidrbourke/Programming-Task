import MenuItem from "./MenuItem.vue";
import NavItem from "./NavItem";
import { Route } from "./Routes";

export default 
{
    components:
    {
        MenuItem
    },

    data () 
    { 
        return {
            navItems: new Array<NavItem>(
                new NavItem("Instructions", Route.Instructions),
                new NavItem("Test", Route.Test), 
            ),
        };
    },
}
