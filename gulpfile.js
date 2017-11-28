var gulp = require('gulp'),
		stylus = require('gulp-stylus'),
		browserSync = require('browser-sync'),
		del = require('del'),  // функция удаления
		run = require('run-sequence'),  // порядок загрузки
		mincss = require('gulp-csso'),  // минификация CSS, но лучше попробывать СОВРЕМЕННЫЙ http://refresh-sf.com/ на основе Clean-CSS
		rename = require("gulp-rename"),  // переименование файлов
		notify = require('gulp-notify'),  // уведомления при ошибках, для W нужен Growl
		imagemin = require('gulp-imagemin'),  // оптимизация img вкл. несколько модулей
		prefixer = require('gulp-autoprefixer'),  // вендорные префиксы от Evil Martians
		uglify = require('gulp-uglify'),  // минификация JS
		svgSprite = require('gulp-svg-sprite'),  // создание спрайтов
		plumber = require('gulp-plumber'),  // сборщик ошибок
		scss = require('gulp-sass');  // scss на LibSASS (С++)


// version 1.4 Production [24.11.17]
// time build 91.5s [packages 944]

// for Production

gulp.task('clean', function() {
	return del(['../app/**', '!../app']  // удаляет все в папке app, при этом не удаляя саму папку app
		,{
			force: true  // начинает удалять за пределами текущей dir
		});
});

gulp.task('copy', function() {
	return gulp.src([
		'fonts/**',
		'!img/{0pre,0pre/**}',  // порядок вкл. и искл. не важен
		'img/**',
		'css/custombs4.css',  // bootstrap style
		'js/**',
		'libs/**',
		'svg-sprites/*.svg',
		'*.html',
		], {
			base: "."  // что бы копировались целыми папками
		})
	.pipe(gulp.dest('../app'));
});

gulp.task('stylus', function() {
	return gulp.src('stylus/style.styl')
		.pipe(stylus())
		.pipe(prefixer({
			browsers: ['last 2 version'],
			cascade: false
		}))
		.pipe(mincss({
			restructure: false,  // что бы анализатор не разбивал и не связывал cелекторы как ему нравится
		}))
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('../app/css'))
		.pipe(browserSync.reload({stream: true}))
});



gulp.task('img-min', function() {
	return gulp.src("../app/img/**/*.{png,jpg,gif}")
		.pipe(imagemin([
			imagemin.optipng({optinizationLevel: 3}),
			imagemin.jpegtran({progressive: true}),
			imagemin.gifsicle({interlaced: true}),
			imagemin.svgo({plugins: [{removeViewBox: true}]})
		]))
		.pipe(gulp.dest("../app/img"));
})

gulp.task('js-min', function() {
	return gulp.src('js/*.js')
			.pipe(uglify())
			.pipe(rename({
				suffix: ".min"
			}))
			.pipe(gulp.dest('../app/js'))
});

gulp.task('bs', function() {
	browserSync({
		server: {
			baseDir: '../app'  //запускаемся из папки app на 3000 порту
		}
	});
})

gulp.task('wt',['bs'], function() {
	gulp.watch('../app/css/**/*.css', browserSync.reload);
	gulp.watch('../app/*.html', browserSync.reload);
	gulp.watch('../app/js/**/*.js', browserSync.reload);
})

gulp.task('build', function(fn) {
	run('clean', 'copy', 'stylus', 'js-min', 'img-min', 'wt', fn);
});




// task for Developers

gulp.task('dev-stylus', function() {
	return gulp.src('stylus/style.styl')
		.pipe(stylus())
		.on('error', notify.onError())  // ловим ошибки .styl и не даем упасть серверу
		.pipe(gulp.dest('css'))
		.pipe(prefixer({
			browsers: ['last 10 version'],
			cascade: false
		}))
		.pipe(rename('prefix.css'))
		.pipe(gulp.dest('css'))
		.pipe(mincss({
			restructure: false,
		}))
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('dev-bs', function() {
	browserSync({
		server: {
			baseDir: '.'
		},
		ui: {
			port: 3336
		},
		port: 3333,
		logPrefix: "BS-DEV",
		logConnections: true
	})
});

gulp.task('dev', ['dev-bs', 'dev-stylus'],  function() {
	gulp.watch('stylus/**/*.styl', ['dev-stylus']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
});

gulp.task('spr-svg', function() {
	return gulp.src('svg-icons/*.svg')
	.pipe(svgSprite({
		shape: {
			dimension: {
				maxWidth: 500,
				maxHeight: 500
			},
			spacing: {
				padding: 0
			},
		},
		mode: {
			symbol: {
				dest: '.',  // по умолчанию создается папка css/svg/symbol, сейчас папка не создается
				sprite: 'sprite-symbol.svg'  // навзание итогово спрайта
			}
		}
	}))
	.pipe(gulp.dest('svg-sprites'));
});

// gulp.task('spr-bg', function() {
// 	return gulp.src('svg-icons/**/*.svg')
// 		.pipe(svgSprite({
// 			mode: {
// 				css: {
// 					dest: '.',
// 					bust: false,
// 					sprite: 'sprite.svg',
// 					layout: 'vertical',
// 					prefix: '$-',
// 					dimenssions: true,
// 					render: {
// 						styl: {
// 							dest: 'spr-bg.styl'
// 						}
// 					}
// 				}
// 			}
// 		}))
// 		.pipe(gulp.dest('svg-sprites-bg'));
// });


// Bootstrap TASK

gulp.task('bs4', function() {
	return gulp.src('css/custombs4.css')
		.pipe(mincss({
			restructure: false,
		}))
		.pipe(rename('custombs4.min.css'))
		.pipe(gulp.dest('../app/css'))
});


gulp.task('sass', function () {
	return gulp.src('stylus/custombs4.scss')
	.pipe(scss().on('error', scss.logError))
	.pipe(gulp.dest('css'));
});
