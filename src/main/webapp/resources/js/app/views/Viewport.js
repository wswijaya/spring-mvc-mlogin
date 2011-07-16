test.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'fit',
    initComponent: function() {
        //put instances of cards into app.views namespace
        Ext.apply(test.views, {
        		dashboardView: new test.views.Dashboard()
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
                test.views.dashboardView
            ]
        });
        test.views.Viewport.superclass.initComponent.apply(this, arguments);
    },
    layoutOrientation : function(orientation, w, h) {
        test.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
    }
});
