//why demo, what is this, he calls it game object i think

demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        addAllChangeStateEventListeners();
    },
    update: function(){}
};