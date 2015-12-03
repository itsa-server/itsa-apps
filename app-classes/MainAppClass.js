'use strict';

require('js-ext/lib/object');

var Event = require('itsa-event'),
    BaseClass = require('./BaseClass');

var MainApp = BaseClass.subClass(function() {
        var instance = this;
        instance.merge(Event.Emitter('app'));
        instance.destroy = instance.destroy.bind(instance);
        // make sure any instance._viewCompIO gets aborted:
        window.addEventListener('unload', instance.destroy);
    },
    {
        destroy: function() {
            var instance = this;
            instance.undefAllEvents();
            instance.controller.destroy();
            instance.controller.getBodyComponentInstance().componentWillUnmount();
        }
    }
);


module.exports = MainApp;