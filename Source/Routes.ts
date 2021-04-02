import Landing from "./Landing.vue";
import Instructions from "./Test/Instructions.vue";
import Test from "./Test/Test.vue";

const Route =
{
    Landing:        "Landing",
    Instructions:   "Instructions",
    Test:           "Test",
};

const Routes =
[
    { name: Route.Landing,      component: Landing,         path: "/",          redirect: "/instructions" },

    { name: Route.Instructions, component: Instructions,    path: "/instructions" },

    { name: Route.Test,         component: Test,            path: "/test" },
];

export
{
    Route,
    Routes,
};
