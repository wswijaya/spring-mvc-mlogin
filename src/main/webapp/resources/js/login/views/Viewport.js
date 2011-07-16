test.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'fit',
    initComponent: function() {
        //put instances of cards into app.views namespace
        Ext.apply(test.views, {
        		loginForm: new test.views.LoginForm()
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
                test.views.loginForm
            ]
        });
        test.views.Viewport.superclass.initComponent.apply(this, arguments);
    },
    layoutOrientation : function(orientation, w, h) {
        test.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
    }
});
