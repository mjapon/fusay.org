'use strict';
module.exports = function (grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        rutas:{
            path_dist: "site/dist",
            path_sitecss: "site/css",
            path_sitejs: "site/js",
            path_nm: "node_modules",
            root: "",
            path_templates: "templates/"
        },
        cssmin: {
            sitecss: {
                options: {
                    banner: '/* My minified css file */'
                },
                files: {
                    '<%= rutas.path_dist %>/site.min.css': [
                        '<%= rutas.path_nm %>/bootstrap/dist/css/bootstrap.min.css',
                        '<%= rutas.path_sitecss %>/slick.css',
                        '<%= rutas.path_sitecss %>/aos.css',
                        '<%= rutas.path_sitecss %>/style.css']
                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            applib: {
                src: [
                    /*'<%= rutas.path_nm %>/jquery/dist/jquery.js',*/
                    '<%= rutas.path_nm %>/bootstrap/dist/js/bootstrap.js',
                    '<%= rutas.path_nm %>/popper.js/dist/umd/popper.js',
                    '<%= rutas.path_sitejs %>/venobox.min.js',
                    '<%= rutas.path_sitejs %>/aos.js',
                    '<%= rutas.path_sitejs %>/script.js'
                ],
                dest: '<%= rutas.path_dist %>/applib.js'
            }
        }
    });
    // Default task.
    grunt.registerTask('default', ['uglify', 'cssmin']);
};


/*
module.exports = function (grunt) {

    //var path_bc = "isyplus2/static/bower_components";
    //var path_dist = "isyplus2/static/dist";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        rutas:{
            path_dist: "dist",
            path_sitecss: "site/css",
            path_sitejs: "site/js",
            path_nm: "node_modules",
            root: "",
            path_templates: "templates/"
        },
        concat: {
            options:{
                sourceMap:true
            },
            javascript_vendor: {
                 src:[
                    '<%= rutas.path_nm %>/jquery/dist/jquery.js',
                    '<%= rutas.path_nm %>/bootstrap/dist/js/bootstrap.bundle.min.js',
                    '<%= rutas.path_nm %>/popper.js/dist/popper.min.js',
                     '<%= rutas.path_sitejs %>/venobox.min.js',
                     '<%= rutas.path_sitejs %>/aos.js',
                     '<%= rutas.path_sitejs %>/script.js'
                ],
                dest: '<%= rutas.path_dist %>/js/vendor.js'
            },
            css_vendor:{
                src:[
                    '<%= rutas.path_nm %>/bootstrap/dist/css/bootstrap.min.css',
                    '<%= rutas.path_sitecss %>/bootstrap/dist/css/slick.css',
                    '<%= rutas.path_sitecss %>/bootstrap/dist/css/aos.css',
                    '<%= rutas.path_sitecss %>/bootstrap/dist/css/style.css'
                ],
                dest: '<%= rutas.path_dist %>/css/vendor.css'
            },
            css_app:{

            }
        },
        uglify: {
            vendor: {
                 src: '<%= rutas.path_dist %>/js/vendor.js',
                dest: '<%= rutas.path_dist %>/js/vendor.min.js'
            }
        },
        cssmin : {
            vendor:{
                src: '<%= rutas.path_dist %>/css/vendor.css',
                dest: '<%= rutas.path_dist %>/css/vendor.min.css'
            },
            app:{
                src: 'css/app.css',
                dest: '<%= rutas.path_dist %>/css/app.min.css'
            }
        },
        filerev: {
            dist: {
              src: ["<%= rutas.path_dist %>/js/vendor.min.js",
                    "<%= rutas.path_dist %>/css/vendor.min.css",
                    "<%= rutas.path_dist %>/css/app.min.css"]
            }
        }
    });

    // Where we tell Grunt we plan to use some plug-ins.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-filerev');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
*/
