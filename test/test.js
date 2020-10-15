'use strict';

const polylabel = require('../');
const test = require('tape').test;

const water1 = require('./fixtures/water1.json');
const water2 = require('./fixtures/water2.json');

test('finds pole of inaccessibility for water1 and precision 1', function (t) {
    console.time('Execution time');
    let p = polylabel(water1, 1);
    console.timeEnd('Execution time');
    t.same(p, Object.assign([3865.85009765625, 2124.87841796875], {
        distance: 288.8493574779127
    }));
    t.end();
});

test('finds pole of inaccessibility for water1 and precision 50', function (t) {
    console.time('Execution time');
    let p = polylabel(water1, 50);
    console.timeEnd('Execution time');
    t.same(p, Object.assign([3854.296875, 2123.828125], {
        distance: 278.5795872381558
    }));
    t.end();
});

test('finds pole of inaccessibility for water2 and default precision 1', function (t) {
    console.time('Execution time');
    let p = polylabel(water2);
    console.timeEnd('Execution time');
    t.same(p, Object.assign([3263.5, 3263.5], {
        distance: 960.5
    }));
    t.end();
});

test('works on degenerate polygons', function (t) {
    console.time('Execution time');
    let p = polylabel([[[0, 0], [1, 0], [2, 0], [0, 0]]]);
    console.timeEnd('Execution time');
    t.same(p, Object.assign([0, 0], {
        distance: 0
    }));

    console.time('Execution time');
    p = polylabel([[[0, 0], [1, 0], [1, 1], [1, 0], [0, 0]]]);
    console.timeEnd('Execution time');
    t.same(p, Object.assign([0, 0], {
        distance: 0
    }));

    t.end();
});
