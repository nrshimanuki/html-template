'use strict';

const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

// Settings
const proxyServer = 'http://html-template.test:8888';
const portNumber  = 3000;
const documentRoot = '../public';
const srcPath = {
	sass: 'assets/sass/**/*.scss',
	img:  'assets/img/**/*',
};
const destPath = {
	sass: documentRoot + '/assets/css',
	img:  documentRoot + '/assets/img',
};


// Sass Task
const sassCss = () => {
 return src(srcPath.sass, {sourcemaps: true})
	.pipe(
		sass({
			outputStyle: 'expanded', // expanded, compressed
			indentType:  'tab',
			indentWidth: 1,
		}).on('error', sass.logError)
	)
	.pipe(autoprefixer())
	.pipe(dest(destPath.sass, {sourcemaps: './sourcemaps'}))
	.pipe(browserSync.reload({ stream: true }));
}

// BrowserSyncServe Task
const browserSyncServe = (cb) => {
	browserSync.init({
		notify: false,
		proxy: proxyServer,
		// server: { baseDir: documentRoot },
		// port: portNumber,
	});
	cb();
}

// BrowserSyncReload Task
const browserSyncReload = (cb) => {
	browserSync.reload();
	cb();
}

// Watch Task
const watchTask = () => {
	watch(documentRoot + '/**/*', browserSyncReload);
	watch(srcPath.sass, series(sassCss, browserSyncReload));
}

// Default Gulp Task
exports.default = series(
	sassCss,
	browserSyncServe,
	watchTask
);
