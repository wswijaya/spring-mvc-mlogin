test.views.LoginForm = Ext.extend(Ext.form.FormPanel, {
    scroll: 'vertical',
    fullscreen: true,
	url: defLoginUrl,
	items: [{
		xtype: 'textfield',
		label: 'Login',
		name: 'j_username'
	},{
		xtype: 'passwordfield',
		label: 'Password',
		name: 'j_password'
	}],	
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
            {
                text: 'Reset',
                handler: function() {
					test.views.loginForm.reset();
                }
            },
            {
                text: 'Login',
                ui: 'confirm',
                handler: function() {
				      Ext.dispatch({
			                controller: test.controllers.loginController,
			                action: 'submit',
			                data: test.views.loginForm
			            });
                }
            }
        ]
    }],
    initComponent: function() {
        test.views.LoginForm.superclass.initComponent.apply(this, arguments);        
    }		
});

