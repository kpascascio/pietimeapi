/**
 * Test runner 
 */

// Dependencies 
const helpers = require('../lib/helpers');
const assert = require('assert');

// Application logic for the test runner
_app = {};

//  Container for the test 
_app.test = {
    'unit': {}
}

_app.test.unit['helpers.greeting should return a string'] = (done) => {
    const str = helpers.greeting();

    assert.equal(typeof str, 'string')
    done();
}

// Assert that the object says hello
_app.test.unit['helpers.greeting should return a string of hello back'] = (done) => {
    const str = helpers.greeting();

    assert.equal(str, 'hello')
    done();
}

// Assert that the object says hello
_app.test.unit['helpers.greeting should return a string of goodbye back'] = (done) => {
    const str = helpers.greeting();
    assert.equal(str, 'goodbye')
    done();
}

_app.countTest = () => {
    let counter = 0;
    for (let key in _app.test) {
        if (_app.test.hasOwnProperty(key)) {
            let subTests = _app.test[key];
            for (let testName in subTests) {
                if (subTests.hasOwnProperty(testName)) {
                    counter++
                }
            }
        }
    }
    return counter;
}

_app.produceTestReport = (limit, successes, error) => {

    console.log('------------------Begin Test--------------')
    console.log('total test', limit)
    console.log('Pass', successes)
    console.log('')

    if (error.length > 0){
        error.forEach((testError) => {
            console.log('\x1b[31m%s\x1b[0m', testError.name)
            console.log(testError.error)
            console.log('')
        })
    }
    console.log('')
    console.log('-------End Test Result--------------')

}


_app.runTest = () => {
    let error = [];
    let successes = 0;
    let limit = _app.countTest();
    let counter = 0;

    for (let key in _app.test) {
        if (_app.test.hasOwnProperty(key)) {
            let subTests = _app.test[key]
            for (let testName in subTests) {
                if (subTests.hasOwnProperty(testName)) {
                    (() => {
                        let tmptestName = testName;
                        let testValue = subTests[testName];

                        try {
                            testValue(() => {
                                counter++
                                successes++
                                console.log('\x1b[32m%s\x1b[0m', tmptestName)
                                if (counter == limit) {
                                    _app.produceTestReport(limit, successes, error)
                                }
                            })

                        } catch (e) {
                            error.push({
                                name: testName,
                                error: e
                            })
                            console.log('\x1b[31m%s\x1b[0m', tmptestName)

                            counter++

                            if (counter == limit) {
                                _app.produceTestReport(limit, successes, error)
                            }
                        }
                    })()
                }
            }
        }
    }
}

//Run the test 

_app.runTest()