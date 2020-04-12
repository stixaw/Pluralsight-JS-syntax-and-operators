
//Basic Switch
function simpleSwitch(productId) {
    switch (productId) {
      case 1:
        console.log("HL Road Frame - Black, 58");
        break;
      case 2:
        console.log("Sport-100 Helmet, Red");
        break;
      case 3:
        console.log("Mountain Bike Socks, M");
        break;
      default:
        console.log("Unknown product");
        break;
    }
  }

  function multipleCase(color) {
    switch (color) {
      case "Red":
      case "Pink":
        console.log("The color is red");
        break;
      case "Blue":
      case "Light Blue":
      case "Dark Blue":
        console.log("The color is blue");
        break;
      case "Gray":
      case "Grey":
        console.log("The color is grey");
        break;
      default:
        console.log("Unknown color");
        break;
    }
  }