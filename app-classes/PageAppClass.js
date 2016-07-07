'use strict';

require('itsa-jsext');

var Event = require('itsa-event'),
    BaseClass = require('./BaseClass');

var PageApp = BaseClass.subClass(function() {
        this.itsa_merge(Event.Emitter(this.emitterName));
    },
    {
        emitterName: 'app',

        destroy: function() {
            this.undefAllEvents();
        }
    }
);


module.exports = PageApp;