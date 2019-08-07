# Building an assertEquals function in JavaScript

## INTRODUCTION

Building an `assertEquals` function in Vanilla JavaScript.

## HOW TO USE

* `git clone` the repo and navigate to the root.
* Open in the browser with `open index.html`.

## TESTING

* Run tests from the root with `open spec/specRunner.html`.
* Right click on the webpage and select the Chrome DevTool `inspect`. Select the `console` tab to see the full breakdown of tests.

## APPROACH

Initially built the testing framework by adapting a Vanilla JS testing script I had built as part of a previous project ([link](https://github.com/marbuthnott/notes_js) for previous project).

Used TDD to work through the specified testing criteria before adding four additional tests to test an input of array and an output string, and three tests testing various levels of object complexity.

Being able to recursively traverse a complex object made up of embedded objects, arrays, strings, null values... etc was a challenge. Initially I used an `if else` statement to handle this problem, but this would only go into four depths of properties. To rectify this I implemented a loop that would be able to handle the different layers of the object recursively, I then added a `path` array to record the path of the loop which would then print if a mismatch was found.
