test.views.Dashboard = Ext.extend(Ext.Panel, {
    fullscreen: true,
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Dashboard',
        dock: 'top',
        items: [{
          xtype: 'button',
          text: 'Logout',
          ui: 'confirm',
          handler: function() {
            Ext.dispatch({
                controller: test.controllers.dashboardController,
                action: 'logout'
            });          	
          },
          scope: this        	
        }]
    }],
    html: '<p>Welcome!, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis euismod odio, auctor blandit mauris auctor et. Proin vehicula turpis in nisl blandit tempor adipiscing arcu tristique. Fusce fringilla luctus lacus sed facilisis. Sed sed scelerisque nisl. Vivamus dictum arcu non est bibendum sed pellentesque tortor ullamcorper. Etiam quis dolor nibh, quis lacinia massa. Nunc quis luctus neque. In porttitor adipiscing eros non tempor. Ut pulvinar accumsan nulla eu vulputate. Aliquam erat volutpat. Pellentesque luctus, leo ac vulputate luctus, diam ante hendrerit ante, at molestie ligula enim id justo.</p>',
    initComponent: function() {
        test.views.Dashboard.superclass.initComponent.apply(this, arguments);        
    }		
});

