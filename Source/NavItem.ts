export default class NavItem
{
    public readonly caption :string;
    public readonly routeName :string;

    public constructor(caption :string, routeName :string)
    {
        this.caption = caption;
        this.routeName = routeName;
    }
}