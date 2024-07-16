You have gained the necessary skills to now create website with multiple pages. Build another 3-page static html website using your past and new skills.

You website should contain the following:

Wireframe your Website
Choose a theme or topic. This could include analyzing a scientific discovery, evaluating why a favorite sports team won an iconic game, analyzing why a favorite movie did or did not do well in box office sales, organizing fake contact information for your fellow developers and many other possibilities.
Plan out the content for 3 (three) separate web pages.
There are a variety of ways to divide your content: story (beginning, middle, end), sales approach (hook, pitch, ask), mystery (clues from there separate witnesses and the outside source is the answer), debate (introduction side 1 argument, side 2 argument). The possibilites are endless.

An organized architecture in VS Code.
Create a new project folder and name it after your website
Set up the folder strucutre to include the file for your webpage
Though not used yet, create a folder for pages, styles, images and scripts
Provide a custom title for each web page that appears in the browser tab
Avoid using the emmet shortcuts

Create a homepage
Navbar
Footer
Hero Image
Main Header
Page content that describes the site
Link to a reservation form page (make the reservation page in the Reservation Form lesson.)

Create a navigation bar
Research several navigation bars from favorite websites. Make a list of sections you notice in their bars that you would like to include
In your navigation bar:
Include a Logo
Create several sections/tabs
Ensure each section/tabs
For now, use a table or incline attributes to create your navbar

Use all prior tags and the new tags discussed in class:
Main root
html   <html> </html>

Sectioning root
body   <body> </body>

Content sectioning
headings   <h> </h>

Text content
division   <div> </div>
paragraphs   <p> </p>
list item   <li> </li>
ordered list   <ol> </ol>
unordered list   <ul> </ul>

Inline text semantics
anchor   <a> </a>
break   <br>

Image and multimedia
image   <img>
1 (one) external/globally accessed with outside url
1 (one) internal/locally accessed as file through project structure
video   <video> </video>
iframe   <iframe>

Table content
table   <table> </table>
table body   <tbody> </tbody>
table data   <td> </td>
table foot   <tfoot> </tfoot>
table head   <thead> </thead>
table header   <th> </th>
table row   <tr> </tr>

Add additional styling to your website
Research creating a footer for your webpage and create onen with a fake phone, address and a google map of the lcoation ofo the fake business
Place elements in table cells to create some horizontal layouts throughout the website. Use the height and width properties to size the different rows and columns of the table’s layout.
Position elements appropriately within the website
Include images that help reinforce the information provided
Add color to different parts of the website (including text, background and table data)

Upload your folder structure to github and place a link to the repository in the field below.

redo from grading feedback:
The background-image displays on the whole page in an aesthetic manner.

The vertical gradient added to the background image creates a nice flow as the user scrolls the page.

    1. Your body tag currently has the z-index of a -1. However, remember that parent containers by default are underneath their children (like a plate placed on top of a place mat; the mat is still there, but you can’t see the part of the place mat that is covered by the plate). If there is a particular reason feel free to write a response this point.

    2. The logo and the links are not in the same row. When you mix certain position and display values they will negate each other. The code is not scalable, as adding declarations that usually work well together (such as align-items and display: flex) will not work on an element that has been declared with an absolute position. Look through the nav element and their children to determine which should be utilized.

    3. Some class names used are not scalable. The class name “container” is usually a suffix that helps indicate for what the div is a container for.

    4. Working with id attributes are used only when necessary (usually when accessing their element with JavaScript). Also, you can access the children of a node through various methods, which may make the id attribute not needed (depending on your purpose for the ids). This did not affect your grade, but still wanted to provide feedback on this concept.

    5. In each container, the p tag is wrapped with a div tag. Also, the logo is wrapped in a div as well. Though this isn’t bad practice, it doesn’t seem necessary in this instance. The main indication it may not be needed is that the css file does not access a div without a class name? If you have a specific reason for the div tags, feel free to provide your reasoning in the comments. Otherwise, I recommend removing them.
