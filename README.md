# React Notebook App
Simple Notetaking app allow user to add & search notes with note title, category & content.

## Structure
- App Component
    - NoteList
        - Note
    - NoteDetail
    - NoteEdit

## Design & UI
- Notes Cards on left side like this:

    - ![](https://bashooka.com/wp-content/uploads/2018/11/to-do-app-ui-design-47.jpg)

- (Optional) 3-Vertical Dot Options button on top-right of each card will open the options list for edit & delete.
- Round + Button Colored on top right of above cards
- When we click on any card-
- On the right it will display detail component on right for that card, kind of like this:

     - ![](https://cdn.dribbble.com/users/787069/screenshots/14145467/notes-web-design___1_4x.png)

- When we click on any area in detail component/card or edit icon on the top right of the card, it will swicth it to the NoteEdit Component.
- NoteEditComponent have almost same ui as NoteDetail Component, but now it allow editing of Title, Category, Content & Also here we have top-right Save button instead of edit button, which will take you back to DetailComponent mode.


## Helpful Resources
https://github.com/WebDevSimplified/Learn-React-Today/tree/master/21%20-%20Finish%20Cooking%20With%20React%20Application/src