import NavItem from "./NavItem"

export default
{
    props:
    {
        navItem:    { type: Object, required: true },
    },

    computed:
    {
        route()
        {
            return { name: this.navItem.routeName };
        }
    }
}