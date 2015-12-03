'use strict';

var io = require('itsa-io'),
    controller = require('itsa-client-controller'),
    Classes = require('itsa-classes');

var BaseClass = Classes.createClass(function() {
        this.controller = controller;
        this.io = io;
        controller.init();
    },
    {
        getProps: function() {
            return this.controller.getProps();
        },
        destroy: function() {
            this.io.abortAll();

        }
    }
);

module.exports = BaseClass;