/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = 'Git is a control system that tracks the progress of our work and backs it up';
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = 'Its the website where everything is backed up to. ';
//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property
    will be a string with a description of what that git command does.  The 'code' property should be a
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties
    following the guidelines above to describe the init command.
*/

//CODE HERE
let init = {
    description: 'Initials my ability to save and backup my work to github',
    code: 'git init'
}
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {
    description: 'It clones the repositories in github and allows me to store and access them in my folders',
    code: 'git clone'
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {
    description: 'It gives me a detailed list of changes that have not been saved or pushed to github.',
    code: 'git status'
}
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = {
    description: 'It tells git to start tracking my changes. It is also the beginning steps to pushing your work to git',
    code: 'git add .'
}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = {
    description: 'It is a saving point where we are able to leave comments about our code that we are saving. It is also the final step before pushing our code to github',
    code: 'git commit -m "'
}
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE
let addRemote = {
    description: 'The git remote add command will create a new connection record to a remote repository. After adding a remote, youll be able to use as a convenient shortcut for in other Git commands.',
    code: 'git remote add'
}
//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = {
    description: 'After staging and commiting your code, It pushes my code to github',
    code: 'git push'
}