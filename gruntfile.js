/*
 * Copyright (c) 2013-2015 by The SeedStack authors. All rights reserved.
 *
 * This file is part of SeedStack, An enterprise-oriented full development stack.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/* global module: false, grunt: false, process: false */
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        clean: [
            'bower_components/**',
            'docs/**'
        ],
        bower: {
            install: {
                options: {
                    copy: false
                }
            }
        },
        ngdocs: {
            options: {
                startPage: '/core'
            },
            core: {
                src: ['bower_components/w20/modules/**/*.js', 'bower_components/w20/index.ngdoc'],
                title: 'Core',
                api: true
            },
            dataviz: {
                src: ['bower_components/w20-dataviz/modules/**/*.js', 'bower_components/w20-dataviz/index.ngdoc'],
                title: 'Dataviz',
                api: true
            }
        },
        connect: {
            docs: {
                options: {
                    port: 9000,
                    base: 'docs',
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('docs', ['connect']);
    grunt.registerTask('default', ['clean', 'bower', 'ngdocs']);
};
