define([
    'app',
    'apps/tumblr/show/tumblr_show_controller'
], function(App, Controller) {
    App.module('TumblrApp', function(TumblrApp, App, Backbone, Marionette, $, _) {
        var API;

        // Do not start automatically
        this.startWithParent = false;

        TumblrApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                '': 'show'
            }
        });

        API = {
            show: function() {
                new TumblrApp.Show.Controller({
                    region: App.tumblrRegion
                });

                // Notify application
                App.trigger('tumblr:show');
            }
        };

        App.addInitializer(function() {
            new TumblrApp.Router({
                controller: API
            });
        });

        App.commands.setHandler('tumblr:show', function() {
            App.navigate('');

            API.show();
        });
    });

    return App.TumblrApp;
});
