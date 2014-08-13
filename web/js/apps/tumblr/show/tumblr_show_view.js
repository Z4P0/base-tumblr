define([
    'app',
    'hbars!apps/tumblr/show/templates/composite',
    'hbars!apps/tumblr/show/templates/text',
    'hbars!apps/tumblr/show/templates/video',
    'hbars!apps/tumblr/show/templates/audio',
    'hbars!apps/tumblr/show/templates/chat',
    'hbars!apps/tumblr/show/templates/quote',
    'hbars!apps/tumblr/show/templates/photo',
    'hbars!apps/tumblr/show/templates/link'
], function(App, compositeTemplate, textTemplate, videoTemplate, audioTemplate, chatTemplate, quoteTemplate, photoTemplate, linkTemplate) {
    App.module('TumblrApp.Show.View', function(View, App, Backbone, Marionette, $, _) {

        View.TextView = Marionette.ItemView.extend({
            template: textTemplate
        });

        View.VideoView = Marionette.ItemView.extend({
            template: videoTemplate
        });

        View.AudioView = Marionette.ItemView.extend({
            template: audioTemplate
        });

        View.ChatView = Marionette.ItemView.extend({
            template: chatTemplate
        });

        View.QuoteView = Marionette.ItemView.extend({
            template: quoteTemplate
        });

        View.PhotoView = Marionette.ItemView.extend({
            template: photoTemplate
        });

        View.LinkView = Marionette.ItemView.extend({
            template: linkTemplate
        });

        View.CompositeView = Marionette.CollectionView.extend({
            className: 'tumblr-app',
            template: compositeTemplate,
            getChildView: function(item) {
                var postType;
                var view;

                postType = item.get('type');
                switch (postType) {
                    case 'text':
                        view = View.TextView;
                        break;
                    case 'video':
                        view = View.VideoView;
                        break;
                    case 'audio':
                        view = View.AudioView;
                        break;
                    case 'chat':
                        view = View.ChatView;
                        break;
                    case 'quote':
                        view = View.QuoteView;
                        break;
                    case 'photo':
                        view = View.PhotoView;
                        break;
                    case 'link':
                        view = View.LinkView;
                        break;
                    default:
                        view = View.TextView;
                        break;
                }

                return view;
            }
        });
    });

    return App.TumblrApp.Show.View;
});
