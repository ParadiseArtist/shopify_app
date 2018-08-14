function shouldTriggerCookiePartitioning() {
  var userAgent =  window.navigator.userAgent;
  var isSafari = userAgent.indexOf('Safari');
  var versionNumber = isSafari ? parseFloat(userAgent.match(/Version\/(\d+\.?\d*)/)[1]) : null;
  
  // TODO: Replace with library for checking user-agents
  return document.hasStorageAccess && isSafari && versionNumber >= 12;
}

function setCookieAndRedirect() {
  document.cookie = "shopify.cookies_persist=true";
  window.location.href = window.shopOrigin + "/admin/apps/" + window.apiKey;

  return false;
}

document.addEventListener("DOMContentLoaded", function() {
  var continueElement = document.getElementById("continue-button");

  if (shouldTriggerCookiePartitioning()) {
    continueElement.style.display = 'inline';
    continueElement.addEventListener('click', setCookieAndRedirect);
  } else {
    setCookieAndRedirect();
  }
});
