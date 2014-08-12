define([
    'app',
    'apps/tumblr/show/tumblr_show_view'
], function(App, View) {
    App.module('TumblrApp.Show', function(TumblrApp, App, Backbone, Marionette, $, _) {

        TumblrApp.Controller = Marionette.Controller.extend({
            initialize: function() {
                this.layout = new View.Layout();

                this.listenTo(this.layout, 'show', this.showItemView);

                this.show(this.layout, {
                    loading: true,
                    entities: this.createDummyModel()
                });
            },

            // This is a dummy function that should not be included in a
            // real application. It will simulate a fetch request on a model
            // to force the loading view to work.
            createDummyModel: function() {
                var SIMULATED_FETCH_DELAY = 500;
                var deferred = $.Deferred();
                var model = new Backbone.Model();

                // Assign interal variable `_fetch`. This is done
                // automatically for real calls to `fetch` inside of
                // `marionette.enhancedController`.
                model._fetch = deferred.promise();

                // Resolve the deferred after 500ms. This will let you see
                // the loading spinner.
                _.delay(deferred.resolve, SIMULATED_FETCH_DELAY);

                return model;
            },

            showItemView: function() {
                var view = new View.Item();

                this.layout.bodyRegion.show(view);
            }
        });
    });

    return App.TumblrApp.Show.Controller;
});
