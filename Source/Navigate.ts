import { Router } from "./Router";
import { Route } from "./Routes";

class Navigate
{
    private to (name :string, params :object = {}, query :object = {}) { (<any> Router).push({ name, params, query }); }

    public toLanding()      { this.to(Route.Landing); }
    public toTest()         { this.to(Route.Test); }
};

let navigate: Navigate = new Navigate();

export
{
    navigate as Navigate
};
