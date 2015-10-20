/*
* Swipe.js 1.0.0 2015 Giovanni Puntil - MIT license
* 
* Eg. of use:
*
* var Swipe = new Swipe(document, {
*    onSwipeLeft: function(){ console.log('onswipeleft') },
*    onSwipeRight: function(){ console.log('onswiperight') }
* });                                        
*/
'use strict';

var Swipe = function(target, options){
    this.start = {
        x: null,
        y: null
    };
    this.target = target;
    this.options = {
        onSwipeLeft: options.onSwipeLeft || function(){}, 
        onSwipeRight: options.onSwipeRight || function(){}, 
        onSwipeDown: options.onSwipeDown || function(){}, 
        onSwipeUp: options.onSwipeUp || function(){}, 
    }

    this.bindHandler(target);
}

Swipe.prototype.bindHandler = function(){
    this.target.addEventListener('touchstart', this.handleTouchStart.bind(this), false);        
    this.target.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
}

Swipe.prototype.handleTouchStart = function(event) {                                         
    this.start.x = event.touches[0].clientX;                                      
    this.start.y = event.touches[0].clientY;                                      
};        

Swipe.prototype.handleTouchMove = function(event) {
    if ( ! this.start.x || ! this.start.y ) {
        return;
    }

    var gesture = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
    };

    var diff = {
        x: (this.start.x - gesture.x),
        y: (this.start.y - gesture.y)
    };

    if ( Math.abs( diff.x ) > Math.abs( diff.y ) ) {
        if ( diff.x > 0 ) {
            /* left swipe */
            this.options.onSwipeLeft();
        } else {
            /* right swipe */
            this.options.onSwipeRight();
        }                       
    } else {
        if ( diff.y > 0 ) {
            /* up swipe */ 
            this.options.onSwipeUp();
        } else { 
            /* down swipe */
            this.options.onSwipeDown();
        }                                                                 
    }
    /* reset values */
    this.start.x = null;
    this.start.y = null;                                             
};