/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
  var form = {
    same: document.getElementById('same'),
    shippingInfo: {
      name: document.getElementById('shippingName'),
      zip: document.getElementById('shippingZip')
    },
    billingInfo: {
      name: document.getElementById('billingName'),
      zip: document.getElementById('billingZip')
    }
  };

  if (form.same.checked) {
    for (prop in form.shippingInfo) {
      if (form.shippingInfo.hasOwnProperty(prop)) {
        form.billingInfo[prop].value = form.shippingInfo[prop].value;
      }
    }
  } else {
    for (prop in form.billingInfo) {
      if (form.billingInfo.hasOwnProperty(prop)) {
        form.billingInfo[prop].value = "";
      }
    }
  }
};


// OR...THIS IS THE SECOND SOLUTION

function billingFunction() {
  if (document.getElementById("same").checked) {
    var shipname = document.getElementById('shippingName').value;
    var zipname = document.getElementById('shippingZip').value;
    document.getElementById('billingName').value = shipname;
    document.getElementById('billingZip').value = zipname;
  }
  else {
    document.getElementById('billingName').value = "";
    document.getElementById('billingZip').value = "";
  }
}
