define([
    'app',
    'hbars!apps/tumblr/show/templates/layout',
    'hbars!apps/tumblr/show/templates/item'
], function(App, layoutTemplate, itemTemplate) {
    App.module('TumblrApp.Show.View', function(View, App, Backbone, Marionette, $, _) {

        View.Layout = Marionette.LayoutView.extend({
            regions: {
                bodyRegion: '.body-region'
            },

            className: 'tumblr-app',

            template: layoutTemplate
        });

        View.Item = Marionette.ItemView.extend({
            template: itemTemplate
        });
    });

    return App.TumblrApp.Show.View;
});
