## Explaining page__container

Page container is our principal block of our app. 

* Block: page
* Element: page__container

And after that we create the class: "container" and from there we create other elements from it: "container___header", and "container__newsletter".

## HOW BEM IS PRESENT ON THIS APP
* Block: page
* Element: page__container
* Block : container
* Element : container__header
* Element : container__newsletter
* Block : grid
* Block : input
* Element : input__input
* Element : input__button
* Element : button & modifiers: button--primary button--input  


## Project Root
![image](https://user-images.githubusercontent.com/52103963/126656603-d639f4a2-e710-406a-b294-f6630f649ea0.png)
## grid or grid--small?

In this case we do not have other grid elements that are being used, only one.
So in the case we've had more than one, the modifier "grid--small" would be used.

Same applies for input--small

## Other modifiers

* button--input 

This is the case where we are using a primary button but as it is placed in our 
form newsletter, there should be a modifier to give it a color that contrasts the form.
