# COMP229-Midterm-301232974
Please read instructions carefully, everything you need to know is covered in this
document. In case of any questions, please post it on the Midterm discussion forum.
COMP229 – Web Application Development Mid-Term Test
➢ Value 15% Mid-Term Test
➢ Maximum Mark: 100
NOTE: This is an individual assignment, Groups are formed only to divide test among the
class. Each one of you will work on this individually and submit your work like how you
submit your assignments.
5 Marks will be deducted if you do not follow naming convention for your folder, git hub
and Heroku app. Check ‘SUBMITTING YOUR WORK’ at the bottom of this document.
Overview:
Using your knowledge of NodeJS and ExpressJS and the Web App Template provided,
complete the Favorite Book List a web app that you will share on GitHub and deploy to Heroku
(or another cloud provider).
Your web app already includes basic navigation controls, a Landing Page, a BookList page and a
BookDetails page. Your task is to complete the code that is missing from the routing files and the
Books List page so that a user can Add, Delete and Edit any Book/Movie item from the
Database.
Project Setup:
• You will need to create a new Mongo Database on MongoDB Atlas. You will need to change
the URI variable in the db config file (config/db.js) to point MongoDB Atlas.
• You will need to add some example Book data in the database.
Instructions:
1. The BooksList page (views/books/index.ejs) already lists your favorite books. Your job is
to fix the Add Button and insert the appropriate code for the Edit and Delete Buttons (2
Marks: GUI, 13 Marks: Functionality):
A. Fix the Add Button on this page so that it links to the BookDetails page
(views/books/details.ejs). Hint: insert the correct route in the href attribute. (3 Mark:
Functionality).
➢ Due: Week 8 (Saturday June 25, 2022) @ midnight
• Rename the Web App Template provided to COMP229-S2022-MidTerm-[YourStudentID].
(e.g. COMP229-S2022-MidTerm-300929668).
B. Add an Edit Button to each row of the existing Table (the insertion point has been
marked for you). Ensure that when the user clicks on the Edit button, they are linked to
the BookDetails page and the _id of the book they wish to edit is passed to that page via
the URL.
C. Hint: the href attribute requires a reference to the _id of the book being edited (1 Mark:
GUI, 6 Marks: Functionality).
D. Add a Delete Button to each row of the existing Table (the insertion point has been
marked for you). Ensure that when the user clicks on the Delete button, that the _id of the
book to be deleted is passed to the router. Hint: the href attribute requires both a link to
the delete route and a reference to the _id of the book being edited (1 Mark: GUI, 4
Marks: Functionality).
2. The Books Routing File (routes/books.js) already has a route working to find all the
books in the books collection and render your BooksList page. Your task for this section is
to complete the logic for each of the other routes to render the book details page when the
Add or Edit Buttons are clicked, process a request to Add or Edit a Book, and process a
request to Delete a book (63 Marks: Functionality):
A. Complete the get('/add') router logic that renders the book details page
(views/books/details.ejs). The form on the book details page will initially be blank. You
must pass an appropriate value for the title property and blank value for the books
property. (10 Marks: Functionality).
B. Complete the post('/add') router logic that processes the insertion of a new book into the
database. You need to instantiate an object of the book model (excluding the _id
property) and pass this object to the create method of the book model to add a new book
to the database. Hint: the values for the book object will come from the name attributes of
each field of the book details page. Redirect the user back to the BookList page ('/books')
when the insertion is completed. (10 Marks: Functionality).
C. Complete the get('/:id') router logic that renders the book details page
(views/books/details.ejs) and uses the id from the URL to select the book to document to
be updated. Declare an id variable and set its value to the id property of the request
object. Pass this id to the book model’s findById method to render the book details view.
You must set an appropriate title property value and set the books property to the book
that was returned from the database as you render the view. (15 Marks: Functionality).
D. Complete the post('/:id') router logic that processes the update request of an existing book
by using its id property. Declare an id variable and set its value to the id property of the
request object. You need to instantiate an object of the book model (including the _id
property) and pass this object to the update method of the book model to edit an existing
book in the database. Hint: the values for the book object will come from the name
attributes of each field of the book details page. Redirect the user back to the BookList
page ('/books') when the update is completed. (20 Marks: Functionality).
E. Complete the get('/delete/:id') router logic that processes the user’s delete request and
removes an existing book from database by using its id property. Declare an id variable
and set its value to the id property of the request object. Pass the id to the book model’s
remove method. Redirect the user back to the BookList page ('/books') when the removal
is completed. (8 Marks: Functionality).
3. Include Internal Documentation for your site (4 Marks: Internal Documentation):
A. Ensure you include a comment header for your JavaScript file that indicate: The File
name, Author's name, StudentID, and Web App name (1 Marks: Internal
Documentation).
B. Ensure you include a section header for any JavaScript functions (1 Marks: Internal
Documentation)
C. Ensure all your code uses contextual variable names that help make the files human
readable (1 Marks: Internal Documentation).
D. Ensure you include inline comments that describe your GUI Design and Functionality.
Note: Please avoid “over-commenting” (1 Marks: Internal Documentation)
4. Share your files on GitHub to demonstrate Version Control Best Practices and push
your site to a cloud host (4 Marks: Version Control, 4 Marks: Cloud Hosting).
A. Your repository must include your code and be well structured (2 Marks: Version
Control).
B. Your repository must include commits that demonstrate the project being updated at
different stages of development – each time a major change is implemented (2 Marks:
Version Control).
C. You must deploy your site to your Cloud Server using git (4 Marks: Cloud Hosting).
5. Create a Short Video presentation on YouTube or another streaming provider. You
must include a short PowerPoint (or Google Slides) Slide Deck that includes a single slide
to start your video (10 Marks: Video)
A. The first (and only) Slide of your Slide Deck must include a current image of you (no
avatars allowed) that is displayed appropriately on the page. You must also include your
Full Name, Student ID, the Course Code, Course Name, and your Assignment
information. (2 Marks: video)
B. You will demonstrate your site’s functionality. You must show each page working
properly (2 Marks: Video)
C. You will describe the code in your app.js file that drives the functionality of your site (2
Marks Video).
D. Sound for your Video must at an appropriate level so that your voice may be clearly
heard, and your screen resolution should be set so that your code and site details are
clearly visible (2 Marks: Video).
E. Your Short Video should run no more than 5 minutes (2 Marks: Video).
SUBMITTING YOUR WORK Your submission should and only include:
1. A zip archive of your website’s Project files.
• Ensure to Name your project files COMP229-F2022-Midterm-[YourStudentID].zip
e.g. COMP229-F2022-Midterm-300818557.zip
• Please do not create a RAR archive of your project files.
2. A link to your GitHub repository.
• Ensure to Name your GitHub repo: COMP229-F2022-Midterm-[YourStudentID] e.g.
COMP229-F2022-Midterm-300818557)
3. A link to your live site hosted with a Cloud provider (Heroku Recommended).
• Ensure to name your live site COMP229-F2022-Midterm-[YourStudentID] e.g.
COMP229- F2022-3008185557.herokuapp.com
4. A link to your video
Your youtube demo hosted on YouTube or another cloud provider Feature Description Marks
GUI / Interface Design Display elements meet requirements. Appropriate spacing, graphics,
colour, and typography used
Feature Description Marks
Content Appropriate Content is added to each page of
your portfolio site
17
GUI / Interface Design Display elements meet requirements.
Appropriate spacing, graphics, colour, and
typography used.
8
Functionality Site deliverables are me and site functions are
met. No errors, including submission of user
inputs.
26
Site Structure Well organized site files. Separate HTML and
CSS. Appropriate links to external documents
and code. Code is error free. JavaScript
libraries use a CDN. 4 marks for initial
deployment to Cloud Host
26
Internal Documentation File header present, including site & student
name & description. Functions and classes
include headers describing functionality &
scope. Inline comments and descriptive
variable names included.
5
Version Control GitHub commit history demonstrating regular
updates. 2 marks for initial commit
4
Cloud Deployment Deploy site to Cloud Service. 2 marks for
initial deployment
4
Video Presentation Your short video must demonstrate your site
and describe your code
10
Total 100
This is an open-book exam. Students may use the Internet to view the instructor’s GitHub repos
and their own work. Students may also access course PowerPoint presentations, or the Textbook
outlined in the Course Syllabus.
Note: Use of a search engine is permitted. However, use of external code is not allowed for
this exam. Please check with me unsure.
