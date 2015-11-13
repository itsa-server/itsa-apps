'use strict';

require('js-ext/lib/object');

var Event = require('itsa-event'),
    controller = require('itsa-client-controller'),
    IOClass = require('./IOClass');

var MainApp = IOClass.subClass(function() {
        var instance = this;
        instance.controller = controller;
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