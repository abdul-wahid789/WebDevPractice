# Regular expression validator
This is project can validate *username, email, phone number, postal code*.  
*Username* only have `_` *(userscore)* and it can not begain with a number.  
The *email* address can accpect `+ . -` and after `@` it can have multiple subdomain name followed by `.`  
Phone must begain with `+880` or `01`. Phone number length must be `11` digit. Excluding `+88`  
*Postal code* must be length *4 digit* and it can be only digit `(0-9)`.  
In *custom expression* user can give custom expression in `Expression` input field. After that text can be given in text field. By using `RegExp` class string converted into regular expression.

*To validate string `test()` method has been used.*

Use this command to clone this branch  
`git clone -b Regular-Expression-Validator https://github.com/abdul-wahid789/WebDevPractice.git`