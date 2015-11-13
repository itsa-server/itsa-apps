'use strict';

require('js-ext/lib/object');

var Event = require('itsa-event'),
    IOClass = require('./IOClass');

var PageApp = IOClass.subClass(function() {
        this.merge(Event.Emitter('view'));
    },
    {
        destroy: function() {
            this.undefAllEvents();
        }
    }
);


module.exports = PageApp;