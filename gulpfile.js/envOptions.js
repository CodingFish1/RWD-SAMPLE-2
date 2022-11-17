const srcPath = './app';
const distPath = './dist';
const nodePath = './node_modules';

let envOptions = {
  string: 'env',
  default: {
    env: 'dev',
  },
  copyFile: {
    src: [
      `${srcPath}/**/*`,
      `!${srcPath}/assets/js/**/*.js`,
      `!${srcPath}/assets/style/**/*.scss`,
      `!${srcPath}/assets/style/**/*.sass`,
      `!${srcPath}/**/*.ejs`,
      `!${srcPath}/**/*.html`,
    ],
    path: distPath,
  },
  html: {
    src: [
      `${srcPath}/**/*.html`,
    ],
    ejsSrc: [
      `${srcPath}/**/*.ejs`,
    ],
    path: distPath,
  },
  style: {
    src: [
      `${srcPath}/assets/style/**/*.scss`,
      `${srcPath}/assets/style/**/*.sass`,
    ],
    path: `${distPath}/assets/style`,
  },
  javascript: {
    src: [
      `${srcPath}/assets/js/**/*.js`
    ],
    concat: 'all.js',
    path: `${distPath}/assets/js`,
  },
  vendors: {
    src: [
      `${nodePath}/jquery/dist/**/jquery.min.js`,
      `${nodePath}/bootstrap/dist/js/bootstrap.bundle.min.js`, // 已包含 popper.js
      `${nodePath}/swiper/swiper-bundle.min.js`,
      `${nodePath}/vanillajs-datepicker/dist/js/datepicker.min.js`,
      `${nodePath}/vanillajs-datepicker/dist/js/datepicker-full.min.js`,
    ],
    concat: 'vendors.js',
    path: `${distPath}/assets/js`,
  },
  img: {
    src: [
      `${srcPath}/assets/images/**/*`,
    ],
  },
  clean: {
    src: distPath,
  },
  browserDir: distPath,
  deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;
