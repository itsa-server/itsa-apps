'use strict';

var io = require('itsa-io'),
    Classes = require('itsa-classes');

var IOClass = Classes.createClass(function() {
        this.io = io;
    },
    {
        destroy: function() {
            this.io.abortAll();

        }
    }
);

module.exports = IOClass;