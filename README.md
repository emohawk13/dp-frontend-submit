Webform Creation
Build a webform for users of your site to book a trip. Create your webform with the following criteria:

Your webform should take in the following user data:
First Name
Last Name
Email
Phone Number
Start date
End date
Optional rental car, hotel and other accommodations
Whether the user wants the basic or premium package

Include the following tags and attributes in your form:
Wrap the entire form with a form element
action action="https://httpbin.org/post"
method method="post"
Input
Id  id=""
Name  name=""
Placeholder  placeholder=""
Value  value=""
Type  type=""
Text
Date
2 (two) Radio Buttons
3 (three) Checkboxes
Submit

Label  `<label>` `</label>`
for  for=""

Select   `<select>` `</select>`
Textarea   `<textarea>` `</textarea>`

Additional Tips
Focus on the proper layout and structure
A footer for the webpage including a fake phone number and address
Add the required attribute to require a few or all fields in the form
When the submit button is pressed a json file of the data should be rendered on the screen (if not, make sure the form element's action and method attributes are correctly created)
Submit a link to a repl in the field below.



Assignment - Reservation Webform Refactor


In the *HTML Unit* we were asked to create a webform to help users book a trip. There will be many times in our career where we will be asked to refactor old code using new practices.

Refactor the webform to include the following:

1. Create a Homepage including a:

   * Create a navbar
   * Include a tab in the navbar that navigates to the webform
   * Create a hero image and hero content
   * Page content that describes the site's goal as a trip booker
2. Include all styling from the CSS Unit.
3. Ensure the website can be viewed from full screen and half screen efficiently. All layouts should be altered using media queries along with flexbox and grid styling.
4. Use relative measurements for all elements. This will ensure they will grow and shrink responsively as the browser's width changes size.

> **NOTE:** Check your old webform for the following criteria or build the webform again with the criteria below:

1. Create a webform that will take the following data:
2. Create a reservation form. Include the following tags and attributes in your form:

   * Input  `<input> </input>`
     * Id
     * Name
     * Placeholder
     * Value
     * Type
   * Select  `<select> </select>`
   * Textarea  `<textarea> </textarea>`
3. Additional Tips

   * Focus on the proper layout and structure
   * A footer for the web page including a fake phone number and address
   * Add the required attributes to require a few or all fields in the form
   * Use the api [https://httpbin.org/post](https://httpbin.org/post) and have the api echo your fields back to you.
