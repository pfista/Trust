(function(){
    var Engine, Surface, Transform, StateModifier, mainContext, surface, modifier;
    Engine = require([ "node_modules/famous/core/Engine" ]);
    Surface = require([ "node_modules/famous/core/Surface" ]);
    Transform = require([ "node_modules/famous/core/Transform" ]);
    StateModifier = require([ "node_modules/famous/modifiers/StateModifier" ]);
    mainContext = Engine.createContext();
    surface = new Surface({
        size: [ 200, 500 ],
        properties: {
            color: "white",
            backgroundColor: "#FA5C4F"
        }
    });
    modifier = new StateModifier({
        align: [ .5, .5 ],
        origin: [ .5, .5 ]
    });
    mainContext.add(modifier).add(surface);
})();