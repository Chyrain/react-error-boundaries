# react-popconfirm

[![version](https://img.shields.io/npm/v/react-popconfirm.svg?style=flat-square)](http://npm.im/react-popconfirm)
[![downloads](https://img.shields.io/npm/dm/react-popconfirm.svg?style=flat-square)](http://npm-stat.com/charts.html?package=react-popconfirm&from=2017-04-07)
[![MIT License](https://img.shields.io/npm/l/react-popconfirm.svg?style=flat-square)](http://opensource.org/licenses/MIT)

A popover confirm dialog  for react, [react-bootstrap](https://react-bootstrap.github.io/components.html#popovers) and [react-confirm](https://github.com/haradakunihiko/react-confirm) are used with.

![PopConfirm](https://raw.githubusercontent.com/Chyrain/MDPictures/master/res/popconfirm.gif)

## Usage

```js
// import first
import PopConfirm from 'react-popconfirm'


// call it!
/**
 * options: 
 *  {
 *    element,              // require
 *    confirmation,         // require
 *    placement = 'top',    // require
 *    okLabbel = 'Yes',     // optional (default 'Yes')
 *    cancelLabel = 'No',   // optional (default 'No')
 *    positionLeft,         // optional (auto calculate by element position and width,height)
 *    positionTop,          // optional (auto calculate by element position and width,height)
 *    width = 160,          // optional (default 160)
 *    height = 70           // optional (default 70)
 *    confirmationColor = '#e83f3f',  // optional (default '#e83f3f')
 *    okStyle = 'info',               // optional (default 'info', available: default|primary|success|info|warning|danger|link)
 *    cancelStyle = 'default'         // optional (default 'default', available: default|primary|success|info|warning|danger|link)
 *  }
 */
PopConfirm({
	confirmation:'Are you sure?',
	okLabbel: 'Yes',
	cancelLabel: 'No',
	placement:'top',
	element:target	// target is the element you clicked
  }).then(
  (result) => {
    // `proceed` callback
    console.log('proceed called');
  },
  (result) => {
    // `cancel` callback
    console.log('cancel called');
  }
)
// nothing will be called when `dismiss` is triggered.
```

## Try example

```shell
# run example, auto open browser and enable hot loader
cd example
npm install
npm start

# build
npm run build
```

## License

MIT