define([
    'app',
    'apps/tumblr/show/tumblr_show_view'
], function(App, View) {
    App.module('TumblrApp.Show', function(TumblrApp, App, Backbone, Marionette, $, _) {

        TumblrApp.Controller = Marionette.Controller.extend({
            initialize: function() {
                var apiPostsUrl;
                var oAuthKey = 'y9AElPe0iLu3tJiwjl10UtwyEPc45kPusgs9IxoeWLizY1GO7R';
                var self;
                apiPostsUrl = 'http://api.tumblr.com/v2/blog/useallfivetest.tumblr.com/posts';

                self = this;

                jsonpCallback = function(data) {
                    self.view = new View.CompositeView({
                        collection: self.createPostCollection(data)
                    });

                    //self.listenTo(self.view, 'show', self.showItemView);
                    self.show(self.view);
                };

                Backbone.ajax({
                    type: 'GET',
                    url: apiPostsUrl,
                    dataType: 'jsonp',
                    data: {
                        api_key: oAuthKey,
                        jsonp: 'jsonpCallback'
                    }
                });

            },

            // This is a dummy function that should not be included in a
            // real application. It will simulate a fetch request on a model
            // to force the loading view to work.
            createPostCollection: function(data) {
                var collection = new Backbone.Collection(data.response.posts);
                return collection;
            }
        });
    });

    return App.TumblrApp.Show.Controller;
});
