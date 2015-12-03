'use strict';

require('js-ext/lib/object');

var Event = require('itsa-event'),
    BaseClass = require('./BaseClass');

var PageApp = BaseClass.subClass(function() {
        this.merge(Event.Emitter('view'));
    },
    {
        destroy: function() {
            this.undefAllEvents();
        }
    }
);


module.exports = PageApp;