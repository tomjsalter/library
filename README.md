# Library app
A small app that allows a user to add books into an online library via form submission.

🔗 [View live preview](https://library-project-top.netlify.app/)

## Requirements
There were five key requirements that formed the basis of this project:
- Create a function that can take a users input and store the new book object into an array
- Write a function that loops through the array and displays each book on the page
- Add a new book button that brings up a form allowing users to input the details for new book
- Add a button to each book's display to remove the book from the library
- Add a button to each book's display to change it's 'read' status

## Learning outcomes
- Used object constructors to add new objects to the library array and utilized prototypal inheritance to make changes to existing objects
- Created a HTML form that was built using DOM manipulation which included form validation
- Used FormData to retrieve key/values pairs entered into the form
- Reinforced the important of the 'DRY' principle with specific regard to CSS styling to improve the reading and maintenance of the code

## Improvements
As part of the course I will return to this project at a later date to add local storage. Whilst adding this new feature I will also make the below improvement(s):
- [ ] Refactor `buildBook` function to append new books as new elements and delete book elements from the DOM. This would improve performance with larger datasets and requires less HTML recreation and event listeners.

### Credits
Thank you to [Rob Kendal](https://robkendal.co.uk/) for the code review and feedback.

Project forms part of the JavaScript curriculum provided by [The Odin Project](https://www.theodinproject.com/).