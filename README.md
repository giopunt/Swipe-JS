A simple library to detect swipes, you can initialize it with:

**touch screen only**

```javascript
var Swipe = new Swipe(document, {
    onSwipeLeft: function(){ console.log('onswipeleft') },
    onSwipeRight: function(){ console.log('onswiperight') }
});   
```