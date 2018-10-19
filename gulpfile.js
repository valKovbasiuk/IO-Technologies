let gulp = require("gulp");
let browserSync = require("browser-sync");

gulp.task("serv", function() {
  browserSync.init({
    server: {
      baseDir: "./docs"
    },
    notify: false
  });
  browserSync.watch("./docs/**/*", browserSync.reload);
});

gulp.task("default", "serv", function() {
  gulp.watch("./docs/**/*", browserSync.reload);
});
