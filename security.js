// Website Security Scripts - Made by GhostyyCZ

// Prevent Right Click
document.oncontextmenu = () => {
  return false;
};

// Prevent F12, Ctrl + U, Ctrl + C and Ctrl + Shift + I 
document.onkeydown = e => {

  // Prevent F12
  if (e.key === "F12") {
    return false;
  }

  // Prevent showing source code by Ctrl + U
  if (e.ctrlKey && e.key === "u") {
    return false;
  }

  // Prevent copying content with Ctrl + C
  if (e.ctrlKey && e.key === "c") {
    return false;
  }

  // Prevent opening developer tools with Ctrl + Shift + I
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    return false;
  }
};
