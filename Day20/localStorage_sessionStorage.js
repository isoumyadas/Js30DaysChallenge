// ^ These are the methods provided by localstorage

// ^ 1. setItem(key,value)
// ^ 2. getItem(key)
// ^ 3. removeItem(key)
// ^ 4. clear() // clear all the items in the local storage
// ^ 5. key(index) // returns the first key in the local storage | or if index is provided it returns the key at that index
// ^ 6. length // returns the number of items in the local storage

// ^ These are the methods provided by sessionStorage

// The sessionStorage exists only within the current browser tab. another tab with same page will have a different stroage
// Data survives page refresh, but not closing/opening the tab

// Methods are same as localStorage

// ^ Cookies

// Cookies are small strings of data stored directly in the browser. In Js, document.cookie provides access to cookies

//Cookies are set by a web server using the Set-cookie HTTP-header. Next time when the request is sent to the same domain, the browser sends the cookie using the cookie HTTP--loader. Thats why the server knows who sent the request.

// We can also access cookies using document.cookie property: alert(document.cookie) => contains key=value pairs
