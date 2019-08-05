# Building an assertEquals function in JavaScript

## INTRODUCTION

Tech test to build an `assertEquals` function in Vanilla JavaScript.

## HOW TO USE

* `git clone` the repo and navigate to the root.
* Open in the browser with `open index.html`.

## TESTING

* Run tests from the root with `open spec/specRunner.html`.
* Right click on the webpage and select the Chrome DevTool `inspect`. Select the `console` tab to see the full breakdown of tests.

## APPROACH

Initially built the testing framework by adapting a Vanilla JS testing script I had built as part of a previous project ([link](https://github.com/marbuthnott/notes_js) for previous project).

Used TDD to work through the specified testing criteria before adding four additional tests to test an input of array and an output string, and three tests testing various levels of object complexity.

## WHAT I WOULD DO DIFFERENTLY

There are many variations of object complexity that could be tested. With more time I would start to look at other data types, e.g. if expected is `'a'` and actual is an `object`, or if expected is `object` and actual is `array`.

There are also one or two hardcoded features in the assertEquals function, specifically line 47 where I have hardcoded the error message with `[]` to wrap around the index for the array. If I had another attempt I would try to create a private function to deal with the issue of element classification, and then to input the correct format into the error message.

Finally, as the code itself isn't that descriptive, it would be good to break it up into something more readable. With more time I would break it into functions to initially identigy the input data type and then have individual functions to handle each data type.
