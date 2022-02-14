# Logging on Node.js

## Important Links for reference

[console.log() - Web APIs | MDN](https://developer.mozilla.org/en/docs/Web/API/Console/log)

[Window Console Object](https://www.w3schools.com/jsref/prop_win_console.asp)

## Console

The **`console`** object provides access to the browser's debugging console

### Methods

- console.assert()
    
    ```jsx
    console.assert(expression, msg);
    console.assert(assertion, obj1 [, obj2, ..., objN]);
    ```
    
    The `assert()` method writes a message to the console if an expression evaluates to `false`
    
    ❗If you pass an array of string it will concat them and print them
    
- console.clear()
    
    ```jsx
    console.clear()
    ```
    
    The `clear()` method clears the console.
    
    ❗The `clear()` method also writes “Console is cleared: in the console.
    
- console.count()
    
    ```jsx
    console.count(label)
    //label	Optional message you want to show along the count. Default label is "Default".
    
    //To remove the label, use "" as a parameter
    console.count("");
    ```
    
    The `count()` method counts the number of times console.count() is called.
    
    ❗The `count()` method this number to the console.
    
    ❗If you type `console.count()` with the same label more then one time it will keep adding the number.
    
- console.error()
    
    ```jsx
    console.error(message) //message	==> Required.
    ```
    
    The `error()` method writes an error message to the console.
    
    The console is useful for testing purposes.
    
- console.group()
    
    ```jsx
    console.group(label) //label	Optional.
    console.groupEnd();
    ```
    
    The `group()` method starts a message group.
    
    All new messages will be written inside this group.
    
- console.groupCollapsed()
    
    ```jsx
    console.log("Hello World")
    console.groupCollapsed("myLabel");
    cosole.log('this time from inside the collapsed group');
    console.groupEnd();
    console.log("i am back");
    ```
    
    The `groupCollapsed()` method starts a collapsed message group.
    
    In the Console, click the expand button to open the new message group.
    
    All new messages will now be written inside this group.
    
- console.info()
    
    ```jsx
    console.info("Hello world!");
    ```
    
    The `info()` method writes a message to the console.
    
- console.table()
    
    ```jsx
    console.table(["Audi", "Volvo", "Ford"]);
    console.table({firstname:"John", lastname:"Doe"});
    ```
    
    The `table()` method writes a table to the console.
    
- console.time()
    
    ```jsx
    console.time();
    for (let i = 0; i < 100000; i++) {
      // some code
    }
    console.timeEnd();
    
    console.time(label) //label is optional
    ```
    
    The `time()` method starts a timer in the console view.
    
    The `time()` method allows you to time code for testing purposes.