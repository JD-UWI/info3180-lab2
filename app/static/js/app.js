/* Add your Application JavaScript */

// Get the button and followers elements
document.addEventListener("DOMContentLoaded", function() {
      const button = document.getElementById("follow");
      const followersElement = document.getElementById("followers");
    
      // Declare the followers variable
      let followers = parseInt(followersElement.innerHTML);
    
      // Add an event listener to the button
      button.addEventListener("click", function() {
        followers++;
        followersElement.innerHTML = followers;
      });
    });
    