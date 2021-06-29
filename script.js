// INSTRUCTION:- OPEN BROWSER TAB IN FULL SCREEN MODE

// IF OPENING A NEW WINDOW OF ANY APPLICATION THE PREVIOUS WINDOW OF OTHER APPLICATION WILL AUTOMATICALLY GET CLOSED

// FOR THIS PC
let thispcwindow = document.getElementsByClassName('thispc')[0];  // TAKES DIV OF CLASS thispc

let desktopthispc = document.getElementById('desktopthispc');     // TAKES THIS PC ICON

desktopthispc.addEventListener('dblclick', () => {                  // ADD DOUBLE CLICK EVENT LISTENER ON THIS PC ICON

    // console.log("clicked on this pc");

    // IF DIV OF CLASS thispc IS CLOSE THEN OPEN ELSE CLOSE IT
    if (thispcwindow.style.top == '50px') {
        thispcwindow.style.top = '-538px';
    }
    else {
        thispcwindow.style.top = '50px';

        // CLOSE ALL OTHER OPENED WINDOWS
        controlpanelwindow.style.top = '-638px'
        searchwindow.style.top = '-645px'
        chromewindow.style.top = '-694px'
        vscodewindow.style.top = '-730px'
        startwindow.style.top = '-645px'
        fileexpwindow.style.top = '-638px'
    }


})

// FUNCTION TO CLOSE THIS PC
// IF CLICKS ON THE WINDOW OF THAT APPLICATION
let closeThisPC = function () {
    let closethispc = document.getElementById('closethispc');
    closethispc.addEventListener('click', () => {
        console.log("click")
        if (thispcwindow.style.top == '50px') {
            thispcwindow.style.top = '-538px';
        }
        else {
            thispcwindow.style.top = '50px';
        }
    })
}
closeThisPC();

// FOR CONTROL PANEL
let controlpanelwindow = document.getElementsByClassName('controlpanel')[0];
let desktopcontrolpanel = document.getElementById('desktopcontrolpanel');
desktopcontrolpanel.addEventListener('dblclick', () => {
    console.log("clicked on controlpanel");
    if (controlpanelwindow.style.top == '40px') {
        controlpanelwindow.style.top = '-638px'
    }
    else {
        controlpanelwindow.style.top = '40px'

        thispcwindow.style.top = '-538px';
        searchwindow.style.top = '-645px'
        chromewindow.style.top = '-694px'
        vscodewindow.style.top = '-730px'
        startwindow.style.top = '-645px'
        fileexpwindow.style.top = '-638px'
    }
})

let closeControlPanel = function () {
    let closecontrolpanel = document.getElementById('closecontrolpanel');
    closecontrolpanel.addEventListener('click', () => {
        console.log("click")
        if (controlpanelwindow.style.top == '40px') {
            controlpanelwindow.style.top = '-638px';
            // closethispc.style.display = 'none';
        }
        else {
            controlpanelwindow.style.top = '40px';
        }
    })
}
closeControlPanel();



// TASKBAR

// FOR FILE EXPLORER
let taskbarfileexp = document.getElementById('taskbarfileexp');

let fileexpwindow = document.getElementsByClassName('fileexp')[0];

taskbarfileexp.addEventListener('click', () => {
    console.log("clicked on file explorer");
    if (fileexpwindow.style.top == '50px') {
        fileexpwindow.style.top = '-638px'
    }
    else {
        fileexpwindow.style.top = '50px'

        chromewindow.style.top = '-694px'
        vscodewindow.style.top = '-730px'
        startwindow.style.top = '-645px'
        searchwindow.style.top = '-645px'
        thispcwindow.style.top = '-538px';
        controlpanelwindow.style.top = '-638px'
    }
})

// FOR START BUTTON
let taskbarstart = document.getElementById('taskbarstart');

let startwindow = document.getElementsByClassName('start')[0];

taskbarstart.addEventListener('click', () => {
    console.log("clicked on start");
    if (startwindow.style.top == '80px') {
        startwindow.style.top = '-645px'
    }
    else {
        startwindow.style.top = '80px'

        chromewindow.style.top = '-694px'
        vscodewindow.style.top = '-730px'
        searchwindow.style.top = '-645px'
        fileexpwindow.style.top = '-638px'
        thispcwindow.style.top = '-538px';
        controlpanelwindow.style.top = '-638px'
    }
})

// FOR SEARCH BUTTON
let taskbarsearch = document.getElementById('taskbarsearch');

let searchwindow = document.getElementsByClassName('search')[0];

taskbarsearch.addEventListener('click', () => {
    console.log("clicked on search");
    if (searchwindow.style.top == '84px') {
        searchwindow.style.top = '-645px'
    }
    else {
        searchwindow.style.top = '84px'

        chromewindow.style.top = '-694px'
        vscodewindow.style.top = '-730px'
        startwindow.style.top = '-645px'
        fileexpwindow.style.top = '-638px'
        thispcwindow.style.top = '-538px';
        controlpanelwindow.style.top = '-638px'
    }
})

// FOR VS CODE
let taskbarvscode = document.getElementById('taskbarvscode');

let vscodewindow = document.getElementsByClassName('vscode')[0];

taskbarvscode.addEventListener('click', () => {
    console.log("clicked on vs code");
    if (vscodewindow.style.top == '0px') {
        vscodewindow.style.top = '-730px'
    }
    else {
        vscodewindow.style.top = '0px'

        chromewindow.style.top = '-694px'
        searchwindow.style.top = '-645px'
        startwindow.style.top = '-645px'
        fileexpwindow.style.top = '-638px'
        thispcwindow.style.top = '-538px';
        controlpanelwindow.style.top = '-638px'
    }
})

// FOR CHROME
let taskbarchrome = document.getElementById('taskbarchrome');

let chromewindow = document.getElementsByClassName('chrome')[0];

taskbarchrome.addEventListener('click', () => {
    console.log("clicked on start");
    if (chromewindow.style.top == '0px') {
        chromewindow.style.top = '-694px'
    }
    else {
        chromewindow.style.top = '0px'

        vscodewindow.style.top = '-730px'
        searchwindow.style.top = '-645px'
        startwindow.style.top = '-645px'
        fileexpwindow.style.top = '-638px'
        thispcwindow.style.top = '-538px';
        controlpanelwindow.style.top = '-638px'
    }
})
